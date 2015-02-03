:title: PyPy - Tutorial for Brainfuck Interpreter
:slug: pypy-tutorial-for-brainfuck-interpreter
:date: 2015-01-31 20:33
:modified: 2015-01-31 20:33
:category: Python
:tags: PyPy, Brainfuck, Interpreter, JIT, GC
:author: wdv4758h
:summary: use PyPy's toolchain to make a Brinfuck Interpreter with JIT

[**Not finish yet**]

.. contents::

Tutorial
========================================

PyPy 的官方 Blog 上，
在 2011 年發了兩篇由 Andrew Brown 撰寫用 PyPy 來實作 Brainfuck Interpreter 的 Tutorial，
時至今日，已經來到了 2015 年，中間也經過了許多 release，
接下來將會以 PyPy 2.5 為試驗目標，
更新一些舊 Tutorial 上需要改變的地方，並且和其他實作做初步比較。

* `Tutorial: Writing an Interpreter with PyPy, Part 1 <http://morepypy.blogspot.tw/2011/04/tutorial-writing-interpreter-with-pypy.html>`_
* `Tutorial Part 2: Adding a JIT <http://morepypy.blogspot.tw/2011/04/tutorial-part-2-adding-jit.html>`_

PyPy 這個專案其實有兩個角色

* Python 的 Interpreter 實作
* 撰寫 Dynamic Languages 的 Interpreter 的 framework

接下來這篇的重點會放在 "撰寫 Interpreter"

要做一個 Language 的 Interpreter 會需要以下事情

* source code parser
* a bytecode interpretation loop
* lots of standard library code

對於稍微複雜一點點的語言，實作這些這會需要不少的時間，
更別提中間還得考慮 Memory 管理、Data Type 的實作，
會有許多的東西需要煩惱。

如果可以用一個高階一點的語言來實作，那前面提到的事情就可以大幅化簡，
可以利用到一些高階語言的特色，
像是不用自己考慮記 Memory 管理、有好用的 Data Type 等，
但是講到這，想必有人就會想到這個實作的速度應該會 "很慢"，
在高階語言上在建一層來實作自己的語言，
速度會比原本可能就不快的高階語言還來的更慢，
所以 PyPy 就是來解決這部份的問題啦。

利用 PyPy 來寫 Interpreter 的話，要用的是一個叫作 RPython 的語言，
看名字就知道跟 Python 有關，RPython 全名叫 Restricted Python，
是一個 Python 的 subset，既然是 subset 也就代表寫出來的還是一個 Python 程式，
但是 RPython 的特點是它的 type 是 inferable 的，
所以雖然一樣不寫出 type，但是可以做到 statically typed，
而 PyPy 的 toolchain 會把 RPython 的 code 轉成 C code 再丟給 GCC 或 Clang 這類 C compiler 來 compile 成 native code，
藉此你可以獲得 native code 的 interpreter，所以會跑的比原本疊在 interpreter 上的 interpreter 來的快，
在這當中 PyPy 還可以幫你處理 Garbage Collecion 和 JIT。

關於 RPython 的內容，有興趣的話可以看
2007 年 "**RPython: a Step Towards Reconciling Dynamically and Statically Typed OO Languages**"
這篇 paper 裡的內容 (Bibtex key : AACM-DLS07)，
或是這邊有 `slide 版本 <https://speakerdeck.com/antocuni/rpython-a-step-towards-reconciling-dynamically-and-statically-typed-object-oriented-languages>`_ 。

關於 PyPy 裡面用到的 JIT 技術可以看這篇 `(2012) PyPy JIT under the hood <https://speakerdeck.com/antocuni/pypy-jit-under-the-hood>`_ 當作入門。

Brainfuck Interpreter - Begin
----------------------------------------

Brainfuck spec :

.. table::
    :class: table table-bordered

    +--------------------+-------------------------------------------------------------+
    | .. code-block:: bf | 指標加一                                                    |
    |                    |                                                             |
    |     >              |                                                             |
    +--------------------+-------------------------------------------------------------+
    | .. code-block:: bf | 指標減一                                                    |
    |                    |                                                             |
    |     <              |                                                             |
    +--------------------+-------------------------------------------------------------+
    | .. code-block:: bf | 指標指向的 byte 的值加一                                    |
    |                    |                                                             |
    |     +              |                                                             |
    +--------------------+-------------------------------------------------------------+
    | .. code-block:: bf | 指標指向的 byte 的值減一                                    |
    |                    |                                                             |
    |     -              |                                                             |
    +--------------------+-------------------------------------------------------------+
    | .. code-block:: bf | 輸出指標指向的 byte (ASCII)                                 |
    |                    |                                                             |
    |     .              |                                                             |
    +--------------------+-------------------------------------------------------------+
    | .. code-block:: bf | 輸入到指標指向的 byte (ASCII)                               |
    |                    |                                                             |
    |     ,              |                                                             |
    +--------------------+-------------------------------------------------------------+
    | .. code-block:: bf | 如果指標指向的 byte 為零，向後跳到對應的 ] 指令的下一指令   |
    |                    |                                                             |
    |     [              |                                                             |
    +--------------------+-------------------------------------------------------------+
    | .. code-block:: c  | 如果指標指向的 byte 不為零，向前跳到對應的 [ 指令的下一指令 |
    |                    |                                                             |
    |     ]              |                                                             |
    +--------------------+-------------------------------------------------------------+


Brainfuck to C (assuming "ptr" is of type "unsigned char*") :

.. table::
    :class: table table-bordered

    +--------------------+----------------------------------------------+
    | brainfuck command  | C equivalent                                 |
    +====================+==============================================+
    | (Program Start)    | .. code-block:: c                            |
    |                    |                                              |
    |                    |     char array[infinitely large size] = {0}; |
    |                    |     char *ptr=array;                         |
    +--------------------+----------------------------------------------+
    | .. code-block:: bf | .. code-block:: c                            |
    |                    |                                              |
    |    >               |     ++ptr;                                   |
    +--------------------+----------------------------------------------+
    | .. code-block:: bf | .. code-block:: c                            |
    |                    |                                              |
    |    <               |     --ptr;                                   |
    +--------------------+----------------------------------------------+
    | .. code-block:: bf | .. code-block:: c                            |
    |                    |                                              |
    |    +               |     ++*ptr;                                  |
    +--------------------+----------------------------------------------+
    | .. code-block:: bf | .. code-block:: c                            |
    |                    |                                              |
    |    -               |     --*ptr;                                  |
    +--------------------+----------------------------------------------+
    | .. code-block:: bf | .. code-block:: c                            |
    |                    |                                              |
    |    .               |     putchar(*ptr);                           |
    +--------------------+----------------------------------------------+
    | .. code-block:: bf | .. code-block:: c                            |
    |                    |                                              |
    |    ,               |     *ptr=getchar();                          |
    +--------------------+----------------------------------------------+
    | .. code-block:: bf | .. code-block:: c                            |
    |                    |                                              |
    |    [               |     while (*ptr) {                           |
    +--------------------+----------------------------------------------+
    | .. code-block:: c  | .. code-block:: c                            |
    |                    |                                              |
    |    ]               |     }                                        |
    +--------------------+----------------------------------------------+


另外任何不在 Brainfuck spec 裡的東西都會被忽略

以下我們開始做 Brainfuck Interpreter

首先先做 parser 還有 main loop : (以下 code 大部份來自官方 Tutorial 的 example 1)

.. code-block:: python

    #!/usr/bin/env python
    # -*- coding: utf-8 -*-

    import sys

    class Tape(object):
        """
        因為 Brainfuck 的 code 就像是在 Tape 上操作一樣，
        所以有這個 class 來處理所有 action
        """

        def __init__(self):
            self.thetape = [0]
            self.position = 0

        def get(self):
            return self.thetape[self.position]

        def set(self, val):
            self.thetape[self.position] = val

        def inc(self):
            self.thetape[self.position] += 1

        def dec(self):
            self.thetape[self.position] -= 1

        def advance(self):
            self.position += 1
            if len(self.thetape) <= self.position:
                self.thetape.append(0)

        def devance(self):
            self.position -= 1

    def main_loop(program, bracket_map):
        pc = 0
        tape = Tape()

        while pc < len(program):

            code = program[pc]

            if code == '>':
                tape.advance()

            elif code == '<':
                tape.devance()

            elif code == '+':
                tape.inc()

            elif code == '-':
                tape.dec()

            elif code == '.':
                # print
                sys.stdout.write(chr(tape.get()))

            elif code == ',':
                # read from stdin
                tape.set(ord(sys.stdin.read(1)))

            elif code == '[' and tape.get() == 0:
                # Skip forward to the matching ]
                pc = bracket_map[pc]

            elif code == ']' and tape.get() != 0:
                # Skip back to the matching [
                pc = bracket_map[pc]

            pc += 1

    def parse(program):
        parsed = []
        bracket_map = {}
        leftstack = []

        pc = 0
        for char in program:
            if char in ('[', ']', '<', '>', '+', '-', ',', '.'):
                parsed.append(char)

                if char == '[':
                    leftstack.append(pc)
                elif char == ']':
                    left = leftstack.pop()
                    right = pc
                    bracket_map[left] = right
                    bracket_map[right] = left
                pc += 1

        return ''.join(parsed), bracket_map

    def run(input_file):

        with open(input_file, 'r') as f:
            program, bracket_map = parse(f.read())

        main_loop(program, bracket_map)

    if __name__ == "__main__":
        run(sys.argv[1])


PyPy Translation
++++++++++++++++++++

在 PyPy repo 的 ``pypy/rpython/translator/goal/`` 裡有一些範例，
其中 ``targetnopstandalone.py`` 是簡單的 Hello World

在這邊，我們需要一個叫做 ``target`` 的 function，
它會回傳另一個 function 作為 entry point，
PyPy 翻譯時會先找叫作 ``target`` 的 function，
call 它後從它回傳的 function 開始翻譯，
而最後產生的執行檔在執行時傳入的參數也是給這個回傳的 function

.. code-block:: python

    def run(input_file):

        with open(input_file, 'r') as f:
            program, bracket_map = parse(f.read())

        main_loop(program, bracket_map)

    def entry_point(argv):
        if len(argv) > 1:
            filename = argv[1]
        else:
            print("You must supply a filename")
            return 1

        run(filename)
        return 0

    def target(*args):
        return entry_point

    if __name__ == "__main__":
        entry_point(sys.argv)


接下來需要抓 PyPy 的 source code :

.. code-block:: sh

    hg clone https://bitbucket.org/pypy/pypy


接下來就交給 PyPy 做轉換

.. code-block:: sh

    python2 ./pypy/pypy/translator/goal/translate.py example2.py

然後就會看到許多 PyPy 吐出來的訊息，最後產生 ``example2-c`` 這個執行檔，
這個轉換在我機器上大約需要 4x ~ 5x 秒

接著試跑一下

.. code-block:: sh

    ./example2-c mandel.b

Bash 裡有自己的 time command 可以看執行時間，
但是如果要更多資訊的話 (-v)，需要 GNU 版的 time command

.. code-block:: sh

    sudo pacman -S time


.. code-block:: sh

    time -v ./example2-c mandel.b

以上是成功的利用 RPython 寫了 Brainfuck Interpreter 交給 PyPy 的 toolchain 轉成 machine code ~

複習一下，要可以給 PyPy toolchain 轉換需要以下條件

* 符合 RPython 語法、功能
* 有 ``target`` 這個 function 回傳進入的 function

如果想看更多 translate 時可以開的優化參數的話可以看
`這裡 <https://pypy.readthedocs.org/en/latest/config/commandline.html>`_


Compile with Clang
++++++++++++++++++++

參數 : ``--cc=clang``

More Jobs
++++++++++++++++++++

參數 : ``--make-jobs=8``

(針對 C backend compile 時的 ``-j`` 參數)

Garbage Collection
++++++++++++++++++++

參數 : ``--gc=incminimark``

目前可用的選項 :

* boehm
* ref (default)
* semispace
* statistics
* generation
* hybrid
* minimark
* incminimark
* none

Brainfuck Interpreter - JIT
----------------------------------------

前面試過了利用 PyPy toolchain 幫我們把 RPython code 轉成 C 去 compile，
接下來是利用 PyPy 幫我們做 JIT 出來，
感謝 PyPy 開發者的努力，我們要在 RPython 上做出 JIT 並不難，
因為 PyPy 的 JIT generator 有幾個目標 :

* 簡單 (基於原本的 Interpreter 上，只要做少許修改就能有 JIT)
* Maintainable (不會因為加了 JIT 就造成需要開另外的 project 分別 maintain)
* 夠快 (雖然 JIT 是生出來的，但是也要速度也要夠快)

在這目標下，就算是沒有大量人力、金錢贊助的語言，也能簡單做出不錯的 JIT，
下面就讓我們來嘗試一下 ~

(詳細訊息請看 `RPython Documentation - JIT <http://rpython.readthedocs.org/en/latest/jit/index.html>`_ )

要讓 PyPy toolchain 生出 JIT 需要提供一些資訊給它，
首先是告訴它哪些東西構成一個 execution frame，
在我們的 Brainfuck Interpreter 中並沒有真的 stack frame，
這問題就變成在執行一個 command 的時候，
哪些東西是不變的，哪些是會變的，
不變的被稱做 "**green**"，會變的稱做 "**red**"，
在我們的例子中，green 有 "pc"、"program"、"brakcet_map"，
red 有 "tape"，
接著就從 ``rpython.rlib.jit`` 取得 ``JitDriver`` 這個 metaclass 來生出我們需要要的 class

.. code-block:: python

    from rpython.rlib.jit import JitDriver
    jitdriver = JitDriver(greens=['pc', 'program', 'bracket_map'], reds=['tape'])


然後在 main loop 裡的 while 開頭 call jit_merge_point

.. code-block:: python

    jitdriver.jit_merge_point(pc=pc, tape=tape, program=program, bracket_map=bracket_map)

接下來轉換的時候多加一個 ``--opt=jit`` 參數

.. code-block:: sh

    python2 ./pypy/rpython/translator/goal/translate.py --opt=jit example3.py

總結需要做的事 :

* import ``JitDriver`` 進來，把 green 和 red 變數分好
* 在 main loop 裡 while 一開始的地方 call ``jit_merge_point`` 把變數傳進去
* translate 的時候加上 ``--opt=jit`` 參數

開 JIT 參數後，轉換的時間就變長，檔案也變大，但是跑下去就快很多

註 :

以前還需要寫一個 jitpolicy function，
但是現在已經是 default 了 (看 ``rpython/translator/driver.py``)，
所以不用寫

.. code-block:: python

    def jitpolicy(driver):
        from rpython.jit.codewriter.policy import JitPolicy
        return JitPolicy()

Tracing JIT
------------------------------

在試完生出的 JIT 的速度後，
來了解一下它是怎麼運作的。

Interpreter 執行的是我們寫的 interpreter code，
當發現 target laugange (Brainfuck) 寫的某段 code 很常跑時，
會把這部份標成 "Hot"，並且會做追蹤，當下一次進到這個循環的時候，
interpreter 會進入 tracing mode，把每個指令紀錄下來，循環結束後，
tracing mode 就停止，把追蹤紀錄丟給 optimizer，
接著丟給 assembler，產生 machine code 在之後執行時使用。

基於對原本 interpreter 的一些 assumption，
生出的 machine code 通常會對很多地方進行優化，
因此生出的 machine code 會包含一些 guard 做驗證，
驗證失敗的話就退回去使用原本 interpreter 的 code。

Debug and Trace Log
++++++++++++++++++++

雖然前面已經生出了不錯的結果，
但是總是會想要知道還能不能更好，
所以我們需要知道 JIT 做了些什麼事，
接下來就寫一個紀錄用的 function (參數是前面提過的 green 變數) 並傳給 jitdriver

.. code-block:: python

    def get_location(pc, program, bracket_map):
        return "%s_%s_%s" % (
            program[:pc], program[pc], program[pc+1:]
        )

    jitdriver = JitDriver(
                    greens=['pc', 'program', 'bracket_map'],
                    reds=['tape'],
                    get_printable_location=get_location
                )

用跟前面一樣的方式轉換 :

.. code-block:: sh

    python2 ./pypy/rpython/translator/goal/translate.py --opt=jit example4.py

接下來跑程式的時候先加環境變數來把操作寫進 log

.. code-block:: sh

    PYPYLOG=jit-log-opt:logfile ./example4-c test.b


這 log 可以看出有哪些部份被轉成了 machine code，
這在尋找有那邊可以優化的時候很有用

每個 trace 的開頭都是像這樣 ::

    [3c091099e7a4a7] {jit-log-opt-loop

結尾都是像這樣 ::

    [3c091099eae17d] jit-log-opt-loop}


Optimize
------------------------------

purefunction
++++++++++++++++++++

由於每次的 loop 都會去 dictionary 裡查對應的位址，
但是其實這個 dictionary 裡的資訊是不會變的，
所以是可以直接編成 machine code 來加速，
但是對 PyPy 而言，那個 dictionary 有可能會變動，
但它不知道其實資料不會再改了，
所以我們可以告訴它同樣的輸入一定會有相同的輸出，
這可以用 PyPy 裡的 ``purefunction`` decorator 做告知

.. code-block:: python

    from rpython.rlib.jit import purefunction

    @purefunction
    def get_matching_bracket(bracket_map, pc):
        return bracket_map[pc]

    # 下面把查 bracket_map 的地方換掉

接下來跟前面一樣做轉換，最後拿到的程式就比原本快很多

Reference
========================================

* `Tutorial: Writing an Interpreter with PyPy, Part 1 <http://morepypy.blogspot.tw/2011/04/tutorial-writing-interpreter-with-pypy.html>`_
* `Tutorial Part 2: Adding a JIT <http://morepypy.blogspot.tw/2011/04/tutorial-part-2-adding-jit.html>`_
* `Just-in-time compilation <http://en.wikipedia.org/wiki/Just-in-time_compilation>`_
* `Tracing just-in-time compilation <http://en.wikipedia.org/wiki/Tracing_just-in-time_compilation>`_

:title: GC again - Vim
:slug: gc-again-vim
:date: 2015-04-13 14:22
:modified: 2015-04-13 14:22
:category: Misc
:tags:
:author: wdv4758h
:summary:

.. image:: /img/keep-calm-and-be-careful.png
    :alt: Keep Calm

* `(Neo)Vim hangs with freeing a lot of objects #1687 <https://github.com/neovim/neovim/issues/1687>`_
* `[RFC] Speed up garbage collection (Issue 1687). #1761 <https://github.com/neovim/neovim/pull/1761>`_
* `Vim hangs with freeing a lot of objects. Patch for performance-up of GC. <https://groups.google.com/forum/#!searchin/vim_dev/GC/vim_dev/DBYOdHQWvqY/1WH04_dwETIJ>`_

::

    Without this patch, it take 100 seconds to finish GC. And if set 100000 instead of 50000, vim often hangs. With this patch, it take just 0.133967 seconds.

又是一個改 GC 後，某處獲得巨大的性能提升的例子 XD

:title: D-Bus
:slug: d-bus
:date: 2014-12-27 01:45
:modified: 2014-12-27 01:45
:category: Misc
:tags: linux, d-bus
:author: wdv4758h
:summary:

Note: **本篇仍在未完成狀態**

a message bus system for inter-process communication (IPC)

- `D-Bus <https://wiki.archlinux.org/index.php/D-Bus>`_
- `Wikipedia - D-Bus <http://en.wikipedia.org/wiki/D-Bus>`_
- `Freedesktop - Introduction to D-Bus <http://www.freedesktop.org/wiki/IntroductionToDBus/>`_
- `Linux From Scratch - D-Bus <http://www.linuxfromscratch.org/blfs/view/svn/general/dbus.html>`_

D-Bus is enabled automatically when using systemd because dbus is a dependency of systemd.

D-Bus - Architecture
========================================

- libdbus
- dbus-daemon
- wrapper libraries based on particular application frameworks

Interesting : ::

    In 2013 the systemd project rewrote libdbus in an effort to simplify the code, but it turned out to significantly increase the performance of D-Bus as well.
    In preliminary benchmarks, BMW found that the systemd D-Bus library increased performance by 360%.


.. image:: /img/linux/dbus-architectural.png

kdbus
========================================

- `ALS: Linux interprocess communication and kdbus <https://lwn.net/Articles/551969/>`_
- `The unveiling of kdbus <http://lwn.net/Articles/580194/>`_

#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'wdv4758h'
SITENAME = 'Dv 名字很難念'
SITEURL = 'https://wdv4758h.github.io'
TIMEZONE = 'Asia/Taipei'

PATH = 'content'

FEED_ALL_RSS = 'feeds/all.rss.xml'
CATEGORY_FEED_RSS = 'feeds/%s.rss.xml'

# static paths will be copied without parsing their contents
STATIC_PATHS = [
    'html',
    'img',
    'extra/robots.txt',
]
READERS = {"html": None}
THEME = 'themes/aboutwilson'

ARTICLE_URL = 'posts/{date:%Y}/{date:%m}/{slug}/'
ARTICLE_SAVE_AS = 'posts/{date:%Y}/{date:%m}/{slug}/index.html'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DISQUS_SITENAME = 'wdv4758h-blog'
GOOGLE_ANALYTICS = 'UA-42810012-2'

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True

MENUITEMS = [('archive', 'archives'), ('tags', 'tags')]

# Plugin
#
# extract_toc need beautifulsoup4

PLUGIN_PATHS = ['plugins',]
PLUGINS=['sitemap', 'tipue_search', 'related_posts', 'extract_toc']

SITEMAP = {
    'format': 'xml',
    'priorities': {
        'articles': 0.5,
        'indexes': 0.5,
        'pages': 0.5
    },
    'changefreqs': {
        'articles': 'monthly',
        'indexes': 'daily',
        'pages': 'monthly'
    }
}

# This setting tells Pelican which templates are to be used directly to render your content.
# If you don't add it, it will not render the search.html page.

DIRECT_TEMPLATES = (('index', 'tags', 'categories', 'authors', 'archives', 'search', 'about'))

# realted posts

RELATED_POSTS_MAX = 5

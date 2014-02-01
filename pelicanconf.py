# -*- coding: utf-8 -*-
from __future__ import unicode_literals

AUTHOR = 'wdv4758h'
SITENAME = "DoVe"
SITEURL = 'https://wdv4758h.github.io'
TIMEZONE = "Asia/Taipei"

# can be useful in development, but set to False when you're ready to publish
RELATIVE_URLS = True

#GITHUB_URL = 'http://github.com/wdv4758h/'
DISQUS_SITENAME = ""
PDF_GENERATOR = False
REVERSE_CATEGORY_ORDER = True
LOCALE = "C"
DEFAULT_PAGINATION = 4
DEFAULT_DATE = (2014, 2, 1, 0, 1, 1)

FEED_ALL_RSS = 'feeds/all.rss.xml'
CATEGORY_FEED_RSS = 'feeds/%s.rss.xml'

LINKS = ()

SOCIAL = (('github', 'http://github.com/wdv4758h'),)

# global metadata to all the contents
DEFAULT_METADATA = (('yeah', 'it is'),)

# path-specific metadata
EXTRA_PATH_METADATA = {
    'extra/robots.txt': {'path': 'robots.txt'},
    }

# static paths will be copied without parsing their contents
STATIC_PATHS = [
    'pictures',
    'extra/robots.txt',
    ]

# custom page generated with a jinja2 template
TEMPLATE_PAGES = {'pages/jinja2_template.html': 'jinja2_template.html'}

# code blocks with line numbers
PYGMENTS_RST_OPTIONS = {'linenos': 'table'}

# foobar will not be used, because it's not in caps. All configuration keys
# have to be in caps
foobar = "barbaz"

THEME = 'themes/bootstrap'
OUTPUT_PATH = 'output'
PATH = 'content'

ARTICLE_URL = 'posts/{date:%Y}/{date:%m}/{slug}/'
ARTICLE_SAVE_AS = 'posts/{date:%Y}/{date:%m}/{slug}/index.html'


# Custom Home page
DIRECT_TEMPLATES = (('index', 'blog', 'tags', 'categories', 'archives'))
PAGINATED_DIRECT_TEMPLATES = (('blog',))
TEMPLATE_PAGES = {'home.html': 'index.html',}

DISQUS_SITENAME = 'wdv4758h-blog.disqus.com'
GOOGLE_ANALYTICS = 'UA-42810012-2'
BLOG_URL = 'wdv4758h.github.io'

MD_EXTENSIONS = ['fenced_code', 'codehilite(css_class=highlight, linenums=True)', 'extra']

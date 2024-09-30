# Capstone Documentation

This is the user level documentation for the use of the capstone cluster.  It is accessible at:

[https://s-andrews.github.io/capstone_docs/](https://s-andrews.github.io/capstone_docs/)

The site just contains the source code to the site, use the link above it you want to actually read the documentation


## Installation
This site is built on top of [VuePress](https://vuepress.vuejs.org)

If you want to check out and then locally run the site you need to do the following:

```
git clone https://github.com/s-andrews/capstone_docs.git

cd capstone_docs/capstone_docs

npm run docs:dev
```

## Editing
All of the source information is contained with the ```capstone_docs``` and ```capstone_docs/docs``` directories.  The source is in the form of markdown documents which are then rebuilt as HTML.  You can edit the ```.md``` files directly and then the site will automatically update if you're running the dev server, and the main site will be rebuilt automatically when you do a push back to the main branch.
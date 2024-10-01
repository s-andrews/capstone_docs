---
home: true
title: Home
heroImage: /capstone_logo_path.svg

footer: GPLv3 Licensed | Copyright © 2024 Simon Andrews

xfeatures:
  - title: Written Documentation
    details: This site provides comprehensive documentation of all aspects of the cluster
    link: '#'
  - title: Video Tutorials
    details: Look at the short videos we prepared to demonstrate common tasks on the cluster
    link: https://vimeo.com/user/132030108/folder/21518400
  - title: Web interface
    details: Use the cluster web interface to monitor your jobs and data and run web based programs
    link: https://capstone.babraham.ac.uk

---

[default-theme-home]: https://vuejs.press/reference/default-theme/frontmatter.html#home-page

<div class="vp-features">
  <div class="vp-feature" v-for="feat in $page.frontmatter.xfeatures">
    <h2><a v-bind:href="feat.link">{{ feat.title }}</a></h2>
    <p>{{ feat.details }}</p>
  </div>
</div>
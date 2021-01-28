---
layout: projects
uid: prj
title: Projects
description: With kmapper, you go from idea to architecture to finished application
projects:
- title: Domain Ontologies for the Humanities
  link_text: e-editiones.ch
  url: http://e-editiones.ch/ontology
  image: eeditionesCH.png
  image_mobile: eeditionesCH_mobile.png
  desc:
    <p>
      e-editiones.ch was developed by Cyrill Martin during the <a href="https://github.com/nie-ine/" target="_blank"> National Infrastructure for Editions</a> project at the University of Basel and is being further developed by kmapper.
    </p>
    <p>
      Core of the website is the library of humanities ontologies, which are maintained as Turtle files in their own <a href="https://github.com/nie-ine/Ontologies" target="_blank">GitHub Repository</a>. For the website, the ontologies are automatically converted into various RDF formats and HTML. e-editiones.ch supports content negotiation in order to request specific formats programmatically and meets the criteria of <a href="https://www.w3.org/DesignIssues/LinkedData.html#fivestar" target="_blank">5 Star Linked Open Data</a>.
    </p>
  stack: 
    - Jekyll
    - Python
    - XSL
    - Docker
- title: Visualizing Subjects in an Interdisciplinary Context
  link_text: kmapper.org
  url: http://kmapper.org/doaj?q=sustainability
  image: kmapperOrg.png
  image_mobile: kmapperOrg_mobile.png
  desc: 
    <p>
      Tackling complex real-world problems needs interdisciplinary research and an open knowledge landscape easy to navigate. kmapper is such a knowledge mapper.
    </p>
    <p>
      kmapper.org lets you search articles indexed in the <a href="https://doaj.org" target="_blank">DOAJ</a> and visualizes the results based on relevance and scientific discipline. 
    </p>
  stack: 
    - Ruby on Rails
    - PostgreSQL
    - D3.js
---

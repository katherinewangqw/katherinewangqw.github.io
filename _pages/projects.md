---
layout: page
title: projects
permalink: /projects/
description: Things I've built and explored.
nav: true
nav_order: 2
---

<div class="projects-list">
  {%- assign sorted_projects = site.projects | sort: "importance" -%}
  {%- for project in sorted_projects -%}
    <div class="project-item">
      <h3>
        {%- if project.redirect -%}
          <a href="{{ project.redirect }}">{{ project.title }}</a>
        {%- else -%}
          <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
        {%- endif -%}
      </h3>
      {%- if project.description %}
      <p class="project-description">{{ project.description }}</p>
      {%- endif %}
      <div class="project-meta">
        {%- if project.category %}<span class="project-category">{{ project.category }}</span>{%- endif %}
      </div>
    </div>
  {%- endfor -%}
</div>

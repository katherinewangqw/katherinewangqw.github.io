---
layout: page
title: Projects
permalink: /Projects/
description:
nav: true
nav_order: 2
hide_title: true
---

<!-- Collect all unique tags -->
{% assign all_tags = "" | split: "" %}
{% assign sorted_projects = site.projects | sort: "date" | reverse %}
{% for project in sorted_projects %}
  {% for tag in project.tags %}
    {% unless all_tags contains tag %}
      {% assign all_tags = all_tags | push: tag %}
    {% endunless %}
  {% endfor %}
{% endfor %}

<!-- Tag filter bar -->
<div class="project-tags-filter">
  <button class="tag-btn active" data-tag="all">all</button>
  {% for tag in all_tags %}
  <button class="tag-btn" data-tag="{{ tag }}">{{ tag }}</button>
  {% endfor %}
</div>

<!-- Project list -->
<div class="projects-list">
  {%- for project in sorted_projects -%}
    <div class="project-item" data-tags="{{ project.tags | join: ' ' }}">
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
      <p class="project-meta">
        {%- if project.date -%}
        <span class="project-date">{{ project.date | date: "%d %b %Y" }}</span>
        {%- endif -%}
        {%- if project.github and project.github != "" %}
        &nbsp;&bull;&nbsp;<a href="{{ project.github }}" class="project-link"><i class="fab fa-github"></i> GitHub</a>
        {%- endif %}
        {%- if project.pdf and project.pdf != "" %}
        &nbsp;&bull;&nbsp;<a href="{{ project.pdf | relative_url }}" class="project-link"><i class="fas fa-file-pdf"></i> PDF</a>
        {%- endif %}
        {%- if project.demo and project.demo != "" %}
        &nbsp;&bull;&nbsp;<a href="{{ project.demo }}" class="project-link"><i class="fas fa-external-link-alt"></i> Demo</a>
        {%- endif %}
      </p>
    </div>
  {%- endfor -%}
</div>

<script src="{{ '/assets/js/project-tags.js' | relative_url }}" defer></script>

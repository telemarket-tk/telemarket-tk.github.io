---
menu: 5
title: lista
---
{% assign pezzi = site.data.audio | group_by: 'name' %}
{% assign ordinati = pezzi | sort: 'name' %}
|#|name|
|:--|:--|
{% for s in ordinati %}|{{ forloop.index }}|{{ s.name }}|
{% endfor %}
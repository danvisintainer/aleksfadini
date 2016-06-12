---
layout: page
title: Performances
permalink: /performances/
---

Let's put our performances here

{% for gig in site.data.gigs %}
<div class="row">
<div class="col-4">
{{ gig.name }}
</div>
<div class="col-4">
{{ gig.date }}
</div>
<div class="col-4">
{{ gig.location }}
</div>
</div>
{% endfor %}
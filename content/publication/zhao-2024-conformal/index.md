---
title: 'Conformal Predictive Programming for Chance Constrained Optimization'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- admin
- Xinyi Yu
- Jyotirmoy V. Deshmukh
- Lars Lindemann

author_notes:
  - 'Equal contribution'
  - 'Equal contribution'

date: '2024-02-12'
doi: ''

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: '*arXiv preprint arXiv:2402.07407*'

abstract: Motivated by the advances in conformal prediction (CP), we propose conformal predictive programming (CPP), an approach to solve chance constrained optimization (CCO) problems, i.e., optimization problems with nonlinear constraint functions affected by arbitrary random parameters. CPP utilizes samples from these random parameters along with the quantile lemma – which is central to CP – to transform the CCO problem into a deterministic optimization problem. We then present two tractable reformulations of CPP by (1) writing the quantile as a linear program along with its KKT conditions (CPP-KKT), and (2) using mixed integer programming (CPP-MIP). CPP comes with marginal probabilistic feasibility guarantees for the CCO problem that are conceptually different from existing approaches, e.g., the sample approximation and the scenario approach. While we explore algorithmic similarities with the sample approximation approach, we emphasize that the strength of CPP is that it can easily be extended to incorporate different variants of CP. To illustrate this, we present robust conformal predictive programming to deal with distribution shifts in the uncertain parameters of the CCO problem.

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2402.07407'
url_code: 'https://github.com/SAIDS-Lab/Conformal-Predictive-Programming-for-CCO'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: ""
  focal_point: ''
  preview_only: true
---

<center>

![MKCT_workflow](featured.png)
<small>Conformal Predictive Programming</small>

</center>

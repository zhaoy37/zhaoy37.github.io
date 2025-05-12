---
title: 'Conformal Predictive Programming for Chance Constrained Optimization'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- admin
- Xinyi Yu
- Matteo Sesia
- Jyotirmoy V. Deshmukh
- Lars Lindemann

date: '2025-05-05'
doi: ''

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: '*arXiv preprint arXiv:2402.07407*'

abstract: We propose conformal predictive programming (CPP), a framework to solve chance constrained optimization problems, i.e., optimization problems with constraints that are functions of random variables. CPP utilizes samples from these random variables along with the quantile lemma - central to conformal prediction - to transform the chance constrained optimization problem into a deterministic problem with a quantile reformulation. CPP inherits a priori guarantees on constraint satisfaction from existing sample average approximation approaches for a class of chance constrained optimization problems, and it provides a posteriori guarantees that are of conditional and marginal nature otherwise. The strength of CPP is that it can easily support different variants of conformal prediction which have been (or will be) proposed within the conformal prediction community. To illustrate this, we present robust CPP to deal with distribution shifts in the random variables and Mondrian CPP to deal with class conditional chance constraints. To enable tractable solutions to the quantile reformulation, we present a mixed integer programming method (CPP-MIP) encoding, a bilevel optimization strategy (CPP-Bilevel), and a sampling-and-discarding optimization strategy (CPP-Discarding). We also extend CPP to deal with joint chance constrained optimization (JCCO). In a series of case studies, we show the validity of the aforementioned approaches, empirically compare CPP-MIP, CPP-Bilevel, as well as CPP-Discarding, and illustrate the advantage of CPP as compared to scenario approach.

summary: Currently under review in Automatica.

# Display this page in the Featured widget?
featured: true

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

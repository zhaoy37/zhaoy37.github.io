---
title: 'Signal Temporal Logic Control Synthesis among Uncontrollable Dynamic Agents with Conformal Prediction'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- Xinyi Yu
- admin
- Xiang Yin
- Lars Lindemann

date: '2023-12-07'
doi: ''

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: '*arXiv preprint arXiv:2311.04242*'

abstract: The control of dynamical systems under temporal logic specifications among uncontrollable dynamic agents is challenging due to the agents’ a-priori unknown behavior. Existing works have considered the problem where either all agents are controllable, the agent models are deterministic and known, or no safety guarantees are provided. We propose a predictive control synthesis framework that guarantees, with high probability, the satisfaction of signal temporal logic (STL) tasks that are defined over a controllable system in the presence of uncontrollable stochastic agents. We use trajectory predictors and conformal prediction to construct probabilistic prediction regions for each uncontrollable agent that are valid over multiple future time steps. Specifically, we construct a normalized prediction region over all agents and time steps to reduce conservatism and increase data efficiency. We then formulate a worst-case bilevel mixed integer program (MIP) that accounts for all agent realizations within the prediction region to obtain an open-loop controller that provably guarantee task satisfaction with high probability. To efficiently solve this bilevel MIP, we propose an equivalent MIP program based on KKT conditions of the original bilevel formulation. Building upon this, we design a closed-loop controller, where both recursive feasibility and task satisfaction can be guaranteed with high probability. We illustrate our control synthesis framework on two case studies.

# Summary. An optional shortened abstract.
summary: '*STL control synthesis among uncontrollable agents*'

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2312.04242'
url_code: 'https://github.com/SAIDS-Lab/STL-Synthesis-among-Uncontrollable-Agents'
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
<small>The result of the temperature control of the first case study.</small>

</center>

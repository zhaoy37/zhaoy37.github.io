---
title: 'Logic-VLA: A Temporal Logic Conditioned Vision-Language-Action Model'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- Celina Shiyu Wang
- admin
- Junjie Ye
- Yue Wang
- Jyotirmoy V. Deshmukh

# First two authors contributed equally
author_notes:
- ''
- 'Equal Advising'
- ''
- ''
- 'Equal Advising'

date: '2026-08-20'
doi: ''

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ''

abstract: Vision-language-action (VLA) models can follow natural-language (NL) task instructions, but such instructions may not precisely specify safety-critical or spatiotemporal requirements on the resulting behavior. We introduce Logic-VLA, a formal-requirement-aware VLA that conditions on Signal Temporal Logic (STL) specifications supplied at inference time. Logic-VLA uses a syntax-graph-based STL encoder pre-trained to capture temporal logic semantics. Policy adaptation proceeds in two stages. STL-conditioned supervised fine-tuning on satisfying demonstrations is followed by trajectory-level preference optimization over matched satisfying–violating rollout pairs using a flow-matching surrogate for Identity Preference Optimization. This formulation improves formal requirement satisfaction while preserving the nominal NL task. We evaluate Logic-VLA in closed-loop quadcopter navigation simulation across randomized photorealistic environments and test generalization to STL formulas unseen during training. Across the evaluation benchmarks, Logic-VLA improves STL satisfaction rate over an STL-blind base policy by 24.8 to 40.7 percentage points (pp) while reducing nominal NL task success by at most 1.8 pp, showing that a single VLA can adapt its behavior to varying formal requirements without requiring a separate policy for each specification.

# Summary. An optional shortened abstract.
summary:

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
url_pdf: 'https://arxiv.org/pdf/2608.20556'
url_code: ''
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
<small>Overview of Logic-VLA.</small>

</center>
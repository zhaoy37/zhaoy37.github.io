---
title: 'Formal Verification and Control with Conformal Prediction'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Lars Lindemann
  - admin
  - Xinyi Yu
  - George J. Pappas
  - Jyotirmoy V. Deshmukh

date: '2024-08-31'
doi: ''

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-journal"]

# Publication name and optional abbreviated publication name.
publication: 'IEEE Control Systems'

abstract: We present recent advances in formal verification and control for autonomous systems with practical safety guarantees enabled by conformal prediction (CP), a statistical tool for uncertainty quantification. This survey is particularly motivated by learning-enabled autonomous systems (LEASs), where the complexity of learning-enabled components (LECs) poses a major bottleneck for applying traditional model-based verification and control techniques. To address this challenge, we advocate for CP as a lightweight alternative and demonstrate its use in formal verification, systems and control, and robotics. CP is appealing due to its simplicity (easy to understand, implement, and adapt), generality (requires no assumptions on learned models and underlying data distributions), and efficiency (real-time capable and accurate). This survey provides an accessible introduction to CP for non-experts interested in applying CP to autonomy problems. We particularly show how CP can be used for formal verification of LECs and the design of safe control as well as offline and online verification algorithms for LEASs. We present these techniques within a unifying framework that addresses the complexity of LEASs. Our exposition spans simple specifications, such as robot navigation tasks, to complex mission requirements expressed in temporal logic. Throughout the survey, we contrast CP with other statistical techniques, including scenario optimization and PAC-Bayes theory, highlighting advantages and limitations for verification and control. Finally, we outline open problems and promising directions for future research.

# Summary. An optional shortened abstract.
summary: IEEE Control Systems.

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2409.00536'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: 'https://sites.google.com/view/cps-iot25-tutorial-cp'
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: ''
  focal_point: ''
  preview_only: true
---

<center>

![MKCT_workflow](featured.png)
<small>Formal verification and control of LEASs.</small>

</center>
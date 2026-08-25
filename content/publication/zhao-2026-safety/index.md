---
title: 'Safety-aware Model Predictive Path Integral Control with Signal Temporal Logic'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- admin
- Taekyung Kim
- Hideki Okamoto
- Bardh Hoxha
- Jyotirmoy V. Deshmukh
- Lars Lindemann
- Georgios Fainekos

date: '2026-08-24'
doi: ''

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ''

abstract: Safety-aware motion planning remains a challenge in robotics, especially when missions are time-critical and are under complex specifications. In this paper, we propose safety-aware-stl-mppi, a computationally efficient sampling-based receding-horizon planning framework designed to promote satisfaction of constraints expressed in Signal Temporal Logic (STL). Our approach encodes discrete-time STL formulas into candidate time-varying control barrier functions (CBF), which are integrated into a model predictive path integral (MPPI) controller. Our method inherits the benefits of low computational cost from an efficiently parallelizable sampling based planner and utilizes CBF for constraints expressed in STL. We compare against several MPPI baselines using four artificial Mars Rover planning case studies with a diverse environment and cost setups, where we show our method consistently achieving high safety and efficiency. We show a quadcopter planning experiment with NVIDIA Isaac Lab.

# Summary. An optional shortened abstract.
summary:

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
url_pdf: '2026___Safety_aware_MPPI_with_STL.pdf'
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

![Safety-aware-stl-mppi](featured.png)
<small>Safety-aware-stl-mppi</small>

</center>
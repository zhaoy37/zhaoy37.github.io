---
title: 'Rolling-WAM: World Action Models with Rolling Imagination'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- Yinghua Zhou
- Junjie Ye
- admin
- Hao Dong
- Celina Shiyu Wang
- Ruohai Ge
- Tingyi Yang
- Basile Van Hoorick
- Gaurav S. Sukhatme
- Vitor Campagnolo Guizilini
- Yue Wang

# First two authors contributed equally; last two advised equally
author_notes:
- 'Equal Contribution'
- 'Equal Contribution'
- ''
- ''
- ''
- ''
- ''
- ''
- ''
- 'Equal Advising'
- 'Equal Advising'

date: '2026-09-24'
doi: ''

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ''

abstract: World Action Models (WAMs) couple action generation with future visual prediction for robotic manipulation. However, completing the joint video-action denoising process at each replanning cycle incurs substantial latency, delaying action updates and limiting closed-loop responsiveness. We present Rolling-WAM, a formulation that distributes joint denoising across successive replanning cycles. Our method maintains a sliding window of video-action chunks at staggered noise levels. At each step, a rolling noise schedule fully denoises the imminent action chunk for execution, while partially refining farther-future chunks. As the window advances with new camera observations, the retained future chunks continue their denoising process. This distributes the computational cost over time while carrying an evolving visual-action context across chunk boundaries. Evaluations on LIBERO, RoboTwin, and a real-world Unitree G1 humanoid show that Rolling-WAM achieves competitive manipulation performance. By removing the need to denoise the entire prediction horizon from scratch, it delivers a 4.5x steady-state replanning speedup over standard joint WAMs.

# Summary. An optional shortened abstract.
summary: arXiv preprint, 2026.

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
links:
- name: Project
  url: https://rolling-wam.github.io/

url_pdf: 'https://arxiv.org/pdf/2609.30247'
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

# Video clip shown instead of the featured image on homepage cards
video_preview: teaser.mp4
---

<center>

![Rolling-WAM overview](featured.png)
<small>Rolling-WAM maintains a rolling window of video-action predictions at staggered noise levels.</small>

</center>

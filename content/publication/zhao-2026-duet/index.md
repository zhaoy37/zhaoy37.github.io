---
title: 'DUET: Dual-Robot Understanding via Efficient Teaching'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- admin
- Ruohai Ge
- Celina Shiyu Wang
- Junjie Ye
- Muchen Xu
- Minhao Li
- Sergey Zakharov
- Basile Van Hoorick
- Vitor Campagnolo Guizilini
- Leonidas Guibas
- Gaurav S. Sukhatme
- Jyotirmoy V. Deshmukh
- Yue Wang

date: '2026-06-14'
doi: ''

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ''

abstract: Dual-robot collaboration enables tasks that exceed the reach and payload of a single robot, such as collaboratively transporting objects across environments and executing coordinated handovers. Data acquisition is the primary bottleneck for training these systems. To this end, we introduce DUET, a dual-robot learning framework for mobile manipulation. For efficient data collection, we create a unified dual-embodiment synchronized VR-based teleoperation system for in-domain heterogeneous robot data collection. We further develop a complementary tracking pipeline that records human-human coordination and collaborative mobile manipulation priors. To allow efficient learning, we introduce an Action Chunking Transformer based architecture that first pretrains collaborative policies on efficient human-human demonstrations, before finetuning them on a minimal set of real-robot teleoperation trajectories. We develop a benchmark of four collaborative tasks to evaluate our framework using a Unitree G1 humanoid and a Dexmate Vega1 mobile manipulator. The results demonstrate that harnessing human priors not only yields superior task performance compared to baselines trained only on robot data, but also reduces the total human effort required for data collection. Our human data collection pipeline achieves 5.4x acceleration on average from teleoperation, but we perform equally or better than robot-only data trained policies across all tasks.

# Summary. An optional shortened abstract.
summary: A dual-robot learning framework for mobile manipulation — pretrain on human-human demonstrations, then finetune on real-robot data.

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
links:
- name: Project Page
  url: /Duet/

url_pdf: 'https://arxiv.org/pdf/2606.20990'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: '/Duet/'
url_slides: ''
url_source: ''
url_video: 'https://youtu.be/C8L5iuofVPo'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: ""
  focal_point: ''
  preview_only: true
---

<center>

![DUET human-data training pipeline](featured.png)
<small>DUET</small>

</center>

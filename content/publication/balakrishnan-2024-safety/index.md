---
title: 'Safety Assurance for Autonomous Systems with Multiple Sensor Modalities'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Anand Balakrishnan
  - Rohit Bernard
  - Shreeram Narayanan
  - Vidisha Kudalkar
  - admin
  - Parinitha Nagaraja
  - Georgi Markov
  - Christof Budnik
  - Helmut Degen
  - Lars Lindemann
  - Jyotrimoy Deshmukh

date: '2024-11-06'
doi: ''

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: '22nd ACM and IEEE International Conference on Formal Methods and Models for Co-Design (MEMOCODE)'

abstract: Humans and autonomous cyber-physical systems increasingly share physical space, for example, in industrial manufacturing, autonomous taxis, warehouses, and unmanned package delivery. This makes such autonomous CPS safety-critical because design errors can harm the people in their shared space. To enhance their own safe operation and the safety of humans around them, these CPSs typically use multiple sensor modalities to perceive the environment. Such sensor systems include RADAR, LIDAR, ultra-wideband, SONAR, odometry, GPS, and camera-based sensors to make estimations about their own state and observations of the environment. Traditionally, the observations made by different sensor streams are fused using probabilistic models such as Bayesian filters (e.g., Kalman filters). These filters make assumptions about the distribution of error between the observation and the ground truth for a given sensor and, using such assumptions, attempt to reconstruct a state estimate by computing some weighted combination of observations from multiple sensors (with possibly different error distributions). However, such assumptions can be challenging to model as environments become more complex. Furthermore, such algorithms typically do not account for sensor failures or shifts in the error distribution during deployment. This paper presents an algorithmic framework that defines a notion of spatio-temporal consistency across sensor streams. We eschew the idea of computing a fused state estimate and instead focus on producing a consistent state estimate if the multiple sensor observations are deemed consistent. If we detect an inconsistency in the state estimate, we propose a conservative over-approximation of the state estimate based on the last known consistent estimate. We demonstrate how such a framework can be deployed in an industrial manufacturing case study. We show that such a framework can provide probabilistic runtime assurance using conformal prediction techniques for statistical analyses.

# Summary. An optional shortened abstract.
summary: MEMOCODE 24

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://ieeexplore.ieee.org/abstract/document/10740749'
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
  caption: ''
  focal_point: ''
  preview_only: true
---
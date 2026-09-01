---
title: 'A Unified Perspective on Conformal Prediction and Wasserstein Distributionally Robust Optimization for Uncertainty Quantification'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- Kehan Long
- admin
- Pol Mestres
- Lars Lindemann
- Nikolay Atanasov
- Jorge Cortés

date: '2026-08-30'
doi: ''

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: '*arXiv preprint arXiv:2608.29789*'

abstract: 'Uncertainty quantification from finite data is central to machine learning, optimization, and automation systems, where decisions must remain reliable under limited samples and test-time distribution shift. Conformal prediction (CP) and distributionally robust optimization (DRO) offer two complementary approaches: CP constructs data-dependent prediction sets with distribution-free finite-sample validity under exchangeability, while DRO optimizes worst-case performance over an ambiguity set around an empirical distribution. We develop a unified probabilistic perspective on CP and DRO by viewing both as ways to turn finite calibration data into a data-dependent quantile estimator that a test score falls below with high probability. From this perspective, CP and DRO correct the empirical quantile along two coordinates of the same family of estimators: CP inflates the quantile level, whereas DRO shifts the quantile value through an ambiguity radius. Both methods provide the same calibration-conditional guarantee for the true distribution, requiring the target coverage to hold with high probability over the calibration sample. Their constructions differ, however: CP uses a closed-form, distribution-free level correction, while DRO uses a value-space correction whose certified radius depends on properties of the unknown distribution and additionally guarantees coverage uniformly over the ambiguity set. This distinction emerges in the tails of the score distribution. Because CP relies on sparse upper-tail order statistics of the calibration samples, its level inflation barely moves the estimator when those samples are dense near the target quantile but overshoots when they are sparse, whereas a well-chosen DRO radius corrects in value space and may avoid this overshoot.'

# Summary. An optional shortened abstract.
summary: Preprint submitted to Annual Reviews in Control

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
url_pdf: 'https://arxiv.org/pdf/2608.29789'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

---

---
title: 'Formal Logic-Guided Harnessing Heterogeneous Fairness Rules in Smart Cities'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Ziyan An
  - admin
  - Xuqing Gao
  - Ayan Mukhopadhyay
  - Meiyi Ma

date: '2025-05-27'
doi: ''

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-journal"]

# Publication name and optional abbreviated publication name.
publication: 'ACM Transactions on Cyber-Physical Systems'

abstract: Smart cities operate on computational predictive frameworks that collect, aggregate, and utilize data from large-scale sensor networks. However, these frameworks are prone to multiple sources of data and algorithmic bias, which often lead to unfair prediction results. In this work, we first demonstrate that bias persists at a micro-level both temporally and spatially by studying real city data from Chattanooga, TN. To alleviate the issue of such bias, we introduce FairGuard, a micro-level temporal logic-based approach for fair smart city policy adjustment and generation in complex temporal-spatial domains. The FairGuard framework consists of two phases. First, we develop a static generator that is able to reduce data bias based on temporal logic conditions by minimizing correlations between selected attributes. Second, to ensure fairness in predictive algorithms, we design a dynamic component to regulate prediction results and generate future fair predictions by harnessing logic rules. To navigate potential conflicts among these single fairness rules, including logical contradictions and data interference, we formulate detection strategies grounded in satisfiability modulo theories (SMT) across both logic and data levels. Furthermore, acknowledging the limitations of fairness rules focused on a single attribute, we enhance the static FairGuard to accommodate heterogeneous fairness rules that simultaneously consider multiple protected attributes. In addition, we develop an interactive online visualizer that displays the adjustments made to correct unfair city states, thereby improving fairness, alongside the prediction outcomes from the dynamic component. Evaluations showcase that logic-enabled static FairGuard can effectively reduce the biased correlations while dynamic FairGuard can guarantee fairness on protected groups at run-time with minimal impact on overall performance.

# Summary. An optional shortened abstract.
summary: TCPS

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://dl.acm.org/doi/10.1145/3737293'
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
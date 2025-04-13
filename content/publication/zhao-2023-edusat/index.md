---
title: 'EduSAT: A Pedagogical Tool for Theory and Applications of Boolean Satisfiability'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- admin
- Ziyan An
- Meiyi Ma
- Taylor Johnson

date: '2023-08-15'
doi: ''

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: '*arXiv preprint arXiv:2308.07890*'

abstract: Boolean Satisfiability (SAT) and Satisfiability Modulo Theories (SMT) are widely used in automated verification, but there is a lack of interactive tools designed for educational purposes in this field. To address this gap, we present EduSAT, a pedagogical tool specifically developed to support learning and understanding of SAT and SMT solving. EduSAT offers implementations of key algorithms such as the Davis-Putnam-Logemann-Loveland (DPLL) algorithm and the Reduced Order Binary Decision Diagram (ROBDD) for SAT solving. Additionally, EduSAT provides solver abstractions for five NP-complete problems beyond SAT and SMT. Users can benefit from EduSAT by experimenting, analyzing, and validating their understanding of SAT and SMT solving techniques. Our tool is accompanied by comprehensive documentation and tutorials, extensive testing, and practical features such as a natural language interface and SAT and SMT formula generators, which also serve as a valuable opportunity for learners to deepen their understanding. Our evaluation of EduSAT demonstrates its high accuracy, achieving 100% correctness across all the implemented SAT and SMT solvers. We release EduSAT as a python package in .whl file, and the source can be identified at https://github.com/zhaoy37/SAT_Solver.

# Summary. An optional shortened abstract.
summary: A pedagogical tool specifically developed to support learning and understanding of SAT and SMT solving.

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2308.07890'
url_code: 'https://github.com/zhaoy37/SAT_Solver'
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
<small>Architecture of EduSAT</small>

</center>
---
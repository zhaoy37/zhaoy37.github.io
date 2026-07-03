---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "3rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
  - block: collection
    id: papers
    content:
      title: Featured Publications
      filters:
        folders:
          - publication
        featured_only: true
    design:
      view: compact
      columns: 1
  - block: collection
    content:
      title: Recent Publications
      text: ""
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      view: citation
  - block: experience
    id: experience
    content:
      username: admin
      title: Experience
    design:
      spacing:
        padding: ['2rem', 0, '2rem', 0]
  - block: markdown
    id: awards
    content:
      title: Awards
      text: |
        - **ICCPS Best Paper Award Finalist** — 15th ACM/IEEE International Conference on Cyber-Physical Systems, May 2024.
          Awarded for the paper "Robust Conformal Prediction for STL Runtime Verification under Distribution Shift".
        - **Viterbi School of Engineering Fellowship** — Viterbi School of Engineering, USC, August 2023.
          Awarded to selected incoming PhD students at the Viterbi School of Engineering, USC.
        - **VISE Award (Vanderbilt Institute for Surgery and Engineering Summer Fellowship)** — Vanderbilt Institute for Surgery and Engineering, 2021.
          Awarded for the paid fellowship at the Vanderbilt Institute for Surgery and Engineering Summer Fellows Program.
    design:
      spacing:
        padding: ['2rem', 0, '2rem', 0]
---
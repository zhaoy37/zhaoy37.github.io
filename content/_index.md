---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

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
    id: work
    content:
    title: Work Experience
    date_format: Jan 2006
    items:
      - title: Grader of CS 4260 (Artificial Intelligence)
        company: Vanderbilt University
        company_url: ''
        company_logo: org-v
        location: Nashville
        date_start: '2022-08-01'
        date_end: '2023-05-01'
        description: I graded students' homework and hold office hours on a regular basis to answer students' questions.
      - title: Application Development Intern
        company: ADP
        company_url: ''
        company_logo: org-adp
        location: Roseland
        date_start: '2022-06-01'
        date_end: '2022-08-01'
        description: I worked as an Application Development Intern within the Global Product & Tech (GPT) group at ADP. I developed an API for Notification Replay for the Autopay group using Spring Boot and MongoDB, etc.
---

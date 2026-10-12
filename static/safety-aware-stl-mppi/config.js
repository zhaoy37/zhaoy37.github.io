// ============================================================
//  SITE ASSET CONFIG
//  Every picture, video, and link used by index.html lives here.
//  Set a link/video to "" to hide that slot.
// ============================================================

window.SITE_CONFIG = {

  text: {
    title: "Safety-aware STL-MPPI",
    subtitle: "Safety-aware Model Predictive Path Integral Control with Signal Temporal Logic",
    venue: "",
    affiliations: "¹University of Southern California   ²University of Michigan   ³Toyota Motor North America R&D   ⁴ETH Zürich",
    tagline: "Time-varying control barrier functions turn STL specifications into a lightweight safety projection for sampling-based planning.",
    bibtex: `@article{zhao2026safety,
  title   = {Safety-aware Model Predictive Path Integral Control with Signal Temporal Logic},
  author  = {Zhao, Yiqi and Kim, Taekyung and Okamoto, Hideki and Hoxha, Bardh and Deshmukh, Jyotirmoy V and Lindemann, Lars and Fainekos, Georgios},
  journal = {arXiv preprint arXiv:2608.23972},
  year    = {2026}
}`,
  },

  authors: [
    { name: "Yiqi Zhao",             sup: "1", url: "https://zhaoy37.github.io/" },
    { name: "Taekyung Kim",          sup: "2", url: "https://taekyung.me/" },
    { name: "Hideki Okamoto",        sup: "3", url: "" },
    { name: "Bardh Hoxha",           sup: "3", url: "https://www.bhoxha.com/" },
    { name: "Jyotirmoy V. Deshmukh", sup: "1", url: "https://jdeshmukh.github.io/index.html" },
    { name: "Lars Lindemann",        sup: "4", url: "https://sites.google.com/view/larslindemann/main-page" },
    { name: "Georgios Fainekos",     sup: "3", url: "https://www.fainekos.net/" },
  ],

  videos: {
    // Narrated summary video (Video section)
    summary: "./static/videos/summary.mp4",
    // Results section clips
    roverCaseC: "./static/videos/animation.mp4",
    quadcopter: "./static/videos/quad.mp4",
  },

  images: {
    fig1: "./static/images/fig1.png",
    fig2: "./static/images/fig2.png",
    fig3: "./static/images/fig3.png",
    table1: "./static/images/table1.png",
    algorithm1: "./static/images/algorithm1.png",
  },

  links: {
    paperPdf: "https://arxiv.org/pdf/2608.23972",
    arxiv: "https://arxiv.org/abs/2608.23972",
    video: "",   // no YouTube link; the summary video is embedded below
    code: "",    // hidden until a repository is public
  },

};

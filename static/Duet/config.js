// ============================================================
//  SITE ASSET CONFIG
//
//  Every picture, video, and link used by index.html lives here.
//  To swap an asset, change the value on the right — you never
//  need to touch index.html.
//
//  VIDEO SLOTS accept any of:
//    "https://youtu.be/YOUR_VIDEO_ID"      <- just paste a YouTube link
//    "./static/videos/my-clip.mp4"         <- or a local file path
//    ""                                    <- or hide that slot entirely
//  Any YouTube format works (youtu.be/..., watch?v=..., embed/...).
//
//  LINK SLOTS: set to "" to hide that button.
// ============================================================

window.SITE_CONFIG = {

  text: {
    // Big title in the banner
    title: "DUET",
    // Subtitle line under the title
    subtitle: "Dual-Robot Understanding via Efficient Teaching",
    // Venue line (e.g. "Conference on Robot Learning 2026"). "" hides it.
    venue: "",
    // Affiliation line shown under the author names
    affiliations: "¹University of Southern California   ²Toyota Research Institute   ³Stanford University   *Equal contribution",
    // Short core-idea line shown in the banner under the subtitle. "" hides it.
    tagline: "Two humans demonstrate, two robots learn: pretrain on human-human demonstrations, then finetune on a set of real-robot data.",
    // BibTeX entry shown in the citation section. "" hides it.
    bibtex: `@article{zhao2026duet,
  title   = {DUET: Dual-Robot Understanding via Efficient Teaching},
  author  = {Yiqi Zhao and Ruohai Ge and Celina Shiyu Wang and Junjie Ye and Muchen Xu and Minhao Li and Sergey Zakharov and Basile Van Hoorick and Vitor Campagnolo Guizilini and Leonidas Guibas and Gaurav S. Sukhatme and Jyotirmoy V. Deshmukh and Yue Wang},
  journal = {arXiv preprint arXiv:YOUR_ARXIV_ID},
  year    = {2026}
}`,
  },

  // Author names shown in the banner, in order.
  //   name : displayed text
  //   sup  : superscript markers (affiliation number, * for equal contribution)
  //   url  : personal homepage — "" shows the name without a link
  authors: [
    { name: "Yiqi Zhao",                 sup: "*,1", url: "https://zhaoy37.github.io/" },
    { name: "Ruohai Ge",                 sup: "*,1", url: "https://gelev97.github.io/" },
    { name: "Celina Shiyu Wang",         sup: "1",   url: "https://www.linkedin.com/in/celina-wang-4032562ba/" },
    { name: "Junjie Ye",                 sup: "1",   url: "https://junjieye.com/" },
    { name: "Muchen Xu",                 sup: "1",   url: "" },
    { name: "Minhao Li",                 sup: "1",   url: "" },
    { name: "Sergey Zakharov",           sup: "2",   url: "https://zakharos.github.io/" },
    { name: "Basile Van Hoorick",        sup: "2",   url: "https://basile.be/" },
    { name: "Vitor Campagnolo Guizilini", sup: "2",  url: "https://vitorguizilini.github.io/" },
    { name: "Leonidas Guibas",           sup: "3",   url: "https://geometry.stanford.edu/?member=guibas" },
    { name: "Gaurav S. Sukhatme",        sup: "1",   url: "https://uscresl.org/principal-investigator/" },
    { name: "Jyotirmoy V. Deshmukh",     sup: "1",   url: "https://jdeshmukh.github.io/index.html" },
    { name: "Yue Wang",                  sup: "1",   url: "https://yuewang.xyz/" },
  ],

  videos: {
    // --- Fullscreen hero background (top of page) ---------------
    // Landscape version (desktop / tablet). NOTE: a local .mp4 looks
    // best here (YouTube embeds show branding); YouTube still works.
    teaserDesktop: "./static/videos/teaser_small.mp4",
    // Portrait version (phones), 700x1080 like umi-on-legs
    teaserMobile: "./static/videos/teaser_mobile_small.mp4",

    // --- Method section figures (local .mp4 loops) ---------------
    // Drop the files into ./static/videos/ with these names (or
    // change the paths here). A YouTube link also works in any slot.
    // "Two operators, one robot duo" figure
    teleoperation: "./static/videos/teleoperation.mp4",
    // "Robot data without robots" figure
    humanData: "./static/videos/human-data.mp4",

    // --- Task rollout grid (Results section, hover to play) ------
    // One clip per benchmark task. "" hides that slot.
    taskTrashCollection: "./static/videos/trash_duet.mp4",
    taskBoxOrganization: "./static/videos/move_duet.mp4",
    taskBoardTilting: "./static/videos/tilt_duet.mp4",
    taskDollPassing: "./static/videos/doll_duet.mp4",

    // --- Generalizability videos (Results section, hover to play) -
    // Two zero-shot OOD rollouts of T2 Box Organization and Board Tilting.
    generalizationT2: "./static/videos/move_generalize.mp4",
    generalizationT3: "./static/videos/tilt_generalize.mp4",
  },

  images: {
    // --- Method section figures (in page order) ------------------
    teleopPipeline: "./static/images/teleoperation_pipeline.svg",
    humanSystemExample: "./static/images/human_system_example.png",
    humanDataPipeline: "./static/images/human_data_training_pipeline.svg",
    architecture: "./static/images/architecture.svg",

    // --- Results section figures ---------------------------------
    pointsSuccessRate: "./static/images/points_success_rate.svg",
  },

  links: {
    // "Paper" button (local PDF in ./static/)
    paperPdf: "https://zhaoy37.github.io/Duet/",
    // "arXiv" button — replace with your arXiv URL, or "" to hide
    arxiv: "https://zhaoy37.github.io/Duet/",
    // "Video" button — your main YouTube video, or "" to hide
    video: "https://youtu.be/C8L5iuofVPo",
    // Embedded player in the "Technical Summary Video" section
    // (any YouTube format works — it is converted automatically)
    youtubeEmbed: "https://youtu.be/C8L5iuofVPo",
    // "Code" buttons — your GitHub repo, or "" to hide
    code: "https://zhaoy37.github.io/Duet/",
    // "🤗 Dataset" button — your Hugging Face dataset, or "" to hide
    dataset: "https://zhaoy37.github.io/Duet/",
  },

};

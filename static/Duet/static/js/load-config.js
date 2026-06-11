// Fills in every element tagged with data-src / data-href using the
// values defined in config.js (window.SITE_CONFIG).
//
//   data-src="videos.teaserDesktop"  -> fills <img>/<source>/<iframe>
//   data-href="links.arxiv"          -> sets href on <a>
//
// Video slots are smart:
//   - YouTube link (any format: youtu.be/ID, watch?v=ID, embed/ID)
//       -> the <video> tag is automatically replaced with a YouTube embed
//          (autoplaying, muted, looping — viewers can unmute via controls)
//   - local file path (e.g. "./static/videos/clip.mp4")
//       -> plays as a normal local video
//   - empty string ""
//       -> that video slot is hidden entirely
//
// Edit config.js to swap assets; this file never needs to change.
document.addEventListener("DOMContentLoaded", function () {
  function resolve(path) {
    return path.split(".").reduce(function (obj, key) {
      return obj ? obj[key] : undefined;
    }, window.SITE_CONFIG);
  }

  // Extracts the video ID from any common YouTube URL format, else null.
  function youtubeId(url) {
    var m = String(url).match(
      /(?:youtube(?:-nocookie)?\.com\/(?:embed\/|watch\?v=|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
    );
    return m ? m[1] : null;
  }

  function makeEmbedUrl(id, background) {
    var params = "autoplay=1&mute=1&loop=1&playlist=" + id + "&rel=0&playsinline=1";
    if (background) params += "&controls=0&modestbranding=1&iv_load_policy=3";
    return "https://www.youtube.com/embed/" + id + "?" + params;
  }

  // Replaces a <video> element with a YouTube iframe.
  function videoToYoutube(video, id) {
    var background = !!video.closest(".hero-video"); // fullscreen hero bg
    var iframe = document.createElement("iframe");
    iframe.src = makeEmbedUrl(id, background);
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    );
    iframe.setAttribute("allowfullscreen", "");
    if (background) {
      iframe.style.cssText =
        "position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;";
    } else {
      iframe.style.cssText = "width:100%;aspect-ratio:16/9;display:block;";
    }
    video.replaceWith(iframe);
  }

  document.querySelectorAll("[data-src]").forEach(function (el) {
    var value = resolve(el.dataset.src);
    var video = el.closest("video");

    if (value === undefined) {
      console.warn("config.js is missing an entry for:", el.dataset.src);
      return;
    }

    // Empty string -> hide this slot
    if (value === "") {
      (video || el).style.display = "none";
      return;
    }

    var ytId = youtubeId(value);

    if (video) {
      // <source> inside a <video> slot
      if (ytId) {
        videoToYoutube(video, ytId);
      } else {
        el.src = value;
        video.load();
      }
    } else if (el.tagName === "IFRAME" && ytId) {
      // iframe slot: normalize any YouTube URL format to an embed URL
      el.src = "https://www.youtube.com/embed/" + ytId + "?rel=0";
    } else {
      // <img>, or iframe with a non-YouTube URL
      el.src = value;
    }
  });

  // Text slots: data-text="text.title" -> fills the element's text.
  // An empty string in the config hides the element.
  document.querySelectorAll("[data-text]").forEach(function (el) {
    var value = resolve(el.dataset.text);
    if (value === undefined) {
      console.warn("config.js is missing an entry for:", el.dataset.text);
      return;
    }
    if (value === "") {
      el.style.display = "none";
      return;
    }
    el.textContent = value;
  });

  // Author list: renders SITE_CONFIG.authors into the [data-authors]
  // container. Authors with url: "" are shown as plain text.
  var authorBox = document.querySelector("[data-authors]");
  if (authorBox && Array.isArray(window.SITE_CONFIG.authors)) {
    window.SITE_CONFIG.authors.forEach(function (author, i, list) {
      var block = document.createElement("span");
      block.className = "author-block";
      var nameEl = document.createElement(author.url ? "a" : "span");
      if (author.url) {
        nameEl.href = author.url;
        nameEl.target = "_blank";
        nameEl.rel = "noopener";
      }
      nameEl.textContent = author.name;
      block.appendChild(nameEl);
      if (author.sup) {
        var sup = document.createElement("sup");
        sup.textContent = author.sup;
        block.appendChild(sup);
      }
      if (i < list.length - 1) block.appendChild(document.createTextNode(",  "));
      authorBox.appendChild(block);
    });
  }

  document.querySelectorAll("[data-href]").forEach(function (el) {
    var value = resolve(el.dataset.href);
    if (value === undefined) {
      console.warn("config.js is missing an entry for:", el.dataset.href);
      return;
    }
    if (value === "") {
      el.style.display = "none"; // empty link -> hide the button
      return;
    }
    el.href = value;
  });
});

(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const targets = document.querySelectorAll("[data-ghost-cursor]");
  if (reducedMotion || coarsePointer || targets.length === 0 || !("WebGLRenderingContext" in window)) return;

  const loaderUrl = document.currentScript?.src;
  const bundleUrl = loaderUrl ? new URL("ghost-cursor.js", loaderUrl).href : "./assets/ghost-cursor.js";
  const observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    observer.disconnect();
    const script = document.createElement("script");
    script.src = bundleUrl;
    script.async = true;
    document.head.appendChild(script);
  }, { rootMargin: "240px 0px" });

  targets.forEach((target) => observer.observe(target));
})();

(() => {
  const target = document.querySelector("[data-review-card-stack]");
  if (!target) return;

  const loaderUrl = document.currentScript?.src;
  const bundleUrl = loaderUrl ? new URL("reviews-card-stack.js", loaderUrl).href : "./assets/reviews-card-stack.js";
  const observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    observer.disconnect();
    const script = document.createElement("script");
    script.src = bundleUrl;
    script.async = true;
    document.head.appendChild(script);
  }, { rootMargin: "240px 0px" });

  observer.observe(target);
})();

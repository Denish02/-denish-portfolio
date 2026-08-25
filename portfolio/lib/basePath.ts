// Must mirror the basePath set in next.config.mjs.
// With images.unoptimized: true (required for static export), next/image does
// NOT prepend basePath automatically, so local image src and plain <a href="...">
// links to files in /public both need it prepended manually.
export const basePath =
  process.env.NODE_ENV === "production" ? "/-denish-portfolio" : "";

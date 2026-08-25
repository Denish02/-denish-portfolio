// Must mirror the basePath set in next.config.mjs.
// next/image handles this automatically for <Image>, but plain <a href="...">
// links to files in /public (like the résumé) need it prepended manually.
export const basePath =
  process.env.NODE_ENV === "production" ? "/-denish-portfolio" : "";

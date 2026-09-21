/**
 * Vite turns an imported asset into a URL string. TypeScript does not know
 * that on its own, so each extension the code imports has to be declared.
 */
declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare module "*.webp" {
  const value: string;
  export default value;
}

/* The CV. Imported so the build fingerprints it and it cannot go stale in a
   browser cache after it is replaced. */
declare module "*.pdf" {
  const value: string;
  export default value;
}

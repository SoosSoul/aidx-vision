// src/asset.js
export default function asset(path) {
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path; // leave full URLs alone

  // Remove any leading slash so it works under /aidx-vision/
  const cleanPath = path.replace(/^\/+/, "");

  // Resolve relative to Vite base
  return new URL(cleanPath, import.meta.env.BASE_URL).toString();
}

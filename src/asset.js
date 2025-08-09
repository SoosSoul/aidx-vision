// src/asset.js
export default function asset(path) {
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path; // leave absolute URLs

  const clean = path.replace(/^\/+/, ""); // strip leading slashes
  const base = (import.meta.env.BASE_URL || "/").replace(/\/+$/, ""); // no trailing slash

  return `${base}/${clean}`;
}

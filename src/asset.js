export default function asset(path) {
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path; // full URLs untouched
  const clean = path.replace(/^\/+/, ""); // strip leading slash(es)
  return new URL(clean, import.meta.env.BASE_URL).toString();
}

import { useEffect, useRef } from "react";
export default function ParallaxGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = (e.clientX - w / 2) / w;
      const y = (e.clientY - h / 2) / h;
      el.style.backgroundPosition = `${50 + x * 6}% ${50 + y * 6}%`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 -z-10 opacity-70"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(254,202,202,0.22), transparent 45%), radial-gradient(circle at 80% 30%, rgba(59,130,246,0.14), transparent 40%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "140% 140%",
      }}
    />
  );
}

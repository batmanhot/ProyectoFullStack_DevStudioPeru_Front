// ─────────────────────────────────────────────────────────────
//  src/hooks/useInView.js
//  Hook para detectar cuando un elemento entra al viewport.
//  Dispara la animación de entrada una sola vez.
// ─────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from "react";

/**
 * @param {number} threshold  - fracción visible para disparar (0‒1)
 * @returns {[React.RefObject, boolean]}
 */
export function useInView(threshold = 0.15) {
  const ref     = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // dispara sólo una vez
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

// ─────────────────────────────────────────────────────────────
//  Hook auxiliar: posición de scroll Y
// ─────────────────────────────────────────────────────────────

/**
 * @returns {number} scrollY actual del window
 */
export function useScrollY() {
  const [y, setY] = useState(0);

  useEffect(() => {
    const handle = () => setY(window.scrollY);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return y;
}

import { useEffect, useId, useRef, useState } from "react";
import "./collapse.scss";

export default function Collapse({
  title,
  children,
  defaultOpen = false,
  onToggle,             // optionnel: (isOpen:boolean) => void
  className = ""
  
}) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef(null);
  const id = useId();

  // expose le bon max-height pour une transition fluide
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const setMax = () => {
      // quand ouvert, on met la hauteur scroll pour permettre la transition
      el.style.maxHeight = open ? `${el.scrollHeight}px` : "0px";
    };

    setMax();
    // recalcule si le contenu change de taille (responsive, fonts, etc.)
    const ro = new ResizeObserver(setMax);
    ro.observe(el);
    return () => ro.disconnect();
  }, [open, children]);

  const handleToggle = () => {
    setOpen((o) => {
      const next = !o;
      onToggle?.(next);
      return next;
    });
  };

  return (
    <div className={`collapse ${open ? "is-open" : ""} ${className}`}>
      <button
        className="collapse__header"
        onClick={handleToggle}
        aria-expanded={open}
        aria-controls={`panel-${id}`}
      >
        <span className="collapse__title">{title}</span>
        <svg
          className="collapse__chevron"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          aria-hidden="true"
        >
          <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

      <div
        id={`panel-${id}`}
        ref={contentRef}
        className="collapse__content"
        role="region"
        aria-labelledby={`header-${id}`}
      >
        <div className="collapse__inner">{children}</div>
      </div>
    </div>
  );
}

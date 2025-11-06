// src/components/Collapse/Collapse.jsx
import { useEffect, useId, useRef, useState } from "react";
import "./Collapse.scss";

export default function Collapse({ title, children, defaultOpen = false, className = "" }) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef(null);
  const id = useId();

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.style.maxHeight = open ? `${el.scrollHeight}px` : "0px";
  }, [open, children]);

  return (
    <div className={`collapse ${open ? "is-open" : ""} ${className}`}>
      <button
        id={`collapse-header-${id}`}
        className="collapse__header"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={`collapse-panel-${id}`}
        type="button"
      >
        <span className="collapse__title">{title}</span>
        <svg className="collapse__chevron" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

      <div
        id={`collapse-panel-${id}`}
        ref={contentRef}
        className="collapse__content"
        role="region"
        aria-labelledby={`collapse-header-${id}`}
        style={{ maxHeight: defaultOpen ? "none" : "0px" }}
      >
        <div className="collapse__inner">{children}</div>
      </div>
    </div>
  );
}

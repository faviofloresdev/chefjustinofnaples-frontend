import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoPng from '../../imports/logo.png';

const NAV_ITEMS = ['Home', 'Services', 'About', 'Gallery', 'Blog', 'Testimonials'] as const;

function toPath(item: string) {
  return item === 'Home' ? '/' : `/${item.toLowerCase()}`;
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const toggle = useCallback(() => setMobileOpen((prev) => !prev), []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 py-6 px-6"
        style={{
          backgroundColor: 'rgba(248, 250, 252, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0, 119, 182, 0.1)'
        }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/">
            <img src={logoPng} alt="Chef Justin of Naples" className="h-16" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-12">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item}
                to={toPath(item)}
                className="nav-link-luxury"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link to="/contact" className="hidden md:inline-flex">
            <button className="cta-button px-8 py-3 text-sm shadow-none">Book Now</button>
          </Link>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden relative z-50 flex flex-col items-center justify-center w-11 h-11 rounded-xl"
            onClick={toggle}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            style={{
              background: 'transparent',
              border: '1px solid rgba(0, 119, 182, 0.15)',
            }}
          >
            <span
              className="block rounded-full"
              style={{
                width: '20px',
                height: '2px',
                backgroundColor: 'var(--color-ink)',
                transition: 'transform 300ms ease, opacity 200ms ease',
                transform: mobileOpen
                  ? 'translateY(1px) rotate(45deg)'
                  : 'translateY(-4px) rotate(0deg)',
              }}
            />
            <span
              className="block rounded-full"
              style={{
                width: '20px',
                height: '2px',
                backgroundColor: 'var(--color-ink)',
                transition: 'opacity 200ms ease',
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block rounded-full"
              style={{
                width: '20px',
                height: '2px',
                backgroundColor: 'var(--color-ink)',
                transition: 'transform 300ms ease, opacity 200ms ease',
                transform: mobileOpen
                  ? 'translateY(-1px) rotate(-45deg)'
                  : 'translateY(4px) rotate(0deg)',
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className="md:hidden fixed inset-0 z-40"
        style={{
          backgroundColor: 'rgba(15, 23, 42, 0.4)',
          backdropFilter: 'blur(4px)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transition: 'opacity 300ms ease',
        }}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu drawer */}
      <nav
        className="md:hidden fixed top-0 right-0 z-45 flex flex-col"
        style={{
          width: 'min(85vw, 24rem)',
          height: '100dvh',
          paddingTop: '6.5rem',
          paddingBottom: '2rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          background: 'linear-gradient(180deg, rgba(248, 250, 252, 0.99) 0%, rgba(255, 255, 255, 0.98) 100%)',
          borderLeft: '1px solid rgba(0, 119, 182, 0.1)',
          boxShadow: mobileOpen ? '-16px 0 48px rgba(15, 23, 42, 0.12)' : 'none',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 350ms cubic-bezier(0.16, 1, 0.3, 1)',
          overflowY: 'auto',
          zIndex: 45,
        }}
      >
        <div className="flex flex-col gap-2 flex-1">
          {NAV_ITEMS.map((item, i) => {
            const isActive = location.pathname === toPath(item);
            return (
              <Link
                key={item}
                to={toPath(item)}
                onClick={() => setMobileOpen(false)}
                className="nav-link-luxury"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem 1rem',
                  borderRadius: '0.875rem',
                  fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)',
                  letterSpacing: '0.12em',
                  color: isActive ? 'var(--color-sky)' : 'var(--color-ink)',
                  backgroundColor: isActive ? 'rgba(0, 119, 182, 0.06)' : 'transparent',
                  transition: 'background-color 180ms ease, color 180ms ease',
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? 'translateX(0)' : 'translateX(1.5rem)',
                  transitionDelay: mobileOpen ? `${80 + i * 50}ms` : '0ms',
                  transitionProperty: 'opacity, transform, background-color, color',
                  transitionDuration: '350ms, 350ms, 180ms, 180ms',
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {item}
              </Link>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div
          style={{
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(0, 119, 182, 0.08)',
            marginTop: '1rem',
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? 'translateY(0)' : 'translateY(1rem)',
            transition: 'opacity 350ms ease, transform 350ms ease',
            transitionDelay: mobileOpen ? '380ms' : '0ms',
          }}
        >
          <Link to="/contact" onClick={() => setMobileOpen(false)}>
            <button className="cta-button w-full py-4 text-sm">Book Now</button>
          </Link>
        </div>
      </nav>
    </>
  );
}

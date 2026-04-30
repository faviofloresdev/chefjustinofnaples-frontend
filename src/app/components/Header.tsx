import { Link } from 'react-router-dom';
import logoPng from '../../imports/logo.png';

export function Header() {
  return (
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

        <nav className="hidden md:flex items-center gap-12">
          {['Home', 'Services', 'About', 'Gallery', 'Blog', 'Testimonials'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="nav-link-luxury"
            >
              {item}
            </Link>
          ))}
        </nav>

        <Link to="/contact">
          <button className="cta-button px-8 py-3 text-sm shadow-none">Book Now</button>
        </Link>
      </div>
    </header>
  );
}

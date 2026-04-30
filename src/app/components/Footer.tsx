import { Link } from 'react-router-dom';
import logoPng from '../../imports/logo.png';

export function Footer() {
  return (
    <footer className="border-t py-16 px-6" style={{ borderColor: 'rgba(0, 119, 182, 0.1)' }}>
      <div className="mx-auto max-w-117xl text-center">
        <img
          src={logoPng}
          alt="Chef Justin of Naples"
          className="mx-auto mb-5 h-20 w-auto sm:h-24"
        />
        <p className="footer-meta">Naples, Florida | contact@chefjustinofnaples.com | (239) 555-0100</p>
        <div className="mt-6">
          <Link to="/privacy-policy" className="nav-link-luxury">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

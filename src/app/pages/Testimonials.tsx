import { Link } from 'react-router-dom';
import { GoogleReviewsSection } from '../components/GoogleReviewsSection';

export function Testimonials() {
  return (
    <>
      <section className="hero-panel">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1776993298429-9e68237f433a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Elegant dining"
            className="h-full w-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="hero-content stack-lg">
          <h1 className="type-hero type-hero-light">Testimonials</h1>
          <p className="type-body type-body-light mx-auto max-w-2xl">
            Stories from guests who have experienced exceptional culinary moments.
          </p>
        </div>
      </section>

      <GoogleReviewsSection titleClassName="type-kicker" />

      <section className="page-section page-section-soft">
        <div className="content-shell-medium text-center stack-md">
          <p className="type-quote max-w-4xl mx-auto">
            "Every meal with Chef Justin is not just dinner - it's an experience that lingers in memory long after the last course."
          </p>
          <p className="type-meta text-slate-600">The Naples Review</p>
        </div>
      </section>

      <section className="page-section">
        <div className="content-shell-narrow text-center stack-lg">
          <h2 className="type-display">Create Your Own Story</h2>
          <p className="type-body">Begin your culinary journey with Chef Justin.</p>
          <div>
            <Link to="/contact">
              <button className="cta-button px-16 py-5 text-lg">Book Your Experience</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

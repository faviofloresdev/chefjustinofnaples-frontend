import { Link } from 'react-router-dom';
import { GoogleReviewsSection } from '../components/GoogleReviewsSection';
import { useEffect } from "react";
import gsap from "gsap";

export function Testimonials() {

	useEffect(() => {
	  const ctx = gsap.context(() => {

		const tl = gsap.timeline();

		tl.from(".hero-panel h2", {
		  opacity: 0,
		  y: 20,
		  duration: 0.8
		})
		.from(".hero-panel h1", {
		  opacity: 0,
		  y: 40,
		  duration: 1
		}, "-=0.4")
		.from(".hero-panel p", {
		  opacity: 0,
		  y: 30,
		  duration: 0.8
		}, "-=0.5")
		.to(".cta-button-hero", {
		  opacity: 1,
		  y: 0,
		  duration: 0.6
		}, "-=0.4");

	  });

	  return () => ctx.revert();
	}, []);

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
			<div>
            <Link to="/contact">
              <button className="cta-button-hero px-16 py-5 text-lg">Book Your Experience</button>
            </Link>
          </div>
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

import { Link } from 'react-router-dom';
import { useEffect } from "react";
import gsap from "gsap";

const experienceItems = [
  '20+ Years of Fine Dining Experience',
  'Country Club & Private Luxury Environments',
  'Trained Under 5 Certified Master Chefs',
  'Private Chef & Catering Specialist'
];

const processSteps = [
  {
    number: '1.',
    title: 'Consultation',
    description: 'Understanding your event, preferences, and expectations.'
  },
  {
    number: '2.',
    title: 'Custom Design',
    description: 'Creating a tailored culinary experience built around your vision.'
  },
  {
    number: '3.',
    title: 'Execution',
    description: 'Flawless on-site preparation and service for a seamless experience.'
  }
];

export function About() {

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
            src="https://images.unsplash.com/photo-1662982692115-743f9e716b98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Chef Justin"
            className="h-full w-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="hero-content stack-lg">
          <h2 className="type-kicker type-kicker-light">About Chef Justin</h2>
          <h1 className="type-hero type-hero-light">
            A Culinary Journey Shaped by Precision & Experience
          </h1>
          <p className="type-body type-body-light mx-auto max-w-2xl">
            Private chef based in Naples, offering refined dining experiences inspired by over two
            decades of fine dining excellence.
          </p>
			<div>
            <Link to="/contact">
              <button className="cta-button-hero px-16 py-5 text-lg">Book Your Experience</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="content-shell">
          <div className="service-split">
            <div className="service-split-copy">
              <div className="stack-md">
                <p className="type-kicker type-kicker-dark">Story</p>
                <h2 className="type-display">Built on Craft, Discipline, and Personal Service</h2>
                <p className="type-body">
                  Chef Justin’s culinary journey began with a deep passion for refined dining and a
                  commitment to culinary excellence.
                </p>
                <p className="type-body">
                  Over 20 years of experience have shaped his craft within fine dining
                  environments and prestigious country clubs, where precision, consistency, and
                  elevated service are essential.
                </p>
                <p className="type-body">
                  His training was developed under the mentorship of five certified master chefs,
                  each contributing to his disciplined yet creative culinary approach.
                </p>
                <p className="type-body">
                  This foundation led him to establish his own private chef and catering service,
                  focused on delivering personalized dining experiences tailored to each client’s
                  needs and occasions.
                </p>
                <p className="type-body">
                  Today, Chef Justin specializes in intimate dinners, private events, and curated
                  culinary services that bring fine dining directly into homes, vacation
                  properties, and exclusive gatherings, with seamless execution and attention to
                  detail.
                </p>
              </div>
            </div>
            <div className="service-split-media">
              <img
                src="https://chefjustinofnaples.com/wp-content/uploads/2024/12/cropped-cropped-Resized_20241108_185423_1731284949296-1.jpeg"
                alt="Chef Justin portrait"
                className="service-split-image service-split-image-portrait"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page-section page-section-soft">
        <div className="content-shell stack-xl">
          <div className="mx-auto max-w-3xl text-center stack-sm">
            <h2 className="type-kicker type-kicker-dark">Culinary Experience</h2>
            <h3 className="type-display">Authority Shaped by High-Level Execution</h3>
            <p className="type-body">
              Refined through decades of high-level culinary execution and private service
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {experienceItems.map((item) => (
              <div key={item} className="luxury-card p-8 md:p-10">
                <div className="flex items-start gap-4">
                  <div className="service-include-dot" />
                  <p className="type-body">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="content-shell">
          <div className="service-split service-split-soft">
            <div className="service-split-media">
              <img
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
                alt="Elegant dining table and hospitality"
                className="service-split-image"
              />
            </div>
            <div className="service-split-copy">
              <div className="stack-md">
                <p className="type-kicker type-kicker-warm">Philosophy</p>
                <h2 className="type-display">Precision, Craft & Hospitality</h2>
                <p className="type-body">
                  Chef Justin’s approach is rooted in precision, refined culinary craft, and
                  personalized hospitality.
                </p>
                <p className="type-body">
                  Every experience is designed to be intentional, seamless, and tailored, ensuring
                  a high-end dining experience without complexity or friction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section page-section-soft">
        <div className="content-shell stack-xl">
          <div className="mx-auto max-w-3xl text-center stack-sm">
            <h2 className="type-kicker type-kicker-dark">How It Works</h2>
            <h3 className="type-display">A Seamless Process, Designed Around You</h3>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.number} className="luxury-card luxury-service-card p-8 md:p-9">
                <div className="stack-md">
                  <p className="type-kicker type-kicker-warm">{step.number}</p>
                  <h3 className="luxury-service-title">{step.title}</h3>
                  <p className="type-body-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="content-shell-narrow text-center stack-lg">
          <h2 className="type-display">Let’s Create Your Experience</h2>
          <p className="type-body">
            Every detail matters when crafting a memorable dining moment.
          </p>
          <div>
            <Link to="/contact">
              <button className="cta-button px-16 py-5 text-lg">Request Booking</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { Link } from 'react-router-dom';
import { useEffect } from "react";
import gsap from "gsap";

const experienceTypes = [
  {
    title: 'Boat Dining',
    image:
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
  },
  {
    title: 'Grazing Tables',
    image:
      'https://images.unsplash.com/photo-1555244162-803834f70033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
  },
  {
    title: 'Intimate Dinners',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
  },
  {
    title: 'Luxury Vacation Chef',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
  }
];

const occasions = [
  'Birthdays',
  'Weddings',
  'Anniversaries',
  'Corporate Events',
  'Holiday Gatherings'
];

export function Services() {

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
            src="https://images.unsplash.com/photo-1663530761401-15eefb544889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Chef plating"
            className="h-full w-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="hero-content stack-lg">
          <h2 className="type-kicker type-kicker-light">Our Services</h2>
          <h1 className="type-hero type-hero-light">Elevated Culinary Experiences</h1>
          <p className="type-body type-body-light mx-auto max-w-2xl">
            Signature experiences, curated service, and private chef hospitality designed for your
            moment.
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
          <div className="service-feature service-feature-impact">
            <div className="service-feature-media">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
                alt="Elegant plated private dining course"
                className="service-feature-image"
              />
              <div className="service-feature-overlay" />
            </div>
            <div className="service-feature-panel service-feature-panel-floating">
              <div className="stack-md">
                <p className="type-kicker type-kicker-warm">Signature Experience</p>
                <h2 className="type-display">Private Dining Experience</h2>
                <p className="type-body">
                  Multi-course fine dining crafted live in your home, designed for intimate and
                  elevated moments.
                </p>
                <div className="stack-sm pt-2">
                  {[
                    'Multi-course tasting menu',
                    'In-home chef experience',
                    'Ingredient sourcing',
                    'Full service execution'
                  ].map((item) => (
                    <div key={item} className="service-include-row">
                      <div className="service-include-dot" />
                      <p className="type-body-sm">{item}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <Link to="/contact">
                    <button className="cta-button">Request Experience</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section page-section-soft">
        <div className="content-shell">
          <div className="service-split">
            <div className="service-split-media">
              <img
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
                alt="Private event dining setup"
                className="service-split-image"
              />
            </div>
            <div className="service-split-copy">
              <div className="stack-md">
                <p className="type-kicker type-kicker-dark">Curated Service</p>
                <h2 className="type-display">Private Events & Catering</h2>
                <p className="type-body">
                  Seamless luxury catering for events of all sizes, with refined presentation and
                  flawless execution.
                </p>
                <div className="stack-sm pt-2">
                  {[
                    'Hors dâ€™oeuvres & grazing tables',
                    'Buffets up to 50 guests',
                    'Events up to 100 guests'
                  ].map((item) => (
                    <div key={item} className="service-include-row">
                      <div className="service-include-dot" />
                      <p className="type-body-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="content-shell">
          <div className="service-split service-split-soft">
            <div className="service-split-copy">
              <div className="stack-md">
                <p className="type-kicker type-kicker-warm">Designed For Your Moment</p>
                <h2 className="type-display">Custom Culinary Services</h2>
                <p className="type-body">
                  Flexible culinary solutions tailored to your lifestyle, stays, and business
                  needs.
                </p>
                <div className="stack-sm pt-2">
                  {[
                    'Weekly meal delivery',
                    'Business luncheons',
                    'Vacation rentals',
                    'Boat trips'
                  ].map((item) => (
                    <div key={item} className="service-include-row">
                      <div className="service-include-dot" />
                      <p className="type-body-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="service-split-media">
              <img
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
                alt="Chef preparing food in a relaxed home setting"
                className="service-split-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page-section page-section-soft">
        <div className="content-shell stack-xl">
          <div className="mx-auto max-w-3xl text-center stack-sm">
            <h2 className="type-kicker type-kicker-dark">Experience Types</h2>
            <h3 className="type-display">Built Around the Way You Gather</h3>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {experienceTypes.map((experience) => (
              <article key={experience.title} className="service-photo-card">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="service-photo-card-image"
                />
                <div className="service-photo-card-overlay" />
                <div className="service-photo-card-label">
                  <p className="type-kicker type-kicker-light">Experience Type</p>
                  <h3 className="type-heading text-white">{experience.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="content-shell-medium stack-xl">
          <div className="mx-auto max-w-3xl text-center stack-sm">
            <h2 className="type-kicker type-kicker-dark">Perfect For</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {occasions.map((occasion) => (
              <div key={occasion} className="service-occasion-chip">
                <p className="type-meta">{occasion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section-soft">
        <div className="content-shell-narrow text-center stack-lg">
          <h2 className="type-display">Request Booking</h2>
          <p className="type-body">Letâ€™s create an unforgettable culinary experience together.</p>
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

import { Link } from 'react-router-dom';
import { useEffect } from "react";
import gsap from "gsap";

export function Gallery() {

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

  const galleryImages = [
    'https://images.unsplash.com/photo-1775481132664-53ce2276d0ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1759277513239-3ebfc180f23c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1764598061460-e6abb193a23b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1750943082640-66f9fd0a4608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1759277513209-24111d8f4138?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1750943047277-7d7b263cd97e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1687369595840-e96a912586f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1776993298429-9e68237f433a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  ];

  return (
    <>
      <section className="hero-panel">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1750943082231-0d84cfabc4dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Culinary creation"
            className="h-full w-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="hero-content stack-lg">
          <h2 className="type-kicker type-kicker-light">Gallery</h2>
          <h1 className="type-hero type-hero-light">A Visual Collection of Culinary Experiences</h1>
          <p className="type-body type-body-light mx-auto max-w-2xl">
            A curated selection of private dining, events, and signature moments crafted by Chef Justin..
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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[1.25rem]"
                style={{
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
                  height: index % 5 === 0 ? '500px' : '400px'
                }}
              >
                <img src={image} alt={`Gallery image ${index + 1}`} className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section-soft">
        <div className="content-shell-medium">
          <div className="media-frame">
            <img
              src="https://images.unsplash.com/photo-1624292151210-b870331cbe99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              alt="Featured creation"
              className="h-auto max-h-[700px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="content-shell">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {[
              'https://images.unsplash.com/photo-1680342627018-1cfc75d0597a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
              'https://images.unsplash.com/photo-1680342630889-b475e612a058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
              'https://images.unsplash.com/photo-1761095596635-065d5e13b116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
              'https://images.unsplash.com/photo-1776993298422-3e8c397d0235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
            ].map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[1.25rem]"
                style={{ boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)', height: '550px' }}
              >
                <img src={image} alt={`Gallery detail ${index + 1}`} className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section-soft">
        <div className="content-shell-narrow text-center stack-lg">
          <h2 className="type-display">Book Experience</h2>
          <p className="type-body">Create your own memorable culinary moment.</p>
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

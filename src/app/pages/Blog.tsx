import { Link } from 'react-router-dom';
import { useEffect } from "react";
import gsap from "gsap";

export function Blog() {
		
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
	
  const instagramPosts = [
    {
      image: 'https://images.unsplash.com/photo-1759277513209-24111d8f4138?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      caption: 'Seasonal tasting menu featuring Gulf Coast oysters'
    },
    {
      image: 'https://images.unsplash.com/photo-1750943047277-7d7b263cd97e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      caption: 'Behind the scenes: plating the final course'
    },
    {
      image: 'https://images.unsplash.com/photo-1750943082231-0d84cfabc4dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      caption: 'Fire & sea philosophy in action'
    },
    {
      image: 'https://images.unsplash.com/photo-1776993298422-3e8c397d0235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      caption: "Intimate dining setup for tonight's private event"
    },
    {
      image: 'https://images.unsplash.com/photo-1775481132664-53ce2276d0ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      caption: 'Fresh Gulf seafood, the foundation of coastal cuisine'
    },
    {
      image: 'https://images.unsplash.com/photo-1764598061460-e6abb193a23b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      caption: 'Dessert course: precision and artistry'
    },
    {
      image: 'https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      caption: 'Every detail matters in the culinary experience'
    },
    {
      image: 'https://images.unsplash.com/photo-1687369595840-e96a912586f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      caption: "Finishing touches on tonight's appetizer"
    }
  ];

  const featuredReels = [
    { image: 'https://images.unsplash.com/photo-1624292151210-b870331cbe99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', title: 'Plating Techniques' },
    { image: 'https://images.unsplash.com/photo-1680342627018-1cfc75d0597a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', title: 'Event Highlights' },
    { image: 'https://images.unsplash.com/photo-1761095596635-065d5e13b116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', title: 'Seasonal Ingredients' }
  ];

  return (
    <>
      <section className="hero-panel">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1759277513239-3ebfc180f23c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Culinary content"
            className="h-full w-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="hero-content stack-lg">
          <h1 className="type-hero type-hero-light">The Journey</h1>
          <p className="type-body type-body-light mx-auto max-w-2xl">
            Follow along for behind-the-scenes moments, seasonal inspirations, and culinary creations.
          </p>
		<div>
            <Link to="/contact">
              <button className="cta-button-hero px-16 py-5 text-lg">Book Your Experience</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="content-shell stack-xl">
          <div className="text-center stack-sm">
            <h2 className="type-kicker type-kicker-dark">Featured</h2>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {featuredReels.map((reel) => (
              <div key={reel.title} className="stack-sm text-center">
                <div className="overflow-hidden rounded-[1.25rem]" style={{ boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)', height: '450px' }}>
                  <img src={reel.image} alt={reel.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
                </div>
                <h3 className="type-heading">{reel.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section-soft">
        <div className="content-shell stack-xl">
          <div className="text-center stack-sm">
            <h2 className="type-kicker type-kicker-dark">Follow the Journey</h2>
            <p className="type-body-sm">@chefjustinofnaples</p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {instagramPosts.map((post, index) => (
              <div key={index} className="stack-xs">
                <div className="aspect-square overflow-hidden rounded-xl" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)' }}>
                  <img src={post.image} alt={post.caption} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <p className="type-body-sm opacity-80">{post.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="content-shell-narrow text-center stack-lg">
          <h2 className="type-display">Experience It Yourself</h2>
          <p className="type-body">Book your exclusive culinary experience with Chef Justin.</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://instagram.com/chefjustinofnaples"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-button-outline"
            >
              Follow Instagram
            </a>
            <Link to="/contact">
              <button className="cta-button">Book Experience</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

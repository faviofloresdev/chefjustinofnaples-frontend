import { Link } from 'react-router-dom';
import { GoogleReviewsSection } from '../components/GoogleReviewsSection';

export function Home() {
  return (
    <>
      <section className="hero-panel">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1775498053538-ec293e32b963?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBjaGVmJTIwcG9ydHJhaXQlMjByZXN0YXVyYW50fGVufDF8fHx8MTc3NzQ0MTE3MHww&ixlib=rb-4.1.0&q=80&w=1920"
            alt="Chef Justin"
            className="h-full w-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="hero-content stack-lg">
          <h2 className="type-kicker type-kicker-light">CHEF JUSTIN OF NAPLES</h2>
          <h1 className="type-hero type-hero-light">A Private Dining Experience</h1>
          <p className="type-body-lg type-body-light">Elevated in-home culinary experiences designed for intimate dinners, celebrations, and unforgettable evenings.</p>
          <div>
            <Link to="/contact">
              <button className="cta-button">Book Experience</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="content-shell-narrow text-center stack-sm">
          <h2 className="type-kicker">TRUSTED EXPERIENCE</h2>
          <h3 className="type-heading">Over 20 Years of Culinary Excellence</h3>
          <p className="type-body">
            Chef Justin combines fine dining precision with personalized hospitality for unforgettable private experiences.
          </p>
          <div className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-3">
            {[
              { value: '20+', label: 'Years Experience' },
              { value: 'Refined', label: 'Fine Dining Background' },
              { value: 'Bespoke', label: 'Private Experiences' }
            ].map((metric) => (
              <div
                key={metric.label}
                className="relative flex flex-col gap-2 overflow-hidden rounded-[18px] border border-slate-200 bg-white p-6 text-center"
                style={{ boxShadow: '0 10px 30px rgba(15, 23, 42, 0.04)' }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-sky-600/80" />
                <p className="type-metric-value">{metric.value}</p>
                <p className="type-metric-label">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section-soft">
        <div className="content-shell stack-xl">
          <div className="mx-auto max-w-3xl text-center stack-sm">
            <h2 className="type-kicker type-kicker-dark">Services</h2>
            <h3 className="type-display">Elevated Culinary Experiences</h3>
            <p className="type-body">
              Designed for intimate gatherings, private events, and fully personalized dining moments.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Private Dining Experience',
                emotion: 'Designed for unforgettable evenings',
                description:
                  'An in-home chef experience where every dish is crafted live, tailored to your moment, your taste, and your atmosphere.',
                detail: 'Perfect for intimate dinners and special celebrations.'
              },
              {
                title: 'Private Events & Catering',
                emotion: 'Created for elevated gatherings',
                description:
                  'Luxury catering for private events, designed with precision, timing, and elevated presentation for unforgettable gatherings.',
                detail: 'Weddings, celebrations, corporate dining.'
              },
              {
                title: 'Custom Culinary Design',
                emotion: 'Built entirely around your occasion',
                description:
                  'A fully personalized menu experience built around your preferences, dietary needs, and occasion.',
                detail: 'From concept to execution.'
              }
            ].map((service) => (
              <div key={service.title} className="luxury-card luxury-service-card p-7 md:p-8">
                <div className="stack-md">
                  <div className="stack-sm">
                    <h3 className="luxury-service-title">{service.title}</h3>
                    <p className="luxury-service-emotion">{service.emotion}</p>
                  </div>
                  <p className="type-body-sm">{service.description}</p>
                  <p className="luxury-service-detail">{service.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/contact">
              <button className="cta-button cta-button-outline">Book Your Experience</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="content-shell grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 stack-md lg:order-1">
            <h2 className="type-kicker type-kicker-warm">Our Philosophy</h2>
            <h2 className="type-heading">Fire, Sea & Precision</h2>
            <p className="type-body">
              Chef Justin’s cuisine is built on balance.
              The warmth of fire meets the clarity of the sea, creating dishes that are both bold and refined.
              Every experience is intentional, personal, and designed to elevate the moment — not just the meal.
            </p>
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="stack-xs">
                <div className="h-1 w-16" style={{ backgroundColor: '#E38505' }} />
                <p className="type-kicker type-kicker-warm"></p>
              </div>
              <div className="stack-xs">
                <div className="h-1 w-16" style={{ backgroundColor: '#0077B6' }} />
                <p className="type-kicker"></p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="media-frame">
              <img
                src="https://images.unsplash.com/photo-1750943082640-66f9fd0a4608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjb2FzdGFsJTIwZmluZSUyMGRpbmluZyUyMHNlYWZvb2QlMjBlbGVnYW50fGVufDF8fHx8MTc3NzQ0MTE3MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Chef plating"
                className="h-full max-h-[600px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page-section page-section-soft">
        <div className="content-shell stack-xl">
          <div className="text-center stack-sm">
            <h2 className="type-kicker type-kicker-dark">Recent Creations</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              'https://images.unsplash.com/photo-1775481132664-53ce2276d0ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmaW5lJTIwZGluaW5nJTIwcGxhdGVkJTIwZm9vZHxlbnwxfHx8fDE3Nzc0NDExNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1759277513239-3ebfc180f23c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBmaW5lJTIwZGluaW5nJTIwcGxhdGVkJTIwZm9vZHxlbnwxfHx8fDE3Nzc0NDExNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1764598061460-e6abb193a23b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBmaW5lJTIwZGluaW5nJTIwcGxhdGVkJTIwZm9vZHxlbnwxfHx8fDE3Nzc0NDExNjN8MA&ixlib=rb-4.1.0&q=80&w=1080'
            ].map((src, index) => (
              <div key={index} className="overflow-hidden rounded-[1.25rem]" style={{ boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)' }}>
                <img src={src} alt={`Culinary creation ${index + 1}`} className="h-96 w-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="content-shell-medium text-center stack-lg">
          <div className="stack-sm">
            <h2 className="type-kicker type-kicker-dark">Follow the Journey</h2>
            <p className="type-body-sm">@chefjustinofnaples</p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              'https://images.unsplash.com/photo-1759277513209-24111d8f4138?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
              'https://images.unsplash.com/photo-1750943047277-7d7b263cd97e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
              'https://images.unsplash.com/photo-1750943082231-0d84cfabc4dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
              'https://scontent-mia5-2.cdninstagram.com/v/t51.82787-15/642938522_18008570261844172_1028187759534639131_n.webp?_nc_cat=100&ig_cache_key=MzA1MDc1MTE0ODQ5NTY0MjYwNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=t_JUgsBMWLcQ7kNvwF20v2D&_nc_oc=AdqjSiVf9hhJPRDg0Y_x1Tv0RscEwqenbgzviLFkWuZWbR5Z6GQs2X-YZ0j3ViV8XXU&_nc_ad=z-m&_nc_cid=1087&_nc_zt=23&_nc_ht=scontent-mia5-2.cdninstagram.com&_nc_gid=pQKcVwCv5zppPN8xj4eA8g&_nc_ss=7a22e&oh=00_Af2_hwShxy_sAjIuiNeUBWppFuXeUaWmJHvz_Osi3tC3EQ&oe=69F6052C'
            ].map((src, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-2xl">
                <img src={src} alt={`Instagram post ${index + 1}`} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviewsSection limit={10} layout="carousel" />

      <section className="page-section">
        <div className="content-shell-narrow text-center stack-lg">
          <h2 className="type-display">Begin Your Culinary Journey</h2>
          <p className="type-body">Reserve your exclusive dining experience with Chef Justin.</p>
          <div>
            <Link to="/contact">
              <button className="cta-button px-16 py-5 text-lg">Book Your Experience</button>
            </Link>
          </div>
          <p className="type-body-sm opacity-70">Availability is limited to ensure exceptional quality.</p>
        </div>
      </section>
    </>
  );
}

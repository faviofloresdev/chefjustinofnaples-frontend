export function Contact() {
  return (
    <>
      <section className="hero-panel">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1750943047277-7d7b263cd97e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Chef at work"
            className="h-full w-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="hero-content stack-lg">
          <h1 className="type-hero type-hero-light">Let's Create Together</h1>
          <p className="type-body type-body-light mx-auto max-w-2xl">
            Begin your culinary journey with a personalized consultation.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="content-shell-medium">
          <div className="luxury-form p-8 md:p-16">
            <div className="mx-auto max-w-3xl text-center stack-sm">
              <h2 className="type-kicker type-kicker-dark">Book Your Experience</h2>
            </div>
            <form className="mt-12 space-y-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input type="text" id="firstName" className="form-control" />
                </div>
                <div>
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input type="text" id="lastName" className="form-control" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-control" />
              </div>

              <div>
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="tel" id="phone" className="form-control" />
              </div>

              <div>
                <label htmlFor="service" className="form-label">Service of Interest</label>
                <select id="service" className="form-control">
                  <option>Private Dining</option>
                  <option>Events & Catering</option>
                  <option>Custom Menu Design</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="guests" className="form-label">Number of Guests</label>
                <input type="number" id="guests" className="form-control" />
              </div>

              <div>
                <label htmlFor="date" className="form-label">Preferred Date</label>
                <input type="date" id="date" className="form-control" />
              </div>

              <div>
                <label htmlFor="message" className="form-label">Tell us about your vision</label>
                <textarea
                  id="message"
                  rows={6}
                  className="form-control resize-y"
                  placeholder="Share any dietary preferences, special occasions, or specific requests..."
                />
              </div>

              <div className="pt-4 text-center">
                <button type="submit" className="cta-button px-16 py-5 text-lg">Submit Request</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="page-section page-section-soft">
        <div className="content-shell-medium">
          <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3">
            <div className="stack-sm">
              <p className="type-kicker type-kicker-warm">Phone</p>
              <p className="type-body-sm">(239) 555-0100</p>
            </div>
            <div className="stack-sm">
              <p className="type-kicker">Email</p>
              <p className="type-body-sm">contact@chefjustinofnaples.com</p>
            </div>
            <div className="stack-sm">
              <p className="type-kicker type-kicker-warm">Location</p>
              <p className="type-body-sm">Naples, Florida</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

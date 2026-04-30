import { Link } from 'react-router-dom';

const policySections = [
  {
    title: 'Information We Collect',
    paragraphs: [
      'When you contact Chef Justin of Naples through the website, we may collect personal information you choose to provide, such as your name, email address, phone number, event date, guest count, and details about your requested culinary experience.',
      'We may also collect limited technical information such as browser type, device information, and general site usage data to help us maintain and improve the website experience.'
    ]
  },
  {
    title: 'How We Use Your Information',
    paragraphs: [
      'We use the information you submit to respond to inquiries, prepare proposals, coordinate bookings, and deliver private chef or catering services.',
      'Information may also be used to improve our services, follow up on requests, and communicate important details related to your event or consultation.'
    ]
  },
  {
    title: 'Sharing of Information',
    paragraphs: [
      'We do not sell your personal information. We may share information only when necessary to operate the business, such as with trusted service providers who support scheduling, communication, hosting, or payment-related processes.',
      'Information may also be disclosed if required by law or when necessary to protect our rights, clients, or business operations.'
    ]
  },
  {
    title: 'Data Security',
    paragraphs: [
      'We take reasonable administrative and technical steps to protect the personal information you share with us. However, no online transmission or storage system can be guaranteed to be completely secure.',
      'For that reason, we encourage you not to submit sensitive financial or highly confidential information through general website forms.'
    ]
  },
  {
    title: 'Your Choices',
    paragraphs: [
      'You may contact us at any time to request access to, correction of, or deletion of the personal information you have shared with us, subject to any legal or operational obligations we must retain.',
      'If you no longer wish to receive communications from us, you may ask to be removed from future outreach.'
    ]
  },
  {
    title: 'Cookies and Analytics',
    paragraphs: [
      'This website may use cookies or similar technologies to support core functionality, understand traffic patterns, and improve performance. You can manage cookie preferences through your browser settings.',
      'If third-party analytics or embedded tools are used, they may collect information according to their own privacy practices.'
    ]
  },
  {
    title: 'Policy Updates',
    paragraphs: [
      'We may update this Privacy Policy from time to time to reflect changes in our services, website functionality, or legal requirements. Updates will be posted on this page with a revised effective date.'
    ]
  }
];

export function PrivacyPolicy() {
  return (
    <>
      <section className="hero-panel">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Elegant private dining table"
            className="h-full w-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="hero-content stack-lg">
          <p className="type-kicker type-kicker-light">Effective Date: April 29, 2026</p>
          <h1 className="type-hero type-hero-light">Privacy Policy</h1>
          <p className="type-body type-body-light mx-auto max-w-3xl">
            This policy explains how Chef Justin of Naples collects, uses, and protects information shared through this website.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="content-shell-medium stack-xl">
          <div className="luxury-card p-8 md:p-12">
            <div className="stack-md">
              <h2 className="type-heading">Your Privacy Matters</h2>
              <p className="type-body">
                Chef Justin of Naples is committed to respecting your privacy and handling your personal information with care. By using this site or submitting an inquiry, you agree to the practices described in this Privacy Policy.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {policySections.map((section) => (
              <article key={section.title} className="luxury-card p-8 md:p-10">
                <div className="stack-sm">
                  <h2 className="type-heading">{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="type-body">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section-soft">
        <div className="content-shell-narrow text-center stack-lg">
          <h2 className="type-display">Questions About Privacy?</h2>
          <p className="type-body">
            If you would like to update your information or have any questions about this policy, please contact us directly.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact">
              <button className="cta-button px-12 py-4 text-base">Contact Chef Justin</button>
            </Link>
            <a href="mailto:contact@chefjustinofnaples.com" className="nav-link-luxury">
              contact@chefjustinofnaples.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

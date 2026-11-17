import { useState } from 'react';
import styles from './App.module.css';

const features = [
  {
    title: 'Plan with clarity',
    text: 'Set priorities that everyone can follow.',
    icon: '/Icon_Plan.svg',
  },
  {
    title: 'Keep momentum',
    text: 'See progress without extra meetings.',
    icon: '/Icon_Track.svg',
  },
  {
    title: 'Grow together',
    text: 'Build habits that last beyond launch.',
    icon: '/Icon_Grow.svg',
  },
];

const steps = [
  {
    number: '01',
    title: 'Capture priorities.',
    text: 'Choose the outcomes that matter this week.',
  },
  {
    number: '02',
    title: 'Make progress visible.',
    text: 'Bring tasks and milestones into one clear view.',
  },
  {
    number: '03',
    title: 'Review and refine.',
    text: 'Build a repeatable rhythm for the whole team.',
  },
];

function Header() {
  return (
    <header className={styles.header}>
      <a href="#" aria-label="Meera Works home">
        <img
          src="/Meera_Works_Logo.svg"
          alt="Meera Works"
          className={styles.logo}
        />
      </a>

      <nav className={styles.navigation} aria-label="Main navigation">
        <a href="#features">Why Meera Works</a>
        <a href="#how-it-works">How it works</a>
        <a href="#register">Join the list</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>WORK SMARTER</p>

        <h1>Make room for your best work.</h1>

        <p className={styles.heroDescription}>
          Simple planning tools and thoughtful routines that help busy teams
          move from ideas to momentum.
        </p>

        <div className={styles.heroActions}>
          <a href="#register" className={styles.primaryButton}>
            Get early access
          </a>

          <a href="#register" className={styles.secondaryLink}>
            Free product updates
          </a>
        </div>
      </div>

      <div className={styles.heroImage}>
        <img
          src="/Workspace_Hero.svg"
          alt="Meera Works planning workspace illustration"
        />
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section
      id="features"
      className={styles.features}
      aria-labelledby="features-title"
    >
      <div className={styles.sectionHeading}>
        <h2 id="features-title">
          Everything in one calm workspace
        </h2>

        <p>
          A more intentional way to plan, track and grow together.
        </p>
      </div>

      <div className={styles.featureGrid}>
        {features.map((feature) => (
          <article className={styles.featureCard} key={feature.title}>
            <img src={feature.icon} alt="" />

            <h3>{feature.title}</h3>

            <p>{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className={styles.howItWorks}
      aria-labelledby="steps-title"
    >
      <div className={styles.sectionHeading}>
        <h2 id="steps-title">
          From idea to action in three simple steps
        </h2>
      </div>

      <div className={styles.stepsGrid}>
        {steps.map((step) => (
          <article className={styles.stepCard} key={step.number}>
            <span className={styles.stepNumber}>{step.number}</span>

            <h3>{step.title}</h3>

            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section
      id="register"
      className={styles.registration}
      aria-labelledby="register-title"
    >
      <div className={styles.registrationContent}>
        <h2 id="register-title">Be first to know.</h2>

        <p>Join the launch list for practical updates.</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formField}>
            <label htmlFor="fullName">Full name</label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
              required
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="email">Email address</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              autoComplete="email"
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Join the list
          </button>
        </form>

        <p
          className={styles.successMessage}
          role="status"
          aria-live="polite"
        >
          {submitted
            ? 'Thanks for joining the Meera Works launch list.'
            : ''}
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © 2026 Meera Works · Privacy-first updates · Unsubscribe anytime.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.main}>
        <Hero />
        <FeatureGrid />
        <HowItWorks />
        <RegistrationForm />
      </main>

      <Footer />
    </div>
  );
}
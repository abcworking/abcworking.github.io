import { Link } from "react-router-dom";
import { trackEvent } from "../analytics.js";
import "./Home.css";

const STEPS = [
  {
    number: "01",
    title: "Browse tutors",
    body: "Filter by the subject and grade level your student needs help with.",
  },
  {
    number: "02",
    title: "Check the details",
    body: "See each tutor's rate and weekly availability before you commit.",
  },
  {
    number: "03",
    title: "Book a session",
    body: "Send a quick request with your student's info — we'll confirm by email.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero container">
        <p className="hero-eyebrow">1-on-1 tutoring, K-12</p>
        <h1 className="hero-title">
          Homework help that actually feels like <em>help.</em>
        </h1>
        <p className="hero-body">
          ABC Tutoring connects your student with a vetted, subject-matter
          tutor for one-on-one sessions — in math, science, reading, writing,
          world languages, and computer science. Browse real profiles, compare
          rates and availability, and book a session in a couple of minutes.
        </p>
        <Link
          to="/listings"
          className="btn btn-primary"
          onClick={() => trackEvent("home_view_listings_clicked")}
        >
          View Tutor Listings →
        </Link>
      </section>

      <section className="steps container" aria-label="How it works">
        {STEPS.map((step) => (
          <div className="step-card" key={step.number}>
            <span className="step-number">{step.number}</span>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-body">{step.body}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

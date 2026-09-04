import { useState } from "react";
import { TUTORS } from "../data/tutors.js";
import { trackEvent } from "../analytics.js";
import TutorCard from "../components/TutorCard.jsx";
import BookingModal from "../components/BookingModal.jsx";
import "./Listings.css";

export default function Listings() {
  const [bookingTutor, setBookingTutor] = useState(null);

  function openBooking(tutor) {
    trackEvent("tutor_booking_opened", {
      tutor_id: tutor.id,
      tutor_name: tutor.name,
    });
    setBookingTutor(tutor);
  }

  return (
    <main className="container listings-page">
      <header className="listings-header">
        <h1>Our Tutors</h1>
        <p>
          Every tutor below is available for one-on-one sessions. Pick one
          that fits your student's subject, grade level, and schedule, then
          hit Book.
        </p>
      </header>

      <ul className="tutor-list">
        {TUTORS.map((tutor) => (
          <TutorCard key={tutor.id} tutor={tutor} onBook={openBooking} />
        ))}
      </ul>

      {bookingTutor && (
        <BookingModal
          tutor={bookingTutor}
          onClose={() => setBookingTutor(null)}
        />
      )}
    </main>
  );
}

import { useEffect, useRef, useState } from "react";
import { saveBooking } from "../data/bookings.js";
import { identifyParent, trackEvent } from "../analytics.js";
import "./BookingModal.css";

const initialForm = {
  parentName: "",
  parentEmail: "",
  studentFirstName: "",
  subject: "",
};

export default function BookingModal({ tutor, onClose }) {
  const [form, setForm] = useState({
    ...initialForm,
    subject: tutor.subjects[0],
  });
  const [status, setStatus] = useState("idle"); // idle | done
  const [confirmation, setConfirmation] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    dialogRef.current?.focus();
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const record = saveBooking({
      tutorId: tutor.id,
      tutorName: tutor.name,
      parentName: form.parentName.trim(),
      parentEmail: form.parentEmail.trim(),
      studentFirstName: form.studentFirstName.trim(),
      subject: form.subject,
    });

    identifyParent(record.parentEmail, { name: record.parentName });
    trackEvent("tutor_booking_submitted", {
      tutor_id: tutor.id,
      tutor_name: tutor.name,
      subject: record.subject,
      grade_levels: tutor.gradeLevels,
    });

    setConfirmation(record);
    setStatus("done");
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        tabIndex={-1}
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        {status === "done" ? (
          <div className="modal-confirmation">
            <span className="confirmation-badge">✓</span>
            <h2 id="booking-title">You're booked!</h2>
            <p>
              We've noted a request for <strong>{confirmation.tutorName}</strong>{" "}
              to help {confirmation.studentFirstName} with{" "}
              {confirmation.subject}. This is a prototype, so nothing was sent
              anywhere — the request is saved in this browser only.
            </p>
            <button className="btn btn-primary" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            <h2 id="booking-title">Book {tutor.name}</h2>
            <p className="modal-subtitle">
              ${tutor.hourlyRate}/hr &middot; {tutor.availability}
            </p>

            <form onSubmit={handleSubmit} className="booking-form">
              <label className="form-field">
                <span>Parent's name</span>
                <input
                  type="text"
                  required
                  value={form.parentName}
                  onChange={(e) => updateField("parentName", e.target.value)}
                  placeholder="Jamie Rivera"
                />
              </label>

              <label className="form-field">
                <span>Email</span>
                <input
                  type="email"
                  required
                  value={form.parentEmail}
                  onChange={(e) => updateField("parentEmail", e.target.value)}
                  placeholder="jamie@example.com"
                />
              </label>

              <label className="form-field">
                <span>Student's first name</span>
                <input
                  type="text"
                  required
                  value={form.studentFirstName}
                  onChange={(e) =>
                    updateField("studentFirstName", e.target.value)
                  }
                  placeholder="Alex"
                />
              </label>

              <label className="form-field">
                <span>Requested subject</span>
                <select
                  required
                  value={form.subject}
                  onChange={(e) => updateField("subject", e.target.value)}
                >
                  {tutor.subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </label>

              <button type="submit" className="btn btn-primary modal-submit">
                Confirm Booking
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

import "./TutorCard.css";

const TAG_COLORS = ["var(--sky)", "var(--leaf)", "var(--plum)", "var(--sun)"];

export default function TutorCard({ tutor, onBook }) {
  return (
    <li className="tutor-card">
      <img
        className="tutor-photo"
        src={tutor.photoUrl}
        alt={`Portrait of ${tutor.name}`}
        width="88"
        height="88"
      />

      <div className="tutor-info">
        <h2 className="tutor-name">{tutor.name}</h2>

        <ul className="tutor-subjects" aria-label="Subjects taught">
          {tutor.subjects.map((subject, i) => (
            <li
              key={subject}
              className="subject-pill"
              style={{ "--pill-color": TAG_COLORS[i % TAG_COLORS.length] }}
            >
              {subject}
            </li>
          ))}
        </ul>

        <dl className="tutor-meta">
          <div className="meta-item">
            <dt>Grades</dt>
            <dd>{tutor.gradeLevels}</dd>
          </div>
          <div className="meta-item">
            <dt>Rate</dt>
            <dd>${tutor.hourlyRate}/hr</dd>
          </div>
          <div className="meta-item">
            <dt>Availability</dt>
            <dd>{tutor.availability}</dd>
          </div>
        </dl>
      </div>

      <button className="btn btn-book" onClick={() => onBook(tutor)}>
        Book
      </button>
    </li>
  );
}

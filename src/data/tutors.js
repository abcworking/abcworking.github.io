function avatarUrl(name, background) {
  const initialsName = name.replace(/ /g, "+");
  return (
    "https://ui-avatars.com/api/" +
    `?name=${initialsName}&background=${background}&color=ffffff` +
    "&size=256&font-size=0.38&bold=true"
  );
}

export const TUTORS = [
  {
    id: 1,
    name: "Maria Chen",
    photoUrl: avatarUrl("Maria Chen", "3AAED8"),
    subjects: ["Algebra I & II", "Geometry", "SAT Math"],
    gradeLevels: "Grades 6-12",
    hourlyRate: 45,
    availability: "Mon & Wed 4-7pm, Sat 10am-1pm",
  },
  {
    id: 2,
    name: "Jordan Reyes",
    photoUrl: avatarUrl("Jordan Reyes", "4CAF7D"),
    subjects: ["Biology", "Chemistry", "AP Environmental Science"],
    gradeLevels: "Grades 9-12",
    hourlyRate: 55,
    availability: "Tue & Thu 3-6pm",
  },
  {
    id: 3,
    name: "Aisha Patel",
    photoUrl: avatarUrl("Aisha Patel", "9163CB"),
    subjects: ["English Composition", "Essay Writing", "AP Literature"],
    gradeLevels: "Grades 7-12",
    hourlyRate: 40,
    availability: "Mon-Fri 5-8pm",
  },
  {
    id: 4,
    name: "Sam O'Brien",
    photoUrl: avatarUrl("Sam OBrien", "FF6F5E"),
    subjects: ["Elementary Reading", "Phonics", "Basic Math"],
    gradeLevels: "Grades K-5",
    hourlyRate: 30,
    availability: "Weekdays 3-5pm",
  },
  {
    id: 5,
    name: "Diego Fernandez",
    photoUrl: avatarUrl("Diego Fernandez", "FFC145"),
    subjects: ["Spanish I-IV", "Conversational Spanish"],
    gradeLevels: "Grades 6-12",
    hourlyRate: 38,
    availability: "Tue, Thu & Sat mornings",
  },
  {
    id: 6,
    name: "Grace Kim",
    photoUrl: avatarUrl("Grace Kim", "3AAED8"),
    subjects: ["Computer Science", "AP CS A", "Python"],
    gradeLevels: "Grades 8-12",
    hourlyRate: 60,
    availability: "Wed & Fri 4-7pm, Sun 1-4pm",
  },
];

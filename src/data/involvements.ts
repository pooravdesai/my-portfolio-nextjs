export interface Involvement {
  id: string;
  title: string;
  description: string;
  imagePath: string;
}

const involvements: Involvement[] = [
  {
    id: "bvcil-volunteer",
    title: "Community Volunteer Leader at BVCIL",
    description:
      "Led a 5-person volunteer team to organize an art and craft event for individuals with special needs, fostering creativity and community engagement",
    imagePath: "/leadership/bvcil-volunteer.jpeg",
  },
  {
    id: "cmis-sab",
    title: "CMIS Student Advisory Board Member, Texas A&M University",
    description:
      "Represented student interests with faculty leadership, contributed program feedback, and supported academic initiatives including the CMIS AI Conference",
    imagePath: "/leadership/cmis-sab.png",
  },
  {
    id: "tamu-running",
    title: "TAMU Running Club Member",
    description:
      "Actively participated in and marketed running events to build community and promote fitness awareness across campus",
    imagePath: "/leadership/tamu-running.jpg",
  },
  {
    id: "teaching-assistant",
    title: "Graduate Teaching Assistant, Texas A&M University",
    description:
      "Mentored students and graded assignments for Advanced Data Management and Network & Cloud Infrastructure courses",
    imagePath: "/leadership/teaching-assistant.png",
  },
  {
    id: "aggieland-humane",
    title: "Aggieland Humane Society Volunteer",
    description:
      "Volunteered for care activities and dog walking, contributing to animal welfare and community support",
    imagePath: "/leadership/aggieland-humane.png",
  },
];

export default involvements;

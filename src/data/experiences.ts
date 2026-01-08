import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Technology Modernization Intern",
    company: "Kaspar Companies Inc.",
    startDate: "May 2025",
    endDate: "Jul 2025",
    isCurrentJob: false,
    location: "Shiner, TX",
    description: [
      "Saved ~40 hours of manual work per month by designing and deploying automation solutions for Finance team, including a digital credit application processing system.",
      "Built automation using Python Flask, Celery, Redis, MSSQL, and Azure Dockerized deployment.",
      "Collaborated with Finance and IT teams to observe workflows, capture pain points, identify inefficiencies, and align stakeholder expectations.",
    ],
  },
  {
    designation: "Software Engineer",
    company: "Oracle Cloud Infrastructure",
    startDate: "Jul 2021",
    endDate: "Aug 2024",
    isCurrentJob: false,
    location: "Bengaluru, India",
    description: [
      "Reduced operational costs by ~30% by designing and implementing a failure-attribution feature enabling faster root-cause analysis across OCI's global deployment automation platform (Shepherd) in ~80 regions.",
      "Built and operated production microservices using Java (Dropwizard) and Oracle DB, deployed via Docker and Terraform.",
      "Improved platform resiliency by enabling runtime switching of dependency service stacks, preventing cascading failures and avoiding downtime.",
      "Delivered actionable performance insights to leadership by analyzing metrics dashboards and identifying systemic incidents impacting availability and latency.",
    ],
  },
  {
    designation: "Artificial Intelligence Intern",
    company: "Meditab Software India Pvt. Ltd.",
    startDate: "Jul 2018",
    endDate: "Oct 2018",
    isCurrentJob: false,
    location: "Gujarat, India",
    description: [
      "Developed end-to-end Automatic License Plate Recognition (ALPR) system for parking management and traffic estimation using Python and TensorFlow.",
      "Conducted literature review on deep learning-based object detection and segmentation techniques.",
      "Implemented preprocessing, training, and evaluation pipelines using OpenCV, Pandas, and NumPy.",
    ],
  },
];

export default experiences;

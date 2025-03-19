const experiences = [
    {
      title: "Research Intern",
      company: "NCSU-College of Agriculture and Life Sciences",
      location: "Raleigh, NC",
      duration: "May 2020",
      details: [
        "Engineered an interactive dashboard using Python, Streamlit, and Folium that enhanced yield predictions and optimized planting dates by 15% in soybean production.",
        "The dashboard is currently helping over 100 farmers across North Carolina make data-driven decisions, enhancing productivity and managing resources more efficiently."
      ]
    },
    {
      title: "Graduate Student Researcher",
      company: "NCSU-Active Robotic Sensing Lab",
      location: "Raleigh, NC",
      duration: "Apr 2024 – Dec 2024",
      details: [
        "Architected Generative AI models in PyTorch for anomaly detection in Blueberry crops, elevating accuracy by 20%.",
        "Leveraged High-Performance Computing (HPC) to accelerate model training by 30%. Utilized Git for version control, collaborating with a team of 5 researchers on codebase management, ensuring smooth integration and deployment of research components."
      ]
    },
    {
      title: "Senior Systems Engineer",
      company: "Infosys Limited",
      location: "Pune, India",
      duration: "Nov 2020 – May 2023",
      details: [
        "Optimized backend systems using Java, Spring Boot, and SQL, reducing server response time by 30%.",
        "Designed and implemented microservices and REST APIs, boosting performance by 23% through multithreading.",
        "Orchestrated microservices deployment on AWS, integrating Kafka for real-time data streaming and establishing CI/CD pipelines.",
        "Developed dynamic front-end applications with Angular and Node.js, enhancing UI readability by 25%.",
        "Spearheaded Agile development initiatives, accelerating bi-weekly service deployments."
      ]
    }
  ];
  
  function ExperienceCard({ experience }) {
    return (
      <div className="p-4 border rounded-lg shadow w-full mb-4">
        <h3 className="text-lg font-bold">{experience.title}</h3>
        <p>{experience.company} - {experience.location}</p>
        <p className="text-sm">{experience.duration}</p>
        <ul className="list-disc pl-5 mt-2 text-sm">
          {experience.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  function Experience() {
    return (
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Work Experience</h1>
        <div className="flex flex-col gap-4">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    );
  }
  
  export default Experience;
  
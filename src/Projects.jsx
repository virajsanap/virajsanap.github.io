import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const projectSections = [
  {
    title: "Personal/ Coursework Projects",
    list: [
      { title: "Youtube EDA", type: "[analytics]", description: "Exploratory data analysis on YouTube video trends and metadata.", link: "https://github.com/virajsanap/R-Shiny-Dashboard" },
      { title: "AI Image Classifier", type: "[ml]", description: "Built an AI model for image classification using deep learning." },
      { title: "MedQuad LLM", type: "[nlp]", description: "Developed a medical question-answering system using LLMs on the MedQuAD dataset." },
      { title: "GitHub Miner", type: "[swe]", description: "Designed a tool to extract and analyze GitHub repository data for insights." },
      { title: "WolfEvents", type: "[swe]", description: "Developed an event management platform for university students." },
      { title: "Training MLP and CNN on CIFAR10", type: "[cv]", description: "Implemented MLP and CNN models for image classification on CIFAR-10 dataset." },
      { title: "Vision Transformer", type: "[cv]", description: "Explored Vision Transformers for image classification and feature extraction." },
      { title: "Self Supervised Learning", type: "[cv]", description: "Applied self-supervised learning techniques for representation learning in computer vision." },
      { title: "Convolution", type: "[dis]", description: "Studied convolution operations and their impact on image processing." },
      { title: "Edge Detection", type: "[dis]", description: "Implemented edge detection algorithms for feature extraction in images." },
      { title: "Fraud Detection using RAG, LLM", type: "[nlp]", description: "Developed a fraud detection system leveraging Retrieval-Augmented Generation and LLMs." }
    ]
  },
  {
    title: "RA Work",
    list: [
      { title: "Blueberry Anomaly Detection", type: "[ra]", description: "Detecting anomalies in blueberry datasets using deep learning models." },
      { title: "Soybean Dashboard", type: "[ra]", description: "Developed a dashboard for monitoring and analyzing soybean crop data." }
    ]
  }
];

function Section({ section, selectedType }) {
  const { title, list } = section;
  const filteredList = selectedType === 'all' ? list : list.filter(item => item.type === selectedType);

  if (filteredList.length === 0) return null;

  return (
    <>
      <h2 className="text-xl font-bold mt-2 mb-3">{title}</h2>
      <div className="flex flex-col gap-2">
        {filteredList.map((item, index) => (
          <div key={index} className="relative flex flex-row items-center p-3 border shadow w-full">
            <a href={item.link} className="absolute top-4 right-5  text-sm flex items-center gap-1"><FaGithub/>
            <span className="text-sm text-blue-600">Github</span>
            </a>
            <div className="flex flex-col">
              <strong>{item.title}</strong>
              <p className="text-sm text-orange-600">{item.type}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Projects() {
  const [selectedType, setSelectedType] = useState('all');
  const allTypes = ['all', ...new Set(projectSections.flatMap(section => section.list.map(item => item.type)))];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Projects</h1>
      <div className="flex flex-row gap-2 mt-4 mb-4">
        
        {allTypes.map(type => (
          <button
          key={type}
          onClick={() => setSelectedType(type)}
          className={`px-1 py-1 ${
            selectedType === type ? "bg-black text-white" : "bg-orange-400 hover:bg-orange-300"
          }`}
        >
          {type}
        </button>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {projectSections.map((section, index) => (
          <Section key={index} section={section} selectedType={selectedType} />
          
        ))}
      </div>
    </div>
  );
}

export default Projects;

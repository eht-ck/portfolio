// ProjectsComponent.js

import React from 'react';
const ProjectCard = ({ title, techStack, date, description }) => {
  return (
    <div className=" hidden md:w-1/3 p-4 mb-4 mt-4 mr-1 ml-1 rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white hover:shadow-xl transition duration-300 border border-purple-600">
      <h2 className="text-xl font-bold m-2">{title}</h2>
      <p className="text-gray-200">{techStack}</p>
      <p className="text-gray-200">{date}</p>
      <p className="mt-4 text-gray-200">{description}</p>
    </div>
  );
};

const ProjectsComponent = () => {
  return (
    <div className="flex">
      <ProjectCard
        title="National Cadet Corps (NCC) - NITJ Website"
        techStack="Tech Stack: ReactJS, Express.JS, MongoDB, Firebase"
        date="Oct 2023 - Present"
        description="Designed and implemented the NITJ NCC website, integrating dynamic functionalities such as student enrollment and alumni connectivity. Led a 3-member team to successful project completion. Designed and implemented an intuitive admin dashboard, streamlining CRUD operations for announcements and events."
      />

      <ProjectCard
        title="Sale Snoopers"
        techStack="Tech Stack: Next.js 13, TailwindCSS, MongoDB"
        date="Sep 2023"
        description="Developed a dynamic website to keep track of product prices on Amazon by scraping the link. Implemented email notifications for price drops and a cron-service for accuracy and timely alerts. Used libraries/utilities: BrightData, NodeMailer, cheerio."
      />

      <ProjectCard
        title="PDF Coalesce"
        techStack="Tech Stack: Java, Swing"
        date="March 2023"
        description="Created a versatile PDF coalesce tool with robust functionalities, including PDF merging, splitting, extraction, viewing, and compression. Implemented the project using Java, AWT, Swing, iTextPDF, and Apache PDFBox libraries, harnessing their capabilities to deliver seamless PDF."
      />
    </div>
  );
};

export default ProjectsComponent;

import React from 'react';

const ProjectCard = ({ title, techStack, date, description }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
      <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white hover:shadow-2xl transition duration-300 border border-purple-600">
        <h2 className="text-xl font-bold mb-3">{title}</h2>
        <p className="text-gray-200 text-sm mb-1">{techStack}</p>
        <p className="text-gray-300 text-sm mb-3 italic">{date}</p>
        <p className="text-gray-100 text-sm">{description}</p>
      </div>
    </div>
  );
};

const ProjectsComponent = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-12">My Projects</h1>
      <div className="flex flex-wrap -mx-4 justify-center">
        <ProjectCard
          title="Tea Treats"
          techStack="Java Spring Boot, Stripe, ReactJS, Bootstrap, JUnit, MongoDB, MySQL"
          date="Feb 2025"
          description="Developed a full-stack e-commerce platform to sell tea and gift accessories. Integrated Stripe payment gateway for secure transactions. Implemented robust backend services using Spring Boot and JUnit for testing, with a responsive frontend built using ReactJS and Bootstrap."
        />
        <ProjectCard
          title="National Cadet Corps (NCC) - NITJ Website"
          techStack="ReactJS, Express.JS, MongoDB, Firebase"
          date="Oct 2023 - Present"
          description="Designed and implemented the NITJ NCC website, integrating dynamic functionalities such as student enrollment and alumni connectivity. Led a 3-member team to successful project completion. Designed and implemented an intuitive admin dashboard, streamlining CRUD operations for announcements and events."
        />
        <ProjectCard
          title="Sale Snoopers"
          techStack="Next.js 13, TailwindCSS, MongoDB"
          date="Sep 2023"
          description="Developed a dynamic website to keep track of product prices on Amazon by scraping the link. Implemented email notifications for price drops and a cron-service for accuracy and timely alerts. Used libraries/utilities: BrightData, NodeMailer, cheerio."
        />
        <ProjectCard
          title="PDF Coalesce"
          techStack="Java, Swing"
          date="March 2023"
          description="Created a versatile PDF coalesce tool with robust functionalities, including PDF merging, splitting, extraction, viewing, and compression. Implemented the project using Java, AWT, Swing, iTextPDF, and Apache PDFBox libraries, harnessing their capabilities to deliver seamless PDF."
        />
      </div>
    </div>
  );
};

export default ProjectsComponent;

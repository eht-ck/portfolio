import React from "react";

const TechStack = () => {
  return (
    <div>
      <h1 className="text-4xl flex justify-center items-center h-full font-bold mb-4">
        TECH STACK
      </h1>

      <div className="flex justify-center items-center h-full">
        <div className="p-4 border border-gray-300 hover:border-[#915EFF] rounded-lg">
          <div className="flex mb-4 text-xl mr-2">
            <h2 className="font-bold text-[#915EFF]">Frontend:</h2>
            <span>ReactJS, Next.js</span>
          </div>

          <div className="flex mb-4 text-xl mr-2">
            <h2 className="font-bold text-[#915EFF]">Backend:</h2>
            <span>Nest.js, Express.js, Django</span>
          </div>

          <div className="flex mb-4 text-xl mr-2">
            <h2 className="font-bold text-[#915EFF]">Styling:</h2>
            <span>Tailwind CSS</span>
          </div>

          <div className="flex mb-4 text-xl mr-2">
            <h2 className="font-bold text-[#915EFF]">Database:</h2>
            <span>SQL, PostgreSQL, MongoDB</span>
          </div>

          <div className="flex mb-4 text-xl mr-2">
            <h2 className="font-bold text-[#915EFF]">Programming Languages:</h2>
            <span>Python, C, C++, Java, R</span>
          </div>

          <div className="flex mb-4 text-xl mr-2">
            <h2 className="font-bold text-[#915EFF]">Other Technologies:</h2>
            <span>Docker, Kubernetes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

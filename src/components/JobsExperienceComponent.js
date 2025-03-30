import React from 'react';

const JobsTimelineComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <ol className="relative border-s border-gray-200  w-full max-w-4xl">
        <li className="ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-[#915EFF]">Fastenal India</h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Jan 2025 – Present | Bangalore, IN
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Tech Stack: ReactJS, Spring Boot, Bootstrap, MongoDB, MySQL
          </p>

        </li>
        {/* Writesonic */}
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-[#915EFF]">
            <a
              href="https://www.writesonic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-500 transition-colors duration-200"
            >
              Writesonic (YC S21) - Backed by Y Combinator
            </a>
            {/* Writesonic (YC S21) - Backed by Y Combinator */}
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Feb 2024 – Nov 2024 | Remote, IN
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Tech Stack: Next.JS, TypeScript, FastAPI, PostgreSQL, MongoDB, Azure Blob Storage
          </p>
          <h4 className="text-base font-bold text-gray-800 dark:text-white">Botsonic</h4>
          <ul className="list-disc pl-6 text-gray-500 dark:text-gray-400 text-justify mb-4">
            <li>
              Reduced new bot creation downtime by implementing a 2000-buffer Weaviate tenant system using cron jobs.
            </li>
            <li>
              Spearheaded migration from AWS to Azure, ensuring robust reliability.
            </li>
            <li>
              Resolved critical issues with Inbox search, chat sorting, and error handling.
            </li>
            <li>
              Conducted POC evaluations for vector database alternatives like Elastic Search.
            </li>
          </ul>
          <h4 className="text-base font-bold text-gray-800 dark:text-white">TLDRthis</h4>
          <ul className="list-disc pl-6 text-gray-500 dark:text-gray-400 text-justify mb-4">
            <li>
              Migrated vector data store from Weaviate to RedisVector, enhancing scalability.
            </li>
            <li>
              Served as SME for project and customer issues.
            </li>
          </ul>
          <h4 className="text-base font-bold text-gray-800 dark:text-white">Chatsonic</h4>
          <ul className="list-disc pl-6 text-gray-500 dark:text-gray-400 text-justify">
            <li>
              Enhanced file attachment capabilities, improving vectorization tasks.
            </li>
            <li>
              Developed robust error handling with Sentry-based logging.
            </li>
          </ul>
        </li>

        {/* Byteoski Developers */}
        <li className="ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-[#915EFF]">Byteoski Developers</h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            May 2023 – Aug 2023 | Remote, IN
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Tech Stack: Nest.JS, Next.JS, TypeScript, PostgreSQL
          </p>
          <ul className="list-disc pl-6 text-gray-500 dark:text-gray-400 text-justify">
            <li>
              Designed and implemented a robust extraction backend using NestJS and fastify adaptors.
            </li>
            <li>
              Contributed to scalable database architecture and implemented JWT authentication.
            </li>
            <li>
              Integrated Stripe API for subscription-based payments.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default JobsTimelineComponent;

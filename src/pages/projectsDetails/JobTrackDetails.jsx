import React from "react";

const JobTrackDetails = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-primary">
        JobTrack - Job Listing App
      </h1>

      {/* Description */}
      <p className="text-base-content leading-relaxed">
        <strong>JobTrack</strong> is a job listing platform designed for job
        seekers to easily browse and filter job opportunities. The app provides
        category-based filtering, detailed job view with application options,
        and authentication to ensure a personalized experience. The interface
        focuses on simplicity and clarity to help mid-level job hunters find
        roles quickly.
      </p>

      {/* Features */}
      <div>
        <h2 className="text-xl font-semibold mb-2 text-secondary">Key Features</h2>
        <ul className="list-disc list-inside text-base-content space-y-1">
          <li>Filter jobs by category</li>
          <li>Job details modal with Apply button</li>
          <li>Login/Register using Firebase authentication</li>
          <li>Responsive UI with TailwindCSS + DaisyUI</li>
          <li>Local data-based listing for demo purpose</li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div>
        <h2 className="text-xl font-semibold mb-2 text-secondary">Tech Stack</h2>
        <ul className="list-disc list-inside text-base-content space-y-1">
          <li>React.js</li>
          <li>React Router</li>
          <li>Firebase Authentication</li>
          <li>TailwindCSS + DaisyUI</li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <a
          href="https://job-tracker-by-partho1.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline btn-primary"
        >
          Live
        </a>
        <a
          href="https://github.com/Sutradhar2071/job-track"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline btn-secondary"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default JobTrackDetails;

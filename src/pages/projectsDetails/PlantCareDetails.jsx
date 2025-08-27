import React from "react";

const PlantCareDetails = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-primary">Plant Care Tracker</h1>

      {/* Description */}
      <p className="text-base-content leading-relaxed">
        <strong>Plant Care Tracker</strong> is a plant management application
        that allows users to keep track of their plants by adding, updating, and
        deleting entries. Users can organize plants with sorting options, set
        reminders, and manage their personal "My Plants" collection. The app
        supports authentication and protected routes for secure data handling,
        ensuring each user has their own plant database.
      </p>

      {/* Features */}
      <div>
        <h2 className="text-xl font-semibold mb-2 text-secondary">Key Features</h2>
        <ul className="list-disc list-inside text-base-content space-y-1">
          <li>Add, update, and delete plants</li>
          <li>User-specific "My Plants" page</li>
          <li>Sorting plants by latest/oldest</li>
          <li>Dark/Light mode support</li>
          <li>Date formatting with Date-fns</li>
          <li>Firebase Auth + Protected Routes</li>
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
          <li>Date-fns</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB Database</li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <a
          href="https://plant-care-app-92575.web.app/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline btn-primary"
        >
          Live
        </a>
        <a
          href="https://github.com/Sutradhar2071/plant-client"
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

export default PlantCareDetails;

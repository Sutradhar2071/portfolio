import React from "react";

const WhereIsItDetails = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-primary">WhereIsIt - Lost & Found</h1>

      {/* Description */}
      <p className="text-base-content leading-relaxed">
        <strong>WhereIsIt</strong> is a full-stack MERN application designed to
        help communities manage lost and found items. Users can create posts for
        lost or found belongings, update their status, and search or filter
        through existing posts. With secure authentication and full CRUD
        operations, it ensures a reliable and user-friendly experience for
        individuals trying to recover lost items.
      </p>

      {/* Features */}
      <div>
        <h2 className="text-xl font-semibold mb-2 text-secondary">Key Features</h2>
        <ul className="list-disc list-inside text-base-content space-y-1">
          <li>JWT Authentication with Firebase</li>
          <li>Post and manage Lost/Found items</li>
          <li>Update or delete own posts</li>
          <li>Status updates: Found / Resolved</li>
          <li>Search & sort items easily</li>
          <li>Dark/Light mode support</li>
          <li>Responsive UI with animations</li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div>
        <h2 className="text-xl font-semibold mb-2 text-secondary">Tech Stack</h2>
        <ul className="list-disc list-inside text-base-content space-y-1">
          <li>React.js</li>
          <li>Node.js + Express.js</li>
          <li>MongoDB Database</li>
          <li>JWT + Firebase Authentication</li>
          <li>TailwindCSS + DaisyUI</li>
          <li>Framer Motion</li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <a
          href="https://regal-speculoos-67aec5.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline btn-primary"
        >
          Live
        </a>
        <a
          href="https://github.com/Sutradhar2071/whereisit-client"
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

export default WhereIsItDetails;

import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      {/* header */}
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">User Dashboard</h1>
      </header>

      {/* content */}
      {children}

      {/* footer */}
      <footer className="bg-gray-800 text-white p-4 mt-4">
        <p className="text-center">© 2023 Your Company</p>
      </footer>
    </div>
  );
};

export default layout;

// App.js

import React from "react";
import Users from "./components/Users";
import Views from "./components/Views";

const App = () => {
  return (
    <div className="bg-gray-100 h-screen font-roboto">
      <div className="flex flex-col gap-10 py-20">
        <Users />
        <Views />
      </div>
    </div>
  );
};

export default App;

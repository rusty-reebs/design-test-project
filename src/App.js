// App.js

import React, { useState } from "react";
import Users from "./components/Users";
import Views from "./components/Views";
import fetchedData from "./data/data";

const App = () => {
  const [data, setData] = useState(fetchedData);

  return (
    <div className="bg-gray-100 h-screen font-roboto">
      <div className="flex flex-col gap-10 py-20 w-[38rem] mx-auto">
        <Users data={data.users} />
        <Views data={data.views} />
      </div>
    </div>
  );
};

export default App;

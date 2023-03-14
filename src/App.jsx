import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Svg from "./components/Svg/Svg";
import { useState } from "react";

function App() {
  const [darkMode, setDarkmode] = useState({
    isOn: false,
  });

  function handleChange() {
    setDarkmode((prevState) => ({
      ...prevState,
      isOn: !prevState.isOn,
    }));
  }

  return (
    <div className="">
      {/* <Card /> */}
      {/* <Navbar /> */}
      <Sidebar toggleDarkMode={handleChange} darkMode={darkMode.isOn} />
      {/*<Svg />*/}
    </div>
  );
}

export default App;

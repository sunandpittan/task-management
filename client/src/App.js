import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Addtask from "./Components/Addtask";
import Navbar1 from "./Components/Navbar1";
import Viewtasks from "./Components/Viewtasks";
import Home from "./Components/Home";
import Pnf from "./Components/Pnf";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Updatetask from "./Components/Updatetask";

function App() {
  const [userInfo, setUserInfo] = useState(() => {
    return JSON.parse(localStorage.getItem("userInfo"));
  });

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);

  return (
    <div>
      <Navbar1 userInfo={userInfo} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/signin"
            element={<Signin setUserInfo={setUserInfo} />}
          />
          <Route
            path="/tasks"
            element={
              <>
                <Addtask userInfo={userInfo} />{" "}
                <Viewtasks userInfo={userInfo} />
              </>
            }
          />
          <Route path="/updatetask/:id" element={<Updatetask />} />
          <Route path="*" element={<Pnf />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

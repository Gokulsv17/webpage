import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import AddNewUser from "./pages/Addnewuser/Addnewuser";
import UserData from "./pages/userData/NewUser";
import APIMembers from "./pages/APImembers/APIMembers";
import Members from "./pages/Members/Members";


export default function Router() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData,setFormData]=useState("");

  useEffect(() => {
    if (document.URL !== "http://localhost:3000/") {
      setIsLogin(false);
    }
  }, []);
  const loginHandler = (email, password) => {
    setIsLogin(false);
  };
  const logoutHandler = (e) => {
    setIsLogin(e);
  };

  return (
    <div>
      <BrowserRouter>
        <Layout isAuthenticated={!isLogin} onLogout={logoutHandler}>
          <Routes>
            {isLogin && (
              <Route path="/" element={<Login onLogin={loginHandler} />} />
            )}
            <Route path="/home" element={<Home />} />,
            <Route path="/add-user" element={<AddNewUser onSubmitData={(data)=>setFormData(data)}/>} />
            <Route path="/newuser" element={<UserData data={formData} />}/>
            <Route path="/apimembers" element={<APIMembers/>}/>
            <Route path="/members" element={<Members/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

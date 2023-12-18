import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import AdsList from "./AdsList";
import About from "./About";
import CreateAdForm from "./CreateAdForm";
import DeleteAdForm from "./DeleteAdForm";
import UpdateAdForm from "./UpdateAdForm";
import BuyAd from "./BuyAd";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

const AppRoutes = () => {
  const [trigger, setTrigger] = useState(0);

  const handleSubmit = () => {
    setTrigger((prev) => prev + 1);
  };

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/create-ad" element={<CreateAdForm />} />
          <Route
            path="/adsList"
            element={<AdsList updateTrigger={handleSubmit} />}
          />
          <Route
            path="/createAd/"
            element={<CreateAdForm updateTrigger={handleSubmit} />}
          />
          <Route
            path="/deleteAd/:id"
            element={<DeleteAdForm updateTrigger={handleSubmit} />}
          />
          <Route
            path="/updateAd/:id"
            element={<UpdateAdForm updateTrigger={handleSubmit} />}
          />
          <Route
            path="/buyAd/:id"
            element={<BuyAd updateTrigger={handleSubmit} />}
          />
          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
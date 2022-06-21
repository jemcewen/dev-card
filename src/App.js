import "./styles.css";
import { Router, Outlet, ReactLocation } from "@tanstack/react-location";
import { createContext, useContext, useState } from "react";
import CreateCard from "./CreateCard";
import CardShowcase from "./CardShowcase";

const FormDataContext = createContext();

export const useFormData = () => {
  const context = useContext(FormDataContext);
  return context;
};

const location = new ReactLocation();

export default function App() {

  const [formData, setFormData] = useState ({
    fullName: "",
    aboutMe: "",
    githubURL: "",
    twitterURL: "",
    favouriteBooks: "",
    HTML: false,
    CSS: false,
    JS: false,
    Git: false,
    React: false,
    Node: false
  });

  const routes = [
    {
      path: "/",
      element: <CreateCard />
    },
    {
      path: "showcase",
      element: <CardShowcase />
    }
  ];

  return (
    <Router routes={routes} location={location}>
      <FormDataContext.Provider value={{ formData, setFormData }}>
        <Outlet />
      </FormDataContext.Provider>
    </Router>
  );
}
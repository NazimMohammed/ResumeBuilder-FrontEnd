import { Route, Routes } from "react-router-dom";
import "./App.css";

//pages
import LandingPage from "./Pages/LandingPage";
import Resume from "./Pages/Resume";
import History from "./Pages/History";
import Form from './Pages/Form'
import Pnf from "./Pages/Pnf";
//Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Steps from "./Components/Steps";


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="" element={<LandingPage/>}/>
      <Route path="resume-generator" element={<Resume/>}/>
      <Route path="form" element={<Form/>}/>
      <Route path="history" element={<History/>}/>
      <Route path="steps" element={<Steps/>}/>
      <Route path="/*" element={<Pnf/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;

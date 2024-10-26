import { Route, Routes } from "react-router-dom";
import "./index.css";
import Footer from "./pages/Footer";

import Landing from "./pages/Landing";
import ResumeView from "./pages/ResumeView";
import { useAppSelector } from "./store/hooks";
import ExperienceView from "./pages/ExperienceView";
import WorkView from "./pages/WorkView";
function App() {
  const { isDark } = useAppSelector((state) => state.lading);
  return (
    <div
      className={`flex flex-col   h-auto px-0 lg:px-[5%] pt-[5%]  ${
        isDark ? "bg-[#474747]" : "bg-[#d6f3e7]"
      }`}
    >
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/resume" element={<ResumeView />} />
        <Route path="/experience" element={<ExperienceView />} />
        <Route path="/work" element={<WorkView />} />

      </Routes>
      <Footer />

    </div>
  );
}

export default App;

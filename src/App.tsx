import "./index.css";
import Footer from "./pages/Footer";

import Landing from "./pages/Landing";
import { useAppSelector } from "./store/hooks";
function App() {
  const { isDark } = useAppSelector((state) => state.lading);
  return (
    <div
      className={`flex flex-col   h-auto px-0 lg:px-[5%] pt-[5%]  ${
        isDark ? "bg-gray" : "bg-[#d6f3e7]"
      }`}
    >
      <Landing />
      <Footer />
    </div>
  );
}

export default App;

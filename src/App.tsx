import "./index.css";
import Footer from "./pages/Footer";

import Landing from "./pages/Landing";
function App() {
  return (
    <div className="flex flex-col   h-auto px-0 lg:px-[5%] pt-[5%] bg-[#d6f3e7]">
      <Landing />
      <Footer />
    </div>
  );
}

export default App;

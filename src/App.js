import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

import "./index.css"

export default function App() {
  return (
    <div className="App">
      <Info/>
      <About/>
      <Interests/>
      <Footer/>
    </div>
  );
}



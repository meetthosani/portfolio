import { About, Footer, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />

      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;

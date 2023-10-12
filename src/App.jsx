import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="margin-auto w-full">
      <section className="flex justify-center items-center">
        <Navbar />
      </section>
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;

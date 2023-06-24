import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <>
    
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <Home />
        </section>
        <section>
          <Skills />
        </section>
       <section>
        <Projects />
       </section>
       <section>
        <Services />
       </section> 
       <section>
        <Contact />
       </section> 
      </main>
      
    </>
  );
}

export default App;

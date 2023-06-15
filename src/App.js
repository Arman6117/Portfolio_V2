import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
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
      </main>
    </>
  );
}

export default App;

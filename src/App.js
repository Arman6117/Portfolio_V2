import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <>
    
      <header>
        <Navbar />
      </header>
      {/* <main> */}
        <section>
          <Home />
        </section>
        <section>
          <Skills />
        </section>
       <section>
        <Projects />
       </section>
       
        
      {/* </main> */}
    </>
  );
}

export default App;

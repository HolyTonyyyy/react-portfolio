import "./App.css";
import Contact from "./componets/Contact";
import Header from "./componets/Header";
import Projects from "./componets/Projects";

function App() {
  return (
    <div className="App">
      <div>
       <Header/>
        <Projects/>
        {/* <section className="deals">
          <h2>*Avatar*</h2>
          <div className="deal">
            <img src="https://via.placeholder.com/400x200" alt="Deal Image" />
            <a href="#" className="btn">
              Button
            </a>
          </div>
        </section> */}
        <Contact/>
      </div>
    </div>
  );
}

export default App;

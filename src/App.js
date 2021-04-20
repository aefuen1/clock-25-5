import Clock from "./components/Clock";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./css/App.sass";

function App() {
  return (
    <div className="App">
      <Header/>
      <Clock/>
      <Footer/>
    </div>
  );
}

export default App;

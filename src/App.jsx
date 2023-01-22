
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderSectionThree from "./components/HeaderSectionThree";
import HeaderSectiontwo from "./components/HeaderSectiontwo";

function App() {
  

  return (
    <div>
      <div className="bg-pink-100">
     <Header  />
     <HeaderSectiontwo/>
     <HeaderSectionThree />
     <Footer />
     </div>
    </div>
  );
}

export default App;

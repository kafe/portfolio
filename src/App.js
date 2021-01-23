import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";

function App() {
  return (
    <>
    <Particles
    params={(
      Particles:{
        number: {
          value: 300,
          dencity: {
            enable: true,
            value_area: 900
          }
        },
        
        shape: {
          type: "star",
          stroke: {
            width: 6,
            color: "#000000"
          }
        }


      }
    )}
    />
<Navbar/><Header/>
</>
  );
}

export default App;

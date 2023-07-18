import "./App.css";
import Head from "./Mycomponents/Head";
import Todos from "./Mycomponents/Todos";
import Footer from "./Mycomponents/Footer";
function App() {
  return (
    <>
      <Head  ttile="To Dos List" searchBar={false}/>
      <Todos/>
      <Footer/>
    </>
  );
}

export default App;

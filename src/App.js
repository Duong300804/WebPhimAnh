import { BrowserRouter, Route } from "react-router-dom";
import AppRoutes from "./config/Routes";
import './index.css';
import 'boxicons/css/boxicons.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <AppRoutes/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

function App() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <>
      <Navbar cartItems={cartItems} />
      <Header />
      <Body cartItems={cartItems} setCartItems={setCartItems} />
      <Footer />
    </>
  );
}

export default App;

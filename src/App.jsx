import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <>
      <Navbar cartItems={cartItems} />
      <Header />
      <Body cartItems={cartItems} setCartItems={setCartItems} />
    </>
  );
}

export default App;

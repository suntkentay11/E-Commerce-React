import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import Detail from "./Pages/Detail";
import { books } from "./data.js";
import Cart from "./Pages/Cart.jsx";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);

    // add multiple quantities of the same book instead of adding duplicates to the cart
    // const dupItem = cart.find(item => +item.id === +book.id);
    // if (dupItem) {
    //   setCart(cart.map(item => {
    //     if (+item.id === +dupItem.id) {
    //       return {
    //         ...item,
    //         quantity: item.quantity + 1
    //       }
    //     }
    //     else {
    //       return item;
    //     }
    //   }))
    // }
    // else {
    //   setCart([...cart, {
    //     ...book,
    //     quantity: 1
    //   }]);
    // }
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => 
      +item.id === +book.id
        ? {
          ...item,
          quantity: +quantity}
        : item
    ))
  }

  function removeItem(book) {
    setCart(cart.filter(item => +item.id !== +book.id));
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => counter += item.quantity);
    return counter;
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={ <Books books={books} />} />
          <Route path="/books/:id" element={<Detail books={books} cart={cart} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

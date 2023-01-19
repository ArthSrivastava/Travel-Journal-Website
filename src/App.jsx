import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import data from "./data.js"
function App() {
  const cards = data.map((item) => {
    return (
      <Card 
        key = {item.id}
        item = {item}
      />
    )
  })
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  )
}

export default App;

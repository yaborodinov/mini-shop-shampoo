import React from "react";
import "./common/style/reset.css"
import "./common/style/base.css"


import Product from "./App/Products/ProductList"





class App extends React.Component{
  render() {
    return (
      <main className="main">
        <div className="container">
          
            <Product />
            
          
        </div>
      </main>
    
  )
  }
}

export default App;
import React, {useState, useEffect} from "react"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"
import Button from "./Button/Button"

const App=() => {
  
  const [productsState, setProductsState] = useState([])

  useEffect(()=>{

    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then((productsArray)=> {
        const newProudctsState = productsArray.map((product)=>{
          return product.title
        })
        setProductsState(newProudctsState)
      })

  },[])

  const hasProducts = productsState.length > 0

    return (
      <div>
      
        <Button>hello world1</Button>
        <Button>hello world2</Button>
        <Button>hello world3</Button>
        
        <CountButton incrementBy={1} buttonColor="blue"/>
        
        {hasProducts ? <SearchBar products={productsState} /> : "Loading..."} 
      </div>
    ) 
  }

export default App
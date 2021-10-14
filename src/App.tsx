import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

    const [value, setValue] = useState(0)

    useEffect(()=>{
        localStorage.setItem('counterValue',JSON.stringify(value))},
        [value])

    const incHandler = () => {
        setValue(value+1)
    }

    const setToLocalStorageHandler=()=>{
        localStorage.setItem('counterValue',JSON.stringify(value))
    }
    const getFromLocalStorageHandler=()=>{
    let valueAsString=localStorage.getItem('counterValue')
       if(valueAsString) {
           let newValue = JSON.parse(valueAsString)
           setValue(newValue)
       }
    }
    const clearLocalStorageHandler=()=>{
        localStorage.clear()
        setValue(0)
    }
const removeItemFromLocalStorageHandler=()=>{
        localStorage.removeItem('counterValue')
}
    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
            <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
            <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
            <button onClick={removeItemFromLocalStorageHandler}>removeItemFromLocalStorage</button>
        </div>
    );
}

export default App;

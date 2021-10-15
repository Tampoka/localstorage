import React from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {AppStateType} from "./BLL/store";

function App() {

    const value=useSelector<AppStateType,number>(state=>state.counter.value)

    const incHandler = () => {
        // setValue(value+1)
    }

   /* const [value, setValue] = useState(0)

    useEffect(()=>{
        let valueAsString=localStorage.getItem('counterValue')
        if(valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('counterValue',JSON.stringify(value))},
        [value])



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
}*/
    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>

        </div>
    );
}

export default App;

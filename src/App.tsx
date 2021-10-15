import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./BLL/store";
import {incValueTC, setValueFromLocalStorageTC} from "./BLL/counter-reducer";

function App() {

    const value=useSelector<AppStateType,number>(state=>state.counter.value)

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(setValueFromLocalStorageTC())
    })
    const incHandler = () => {
        dispatch(incValueTC())
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

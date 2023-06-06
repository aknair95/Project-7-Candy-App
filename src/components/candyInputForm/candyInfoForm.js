
import { useRef } from "react";
import Card from "../UI/card";
import classes from "./candyInfoForm.module.css";

const CandyInfoForm=(props) =>{
    
    const candyNameRef=useRef();
    const candyDescriptionRef=useRef();
    const candyPriceRef=useRef();

    const addCandyBtnHandler=(e) =>{
        e.preventDefault();
        const enteredName=candyNameRef.current.value;
        const enteredDescription=candyNameRef.current.value;
        const enteredPrice=candyPriceRef.current.value;
      
        const newCandyData={Name: enteredName,Description: enteredDescription,Price: enteredPrice};

        //props.onAddCandyData(newCandyData);
        
        candyNameRef.current.value="";
        candyDescriptionRef.current.value="";
        candyPriceRef.current.value="";
    }
    return (
        <Card>
            <form className={classes["form-control"]}> 
                <label htmlFor="name">Candy Name:</label>
                <input type="text" id="name" ref={candyNameRef}/>
                <label htmlFor="decription" >Description:</label>
                <input id="description" ref={candyDescriptionRef}/>
                <label htmlFor="price">Price(Rs):</label>
                <input type="number" id="price" ref={candyPriceRef}/>
                <button id="addBtn" onClick={addCandyBtnHandler}>ADD CANDY</button>
            </form>
        </Card>    
    )
}

export default CandyInfoForm;
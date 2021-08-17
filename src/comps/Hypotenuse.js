import { useState } from "react";
import { Link } from 'react-router-dom';

const Hypotenuse = () => {
    
    var hypotenuse;
    
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [result, setResult] = useState(null);
    
    const handleChange1 = (e)=> {
        setNum1(parseInt(e.target.value));
    }

    const handleChange2 = (e)=> {
        setNum2(parseInt(e.target.value));
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        hypotenuse = Math.sqrt((Math.pow(num1, 2) + Math.pow(num2, 2)));    
       console.log(hypotenuse);
       setResult(true);

    }
    
    console.log(hypotenuse)
    return (
        <div className="comp2">
            <form action="" onSubmit={(e)=> handleSubmit(e)}>
            <Link to="/">Go back</Link>
            <h1>Enter the lengths of sides of right angle triangle</h1>

            <span>a:</span>
            <input onChange={(e)=>handleChange1(e)} type="number" required/>

            <span>b:</span>
            <input onChange={(e)=>handleChange2(e)} type="number" required/><br />
            
            <button type="submit">sumbit</button>
            </form>

            <h2>Hypotenuse will be calculated here-</h2>
            {result ? <p>C={hypotenuse}</p> :<h2>C= √a^2+b^2</h2>}
        </div>

        
     );
}
 
export default Hypotenuse;

import { useState } from "react";
import { Link } from "react-router-dom";

const AnglesOfTri = () => {

    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [num3, setNum3] = useState();

    const [result, setResult] = useState(null);

    const handleChange1 = (e) => {
        setNum1(parseInt(e.target.value));
        result && setResult(null)
    }

    const handleChange2 = (e) => {
        setNum2(parseInt(e.target.value));
        result && setResult(null)
    }

    const handleChange3 = (e) => {
        setNum3(parseInt(e.target.value));
        result && setResult(null)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ((num1 + num2 + num3) === 180) {
            setResult("Yuhu! these angles can make a triangle");
        } else {
            setResult("Oops! these angles cannot make a triangle");
        }
    }

    return (
        <div className="comp1">
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <Link to="/">Go back</Link>
                <h1>Enter the angles in below input boxes and we will tell you if those angles make a Triangle</h1>
                <input onChange={(e) => handleChange1(e)} type="number" required />
                <input onChange={(e) => handleChange2(e)} type="number" required />
                <input onChange={(e) => handleChange3(e)} type="number" required /><br />
                <button type="submit">submit</button>
            </form>

            <h2>Output will be shown here</h2>
            {result && <p>{result}</p>}
        </div>


    );
}

export default AnglesOfTri;

import { useState } from "react";
import { Link } from 'react-router-dom';

const CalculateArea = () => {

    var area;

    const [a, setA] = useState();
    const [b, setB] = useState();
    const [c, setC] = useState();
    const [base, setBase] = useState();
    const [height, setHeight] = useState();
    const [angle, setAngle] = useState();

    const [disp1, setDisp1] = useState(null);
    const [disp2, setDisp2] = useState(null);
    const [disp3, setDisp3] = useState(null);

    const [result1, setResult1] = useState(null);
    const [result2, setResult2] = useState(null);
    const [result3, setResult3] = useState(null);
    const [error, setError] = useState(false);


    const handleChange1 = (e) => {
        setA(parseInt(e.target.value));
    }

    const handleChange2 = (e) => {
        setB(parseInt(e.target.value));
    }

    const handleChange3 = (e) => {
        setC(parseInt(e.target.value));
    }

    const handleBase = (e) => {
        setBase(parseInt(e.target.value));
    }

    const handleHeight = (e) => {
        setHeight(parseInt(e.target.value));
    }

    const handleAngle = (e) => {
        setAngle(parseInt(e.target.value));
    }


    //Main functions

    const handleSubmit1 = (e) => {
        e.preventDefault();
        area = (base * height) / 2;
        setResult1(area)
        result2 && setResult2(null);
        result3 && setResult3(null);
    }

    const handleSubmit2 = (e) => {
        e.preventDefault();
        error && setError(null);
        if (c >= a + b){
            setError(true);
        }else {
            const s = (a + b + c) / 2
            area = Math.sqrt((s * (s - a) * (s - b) * (s - c)));
            result1 && setResult1(null);
            setResult2(area);
            result3 && setResult3(null);    
        }
        
    }

    const handleSubmit3 = (e) => {
        e.preventDefault();
        area = (b * c * Math.sin(angle)) / 2;
        console.log(typeof area);
        result1 && setResult1(null);
        result2 && setResult2(null);
        setResult3(area);
    }

        //Handle displays
    const handleDisplay1 = ()=> {
        !disp1 && setDisp1(true);
        disp2 && setDisp2(null);
        disp3 && setDisp3(null);
        setResult1("formula1");
        result2 && setResult2(null);
        result3 && setResult3(null);
    }

    const handleDisplay2 = ()=> {
        disp1 && setDisp1(null);
        !disp2 && setDisp2(true);
        disp3 && setDisp3(null);
        setResult2("formula2");
        result1 && setResult1(null);
        result3 && setResult3(null);

    }

    const handleDisplay3 = ()=> {
        disp1 && setDisp1(null);
        disp2 && setDisp2(null);
        !disp3 && setDisp3(true);
        setResult3("formula3");
        result2 && setResult2(null);
        result1 && setResult1(null);
    }

    return (
        <div className="comp2">
            <Link to="/">Go back</Link>
            <h1>Calculate Area</h1>
            <h2>Select an option below as per the data you have for a triangle</h2>

            <div className="radios">
                <input onClick={handleDisplay1} className="radio" type="radio" id="age1" name="age" value="" />
                <label htmlFor="age1">If you have base and height length</label><br />
                <input onClick={handleDisplay2} className="radio" type="radio" id="age2" name="age" value="" />
                <label htmlFor="age2">If you have length of 3 sides</label><br />
                <input onClick={handleDisplay3} className="radio" type="radio" id="age3" name="age" value="" />
                <label htmlFor="age3">If you have length of 2 sides and included angle</label><br></br>
            </div>
        



            { disp1 &&
                <form action="" onSubmit={(e)=> handleSubmit1(e)}>

                <span>base=</span>
                <input onChange={(e)=>handleBase(e)} type="number" required/>

                <span>height=</span>
                <input onChange={(e)=>handleHeight(e)} type="number" required/><br />

                <button type="submit">calculate</button>
                </form>
            }




            { disp2 && 
                <form action="" onSubmit={(e)=> handleSubmit2(e)}>

                    <span>a=</span>
                    <input onChange={(e)=>handleChange1(e)} type="number" required/>

                    <span>b=</span>
                    <input onChange={(e)=>handleChange2(e)} type="number" required/>

                    <span>c=</span>
                    <input onChange={(e)=>handleChange3(e)} type="number" required/><br />
                    
                    {error && <p id="err">Enter valid side lengths such that each side length should be less than sum of other two sides</p>}
                    <button type="submit">calculate</button>
                </form>
            }
            



            { disp3 &&
                <form action="" onSubmit={(e) => handleSubmit3(e)}>

                    <span>b=</span>
                    <input onChange={(e) => handleChange1(e)} type="number" required />

                    <span>c=</span>
                    <input onChange={(e) => handleChange2(e)} type="number" required />

                    <span>A(Deg)=</span>
                    <input onChange={(e) => handleAngle(e)} type="number" required /><br />
                    <button type="submit">calculate</button>
                </form>
            }

            <h2>Area will be calculated here--</h2>
            {result1 && <p>Area= {result1}</p>}
            {result2 && <p>Area= {result2}</p>}
            {result3 && <p>Area= {result3}</p>}
            
        </div>


    );
}

export default CalculateArea;

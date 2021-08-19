import { useState } from "react";
import { Link } from 'react-router-dom';


const Quizz = () => {

    const [result, setResult] = useState(null);
    const [score, setScore] = useState();
    const [formData, setFormData] = useState({});

    const questions = [

        new Question("If a triangle has angles 1350, 150, 300. Is it an obtuse triangle?", ["yes", "no"], "yes", 1),
        new Question("If a triangle has angles 1150, 250, 400. Is it an acute triangle?", ["yes", "no"], "no", 2),
        new Question("If a triangle has angles 900, 600, 300. Is it a right angle triangle?", ["yes", "no"], "yes", 3),
        new Question("A triangle has angles 600, 600, 600. Is it an equilateral triangle?", ["yes", "no"], "yes", 4),
        new Question("If a triangle has angles 250, 750, 800. Is it an acute triangle?", ["yes", "no"], "yes", 5),

        new Question("If a triangle has 2 sides with equal lengths and 750 angle between them. What is the type of triangle?", ["Equilateral", "Isosceles"], "Isosceles", 6),
        new Question("If a triangle has 2 angles of 750. What is the measure of third angle in degree?", ["25", "30"], "30", 7),
        new Question("If a triangle has 2 sides with equal lengths and 600 angle between them. What is the type of triangle?", ["Equilateral & Isosceles", "Scalene & Isosceles"], "Equilateral & Isosceles", 8),
        new Question("The perimeter of an equilateral triangle is 15cm. What is the length of one side?", ["5cm", "15cm"], "5cm", 9),
        new Question("If a triangle has sides of 2cm, 3cm, 4cm, what is the type of triangle?", ["Isosceles", "Scalene"], "Scalene", 10)
    ]

    function Question(question, option, ans, id) {
        this.question = question;
        this.option = option;
        this.ans = ans;
        this.id = id;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let currentScore = 0;
        for (let i=0; i < questions.length; i++){
            if (questions[i].ans === formData[questions[i].id]){
                currentScore++;
            }
        }
        
        setScore(currentScore);     
        setResult(true);   
        }


    const handleOptionChange = (e) => {
        
        setFormData({...formData, [e.target.name]: e.target.value })
    }


    return (
        <div className="quizz">
            <Link to="/">Home</Link>
            <h2>Let's take a quizzz</h2>

            <form onSubmit={(e) => handleSubmit(e)} action="/quizz">

                {questions.map(q => {
                    return <div className="question-block" key={q.id}>
                        <p>{q.id +". "+ q.question}</p>
                        <input onChange={handleOptionChange} checked={formData[q.id] === q.option[0]} type="radio" name={q.id} value={q.option[0]} required/>
                        <label >{q.option[0]}</label>

                        <input onChange={handleOptionChange} checked={formData[q.id] === q.option[1]} type="radio" name={q.id} value={q.option[1]} required />
                        <label >{q.option[1]}</label>
                    </div>
                })}

                {!result && <button type='submit'>submit</button>}
                {result && <h2>Your score is: {score}</h2>}
            </form>
        </div>
    );
}

export default Quizz;


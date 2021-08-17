import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="homee">
            <div className="content">
                <div className="catogories">
                    <Link to="/angleoftri"><div className="box"><p>Angles of Triangle?</p></div></Link>
                    <Link to="/hypotenuse"><div className="box"><p>Check Hypotenuse</p></div></Link>
                    <Link to="/calculatearea"><div className="box"><p>Calculate Area</p></div></Link>
                    <Link to="/quizz"><div className="box"><p>Take a quizz!</p></div></Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
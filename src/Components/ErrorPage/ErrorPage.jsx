import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>404: page not found</h2>
            <Link to='/'>GO BACK</Link>
        </div>
    );
};

export default ErrorPage;
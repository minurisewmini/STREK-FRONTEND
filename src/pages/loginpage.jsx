import { Link } from 'react-router-dom';
import './loginpage.css'

export default function LoginPage(){
    return(
        <div className="login-container">
            <h1>Login page</h1>
            <input type="text"placeholder="Enter Your Username" />
            <input type="password" placeholder="Enter Your Password" />
            <button className='bg-yellow-500'>Login</button>

            <Link to="/">Home</Link>
        </div>
    )
}
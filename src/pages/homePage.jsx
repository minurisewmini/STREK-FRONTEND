import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to Our Website!!</h1>
      <p>Your space for peace, meditation, and better mental health.</p>
      <button onClick={()=>alert('button Clicked')}>Get Started</button>

      <Link to="/login">Login</Link>
    </div>
  );
}

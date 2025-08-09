import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gradient-to-br from-purple-700 to-blue-600">
    <div className='w-[450px] h-[450px] bg-white flex flex-col items-center' >
      <img src='/logo.jpg' className='rounded-full w-[150px]'/>
      <span>Email</span>
      <input className="w-72 p-2 border border-gray-400 rounded mb-4" />
      <span>Password</span>
      <input type="password" className="w-72 p-2 border border-gray-400 rounded mb-4" />
      <button className=' bg-purple-700 w-72 p-2 border border-gray-400 rounded-2xl'>Login</button>
    </div>
    </div>
  );
}


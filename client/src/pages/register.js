import { useEffect, useState } from 'react';
import { useSession, signIn } from 'next-auth/react';
import Nav from '../components/Nav';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '@/actions/userActions';

const Register = () => {
    const [showNav, setShowNav] = useState(false);
    const { data: session } = useSession();
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [re_password, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
  
    const dispatch = useDispatch();
  
    // Reducer
    const userRegisterReducer = useSelector((state) => state.userRegisterReducer);
    const { error, userInfo } = userRegisterReducer;
  
    const router = useRouter();
  
    useEffect(() => {
      if (userInfo) {
        router.push('/');
      }
    }, [router, userInfo]);
  
    const submitHandler = (e) => {
      e.preventDefault();
      if (password !== re_password) {
        setMessage("Passwords do not match!");
      } else {
        dispatch(register(username, firstName, lastName, email, password, re_password));
      }
    };
  
    if (!session && !userInfo) {
      return (
        <>
          <div className="bg-gray-300 h-screen flex flex-col items-center justify-center overflow-y-auto mb-5 pb-20 pt-20">
            <div className="pt-20 mt-12">
              <Logo />
            </div>
            <div className="w-full md:w-1/2 border border-transparent bg-white border border-gray-400 shadow flex flex-col mx-10 rounded-md ">
              {error && <div className="bg-red-500 text-white p-3 rounded mb-5 text-center">{error}</div>}
              {message && <div className="bg-red-500 text-white p-3 rounded mb-5 text-center">{message}</div>}
              <h2 className="text-center text-2xl font-bold tracking-wide mb-10 mt-5">Sign In</h2>
              <div className="text-center flex items-center justify-center">
                <Link href="#" onClick={() => signIn("google")} className="flex items-center justify-center bg-transparent border border-gray-500 py-1.5 px-2 rounded-lg hover:bg-gray-600 font-medium mb-5">
                  <img src='./google.png' className='w-6 mr-2' alt="Google Icon"/>
                  Login with Google
                </Link>
              </div>
              <hr className="h-px my-8 bg-gray-400 border-0 "/>
              <form onSubmit={submitHandler} className="max-w-sm mx-auto mb-5">
                <div className="mb-5">
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                  <input type="text" id="username" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="luke" required value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mb-5">
                  <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                  <input type="text" id="firstName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="mb-5">
                  <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                  <input type="text" id="lastName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                  <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="luke@gmail.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-5">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                  <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mb-5">
                  <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
                  <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required value={re_password} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <div className="flex items-start mb-5">
                  <div className="flex items-center h-5">
                    <input id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                  </div>
                  <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900">I agree with the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a></label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register new account</button>
              </form>
              
              
            </div>
          </div>
        </>
      );
    }
  
    return (
      <div className="bg-white min-h-screen overflow-y-auto">
        <div className="block md:hidden flex items-center p-4">
          <button onClick={() => setShowNav(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="flex grow justify-center mr-6">
            <Header />
          </div>
        </div>
        <div className="flex">
          <Nav show={showNav} />
          <div className="flex-grow p-4">
            {children}
          </div>
        </div>
      </div>
    );
  };


export default Register
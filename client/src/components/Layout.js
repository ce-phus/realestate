import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Nav from './Nav';
import Header from './Header';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';
import Logo from './Logo';

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const { data: session } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { error, userInfo } = userLoginReducer;

  console.log("UserInfo: ", userInfo)
  

  const router = useRouter();

  useEffect(() => {
    if (userInfo) {
      router.push('/');
    }
  }, [router, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  if (!session && !userInfo) {
    return (
      <div className='overflow-y-auto bg-white min-h-screen w-screen grid place-items-center'>
        <div className='flex items-center justify-center flex-col p-4'>
          <div>
            <Logo />
          </div>
          <h1 className='text-3xl font-bold'>Sign In</h1>
          {error && <Error variant='danger'>{error}</Error>}
          <form className='max-w-sm mx-auto' onSubmit={submitHandler}>
            <div className='mb-5 mt-10'>
              <label htmlFor='email' className='block mb-2 text-sm font-medium text-secondary'>Email</label>
              <input
                className='bg-gray-700 block border border-gray-600 w-full placeholder-gray-400 text-light focus:ring-blue-500 focus:border-blue-500 rounded-lg text-sm p-4'
                type='email'
                placeholder='enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='mb-5'>
              <label htmlFor='password' className='block mb-2 text-sm font-medium text-secondary'>Password</label>
              <input
                className='bg-gray-700 block border border-gray-600 w-full placeholder-gray-400 text-light focus:ring-blue-500 focus:border-blue-500 rounded-lg text-sm p-4'
                type='password'
                placeholder='enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type='submit'
              className='text-light focus:ring-blue-800 hover:bg-blue-700 bg-blue-600 text-center px-5 py-2.5 sm:auto rounded-lg'
            >
              Sign In
            </button>
          </form>
          <div className='flex flex-col text-light'>
            <div className='mt-10 text-primary'>
              Do not have an account?
            </div>
            <div className='flex flex-row-reverse mt-3'>
              <Link href='/register'>
                <button className='text-light bg-blue-600 hover:bg-blue-700 text-center rounded-lg p-3 sm:auto'>
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
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

export default Layout;

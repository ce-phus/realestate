import React from 'react';
import { HiHome, HiUser, HiViewColumns, HiRectangleGroup, HiChatBubbleBottomCenterText, HiEnvelope } from 'react-icons/hi2';
import { IoIosLogOut } from 'react-icons/io';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import Logo from './Logo';

const Nav = () => {
  const inactiveLink = 'flex gap-2 p-2 items-center';
  const activeLink = `${inactiveLink} bg-highlight text-black rounded-sm ml-2`;
  const inactiveIcon = 'w-6 h-6';
  const activeIcon = `${inactiveIcon} text-primary`;
  const router = useRouter();
  const { pathname } = router;
  
  async function logout() {
    await router.push('/');
    await signOut();
  }
  
  return (
    <nav className='flex flex-col items-center lg:justify-center gap-y-4 fixed h-max bottom-0 mt-auto z-50 top-0 w-full p-5 md:h-screen bg-green-900 w-full md:static  md:w-auto transition-all'>
      <div className='top-0 absolute hidden md:block'>
      <Logo/>
      </div>
      
      <div className='flex w-full  md:flex-col items-center justify-between xl:justify-center gap-y-10 px-4  xl:px-0 h-[80px] py-8 backdrop-blur-sm text-lg xl:text-xl'>
        
        <Link href='/' className={pathname === '/' ? activeLink : inactiveLink}>
          <HiHome className={pathname === '/' ? activeIcon : inactiveIcon} />
          <span className='hidden md:block ml-5'>Home</span>
        </Link>
        
        <Link href='/profile' className={pathname.includes('/profile') ? activeLink : inactiveLink}>
          <HiUser className={pathname.includes('/profile') ? activeIcon : inactiveIcon} />
          <span className='hidden md:block ml-5'>Profile</span>
        </Link>
        
        <Link href='/settings' className={pathname.includes('/settings') ? activeLink : inactiveLink}>
          <HiRectangleGroup className={pathname.includes('/settings') ? activeIcon : inactiveIcon} />
          <span className='hidden md:block ml-5'>Settings</span>
        </Link>
        
        <Link href='/messages' className={pathname.includes('/messages') ? activeLink : inactiveLink}>
          <HiChatBubbleBottomCenterText className={pathname.includes('/messages') ? activeIcon : inactiveIcon} />
          <span className='hidden md:block ml-5'>Messages</span>
        </Link>
        
        <Link href='/contact' className={pathname.includes('/contact') ? activeLink : inactiveLink}>
          <HiEnvelope className={pathname.includes('/contact') ? activeIcon : inactiveIcon} />
          <span className='hidden md:block ml-5'>Contact</span>
        </Link>
        <button onClick={logout} className={`${inactiveLink} `}>
          <IoIosLogOut className='mr-5'/>
          <span className='hidden md:block'>Logout</span>
        </button>
      </div>
    </nav>
  );
}

export default Nav;

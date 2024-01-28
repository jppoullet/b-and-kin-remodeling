import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeLink = ({ isActive }) => {
    return isActive
      ? 'text-gray-800 font-bold block p-2 my-0'
      : 'block p-2 my-0';
  };

  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const mobileMenuActiveHandler = () => {
    const body = document.querySelector('body');

    console.log('hello');
    setMobileMenuActive(!mobileMenuActive);
    if (!mobileMenuActive) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }
  };

  const openMenu = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className='w-6 h-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
      />
    </svg>
  );

  const closeMenu = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className='w-6 h-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6 18 18 6M6 6l12 12'
      />
    </svg>
  );

  return (
    <>
      <nav className='bg-white'>
        <div className='grid grid-cols-3 flex-1 items-center py-10 mx-10 z-50 sticky top-0'>
          {/* Social Contact Us */}
          <div className='md:hidden'></div>
          <div className='hidden md:flex gap-4'>
            <button className=' bg-gray-800 p-3 rounded-full'>
              <svg
                className='w-6 h-6 text-white dark:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 8 19'
              >
                <path
                  fillRule='evenodd'
                  d='M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
            <button className='bg-gray-800 text-white py-3 px-6 rounded-full'>
              Contact Us
            </button>
          </div>

          {/* Home - Business Name/Logo */}
          <div className='flex flex-col items-center'>
            <div className='text-center text-2xl text-gray-800 font-bold no-underline cursor-pointer pb-4'>
              <Link
                to='/'
                onClick={() => {
                  setState({ isOpen: false });
                }}
              >
                B & Kin
                <br />
                Remodeling
              </Link>
            </div>
          </div>
          {/* Nav Menu */}

          <div className={`hidden md:flex text-black justify-end`}>
            <NavLink to='/services' className={activeLink}>
              Services
            </NavLink>

            {/* <NavLink to="/gallery" className={activeLink}>
              Galley
            </NavLink> */}

            <NavLink to='/testimonials' className={activeLink}>
              Testimonials
            </NavLink>

            <NavLink to='/about' className={activeLink}>
              About
            </NavLink>
          </div>

          {/* Mobile Menu Button*/}
          <div className='md:hidden flex justify-end items-center'>
            {/* Mobile Menu Button */}
            <button className='' onClick={mobileMenuActiveHandler}>
              {mobileMenuActive ? closeMenu : openMenu}
            </button>
          </div>
        </div>
        {/* Mobile Menu List */}
        {mobileMenuActive && (
          <div className='overflow-hidden border border-yellow-400 absolute top-0 w-full h-full z-[45]'>
            <div
              className={`flex flex-col items-center md:hidden w-full h-full bg-white transition duration-500 ease-in-out justify-center mt-[-${
                mobileMenuActive ? 'translate-y-0 ' : '-translate-y-full'
              }]`}
            >
              <NavLink
                to='/services'
                className='hover:bg-slate-500 block p-4 my-0'
                onClick={() => {
                  setState({ isOpen: false });
                }}
              >
                Services
              </NavLink>

              <NavLink
                to='/testimonials'
                className='hover:bg-slate-500 block p-4 my-0'
                onClick={() => {
                  setState({ isOpen: false });
                }}
              >
                Testimonials
              </NavLink>

              <NavLink
                to='/about'
                className='hover:bg-slate-500 block p-4 my-0'
                onClick={() => {
                  setState({ isOpen: false });
                }}
              >
                About
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

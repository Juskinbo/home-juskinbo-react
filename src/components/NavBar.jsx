import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const menuList = [
  {
    id: 1,
    title: 'Home',
    path: '/',
  },
  {
    id: 2,
    title: 'Blog',
    path: '/blog',
  },
  {
    id: 3,
    title: 'Friends',
    path: '/friends',
  },
]

const NavBar = () => {
  const [isDark, setIsDark] = useState(
    JSON.parse(
      localStorage.getItem('isDark')
        ? localStorage.getItem('isDark')
        : window.matchMedia('(prefers-color-scheme: dark)').matches
    )
  )

  useEffect(() => {
    localStorage.setItem('isDark', isDark)
    document.documentElement.setAttribute(
      'data-theme',
      isDark ? 'dark' : 'light'
    )
  }, [isDark])

  return (
    <div className='p-2 w-full absolute opacity-90'>
      <div className='navbar bg-base-100 shadow-xl w-auto rounded-box'>
        <div className='flex-1 space-x-1'>
          <details className='flex-none sm:hidden dropdown'>
            <summary className='btn btn-square btn-ghost'>
              <svg
                className='fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 512 512'
              >
                <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
              </svg>
            </summary>
            <ul className='menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-fit mt-4'>
              {menuList.map((menu) => {
                return (
                  <li key={menu.id}>
                    <Link to={menu.path}>{menu.title}</Link>
                  </li>
                )
              })}
            </ul>
          </details>
          <div>
            <Link className='btn btn-ghost text-xl' to='/'>
              <svg
                className='logo'
                width='107'
                height='39'
                viewBox='0 0 107 39'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.69445 22.2329C4.52778 20.7329 5.49445 14.8329 26.6944 3.23295C27.8944 -2.76705 23.5278 4.73295 21.1944 9.23295C17.3611 19.5663 8.29444 39.8329 2.69444 38.2329C-4.30556 36.2329 11.6944 17.7329 26.6944 20.2329C16.1944 37.2329 32.6944 24.7329 34.1944 18.7329C21.1944 35.2329 41.6944 30.2329 49.1944 17.2329C36.6944 19.2329 47 19.5 47.1944 21.2329C49.1944 27.2329 37.1944 32.2329 37.1944 25.2329C37.1944 19.6329 52.8611 13 60.6944 10L51.6944 28.5C51.746 24.5851 54.7011 17.1454 59.5 17.5C61.4556 17.6857 63.5737 18.9204 55 22.5C56.3737 29.23 59.9354 31.5719 69.1944 20.7329C58.1944 34.2329 75.6944 28.2329 76.6944 20.7329C74.2944 26.3329 73.2603 28.3333 73.0937 28.5C73.0937 22.4223 83.8992 16.6201 82.2307 21C79.0307 29.4 81.8315 29.2329 85.8315 26.2329C85.8315 26.7329 85.8944 28 86.6944 28C87.4944 28 92.8611 16.0663 95.6944 10.2329L86.6944 27.7329C87.5 23.5 95.4632 17.3679 95 22C94.5 27 90 28.5 87.5 28C92.1667 25.3333 101.1 20.0294 103.5 19.2294C96.7 25.6294 99.7082 28.4062 101.5 28C104.548 27.309 108.5 17 103 19.4239'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className='flex-none max-sm:hidden'>
          <ul className='menu menu-horizontal space-x-1 p-0'>
            {menuList.map((menu) => {
              return (
                <li key={menu.id}>
                  <Link to={menu.path}>{menu.title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <label className='swap swap-rotate px-4'>
          <input
            type='checkbox'
            checked={isDark}
            onChange={() => setIsDark(!isDark)}
          />
          <svg
            className='swap-on fill-current w-6 h-6'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
          </svg>
          <svg
            className='swap-off fill-current w-6 h-6'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
          </svg>
        </label>
      </div>
    </div>
  )
}

export default NavBar

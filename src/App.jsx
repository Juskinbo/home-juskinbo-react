import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'

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

function App() {
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
    <>
      <div className='p-2 w-full absolute'>
        <div className='navbar bg-base-100 shadow-xl w-auto rounded-box'>
          <div className='flex-1 space-x-1'>
            <div className='flex-none sm:hidden'>
              <div className='dropdown'>
                <label className='btn btn-square swap swap-rotate'>
                  <input type='checkbox' />
                  <svg
                    className='swap-off fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 512 512'
                  >
                    <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
                  </svg>
                  <svg
                    className='swap-on fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 512 512'
                  >
                    <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className='menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-fit mt-4'
                >
                  {menuList.map((menu) => {
                    return (
                      <li key={menu.id}>
                        <Link to={menu.path}>{menu.title}</Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div>
              <Link className='btn btn-ghost text-xl' to='/'>
                progrès infini
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
      <Outlet />
    </>
  )
}

export default App

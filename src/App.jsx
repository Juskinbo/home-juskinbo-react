import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar className='fixed '/>
      <Outlet />
    </>
  )
}

export default App

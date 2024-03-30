import { useRef, useEffect } from 'react'
import Typed from 'typed.js'
import axios from 'axios'

const Home = () => {
  const el = useRef(null)

  useEffect(() => {
    axios
      .get('https://api.mu-jie.cc/stray-birds/range')
      .then((response) => {
        console.log(response.data.cn)
        const data = response.data.en
        const options = {
          strings: [data],
          typeSpeed: 50,
          loop: true,
          showCursor: false,
          backDelay: 1000,
        }
        const typed = new Typed(el.current, options)
        return () => {
          typed.destroy()
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])
  return (
    <div className='flex items-center h-full justify-center'>
      <span
        className='mx-10 sm:mx-32 text-3xl text-start break-all max-w-full'
        ref={el}
      />
    </div>
  )
}

export default Home

import { useRef, useEffect } from 'react'
import Typed from 'typed.js'
import lax from 'lax.js'
import axios from 'axios'

const Home = () => {
  const motto = useRef(null)
  const introduction = useRef(null)
  const mockupCode = useRef(null)

  useEffect(() => {
    lax.init()

    lax.addDriver('scrollY', function () {
      return window.scrollY
    })

    lax.addElements('.mockup-code', {
      scrollY: {
        opacity: [
          [0, 'screenHeight/2', 'screenHeight'],
          [0, 0.5, 1],
        ],
        scale: [
          [0, 'screenHeight'],
          [0.25, 1],
        ],
      },
    })
    lax.addElements('.motto', {
      scrollY: {
        opacity: [
          [0, 'screenHeight/2', 'screenHeight'],
          [1, 0.5, 0],
        ],
        scale: [
          [0, 'screenHeight'],
          [1, 0.25],
        ],
      },
    })
    lax.addElements('.tip', {
      scrollY: {
        'letter-spacing': [
          [0, 'screenHeight'],
          [0, 150],
          {
            cssUnit: 'px',
          },
        ],
        opacity: [
          [0, 'screenHeight/4', 'screenHeight/2'],
          [1, 0.5, 0],
        ],
      },
    })
    axios
      .get('https://api.mu-jie.cc/stray-birds/range')
      .then((response) => {
        console.log(response.data.cn)
        const data = response.data.en
        const mottoOptions = {
          strings: [data],
          typeSpeed: 50,
          loop: true,
          showCursor: false,
          backDelay: 1000,
        }
        const introductionOptions = {
          strings: ['who am I?'],
          typeSpeed: 50,
          showCursor: false,
          backDelay: 1000,
        }
        const mottoTyped = new Typed(motto.current, mottoOptions)
        const introductionTyped = new Typed(
          introduction.current,
          introductionOptions
        )
        return () => {
          mottoTyped.destroy()
          introductionTyped.destroy()
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])
  return (
    <>
      <div className='flex items-center h-full justify-center flex-col'>
        <span
          className='mx-10 sm:mx-32 text-3xl text-start break-all max-w-full motto'
          ref={motto}
        />
        <span className='tip bottom-8 text-2xl fixed whitespace-nowrap'>
          scroll down ▼
        </span>
      </div>
      <div className='flex items-center h-full justify-center'>
        <div className='mockup-code bg-opacity-90' ref={mockupCode}>
          <pre data-prefix='$'>
            <code ref={introduction} />
          </pre>
          <pre data-prefix='>'>
            <code>Juskinbo, front-end developer.</code>
          </pre>
        </div>
      </div>
    </>
  )
}

export default Home

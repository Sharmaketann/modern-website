import React, { useEffect, useState } from 'react'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import './header.css'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  const quoteAPI = async () => {
    let arrayOfQuotes = []
    try {
      const data = await axios.get('https://api.quotable.io/random')
      arrayOfQuotes = data
      console.log(data)
      arrayOfQuotes = data.data
    } catch (error) {
      console.log(error)
    }

    try {
      setQuote(arrayOfQuotes.content)
      setAuthor(arrayOfQuotes.author)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    quoteAPI()
  }, [])
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          <FontAwesomeIcon
            className='faleft'
            icon={faQuoteLeft}
            nverse
            transform='shrink-6'
          />
          {quote}
          <FontAwesomeIcon
            className='faright'
            inverse
            transform='shrink-6'
            icon={faQuoteRight}
            size='xs'
          />
        </h1>

        <p className='quote'></p>
        <p className='author'>~{author}</p>

        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className='gpt3__header-image'>
        <img src={ai} alt='ai' />
      </div>
    </div>
  )
}

export default Header

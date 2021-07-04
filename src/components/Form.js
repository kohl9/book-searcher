import React, {useState} from 'react'
import axios from 'axios'

import BooksList from './BooksList'

import './Form.css'

export default function Form() {
    const [bookName, setBookName] = useState('')
    const [books, setBooks] = useState([])
    const [apiKey, setApiKey] = useState('AIzaSyAzZEAX7vAlEQosr_6mezg9Ui6fDnapfv4')

    const inputHandler = (e) => {
        setBookName(e.target.value)
    }

    const buttonHandler = (e) => {
        e.preventDefault()
        const formattedQuery = bookName.replace(' ', '+')
        console.log(formattedQuery)

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${formattedQuery}&key=${apiKey}`)
         .then(data => {
             console.log(data)
             setBooks(data.data.items)
         })
    }

    return (
        <div className="form-container">
            <h1>Book Searcher</h1>
            <form>
                <input onChange={inputHandler} value={bookName} placeholder="book name" />
                <button onClick={buttonHandler}>Search</button>
            </form>
            <BooksList books={books} />
        </div>
    )
}

import React from 'react'

import BookItem from './BookItem'

import './BooksList.css'

export default function BooksList({books}) {
    return (
        <div className="books-list">
            {
                books.map(elem => {
                    return <BookItem title={elem.volumeInfo.title} author={elem.volumeInfo.authors} date={elem.volumeInfo.publishedDate} img={elem.volumeInfo?.imageLinks?.thumbnail} />
                })
            }
        </div>
    )
}

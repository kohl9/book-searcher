import React from 'react'

import './BookItem.css'

export default function BookItem({title, author, date, img}) {
    return (
        <div className="book-item">
            <div className="image">
                <img src={img} />
            </div>
            <div className="description">
                <div className="title">{title}</div>
                <div className="author">{author}</div>
                <div className="date">{date}</div>
            </div>
        </div>
    )
}

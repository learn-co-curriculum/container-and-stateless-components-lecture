import React from 'react';

const Book = ({ book: { title, author } }) => {
  return (
    <div>
      <h4>Title: {title}</h4>
      <p>Author: {author}</p>
    </div>
  )
}

export default Book;
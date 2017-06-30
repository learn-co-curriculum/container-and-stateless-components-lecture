import React from 'react';
import FormInput from './FormInput';

const AddBookForm = ({ addBook, handleChange, newBook: { title, author }}) =>
  <form onSubmit={addBook}>
    <FormInput 
      labelName="Title"
      onChange={handleChange}
      type="text" 
      name="title" 
      placeholder="Book Title" 
      value={title} 
    />
    <FormInput
      labelName="Author"
      onChange={handleChange}
      type="text" 
      name="author" 
      placeholder="Book Author" 
      value={author} 
    />
    <input type="submit" value="Add Book" />
  </form>;

export default AddBookForm;
import React, { useState } from 'react';

function CommentForm({ onAddComment }) {
  const [comment, setComment] = useState('');

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim() !== '') {
      onAddComment(comment);
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={handleChange}
        placeholder="Yorumunuzu buraya yazın..."
        rows={4}
        cols={50}
      />
      <br />
      <button type="submit">Yorum Ekle</button>
    </form>
  );
}

export default CommentForm;

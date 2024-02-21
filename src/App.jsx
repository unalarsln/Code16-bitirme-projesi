import React, { useEffect, useState } from 'react';
import eczaneler from './eczaneler.json';
import './App.css';
import EczaneHaritasi from './EczaneHaritasi';
import EczaneListesi from './EczaneListesi';
import Footer from "./components/Footer";
import CommentForm from "./components/CommentForm";

function App() {
  const [eczanelerData, setEczanelerData] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const eczanelerArray = Object.values(eczaneler);
    setEczanelerData(eczanelerArray);
  }, []);

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div className="container">
      <div className="eczane-listesi-container">
        <EczaneListesi eczaneler={eczanelerData} />
      </div>
      <div className='harita-container'>
        <EczaneHaritasi eczanelerData={eczanelerData} />
      </div>
      <Footer />
      <div>
        <h1>Proje Yorumları</h1>
        <CommentForm onAddComment={handleAddComment} />
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

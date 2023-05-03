import Image from './imgage';
import React from 'react';
import catimg from './catimg.jpg'
import './App.css';

function App() {
  return (
    <main>
      <Image source={ catimg } alternativeText="Cute cat staring" />
    </main>
  );
}

export default App;

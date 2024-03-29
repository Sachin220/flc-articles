import Image from 'next/image';
import React from 'react';
import Articles from './components/articles';
import About from './components/about';
import Events from './components/events';
import Contact from './components/contacts';
import posts from '../helper/articles.json'

export default function Home() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>Foreign Language Club</h1>
      </header>
      <main>
        <About />
        <Articles posts={posts} />
        <Events />
        <Contact />
      </main>
    </div>
    </>
  );
}

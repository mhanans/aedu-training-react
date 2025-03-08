import React, { Suspense, lazy, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Post from './components/Post';
import RandomMessage from './components/RandomMessage';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import Counter from './components/Counter';
import Todos from './components/Todos';
import DataFetcher from './components/DataFetcher';
import ErrorBoundary from './components/ErrorBoundary';
import ThemeProvider from './ThemeContext';
import Button from './components/Button';
import ReduxCounter from './components/ReduxCounter';
import Home from './pages/Home';
import About from './pages/About';

const DataComponent = lazy(() => import('./components/DataComponent'));

const conceptData = {
  title: 'Components',
  description: 'UI blocks',
  image: 'path/to/image.png',
};

const todoItems = [
  { id: '1', text: 'Learn React' },
  { id: '2', text: 'Practice TypeScript' },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Post />
      <RandomMessage />
      <RandomMessage />
      <CoreConcept {...conceptData} />
      <TabButton onClick={() => console.log('Clicked!')}>Click Me</TabButton>
      <Counter />
      <Todos items={todoItems} />
      <DataFetcher />
      <ErrorBoundary>
        <Suspense fallback={<p>Loading data...</p>}>
          <DataComponent />
        </Suspense>
      </ErrorBoundary>
      <ThemeProvider>
        <Button />
      </ThemeProvider>
      <ReduxCounter />
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
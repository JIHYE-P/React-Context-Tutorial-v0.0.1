import React from 'react';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import { ValueProvider } from './contexts/ValueContext';

function App() {
  return (
    <ValueProvider>
      <div className="panes">
        <LeftPane />
        <RightPane />
      </div>
    </ValueProvider>
  )
}

export default App;

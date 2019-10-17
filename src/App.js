import React from 'react';

import './_styles.scss';

import Index from "./pages/header";
import Filter from "./pages/filter";
import List from "./pages/list";

function App() {
  return (
    <div className="app">
      <header>
        <Index />
      </header>
      <main>
        <Filter/>
        <List/>
      </main>
    </div>
  );
}

export default App;

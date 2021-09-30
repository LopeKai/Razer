import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/header/Header'
import Content from './components/layout/Content'
import Footer from './components/footer/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Content />
      <Footer />
    </Router>
  );
}

export default App;

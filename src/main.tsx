import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import PageOverlay from './components/base/PageOverlay.tsx'
import Header from './components/header/Header.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <PageOverlay>
      <App />
    </PageOverlay>
  </React.StrictMode>,
)

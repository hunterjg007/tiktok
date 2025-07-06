// Entry point imports React and components
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="p-4">
        <h1 className="text-3xl">This is the {activeTab} tab</h1>
      </main>
      <Footer />
    </div>
  );
}

import React from 'react';

export default function Header({ activeTab, setActiveTab }) {
  return (
    <header className="bg-black shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg className="w-8 h-8 text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 10L19.5 7.5M15 10V17M15 10H5M19 17H5M19 17C19 18.6569 17.6569 20 16 20H8C6.34315 20 5 18.6569 5 17M19 17C19 15.3431 17.6569 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h1 className="text-xl font-bold">QuickReel</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          {['home', 'features', 'pricing', 'dashboard'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={\`hover:text-emerald-400 transition \${activeTab === tab ? 'text-emerald-400' : ''}\`}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 transition text-sm font-medium">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black py-12 px-4 border-t border-gray-800">
      <div className="container mx-auto text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} QuickReel. All rights reserved.
      </div>
    </footer>
  );
}

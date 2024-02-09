import React from 'react';
import Navbar from './ui/Navbar';

export default function App({ children, user }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}

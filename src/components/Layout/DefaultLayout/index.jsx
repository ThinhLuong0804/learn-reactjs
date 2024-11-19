import React from 'react';
import Header from '../components/Header';
import SideBar from './SideBar';
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />

      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;

import React from 'react';

import Header from '../partials/Header';
// import Cart from '../partials/Cart'

import Footer from '../partials/Footer';


// import Checkout from '../pages/checkout';

function Soko() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        {/* <Slider /> */}

        
      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Soko;
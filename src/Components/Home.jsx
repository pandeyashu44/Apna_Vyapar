// Home.jsx
import React from 'react';
import '../Styling/Home.css';
import Cards from './Cards';

function Home() {
  return (
    <div style={{ height: '40%', width: '100%' }}>
      <img src="https://static.vecteezy.com/system/resources/previews/003/461/898/large_2x/shopping-cart-with-yellow-background-free-photo.jpg" alt="Image" style={{ maxHeight: '70%', maxWidth: '100%' }} />
      <div className='absolute top-40 left-0 right-0 bottom-90 flex items-center justify-center'>
        <div className='typing-animation text-5xl text-gray-800 font-bold font-mono'>Welcome to Apna Vyapar</div>
      </div>
      <div className='absolute top-80 left-90 right-0 bottom-0 flex items-center justify-center gap-8 mt-10'> 
        <div className="flex flex-col items-center gap-5">
          <Cards
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZz2nBkSmmPWlq0NxzPuPQv5Lwf4rEluNbcQ&usqp=CAU"
            title="User Experience"
            content="Enhancing user experience involves understanding user needs, simplifying navigation, and optimizing performance to create intuitive, accessible, and engaging interactions that drive satisfaction and loyalty."
          />
          <Cards
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVOpWsOzkdEdF4vK58eC43ipRZn59H1-DcTg&usqp=CAU"
            title="Services"
            content="From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal."
          />
        </div>
        <div className="flex flex-col items-center mx-4">
          <Cards 
            image="https://c8.alamy.com/comp/2JB5PWK/gate-of-india-hawa-mahal-taj-mahal-and-jal-mahal-in-one-collage-of-india-2JB5PWK.jpg"
            title="Our Availibility"
            content="Our availability ensures prompt assistance, with dedicated support channels accessible around the clock, ensuring uninterrupted service and timely resolution of any issues to meet our customers' needs and expectations efficiently and reliably.zards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

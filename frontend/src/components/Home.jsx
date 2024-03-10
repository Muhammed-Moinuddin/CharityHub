import React from 'react';
import education from '../assets/education.jpg';
import human_right from '../assets/human_right.jpg';
import humanitarian from '../assets/humanitarian.jpg';

const Home = () => {
  return (
    <div className='pb-8'>
      <div className="bg-gradient-to-r from-purple-500 to-red-500 text-white py-16 text-center">
        <h1 className="bg-gradient-to-r from-purple-500 to-red-500 text-4xl font-bold mb-4">Charity with Trust</h1>
        <p className="bg-gradient-to-r from-purple-500 to-red-500 text-lg mb-8">We provide a platform for every individual to donate with trust</p>
        <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-300">Get Started</button>
      </div>


      <div className="container mx-auto mt-8 flex flex-wrap justify-center">

        <div className="max-w-sm p-8 m-4 rounded-md shadow-md border border-gray-300">
        <h3 className='bg-gradient-to-r from-purple-500 to-red-500 text-white font-bold px-6 mb-3 p-2 rounded-full inline-block'>Education</h3>
          <img src={education} alt="Card 1" className="mb-4 rounded-md" />
          <h2 className="text-xl font-semibold mb-2 text-gray-300">University Fees Help</h2>
          <p className="text-white mb-4">Support students in need by contributing to their university fees. Your donation can make education accessible and empower bright minds for a better future.</p>
          <button className="bg-gradient-to-r from-purple-500 to-red-500 text-white py-2 px-4 rounded-md hover:opacity-90 focus:outline-none focus:ring focus:border-gradient">Donate</button>
        </div>

        
        <div className="max-w-sm p-8 m-4 rounded-md shadow-md border border-gray-300">
          <h3 className='bg-gradient-to-r from-purple-500 to-red-500 text-white font-bold px-6 mb-3 p-2 rounded-full inline-block'>Equality</h3>
          <img src={human_right} alt="Card 2" className="mb-4 rounded-md" />
          <h2 className="text-xl font-semibold mb-2 text-gray-300">Black Lives Matter</h2>
          <p className="text-white mb-4">Support the fight for equality and justice by donating to the Black Lives Matter cause. Your contribution helps amplify voices, challenge systemic racism, and build a more inclusive society.</p>
          <button className="bg-gradient-to-r from-purple-500 to-red-500 text-white py-2 px-4 rounded-md hover:opacity-90 focus:outline-none focus:ring focus:border-gradient">Donate</button>
        </div>

        
        <div className="max-w-sm p-8 m-4 rounded-md shadow-md border border-gray-300">
        <h3 className='bg-gradient-to-r from-purple-500 to-red-500 text-white font-bold px-6 mb-3 p-2 rounded-full inline-block'>Disaster</h3>
          <img src={humanitarian} alt="Card 3" className="mb-4 rounded-md" />
          <h2 className="text-xl font-semibold mb-2 text-gray-300">Earthquake Help</h2>
          <p className="text-white mb-4">Provide aid to communities affected by earthquakes. Your donation supports humanitarian efforts, offering relief to those in need and helping rebuild lives in the aftermath of natural disasters.</p>
          <button className="bg-gradient-to-r from-purple-500 to-red-500 text-white py-2 px-4 rounded-md hover:opacity-90 focus:outline-none focus:ring focus:border-gradient">Donate</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

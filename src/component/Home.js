import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1622964981066-a10fd0192462?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80")` }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">Hello <span className='text-pink-600'>Proactive Learner</span></h1>
            <p className="mb-5">Try Out Our Physics Courses. You can Learn How to Think in Physics Way. Not Miss This Opportunity</p>
            <Link to={'courses'}><button  className="btn btn-secondary">Get Started</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Home;
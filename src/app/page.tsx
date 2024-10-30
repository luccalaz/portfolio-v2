"use client"
import React from 'react';
import Typed from 'typed.js';
import $ from 'jquery';

export default function Home() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Lucca Lazzarini Silva' ,'a web developer', 'a quick learner', 'passionate', 'determined', 'adaptive'],
      typeSpeed: 70,
      backDelay: 2000,
      backSpeed: 30,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <header className="h-screen">
        <nav className="fixed top- w-screen h-16 border-b-[1px] border-b-zinc-800 text-zinc-400 bg-zinc-900">
          <div className="w-[90vw] md:w-[80vw] h-full m-auto flex justify-between items-center">
            <span className="text-xl text-white font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              Lucca Lazzarini Silva
              </span>
            </span>
            <div className="hidden md:flex gap-3">
              <a href="" className="px-3 py-1 transition-colors rounded-3xl text-zinc-200 bg-zinc-800">Home</a>
              <a href="" className="px-3 py-1 transition-colors rounded-3xl hover:text-zinc-300 hover:bg-zinc-800">Resume</a>
              <a href="" className="px-3 py-1 transition-colors rounded-3xl hover:text-zinc-300 hover:bg-zinc-800">Projects</a>
              <a href="" className="px-3 py-1 transition-colors rounded-3xl hover:text-zinc-300 hover:bg-zinc-800">Contact</a>
            </div>
            <div className="block md:hidden p-2 rounded-lg border cursor-pointer transition-colors text-zinc-200 border-zinc-700 hover:bg-zinc-800"
                 onClick={() => $('#mobileNav').slideToggle()}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          </div>
        </nav>
        <nav id="mobileNav" className="hidden fixed top-16 w-screen h-screen border-b-[1px] border-b-zinc-800 text-zinc-400 bg-zinc-900">
          <div className="w-[90vw] m-auto flex flex-col py-5 gap-3 text-lg">
            <a href="" className="bg-zinc-800 text-zinc-200 px-5 py-2 rounded-md">Home</a>
            <a href="" className="hover:bg-zinc-800 transition-colors px-5 py-2 rounded-md">Resume</a>
            <a href="" className="hover:bg-zinc-800 transition-colors px-5 py-2 rounded-md">Projects</a>
            <a href="" className="hover:bg-zinc-800 transition-colors px-5 py-2 rounded-md">Contact</a>
          </div>
        </nav>
        <section className="flex items-center h-full text-white bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(/images/hero-bg.jpg)`}}>
          <div className="w-[90vw] md:w-[80vw]  mx-auto flex justify-between">
            <div className="flex flex-col justify-center gap-5 flex-shrink">
              <div className='text-5xl md:text-6xl font-bold'>
                <div>Hello,</div>
                <div>I'm <span ref={el} className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text"/></div>
              </div>
              <div className='text-sm md:text-base font-medium text-zinc-300'>
              And this is my portfolio website! Please go ahead and explore to find out all the relevant work and projects I've done so far. I hope you'll find some really inspiring creations around here!
              </div>
            </div>
            <img className="hidden xl:block" src='/images/hero-img.png' width={500}/>
          </div>
        </section>
      </header>
      <main className='h-screen bg-zinc-900'></main>
    </div>
  );
  
}
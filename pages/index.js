import Head from 'next/head'
import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import Image from 'next/image';
import ivory from '../public/possible_image.jpg';
import c from '../public/C.png';
import python from '../public/python.png';
import rust from '../public/rust.png';
import leadership from '../public/leadership.png';
import teamwork from '../public/teamwork.png';
import resourceful from '../public/resourceful.png';
import server from '../public/server.png';
import virutal from '../public/virtual.png';
import mysql from '../public/mysql.png';
import deducklet from '../public/deducklet.png';
import uht from '../public/uht.png';
import cards from '../public/52cards.png';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Emma Gillespie Portfolio</title>
        <meta name="description" content="My personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-b from-white to-gray-200 px-10 md:px-20 lg:px-40">
        {/* Section for about me */}
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">aka IvoryCoding</h1>
            <ul className="flex items-center">
              <li><a href="#" className="bg-gradient-to-r from-yellow-600 to-yellow-900 text-white px-4 py-2 rounded-mb ml-8">My Blog</a></li>
            </ul>
          </nav>

          <div className="text-center px-10">
            <h2 className="text-5xl py-2 text-yellow-700 fond-medium md:text-6xl">Emma Gillespie</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Pronouns: (she/her)</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
            My goal is to become a pentester or software developer with a security background. Learning new skills and building
            upon skills that I already have.</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 pt-10 text-gray-600">
            <a href='https://github.com/IvoryCoding' target='_blank'><AiFillGithub/></a>
            <a href='https://www.linkedin.com/in/emma-gillespie-6209a5228/' target='_blank'><AiFillLinkedin/></a>
            <a href='https://www.youtube.com/channel/UC5ErFYlTfJZC3Dnd8bqMFUA' target='_blank'><AiFillYoutube/></a>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-yellow-700 to-yellow-50 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={ivory} layout='fill' objectFit='cover' alt='emma gillespie'/>
          </div>
        </section>

        {/* Section for skills */}
        <section className='pt-10'>
          <div>
            <h3 className="text-3xl py-1">My Skills</h3>
          </div>
          {/* This will hold all of the skills */}
          <div className='font-burtons'>
            <div className="flex flex-row justify-center gap-5">
              <div className="text-center shadow-lg p-10 rounded-m my-10 w-25 h-25 basis-1/3">
                <Image src={python} width={100} height={100} alt='python'/>
                <h3 className="text-l font-medium pt-8 pb-2">Python</h3>
                <h4 className="py-2 text-yellow-700">9/10</h4>
              </div>
              <div className="text-center shadow-lg p-10 rounded-m my-10 w-25 h-25 basis-1/3">
                <Image src={rust} width={100} height={100} alt='rust'/>
                <h3 className="text-l font-medium pt-8 pb-2">Rust</h3>
                <h4 className="py-2 text-yellow-700">8/10</h4>
              </div>
              <div className="text-center shadow-lg p-10 rounded-m my-10 w-25 h-25 basis-1/3">
                <Image src={c} width={100} height={100} alt='c'/>
                <h3 className="text-l font-medium pt-8 pb-2">C</h3>
                <h4 className="py-2 text-yellow-700">7/10</h4>
              </div>
            </div>
            <div className="flex flex-row justify-center gap-5">
              <div className="text-center shadow-lg p-10 rounded-m my-10 w-25 h-25 basis-1/3">
                <Image src={mysql} width={100} height={100}/>
                <h3 className="text-l font-medium pt-8 pb-2">MySQL</h3>
                <h4 className="py-2 text-yellow-700">8/10</h4>
              </div>
              <div className="text-center shadow-lg p-10 rounded-m my-10 w-25 h-25 basis-1/3">
                <Image src={virutal} width={100} height={100}/>
                <h3 className="text-l font-medium pt-8 pb-2">Virtual Machines</h3>
                <h4 className="py-2 text-yellow-700">9/10</h4>
              </div>
              <div className="text-center shadow-lg p-10 rounded-m my-10 w-25 h-25 basis-1/3">
                <Image src={server} width={100} height={100}/>
                <h3 className="text-l font-medium pt-8 pb-2">Server Management</h3>
                <h4 className="py-2 text-yellow-700">8/10</h4>
              </div>
            </div>
            <div className="flex flex-row justify-center gap-5">
              <div className="text-center shadow-lg p-10 rounded-m my-10 w-25 h-25 basis-1/3">
                <Image src={teamwork} width={100} height={100}/>
                <h3 className="text-l font-medium pt-8 pb-2">Teamwork</h3>
                <h4 className="py-2 text-yellow-700">8/10</h4>
              </div>
              <div className="text-center shadow-lg p-10 rounded-m my-10 w-25 h-25 basis-1/3">
                <Image src={leadership} width={100} height={100}/>
                <h3 className="text-l font-medium pt-8 pb-2">Leadership</h3>
                <h4 className="py-2 text-yellow-700">9/10</h4>
              </div>
              <div className="text-center shadow-lg p-10 rounded-m my-10 w-25 h-25 basis-1/3">
                <Image src={resourceful} width={100} height={100}/>
                <h3 className="text-l font-medium pt-8 pb-2">Resourceful</h3>
                <h4 className="py-2 text-yellow-700">8/10</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Section for projects */}
        <section className='pt-10'>
          <div>
            <h3 className="text-3xl py-1">My Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800">Over the years I have created and curated my own 
            <span className="text-yellow-700"> home lab</span>, developed and created multiple 
            <span className="text-yellow-700"> GitHub repositories</span> and participated in 
            <span className="text-yellow-700"> Capture The Flag</span> competitions.</p>
          </div>
          <div className="py-5 md:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 lg:basis-1/3 flex-1">
              <a href='https://github.com/IvoryCoding/De-Ducklet' target='_blank'><Image src={deducklet} width={100} height={100} alt='deducklet'/></a>
              <h3 className="text-l font-medium pt-8 pb-2">De-Ducklet</h3>
              <p className="py-2"><span className='text-yellow-600'><a href='https://github.com/IvoryCoding/De-Ducklet' target='_blank'>De-Ducklet </a></span>
               is a application I had created in visual basic. In total this project was 1000+
               lines of code. It is an app that gives tips on fixing bugs and where you can post questions and other can
               answer your questions similar to StackOverflow.</p>
              <h4 className="py-2 text-yellow-700">Skills learned:</h4>
              <p className="text-gray-800 py-1">MySQL database management</p>
              <p className="text-gray-800 py-1">Software Front End development</p>
              <p className="text-gray-800 py-1">UI work flow</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 lg:basis-1/3 flex-1">
              <a href='https://github.com/IvoryCoding/52_cards_project' target='_blank'><Image src={cards} width={100} height={100} alt='52 cards'/></a>
              <h3 className="text-l font-medium pt-8 pb-2">52 Cards Project</h3>
              <p className="py-2"><span className="text-yellow-600"><a href='https://github.com/IvoryCoding/52_cards_project' target='_blank'>52 Cards </a></span>
               is a project with various programming projects and CTF/Cyber security projects.
               These projects will be created in many different languages to push my skill level higher.</p>
              <h4 className="py-2 text-yellow-700">Skills learned:</h4>
              <p className="text-gray-800 py-1">Good research</p>
              <p className="text-gray-800 py-1">Building off fundamentals</p>
              <p className="text-gray-800 py-1">Diverse with approaches</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 lg:basis-1/3 flex-1">
              <a href='https://github.com/IvoryCoding/uht-rustgui' target='_blank'><Image src={uht} width={100} height={100} alt='uht'/></a>
              <h3 className="text-l font-medium pt-8 pb-2">Ultimate Hacking Tool</h3>
              <p className="py-2"><span className='text-yellow-600'><a href='https://github.com/IvoryCoding/uht-rustgui' target='_blank'>Ultimate Hacking Tool</a></span> is a tool that will run various pentesting scripts
               that have been developed by myself and help create a report. This project is to help me learn the programming language
               Rust.</p>
              <h4 className="py-2 text-yellow-700">Skills learned:</h4>
              <p className="text-gray-800 py-1">Reading and Writing json</p>
              <p className="text-gray-800 py-1">Updating and using crates</p>
              <p className="text-gray-800 py-1">Full stack software development</p>
            </div>
            {/* Copy these cards for projects */}
          </div>
        </section>

        {/* Section for CTF writeups */}
        {/* 
        <section className='pt-10'>
          <div>
            <h3 className="text-3xl py-1">CTF writeups</h3>
            <p className="text-md py-2 leading-8 text-gray-800">I have participated in many CTF competitions.
             Some of note are:
            <span className="text-yellow-700"> Bsides Calgary</span>, 
            <span className="text-yellow-700"> CyberSci</span>, and
            <span className="text-yellow-700"> MagpieCTF</span>.</p>
            <p>In this section you will find a couple blog posts descibing my experience, flags I found and how,
               and overall skills that I had learned throughout the CTF competition.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/4 flex-1">
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className="basis-1/4 flex-1">
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className="basis-1/4 flex-1">
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout='responsive'/>
            </div>
          </div>
        </section>
        */}

        {/* Section for the footer */}
        <section>
        </section>
      </main>
    </div>
  );
}

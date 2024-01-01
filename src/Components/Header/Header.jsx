import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

import htmlimg from './../../assets/html-5.png'
import cssimg from './../../assets/css-3.png'
import javascriptimg from './../../assets/java-script.png'
import shubhamlogo from './../../assets/shubhamlogo.png'
import linkedin from './../../assets/linkedin.png'
import githubheader from './../../assets/githubheader.png'

import react from './../../assets/react.png'
import redux from './../../assets/redux.png'
import node from './../../assets/node.png'
import express from './../../assets/express.png'
import mongodb from './../../assets/mongodb.png'
import mysql from './../../assets/mysql.png'

import api from './../../assets/api.png'
import graphql from './../../assets/graphql.png'
import git from './../../assets/git.png'
import github from './../../assets/github.png'
import jest from './../../assets/jest.png'
import jira from './../../assets/jira.png'
import docker from './../../assets/docker.png'
import Azure from './../../assets/Azure.png'
import vector from './../../assets/vector.svg'
import certifict from './../../assets/mcertification.png'
import broker from './../../assets/broker.png'
import crypto from './../../assets/crypto.png'
import car from './../../assets/car.png'
import { FaGithub } from "react-icons/fa";
import './Style.scss'
import Contact from './Contact'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();

    const [typewriter] = useTypewriter({
        words: ['React Frontend Developer', 'Web Designer', 'MERN Full Stack Developer'],
        loop: {},
        typeSpeed: 100,
        delaySpeed: 100,
    })

    const images = [
        { src: htmlimg, name: 'HTML' },
        { src: cssimg, name: 'CSS' },
        { src: javascriptimg, name: 'JavaScript' },
        { src: react, name: 'React' },
        { src: redux, name: 'Redux' },
        { src: node, name: 'Node' },
        { src: express, name: 'Express' },
        { src: mongodb, name: 'MongoDB' },
        { src: mysql, name: 'MySQL' },
        { src: jest, name: 'Jest' },
        { src: api, name: 'Rest API' },
        { src: graphql, name: 'GraphQL' },
        { src: git, name: 'Git' },
        { src: github, name: 'GitHub' },
        { src: jira, name: 'Jira' },
        { src: docker, name: 'Docker' },
        { src: Azure, name: 'Azure' },

    ];

    const certificat = [
        { img: certifict, name: 'Microsoft Azure Fundamentals - AZ-900', org: 'Microsoft' }
    ];

    const projects = [
        { img: broker, stack: 'MERN Stack', title: 'NoBroker Website Clone', desc: 'This project is created for understanding about the real world projects', prevlink: '#', codelink: 'https://github.com/Sankushe123/noBrokerCloneApp.git' },
        { img: crypto, stack: 'React , API', title: 'Crypto Currency Analyzer', desc: 'In this analyzer project you can easily current cost of currency in a single platform.', prevlink: 'https://cryptoworld13.netlify.app/', codelink: 'https://github.com/Sankushe123/Crypto-world.git' },
        { img: car, stack: 'Html, Css, JavaScript', title: 'Ultimate Car Game', desc: 'This game is created using html, css, Javascript. This project helped me to build my javascript logic.', prevlink: '#', codelink: 'https://github.com/Sankushe123/Ultimate_car_game.git' }
    ];

    return (
        <div class="z-10">
            <section class="body-font max-h-screen ">
                <nav class=" p-4 ">
                    <div class="navcls container mx-auto flex md:px-8 items-center justify-between">
                        <div class="flex items-center">
                            <img src={shubhamlogo} alt="shubham logo" className='w-56  -ml-10'/>
                        </div>
                        <div className='cursor-pointer'>
                            <button class="cursor-pointer transition-all bg-indigo-500 text-white px-6 py-2 rounded-lg
                            border-blue-600
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[0px] hover:border-b-[4px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" >
                                Open to Work
                            </button>
                            {/* onClick={()=>{navigate('/dashboard')}} */}
                        </div>
                    </div>
                </nav>
            </section>
            <section class="text-gray-600 body-font">
                <div className="headercls container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <span className='' style={{ fontSize: '1.2rem' }}>Hello I'm,</span>
                        <h1 class="headnamecls title-font sm:text-5xl md:text-5xl mb-1 font-bold text-gray-900 font-headings">Shubham Ankushe
                        </h1>
                        <span className="animetextcls text-indigo-500 font-gametext" style={{ fontWeight: 'bold' }}>&#10147; {typewriter}</span>
                        <p class="mb-8 leading-relaxed">Immediate Joiner as Developer. I can create a well-designed and SEO-friendly website and have the ability to use cloud services to make the website scalable. Open to work as Software Engineer, React Web Developer, Mern Developer.</p>
                        <div class="flex justify-center">
                            <a href='https://drive.google.com/file/d/131HcMDx_m3iXvw8AtQiDknA8cVeV5N1e/view?usp=sharing' target='_blank' class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">View Resume</a>
                            <a href='/contact' class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Contact</a>
                        </div>
                        <span class="flex mt-7">
                            <a href='https://github.com/Sankushe123' target='_blank' class="text-gray-500 w-7 h-7">
                                <img src={githubheader} alt="githubheader png" />
                            </a>
                            <a href='https://www.linkedin.com/in/ishubhamankushe/' target='_blank' class="ml-3 text-gray-500 w-7 h-7">
                                <img src={linkedin} alt="linkedin png" />
                            </a>
                        </span>
                        
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src={vector} />
                        
                    </div>
                </div>
            </section>


            <section class=" body-font">
                <div class="container px-2 py-20 mx-auto ">
                    <div class="flex flex-col md:pr-2 md:mb-0 mb-6  w-full md:w-auto md:text-left text-center">
                        <h1 class="text-3xl text-indigo-500 tracking-widest font-medium title-font mb-1">Technical Skills & certification</h1>

                    </div>
                    <div className=" flex flex-wrap justify-center w-full mx-auto mt-10">
                        {images.map((image, index) => (
                            <div key={index} className="m-2 text-center px-8 py-5">
                                <img src={image.src} alt={image.name} className="w-16 h-16 object-cover " />
                                <span className="block mt-2 font-bold font-headings">{image.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Certifictions section */}
            <section class="text-gray-600 body-font">
                <div class="certifictcls container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src={certifict} />
                    </div>
                    <div class="certidesc lg:flex-grow md:w-3/4 w-1/3 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font md:text-3xl mb-4 font-medium text-gray-900">Microsoft Azure Fundamentals - AZ-900</h1>
                        <h2 class="title-font md:text-2xl mb-4 font-medium text-gray-900">Organization - Microsoft</h2>
                        <p class="mb-8 leading-relaxed">The AZ 900 exam is designed for candidates looking to demonstrate foundational-level knowledge of cloud services and how those services are provided with Microsoft Azure.</p>

                    </div>
                </div>
            </section>
            <section class=" body-font">
                <div class="container px-2 py-20 mx-auto ">
                    <div class="flex flex-col md:pr-2 md:mb-0 mb-6  w-full md:w-auto md:text-left text-center">
                        <h1 class="text-3xl text-indigo-500 tracking-widest font-medium title-font mb-1">Technical Projects</h1>
                    </div>
                    <div class="container px-5 py-24 mx-auto">

                        <div class="flex flex-wrap -m-4">

                            {projects.map((project) => (
                                <div class=" p-4 md:w-1/3 ">
                                    <div class="card h-full border-2 border-opacity-60 rounded-lg overflow-hidden">
                                        <img class="lg:h-48 md:h-48 w-full object-cover object-center rounded-lg overflow-hidden" src={project.img} alt="blog" />
                                        <div class="p-6">
                                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Tesch Stack : {project.stack}</h2>
                                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{project.title}</h1>
                                            <p class="leading-relaxed mb-3">{project.desc}</p>
                                            <div class="flex items-center justify-between flex-wrap ">
                                                <a href={project.prevlink} class="text-indigo-500 inline-flex items-center md:mb-2 cursor-pointer lg:mb-0">Preview
                                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                                <a href={project.codelink} class=' py-2 px-3 p-2 bg-lightOrange text-white cursor-pointer flex align-middle items-center'>
                                                    <span className='mr-2 font-gametext font-bold '>Code </span>
                                                    <span><FaGithub size={'1.5rem'} /></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>
            <section id='Contact'>
                <Contact />
            </section>
            <footer class="text-gray-600 body-font">
                <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <span class="ml-3 text-3xl font-bold">Shubham</span>
                    </a>
                    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 #Shubham

                    </p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a href='https://github.com/Sankushe123' target='_blank' class="text-gray-500">
                            <FaGithub className='w-5 h-5' />
                        </a>
                        <a href='https://www.linkedin.com/in/ishubhamankushe/' target='_blank' class="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>

                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Header

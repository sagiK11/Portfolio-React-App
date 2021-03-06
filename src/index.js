import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


//Mobile Menu
const burgerIcon = document.querySelector('#burger');
const navLinks = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
  navLinks.classList.toggle('is-active');
  burgerIcon.classList.toggle('is-active');
})

//Project Cards
const projectBoxs = Array.from(document.getElementsByClassName("project-box"))

//Hover Effect
projectBoxs.map((project) => {
  const content = project.querySelector('.box-content')
  const logo = project.querySelector('.logo')
  const text = project.querySelector('.box-description')
  const links = project.querySelector('.columns')

  const addAnimation = (e) => {
    let ax = (window.innerWidth / 2 - e.pageX) / 20;
    let rax = ax / 3

    project.style.cssText = `
      -webkit-transform: rotateZ(` + rax + `deg) rotateY(` + ax + `deg);
      -moz-transform: rotateZ(`+ rax + `deg) rotateY(` + ax + `deg); 
      -ms-transform: rotateZ(`+ rax + `deg) rotateY(` + ax + `deg); 
        transform: rotateZ(`+ rax + `deg) rotateY(` + ax + `deg);  `;
    logo.style.cssText = ` 
    -webkit-transform: translateZ(`+ 110 + `px) translateY(` + -10 + `px);
    -moz-transform: translateZ(`+ 110 + `px) translateY(` + -10 + `px);
     -ms-transform: translateZ(`+ 110 + `px) translateY(` + -10 + `px);   
        transform: translateZ(`+ 110 + `px) translateY(` + -10 + `px); 
        `;
    text.style.cssText = `
     -webkit-transform: translateZ(` + 100 + `px);
     -moz-transform: translateZ(` + 100 + `px);
     -ms-transform: translateZ(`+ 100 + `px);
       transform: translateZ(` + 100 + `px);
    `;
  }

  const resetAnimation = () => {
    project.style.transform = "none";
    logo.style.transform = "none";
    text.style.transform = "none";
  }

  project.addEventListener('mouseleave', resetAnimation)
  content.addEventListener('mousemove', addAnimation)
  links.addEventListener('mousemove', resetAnimation)

})





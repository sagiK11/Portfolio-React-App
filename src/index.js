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
const projectBox = Array.from(document.getElementsByClassName("project-box"))
console.log(projectBox)

projectBox.map((project) => {

  project.addEventListener('mousemove', (e) => {
    const logo = project.querySelector('.logo')
    const text = project.querySelector('.box-description')
    let ax = (window.innerWidth / 2 - e.pageX) / 20;

    project.style.transform = "rotateZ(" + ax / 3 + "deg) rotateY(" + ax + "deg)";
    logo.style.transform = "translateZ(" + 100 + "px) translateY(" + -10 + "px)"
    text.style.transform = "translateZ(" + 100 + "px)"
  })

  project.addEventListener('mouseleave', () => {
    const logo = project.querySelector('.logo')
    const text = project.querySelector('.box-description')
    project.style.transform = "none";
    logo.style.transform = "none";
    text.style.transform = "none";
  })

})



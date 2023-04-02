'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// UPDATED
const headerDIV=document.querySelector(".header");
const nav=document.querySelector(".nav");
// UPDATED

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// UPDATED

// const addElement=document.createElement("div");
// addElement.classList.add("cookie-message");
// addElement.innerHTML="<p>This is the Added element</p><button class='btn'>This is button</button>";
// headerDIV.append(addElement);


// 3
const dynamicHeight=nav.getBoundingClientRect().height;
const callBack=function(entries){
  const [entry]=entries;
  
  if(!entry.isIntersecting)nav.classList.add("sticky");
  else nav.classList.remove("sticky");
} 

// 1
const observer=new IntersectionObserver(callBack,{
  root:null,
  threshold:0,
  rootMargin:`-${dynamicHeight}px`
});

// 2
observer.observe(headerDIV);

// UPDATED


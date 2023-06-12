const allMicrosoft = document.getElementById('all-microsoft');
const all = document.getElementById('all');

allMicrosoft.addEventListener('click',() =>{

    all.classList.toggle('show')
    allMicrosoft.classList.toggle('borderDash')

})

const sign = document.getElementById('sign');
const user = document.getElementById('user');
const outUser = document.getElementById('out-user');

user.addEventListener('click',() =>{
    sign.classList.toggle('show');
    outUser.classList.toggle('dashed')
    
});


  // section 

  let intervalId;

  

  const playPaused = document.getElementById('play-paused');
  playPaused.addEventListener('click',() =>{   
    playPaused.classList.add('dashed')
    left.classList.remove('dashed');
    right.classList.remove('dashed');  
    })

 
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");

playButton.addEventListener("click", () => {
  playButton.classList.add("hidden");
  pauseButton.classList.remove("hidden");
  playButton.classList.add('dashed')

  
  // Stop the automatic slide change
  clearInterval(intervalId);
});


pauseButton.addEventListener("click",() => {
  pauseButton.classList.add("hidden");
  playButton.classList.remove("hidden");
  
  // Resume the automatic slide change
  intervalId = setInterval(nextSlide, 5000);

});


  const left = document.getElementById('left');
  const right = document.getElementById('right');

  const section1 = document.getElementById('section-1');
  const section2 = document.getElementById('section-2');

  
const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');
const circle4 = document.getElementById('circle4');


  left.addEventListener('click',() =>{
  left.classList.add('dashed')
  playPaused.classList.remove('dashed');
  right.classList.remove('dashed');


  })

  right.addEventListener('click',() =>{
  right.classList.add('dashed')
  playPaused.classList.remove('dashed');
  left.classList.remove('dashed');

  })

  const slides = document.querySelectorAll('.sec');
  let activeSlide = 0;

  
  // Function to change the slide to the next one
  function nextSlide() {
    activeSlide++;
  
    if (activeSlide > slides.length - 1) {
      activeSlide = 0;
    }
  
    setActiveSlide();
  }
  
  // Function to set the active slide and update the classes
  function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('next'));
    slides[activeSlide].classList.add('next');

    // Update icon classes based on active slide

  circle1.classList.remove('fa-solid');
  circle3.classList.remove('fa-solid');

  if (activeSlide === 0 || activeSlide === 2) {
    circle1.classList.add('fa-solid');
  } else {
    circle3.classList.add('fa-solid');
  }
  }
  
  // Click event listeners for the previous and next buttons
  right.addEventListener('click', () => {
    nextSlide();
  });
  
  left.addEventListener('click', () => {
    activeSlide--;
  
    if (activeSlide < 0) {
      activeSlide = slides.length - 1;
    }
  
    setActiveSlide();
  });

  setActiveSlide();
  
  // Automatic slide change every 5 seconds
  
  intervalId = setInterval(nextSlide, 5000);

// logos 
const links =document.querySelectorAll('.link');

links.forEach((link) =>{
 link.addEventListener('click',() =>{
  link.classList.toggle('dot')

 })
})









  // last 

    // Add event listener to the document
document.addEventListener('click', (event) => {
  const targetElement = event.target;

  // Check if the clicked element is outside of user and sign
  if (!user.contains(targetElement) && !sign.contains(targetElement)) {
    sign.classList.remove('show');
    
  }
  // Check if the clicked element is outside of user and sign
  if (!allMicrosoft.contains(targetElement) && !all.contains(targetElement)) {
    all.classList.remove('show');
    
  }
  // Check if the clicked element is outside of user and sign
  if (!all.contains(targetElement) && !allMicrosoft.contains(targetElement)) {
   allMicrosoft.classList.remove('border');
    
  }
  if(!left.contains(targetElement)){
    left.classList.remove('dashed')
   
  }
  if(!right.contains(targetElement)){
    right.classList.remove('dashed')
   
  }
  if(!playPaused.contains(targetElement)){
    playPaused.classList.remove('dashed')
   
  }
  if(!links.contains(targetElement)){
    links.classList.remove('dot')
   
  }
});



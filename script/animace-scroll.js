// Moje předpřipavené animace
/* Stačí napojit do souboru, přidělit classy  */


/* 
Animace vysunutí z levého okraje 
*/

// Najde všechny prvky s clásou animace
const animationL = document.querySelectorAll('.a-move-left')

// Přidělí se pozrovatel
const observerL = new IntersectionObserver((a) => {
    // Při najtetí se přiděluje classa která přepíše původní příkaz a po odjetí znova
    a.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('a-move-left-after')
        }
            // else {
            //     entry.target.classList.remove('a-move-left-after')
            // }
        
    })
},
// Zpoždění
   { threshold: 0.1
   }
   );
//Prochází dokola všechny animace
  for (let i = 0; i < animationL.length; i++) {
   const elementsL = animationL[i];

    observerL.observe(elementsL);
  } 







/* 
Animace vysunutí z pravého okraje 
*/

const animationR = document.querySelectorAll('.a-move-right')

// Přidělí se pozrovatel
const observerR = new IntersectionObserver((a) => {
    a.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('a-move-right-after')
        }
            // else {
            //     entry.target.classList.remove('a-move-right-after')
            // }
        
    })
},

   { threshold: 0.1
   }
   );

  for (let i = 0; i < animationR.length; i++) {
   const elementsR = animationR[i];

    observerR.observe(elementsR);
  } 



  
/* 
Animace Scale z 0 na 100% 
*/

const animationS = document.querySelectorAll('.a-scale-nula-max')

// Přidělí se pozrovatel
const observerS = new IntersectionObserver((a) => {
    a.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('a-scale-nula-max-after')
        }
            // else {
            //     entry.target.classList.remove('a-scale-nula-max-after')
            // }  
    })
},

   { threshold: 0.1
   }
   );

  for (let i = 0; i < animationS.length; i++) {
   const elementsS = animationS[i];

    observerS.observe(elementsS);
  } 


  /* 
Animace Scale z 0 na 100%  + rotate
*/

const animationSR = document.querySelectorAll('.a-scale-nula-max-rotate')

// Přidělí se pozrovatel
const observerSR = new IntersectionObserver((a) => {
    a.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('a-scale-nula-max-rotate-after')
        }
            // else {
            //     entry.target.classList.remove('a-scale-nula-max-rotate-after')
            // }  
    })
},

   { threshold: 0.1
   }
   );

  for (let i = 0; i < animationSR.length; i++) {
   const elementsSR = animationSR[i];

    observerSR.observe(elementsSR);
  } 
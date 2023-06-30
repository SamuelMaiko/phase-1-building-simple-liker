// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// const modal=document.querySelector('#modal')
// modal.classList.add('hidden')

const like=document.getElementsByClassName('like-glyph')
console.log(like)

Array.from(like).forEach(function(eachBtn) {
  // Your code here for each element
eachBtn.addEventListener('click',()=>{

  mimicServerCall()
  .then( ()=>{

  if(eachBtn.innerHTML==='♡'){
    eachBtn.innerHTML='♥'
    eachBtn.classList.add('activated-heart')
  }
  else{
    eachBtn.innerHTML='♡'
    eachBtn.classList.remove('activated-heart')
  }
    
  })
  .catch(error => {
    const modal2=document.getElementByid('modal')
    modal2.classList.remove('hidden')
    const modalMessage=document.querySelector('#modal-message')
    console.log(modalMessage)
    modalMessage.innerHTML=error
    .setTimeout(function(){
      
      modal2.classList.add('hidden')
    },3000)
  })
})
});
// like.forEach(eachBtn => console.log(eachBtn))

// like.forEach(eachBtn => eachBtn.addEventListener('click',()=>{

//   mimicServerCall()
//   .then(data =>{

//   if(eachBtn.innerHTML==='♡'){
//     eachBtn.innerHTML='♥'
//     eachBtn.classList.add('activated-heart')
//   }
//   else{
//     eachBtn.innerHTML='♡'
//     eachBtn.classList.remove('activated-heart')
//   }
    
//   })
//   .catch(error => {
//     // const modal=document.querySelector('#modal')
//     modal.classList.remove('hidden')
//     const modalMessage=document.querySelector('#modal-message')
//     modalMessage.textContent=error
//     .setTimeout(function(){
//       modal.classList.add('hidden')
//     },3000)
//   })
// }))


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

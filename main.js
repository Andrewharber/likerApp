// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//let errorBannerP = document.getElementById('modal-message')
// let errorBanner = document.getElementById('modal')
// let element = document.getElementsByClassName('.like-glyph')

// let removeError = function() {errorBanner.classList.add('hidden')}
// removeError()


// //document.addEventListener("click",e => {
// //  (e.target.matches('.like-glyph'))
// //})

// document.addEventListener("pointerEvent",e => {
//   (e.target.matches('.like-glyph'));mimicServerCall()
//   .then((likePost))
//   .catch((errorWarning))
//   }
// )

//   function likePost(mimicServerCall,resolve) { 
//   if (element = EMPTY_HEART)
//      element = element.classList.add('.activated-heart');
//   else (element = FULL_HEART) =>
//       element= element.classList.remove('.activated-heart')}
  
//   function errorWarning(mimicServerCall,reject){
//     errorBanner.classList.remove("hidden")
//     errorBannerP.innerHTML = "Random server error. Try again."
//     setTimeout(removeError,3000)
//   }
const hearts = document.getElementsByClassName('like-glyph')

for (const heart of hearts){
  heart.addEventListener('click',callBack)
}
 function callBack(e){
  const heart = e.target
  mimicServerCall()
  .then(function (){
    if (heart.innerText === EMPTY_HEART){
      heart.innerText = FULL_HEART
      heart.className = "activated-heart"
    }
    else {
      heart.innterText = EMPTY_HEART
      heart.className = ""
    }
  })
  .catch( function(error){
   const modal = document.getElementsById('modal')
   modal.className = ""
   modal.innerText = error
   setTimeout(() => {
    modal.className = "hidden"
   },3000);
  })
}
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

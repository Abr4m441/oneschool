// let header = document.querySelector('.header')
// let logo = document.querySelector('.logo')
// let links = document.querySelectorAll('.header ul li a')
// let next_btn = document.querySelector('.next')
// let prev_btn = document.querySelector('.prev')
// let cards = document.querySelectorAll('.slid-courses .card')
// let bar_btn = document.getElementById('side_bar')
// let xmark = document.getElementById('close')
// let sideNav = document.querySelector('.resNav')

// let index;

// active()
// window.onscroll = function() {
//     if(scrollY>20) {
//         header.style.backgroundColor='rgb(89 206 157'
//         header.style.position='fixed'
//         logo.style.color='#000';
       
//     }
//     else {
//         header.style.backgroundColor='transparent'
//         logo.style.color='#fff';
    
//     }
//     (scrollY>=0&&scrollY<678)?links[0].classList.add('active'):links[0].classList.remove('active');
//     (scrollY>=678&&scrollY<1544)?links[1].classList.add('active'):links[1].classList.remove('active');
//     (scrollY>=1544&&scrollY<3329)?links[2].classList.add('active'):links[2].classList.remove('active');
//     (scrollY>=3329&&scrollY<4973)?links[3].classList.add('active'):links[3].classList.remove('active');
    
   
   

   
// }
// //resposive header 
// bar_btn.onclick = function() {
//    sideNav.style.right='0'
//    xmark.onclick = function() {
//     sideNav.style.right='-220px'
//    }
   
// }

// //slider part
// /*------------------------------------------*/

// //show the first of three cards
// firstSlide()
// //next of three cards 
// next_btn.onclick = function() {
//     cards.forEach(card=>{
//         card.style.display='none'
//     })
//     index++;
//     if(index>1) {
//         firstSlide()
//     }
//     else {
//         for(let i=3; i<cards.length; i++) {
//             cards[i].style.display='block'

//         }
//     }
// }
// prev_btn.onclick = function() {
//     cards.forEach(card=>{
//         card.style.display='none'
//     })
//     index++;
//     if(index>1) {
//         firstSlide()
//     }
//     else {
//         for(let i=3; i<cards.length; i++) {
//             cards[i].style.display='block'

//         }
//     }
// }






// function firstSlide() {
// index=0; 
// for(let i=0; i<cards.length/2; i++){
//     cards[i].style.display='block'
// }

// }
// function active() {
//     links.forEach(link=>{
//         link.addEventListener('click',function(){
//             links.forEach(link=>{
//                 link.classList.remove('active')
//             })
//             this.classList.add('active')
//         })
//     })
// }
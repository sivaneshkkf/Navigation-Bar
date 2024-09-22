// const ulEl = document.querySelector('.nav ul');


// ulEl.addEventListener("click", (e) => {
//     const liEl = e.target.closest("li");
//     ulEl.querySelectorAll("li").forEach(li => {
//         li.classList.remove("active");
//     })
    
//     liEl.classList.add("active");
//     selected = liEl;
// });


// // Closures
// function outerFun(points) {
//     let val=points

//     function add(points) {
//         return val += points
//     }

//     function remove(points){
//         return val -= points
//     }

//     function total() {
//         return val
//     }

//     return { add, remove, total}
// }

// const func= outerFun(100);

// console.log(func.add(10),
// func.remove(60),
// func.total()
// );


// Call back

// function callBack(myname){
//        setTimeout(() => {
//         console.log("GoodBye "+myname);
//        }, 3000);
        
// }

// function greetUser(name, call) {
//     console.log("hi "+ name)

//     call(name)
// }


// greetUser("Siva", callBack)



// function callBack(mes, time) {
//     setTimeout(() => {
//         console.log(mes)
//     }, time);
// }

// function message(name, call) {
//     console.log("hi " + name)

//     call("I am Doctor Siva, how can i help you?", 3000)
//     call("you will be alright, take medicine", 6000)
// }

// message("Trish", callBack)


// const numbers = [1, 5, 8, 10];

// const messages = ["Hi", "I am Doctor Siva, how can I help you?", "You will be alright, take medicine"];
// let count=0;  
// numbers.forEach((num) => {
   
//     // Check to ensure 'num' does not exceed message array bounds
//     if (messages.length >= count) {
//         setTimeout(() => {
//             greet("Trisha", messages[count]); // Subtract 1 to map to the correct index in the messages array
//             count+=1;
//         }, 1000 * num); // Delay each message by 1 second incrementally
//     }
// });

// function greet(name, mes) {
//     console.log(name + ": " + mes);
// }



// const ulEl=document.getElementById("ulEl");
// const selEl=document.getElementById("selector")
// const navCon=document.getElementById("navCon")

// console.log(ulEl);

// let tw = navCon.getBoundingClientRect().width;

// let w=tw/5;

// selEl.style.transform=`translateX(${w}px)`

// //let preval= "left-[1.5rem]";

// //selEl.classList.replace(preval,w);

// ulEl.addEventListener("click", (e) => {

//     ulEl.querySelectorAll('li').forEach(li => {
//       li.querySelector('ion-icon').classList.remove("-translate-y-7");
//       li.querySelector('ion-icon').classList.remove("text-white");
//       li.querySelector("span:nth-child(2)").classList.remove("block");
//     });

//     const liEl=e.target.closest('li')
//     liEl.querySelector("ion-icon").classList.add("-translate-y-7")
//     liEl.querySelector("ion-icon").classList.add("text-white")
//     liEl.querySelector("span:nth-child(2)").classList.add("block")

//     const x=liEl.getAttribute("data-index");
//     console.log(x)
//     // const val=`left-[${1.5+x}rem]`;
//     // selEl.classList.replace(preval,val);

//     selEl.style.transform=`translateX(${w*x}px)`

//     //preval=val;
// })


// const ulEl = document.getElementById("ulEl");
// const selEl = document.getElementById("selector");
// const navCon = document.getElementById("navCon");

// // Get all li elements inside the ul
// const liElements = ulEl.querySelectorAll('li');

// ulEl.addEventListener("click", (e) => {

//       ulEl.querySelectorAll('li').forEach(li => {
//         li.querySelector('ion-icon').classList.remove("-translate-y-7");
//         li.querySelector('ion-icon').classList.remove("text-white");
//         li.querySelector("span:nth-child(2)").classList.remove("block");
//       });
  
//       const liEl=e.target.closest('li')
    
//     })

const ulEl = document.getElementById("ulEl");
const selEl = document.getElementById("selector");

const firstChild=ulEl.querySelector("li:nth-child(1)")

const lipos = firstChild.getBoundingClientRect();
const navpos = document.getElementById('navCon').getBoundingClientRect();

let prevLi=ulEl.querySelector("li:nth-child(1)");


transform(lipos,navpos);

// Get all li elements inside the ul
const liElements = ulEl.querySelectorAll('li');

liElements.forEach((li) => {
  // Remove classes on page load for all items

  // Add click event listener to each li
  li.addEventListener('click', () => {
    // First, remove the classes from all li items (reset state)
    liElements.forEach(item => {
      item.querySelector('ion-icon').classList.remove("-translate-y-7");
      item.querySelector('ion-icon').classList.remove("text-white");
      item.querySelector("span:nth-child(2)").classList.replace("block","hidden");
    });

    // Apply classes to the clicked item
    li.querySelector("ion-icon").classList.add("-translate-y-7");
    li.querySelector("ion-icon").classList.add("text-white");
    li.querySelector("span:nth-child(2)").classList.replace("hidden","block");

    prevLi=li;

    // Get the position of the li relative to navCon
    const liRect = li.getBoundingClientRect();
    const navConRect = document.getElementById('navCon').getBoundingClientRect();

    console.log(liRect);
    console.log(navConRect);
    console.log(liRect.left-navConRect.left);
    

    transform(liRect,navConRect);
    
  });
});



window.addEventListener('resize', function() {

  const previousLi=prevLi

  const lipos = previousLi.getBoundingClientRect();
  const navpos = document.getElementById('navCon').getBoundingClientRect();

  transform(lipos,navpos);
});



function transform(liPOS,navPOS){
  const translateX = liPOS.left - navPOS.left+15;

  // Move the selEl to the correct position using transform
  selEl.style.transform = `translateX(${translateX}px)`;
}



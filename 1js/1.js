let picha=["css.png","html.png","js.png"];
let maelezo=[
`<p>1. The Box Model:
Concept:
CSS treats HTML elements as rectangular boxes, with properties like content, padding, border, and margin that define their size and spacing.
Importance:
Understanding the box model is crucial for controlling the size, spacing, and positioning of elements, especially in complex layouts. 
2. Selectors:
Concept: Selectors are how CSS targets specific HTML elements for styling. 
Importance: Different types of selectors (e.g., element selectors, class selectors, ID selectors) allow you to target different elements based on their structure, class names, or unique IDs. 
3. Specificity:
Concept:
Specificity determines which CSS styles take precedence when multiple rules apply to the same element.
Importance:
Understanding specificity is essential for debugging and troubleshooting style conflicts. 
4. Layout Systems:
Flexbox:
A powerful layout system for creating flexible and responsive layouts, especially for arranging items within a container.
Grid:
A two-dimensional layout system that allows for more complex and structured layouts, often used for creating grids and tables. 
5. Other Important Concepts:
Inheritance:
CSS rules can be inherited from parent elements to child elements, which can simplify styling. 
Positioning:
CSS provides different positioning options (e.g., static, relative, absolute, fixed) to control how elements are placed on the page. 
Animations and Transitions:
CSS allows you to create animations and transitions to add visual effects and interactivity to your web pages<p/>`,

`<p>To master HTML, focus on understanding fundamental tags, semantic HTML, forms, and HTML5 features. This includes grasping the structure of an HTML document, utilizing semantic elements for better readability and SEO, creating interactive forms, and exploring multimedia embedding options like audio, video, and canvas. Practice by building simple websites or projects to reinforce your learning. 
Here's a more detailed breakdown:
<p/>`,

`<p>
Here's a more detailed breakdown:
1. Asynchronous Programming:
Callbacks:
While foundational, callbacks can lead to complex, nested code ("callback hell"). Understanding them is important, but moving to Promises and async/await is crucial for cleaner asynchronous code. 
Promises:
Promises handle asynchronous operations more elegantly than callbacks, providing a way to manage asynchronous tasks and their results (resolve or reject). 
Async/Await:
Async/Await syntax simplifies asynchronous code, making it look and feel more synchronous while still leveraging promises. 
2. Closures:
Closures are functions that have access to variables from their lexical scope, even after the surrounding function has finished executing. This allows you to create private variables and maintain state within a function. 
3. Higher-Order Functions:
Higher-order functions are functions that can take other functions as arguments or return a function as a result. They enable powerful functional programming techniques, making code more reusable and flexible. 
4. ES6 Modules:
ES6 Modules (import/export) provide a standardized way to organize code into reusable modules, improving project structure and maintainability. 
5. Other Important Concepts:
Object-Oriented Programming (OOP) Principles:
While JavaScript has a prototypal inheritance system, understanding OOP principles like classes, inheritance, and polymorphism can be helpful for structuring complex applications. 
Functional Programming Techniques:
Learning about techniques like map, filter, reduce, and other array methods can significantly improve code readability and efficiency. 
Debugging:
Familiarizing yourself with browser developer tools and debugging techniques is essential for finding and resolving issues in your code. 
DOM Manipulation:
Understanding how to manipulate the Document Object Model (DOM) to dynamically update web pages is crucial for creating interactive web applications. 
Event Handling:
Understanding how to register and handle events (e.g., clicks, key presses) is fundamental for building responsive user interfaces. 
Data Structures and Algorithms:
While not directly JavaScript-specific, a basic understanding of common data structures (arrays, objects, lists) and algorithms can help you write more efficient and effective code. 
<p/>`];

let All =  document.querySelector(".all")
let KITU = document.querySelector(".AAH")
let ke =   document.querySelector("#ke")
let me =   document.querySelector("#me")
let JINA = document.querySelector("#ona")
let WAZO = document.querySelector("#wazo")
let i = 0;
let j = false;
let pichaYajinsia;
let MAWAZO = 
    `<div class="comment1">
    <div class="head"><img src="images/me.png" alt="" srcset=""></div>
    <div class="maneno">
    <div>samuel busuguli</div>
    <div>
    one of the best work 
    </div>
    </div>
    </div>`;

function mwanzo(){
   let  p=picha[i]
   let  MAELEZO = maelezo[i]
    All.innerHTML=`
         <div class="container-fluid bk1 ">
       <div class="kichwa">LUGHA NINAZOJUA</div>
    <div class="bk2">
    <div class="nyuma Nyuma "onclick="MBELE()"><img src="images/left.png" alt="" srcset=""></div>
    <div class="pageChanger">
      <div class="picha">
        <div class="pi">
          <img src="images/${p}" alt="90">
        </div>
        
      </div>
      <div class="maelezo">
      ${MAELEZO}
      </div>
      </div>
    <div class="mbele Mbele"onclick="NYUMA()"><img src="images/right.png" alt="" srcset=""></div>
  </div>
  </div>
    `
}


function MBELE(){
    i++
if(i > picha.length-1){
    i=0
}
let p =picha[i]
mwanzo()

}


function NYUMA(){
    i--
if(i < 0){
    i=picha.length-1
}
let p =picha[i]
mwanzo()

}

function test(){
      
      let jina = JINA.value
      let wazo = WAZO.value
      
    if(jina == "" || wazo == ""|| j == false){
      JINA.value="";
      WAZO.value="";
      alert(" jaza pote isipokuwa email sio lazima")
      
                                              }
    else{
    MAWAZO = MAWAZO + " " + `<div class="comment1">
    <div class="head"><img src="images/${pichaYajinsia}" alt="" srcset=""></div>
    <div class="maneno">
      <div style="text-align: center;font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; max-witdh:100%;">${jina}</div>
      <p style ="text-align:center;">${wazo}</p>
    </div>
    </div> `+ " ";

    KITU.innerHTML = MAWAZO ;
     JINA.value = "";
     WAZO.value = "";
      }

             }
    
    


function kitu1(){
    KITU.innerHTML = MAWAZO ; 
 }
function jinsia(){
    if (ke.checked){
       me.checked = false;
       j = true
      pichaYajinsia = "ke.png";
       
    }
    if(me.checked ){
        ke.checked = false;
        j = true
      pichaYajinsia = "me.png";
    }
}
function interKeypress(s){
    if (s.key == "Enter"){
          test();
    }
   else{

   }
}
 
 mwanzo()
 kitu1()
 jinsia()
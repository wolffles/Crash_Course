// RUN THE INDEX.HTML TO SEE OUTPUTS

//EXAMINE THE DOCUMENT OBJECT 
// console.dir(document)
// console.log(document.title)
// document.title  = 123;
// console.log(document.URL);
// console.log(document.domain);
// console.log(document.all);
// console.log(document.all[0])


//GET ELEMENT BY ID
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'hello';
// headerTitle.innerText = 'Goodbye';
// headerTitle.innerHTML = "<h3>Hello</h3>";
// console.log(headerTitle.textContent) 
// textContent ignores style innerText pays attention to style.
// console.log(headerTitle.innerText)
// header.style.borderBottom = 'solid 3px #000';
// * css selectors are camelcased in js (css is border-bottom)

// GETELEMENTSBYCLASSNAME 
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1])
// items[1].textContent = "hello 2"
// items[1].style.backgroundColor = 'yellow';
// items.style.backroundColor = '#f4f4f4'
// * its an collection not an array so need to iterate through it.
// * below will not work because array methods don't work on collections
// items.forEach((element) => {
//   element.style.backround = '#f4f4f4';
// })
// for(let i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4'

// }


//GETELEMENTBYTAGNAME
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1])
// li[1].textContent = "hello 2"
// li[1].style.backgroundColor = 'yellow';
// items.style.backroundColor = '#f4f4f4'
// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = '#f4f4f4'
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';
// // * the page has 2 different inputs so by default it selects the first one. 
// var input = document.querySelector('input');
// input.value = 'Hello World'
// console.log(input)
// // * by adding the type in the selector we can specify which input we wantedq
// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue'
// var second = document.querySelector(".list-group-item:nth-child(2)");
// second.style.color = "coral";

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');
// console.log(titles)
// titles[0].textContent = 'hello';
// //
// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// //
// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

//TRAVERSING THE DOM
//
// var itemList = document.querySelector('#items');
// // parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4"
// console.log(itemList.parentNode.parentNode.parentNode);
// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement);
//children is different than childNodes
// console.log(itemList.children);


// CREATE ELEMENT
// Create a div 
// var newDiv = document.createElement('div');
// // Add class 
// newDiv.className = 'hello';
// // Addid
// newDiv.id = 'hello1';
// // Add attr 
// newDiv.setAttribute('title', 'Hello Div');
// //Create text node
// var newDivText = document.createTextNode('Hello World');
// // Add text to div 
// newDiv.appendChild(newDivText);
// var container = document.querySelector('header .container')
// var h1 = document.querySelector('header h1');
// //
// console.log(newDiv);
// container.insertBefore(newDiv, h1);

//ADDING EVENT LISTENERS
var button = document.getElementById('button').addEventListener('click', buttonClick);
function buttonClick(e){
  // console.log('Button clicked')
  // document.getElementById('header-title').textContent = 'changed';
  // document.querySelector('#main').style.backgorundColor = '#f4f4f4';
  //console.log(e);

  // console.log(e.target);
  // console.log(e.target.id);
  // console.log(e.target.className);
  // console.log(e.target.classList);
  // var output = document.getElementById('output')
  // output.innerHTML = '<h3>' +e.target.id +'</h3>';
  // console.log(e.type);
  // * clientX & Y are based off the window
  // console.log("client x " + e.clientX)
  // console.log("client y " +e.clientY)
  // * offsetX is bassed off the element your inside of
  // console.log("offsetX " + e.offsetX);
  // console.log("offsetY " + e.offsetY);

  // console.log(e.altKey);
  // console.log(e.ctrlKey);
  // console.log(e.shiftKey);
}
var button = document.getElementById("button");
var box = document.getElementById("box");
// button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent)
// *mouse enter will only activate on entering the element
box.addEventListener('mouseenter', runEvent);
box.addEventListener("mouseleave", runEvent);
// * mouse over will activate on the content
box.addEventListener("mouseover", runEvent);
box.addEventListener("mouseout", runEvent);
box.addEventListener("mousemove", runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown',runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);
// // * focus means that you've clicked into something like the input
// itemInput.addEventListener('focus', runEvent);
// // * blur is when you click away. 
// itemInput.addEventListener('blur', runEvent);
// // * fires off event when something is cut
// itemInput.addEventListener("cut", runEvent);
// // * fires off event when somethign is pasted
// itemInput.addEventListener("paste", runEvent);
select.addEventListener('change', runEvent);
select.addEventListener("input", runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e){
  e.preventDefault();
  console.log('EVENT TYPE: '+e.type);

  // console.log(e.target.value)
  // document.getElementById('output').innerHTML = '<h3> '+e.target.value+'</h3>';
  // // output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>'

  // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
}



//console.log(document.querySelector('.button'));

//const Button = document.querySelector('.button');

//Button.style.background = 'red';
//Button.style.color = 'white';
//Button.style.border = 'none';


//console.log(document.querySelector('.list-items1'))

//const ListItems = document.querySelector('ul');

//console.log(ListItems.lastElementChild.style.background="yellow");

//const secondChild = document.querySelector('ul:nth-child(2)');

//console.log(secondChild);ocument.querySelector('input')


//const  input= document.querySelector('input');

//input.value='wamlambez';

//const item = document.querySelector('.list-group-item');

//item.style.color='red';

//const lastItem = document.querySelector('.list-group-item:last-child')

//lastItem.style.color = 'blue';

//const secondItem = document.querySelector('.list-group-item[3])')
//secondItem.style.color = 'pink';

//const odd  = document.querySelectorAll('li:nth-child(odd)');
//const even = document.querySelectorAll('li:nth-child(even)')

//for (i=0;i < odd.length;i++){
//odd[i].style.background ='blue';
//}

//for (i=0;i<even.length;i++){
//even[i].style.background = 'yellow';
//}

//TRAVERSING THE DOM
//const listItems = document.querySelector('.list-group-item')

//console.log(listItems.parentElement.style.backgroundColor='#f4f4f4');

//console.log(listItems.parentElement.parentElement.style.background = 'lightblue');

//Childnodes

//console.log(listItems.childNodes)

//console.log(listItems.children)

//console.log(listItems.children[1].style.background ='pink');

//first child
//console.log(listItems.firstElementChild.style.background = 'green')

//console.log(listItems.lastElementChild.style.background = 'lightblue');

//sibling
//console.log(listItems.firstElementChild.nextElementSibling.style.background = 'purple')
//console.log(listItems.children[2].nextElementSibling.style.background = 'blue')

//create element
//const newDiv = document.createElement('div');

//add class
//newDiv.className= 'intro';

//add div
//newDiv.id = 'container';

//console.log(newDiv)

//add attribute
//newDiv.setAttribute('tittle','hello div');

//console.log(newDiv);

//create text node
//const newText = document.createTextNode('hello world')

//add text to div
//newDiv.appendChild(newText)

//console.log(newDiv);

//const container = document.querySelector('div .header')
//const h1 = document.querySelector('h2')

//container.insertBefore(newDiv, h1)

//newDiv.style.fontWeight='large'

//EVENTS
//const button = document.getElementById('button');

//button.addEventListener('click', buttonClick);

//function buttonClick(e){
//console.log('button clicked');
//document.querySelector('.main-area').style.backgroundColor='#f4f4f4'
//console.log(e.target);
//console.log(e.target.id)
//console.log(e.type)
//console.log(e.clientX)
//console.log(e.clientY)
//onsole.log(e.offsetY)
//console.log(e.offsetX)
//console.log(e.altKey)
//console.log(e.ctrlKey);
//console.log(e.capsKey);
//}
//const button = document.getElementById('button')
const itemInput = document.querySelector('input[type="text"]')
const form = document.querySelector('form')
const select = document.querySelector('select')

//select.addEventListener('change', runEvent)
//button.addEventListener('click',runEvent)
//button.addEventListener('dblclick', runEvent)
//button.addEventListener('mouseup', runEvent)
//box.addEventListener('mouseenter', runEvent)
//box.addEventListener('mouseleave', runEvent)

//box.addEventListener('mouseover', runEvent)
//itemInput.addEventListener('keydown', runEvent)
//itemInput.addEventListener('keyup', runEvent)
//itemInput.addEventListener('keypress', runEvent)
//itemInput.addEventListener('focus', runEvent)
//itemInput.addEventListener('blur',runEvent)
//itemInput.addEventListener('cut', runEvent)
//itemInput.addEventListener('paste', runEvent)
//itemInput.addEventListener('input', runEvent)
form.addEventListener('submit',runEvent);

function runEvent(e){
e.preventDefault();
console.log('EVENT TYPE: '+e.type);
//console.log(e.target.value)
console.log(e.target.value);

//document.getElementById('output').innerHTML="<h3>"+e.target.value+"</h3>"
//document.getElementById('box').style.backgroundColor="rgb("+e.offsetY+","+e.offsetX+",40)";
}
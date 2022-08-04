const form = document.getElementById('addForm');
const itemList = document.querySelector('.list-group-item');
var filter = document.getElementById('filter');


//form submit event
form.addEventListener('submit', addItem);
itemList.addEventListener('click',removeItem)

//filter event
filter.addEventListener('keyup',filterItems)

function addItem(e){
e.preventDefault();

//get input value
const newItem = document.getElementById('item').value;

//create new li element
var li = document.createElement('li');

//add a class name
li.className = 'list-items'

//add text node  with input value
li.appendChild(document.createTextNode(newItem));

//create del button
var delButton = document.createElement('button');

//add classes to delButton

delButton.className = "btn btn-danger btn-sm float-right delete";

//create child
delButton.appendChild(document.createTextNode('x'));

//append child

li.appendChild(delButton);


//append li to list
itemList.appendChild(li)

}
//remove item

function removeItem(e){
    if( e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter items

function filterItems(e){
//convert text to lowercase
var text = e.target.value.toLowerCase();
console.log(text);
//get item list
var items = itemList.getElementsByTagName('li');

//convert to an array

Array.from(items).forEach(function(item){
var itemName = item.firstChild.textContent;
if(itemName.toLowerCase().indexOf(text) !=-1){
item.style.display = "block"
}else{
    item.style.display = 'none'
}
})

}
let header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';
let title = document.getElementsByClassName('title');
title[0].style.color = 'green';
// title[0].style.fontWeight = '900';
// let item = document.getElementsByClassName('list-group-item');
// item[2].style.backgroundColor = 'green';
// item[2].style.fontWeight = '900';
// item[2].style.color = 'red';
// item[0].style.color = 'blue';
// item[0].style.fontWeight = '900';
// item[1].style.color = 'yellow';
// item[1].style.fontWeight = '900';
// item[3].style.color = 'orange';
// item[3].style.fontWeight = '900';
// let test1 = document.getElementsByClassName('new-list-item');
// test1[0].style.fontWeight = '900';
// let test2 = document.getElementsByTagName('li');
// test2[4].style.backgroundColor = 'red';
// console.log(test2);
// let second = document.querySelector('.list-group-item:nth-child(2)');
// second.style.backgroundColor = 'green';
// let third = document.querySelector('.list-group-item:nth-child(3)');
// third.style.color = 'green';
// let items = document.querySelectorAll('.list-group-item');
// items[1].style.color = 'green';
// let odd = document.querySelectorAll('li:nth-child(odd)')
// for(let x = 0; x < odd.length; x++){
//     odd[x].style.backgroundColor = 'green';
// }
//parentNode
let itemList = document.querySelector('#items');
itemList.parentNode.style.backgroundColor = '#f4f4f4';
//parentElement
itemList.parentElement.style.backgroundColor = '#f4f4f4';
//childNode
itemList.children[1].style.backgroundColor = 'yellow';
//firstChild
itemList.firstElementChild.textContent = 'Hello 1';
//lastChild
itemList.lastElementChild.textContent = 'Hello 4';
//nextSibling
console.log(itemList.nextElementSibling);
//previousibling
itemList.previousElementSibling.style.color = 'green';
//create Element
//create a div
let newDiv = document.createElement('div');
//add classname
newDiv.className = 'hello'
//add id
newDiv.id = 'hello1';
//add att
newDiv.setAttribute('title','hello Div');
//create textnode
let newDivText = document.createTextNode('Hello World');
//add text to div
newDiv.appendChild(newDivText);
let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
newDiv.style.fontSize = "30px";
container.insertBefore(newDiv,h1);
























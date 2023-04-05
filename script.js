"use strict"

let body = document.getElementById('body');

const lists = [];
const listOne = [];

const colorsOne = ['#92F2CA', '#D9FCED', '#72BD9E'];
const colorsTwo = ['#DF92F2', '#F5D2FE', '#A161B1'];

createList(colorsOne);
createList(colorsTwo);

function createNewTask(item) {

    console.log(item);
    console.log(item.parentNode.parentNode)

    let newItem = item.parentNode.children[0].cloneNode(true);

    let list = item.parentNode.parentNode.children[1];

    list.appendChild(newItem);
    list.appendChild(item);

    newItem.style.display = '';
}

function deleteItem(item) {

    item.parentNode.parentNode.remove();
}

function createList(color) {

    let lists = document.getElementById('lists');
    let newList = lists.children[0].cloneNode(true);

    //lists
    newList.children[1].style.background = color[0];

    //template
    let template = newList.children[1].children[0]

    template.style.background = color[1];
    template.children[0].children[1].style.background = color[1];
    template.children[0].children[2].style.color = color[2];
    template.children[0].children[2].style.color = color[2];
    template.children[0].children[1].style.color = color[2];

    //list item
    newList.children[1].children[1].style.background = color[1];

    newList.children[1].children[1].children[0].children[1].style.background = color[1];
    
    newList.children[1].children[2].style.background = color[1];
    
    newList.children[0].children[0].style.color = color[2];

    newList.children[1].children[1].children[0].children[2].style.color = color[2];

    newList.children[1].children[1].children[0].children[2].style.color = color[2];

    newList.children[1].children[1].children[0].children[1].style.color = color[2];

    newList.children[1].children[2].style.color = color[2];

    console.log(newList.children[1].children[0].children[0].children[1])

    lists.appendChild(newList);
}
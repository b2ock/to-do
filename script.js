"use strict"

let body = document.getElementById('body');
let itemTemplate = document.getElementById('list-items');
const lists = [];
const listOne = [];

createLists();
createLists();

function createNewTask() {
    let newItem = itemTemplate.children[0].cloneNode(true);
    let addItem = document.getElementById('add-list-item');

    newItem.style.display = '';

    itemTemplate.appendChild(newItem);

    itemTemplate.appendChild(addItem);
}

function deleteItem(item) {

    item.parentNode.parentNode.remove();
}

function displayItems(list, array) {

}

function createLists(color, id) {

    let lists = document.getElementById('lists');
    let newList = lists.children[0].cloneNode(true);

    lists.appendChild(newList);
}
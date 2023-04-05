"use strict"

let body = document.getElementById('body');
let itemTemplate = document.getElementById('list-items');

function createNewTask() {
    let newItem = itemTemplate.children[0].cloneNode(true);
    let addItem = document.getElementById('add-list-item');

    itemTemplate.appendChild(newItem);

    itemTemplate.appendChild(addItem);
}
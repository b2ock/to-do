"use strict"

function inputButton(id) {
    
    let parent = document.getElementById(id+'-list');
    let child = document.createElement('li');
    child.innerText = document.getElementById(id+'-input').value;

    parent.appendChild(child);
}


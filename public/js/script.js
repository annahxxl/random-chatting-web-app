const socket = io('/');

const getElementById = (id) => document.getElementById(id) || null;

// get DOM element
const helloStrangerElement = getElementById('hello_stranger');
const chattingBoxElement = getElementById('chatting_bos');
const formElement = getElementById('chat_form');

function helloUser() {
  const username = prompt('What is your name?');
}

function init() {
  helloUser();
}

init();

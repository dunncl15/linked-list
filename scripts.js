//GLOBAL VARIABLES
var userWebsiteTitle = document.querySelector('.web-title');
var userWebsiteURL = document.querySelector('.web-url');
var enterButton = document.querySelector('.enter-btn');
var bookmarkSection = document.querySelector('.bookmark-section');
var userTitleInput;
var userURLInput;
var newDiv;
var newTitle;
var position;
var userEntry = [];
var newLink;

//EVENT LISTENERS

//Enter Button click event
enterButton.addEventListener('click', function(){
  getUserInput();
  if (userEntry[0] === "" && userEntry[1] === ""){
    alert("Enter a website title and valid url (www.example.com).");
  } else if (userEntry[0] === "") {
    alert("Enter a website title.");
  } else if (userEntry[1] === "") {
    alert("Enter a valid url (www.example.com).");
  } else {
    addBookmark();
    userWebsiteTitle.value = "";
    userWebsiteURL.value = "";
  }
});

//Delete Button click event
bookmarkSection.addEventListener('click', function() {
  var bookmark = document.querySelector('.bookmark');
  bookmark.parentNode.removeChild(bookmark);
});

//FUNCTIONS

function addBookmark() {
  addDiv();
  addTitle();
  addLink();
  addReadBtn();
  addDeleteBtn();
}

function getUserInput() {
  var userTitleInput = userWebsiteTitle.value;
  var userURLInput = userWebsiteURL.value;
  userEntry = [userTitleInput, userURLInput];
};

function addDiv() {
  newDiv = document.createElement('div');
  newDiv.classList.add('bookmark');
  position = document.getElementsByTagName('section')[1];
  position.appendChild(newDiv);
}

function addTitle() {
  newTitle = document.createElement('p');
  newTitle.classList.add('website-title');
  var userTitle = document.createTextNode(userEntry[0]);
  newTitle.appendChild(userTitle);
  newDiv.appendChild(newTitle);
}

function addLink() {
  newLink = document.createElement('a');
  newLink.classList.add('website-url');
  var userLink = document.createTextNode(userEntry[1]);
  newLink.appendChild(userLink);
  newDiv.appendChild(newLink);

  var newHref = document.createAttribute('href')
  newHref.value = 'http://' + userEntry[1];
  newLink.setAttributeNode(newHref);

  var newTab = document.createAttribute('target');
  newTab.value = document.createTextNode('_blank');
  newLink.setAttributeNode(newTab);
}

function addReadBtn() {
  newReadBtn = document.createElement('button');
  newReadBtn.classList.add('read-btn');
  var btnText = document.createTextNode('Read');
  newReadBtn.appendChild(btnText);
  newDiv.appendChild(newReadBtn);
}

function addDeleteBtn() {
  newDeleteBtn = document.createElement('button');
  newDeleteBtn.classList.add('delete-btn');
  var btnText = document.createTextNode('Delete');
  newDeleteBtn.appendChild(btnText);
  newDiv.appendChild(newDeleteBtn);
}

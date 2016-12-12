var userWebsiteTitle = document.querySelector('.web-title');
var userWebsiteURL = document.querySelector('.web-url');
var enterButton = document.querySelector('.enter-btn');
var userTitleInput;
var userURLInput;
var newDiv;
var newTitle;
var position;
var userEntry = [];
var newLink;

//Enter Button click event//
enterButton.addEventListener('click', function(){
    getUserInput();
    addDiv();
    addTitle();
    addLink();
    addReadBtn();
});

//Functions

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
}

function addReadBtn() {
  newReadBtn = document.createElement('button');
  newReadBtn.classList.add('read-btn');
  var btnText = document.createTextNode('Read');
  newReadBtn.appendChild(btnText);
  newDiv.appendChild(newReadBtn);
}

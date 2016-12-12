// var webTitle = document.querySelector('.web-title');
// var webUrl = document.querySelector('.web-url');
var enterButton = document.querySelector('.enter-btn');
var websiteTitle = document.querySelector('.websiteTitle');
var websiteURL = document.querySelector('.websiteURL');

//Enter Button click event//
enterButton.addEventListener('click', function(){
    newBox();
    getUserInput();
    popNewBox();
    console.log('addbookmark');
});

function getUserInput() {
  var userTitleInput = document.querySelector('.web-title').value;
  var userURLInput = document.querySelector('.web-url').value;
  console.log(userTitleInput, userURLInput)
};

function popNewBox() {
  webTitle = document.querySelector('.web-title');
  webUrl = document.querySelector('.web-url');
  websiteTitle.innerText = webTitle;
  websiteURL.innerText = webUrl;
}

function newBox() {
  var cloneBox = document.getElementsByTagName('div')[0];
  var clone = cloneBox.cloneNode(true);
  var section1 = document.getElementsByTagName('section')[1];
  section1.appendChild(clone);
}

//can I populate the form before cloning it?

var userTitleInput = document.querySelector('.web-title');
var userURLInput = document.querySelector('.web-url');
var enterButton = document.querySelector('.enter-btn');
var websiteTitle = document.querySelector('.websiteTitle');
var websiteURL = document.querySelector('.websiteURL');

enterButton.addEventListener('click', function(){
  var userTitleInputValue = userTitleInput.value;
  var userURLInputValue = userURLInput.value;
  //newbox() MUST fire before newBox()
  newBox();
  getUserInput(userTitleInputValue, userURLInputValue);
  console.log('addbookmark');
  document.querySelector('.bookmark').style.display = 'block';
});

function getUserInput(titleInOne, urlOne) {
  websiteTitle.innerText = titleInOne;
  websiteURL.innerText = urlOne;
};

function newBox() {
  var cloneBox = document.getElementsByTagName('div')[0];
  var clone = cloneBox.cloneNode(true);
  var section1 = document.getElementsByTagName('section')[1];
  section1.appendChild(clone);
}

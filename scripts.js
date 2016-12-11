var userWebsiteTitle = document.querySelector('.web-title');
var userWebsiteURL = document.querySelector('.web-url');
var enterButton = document.querySelector('.enter-btn');
var newDiv;
var userEntry = [];

//Enter Button click event//
enterButton.addEventListener('click', function(){
    getUserInput();
    addBookMark();
    console.log('addbookmark');
});

function getUserInput() {
  var userTitleInput = userWebsiteTitle.value;
  var userURLInput = userWebsiteURL.value;
  userEntry = [userTitleInput, userURLInput];
};

function addDiv() {
  newDiv = document.createElement('div');
  newDiv.classList.add('bookmark');
  document.body.appendChild(newDiv);
}

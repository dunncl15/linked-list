var userWebsiteTitle = document.querySelector('.web-title');
var userWebsiteURL = document.querySelector('.web-url');
var enterButton = document.querySelector('.enter-btn');
var newDiv;
var newTitle;
var userEntry = [];
var newLink;

//Enter Button click event//
enterButton.addEventListener('click', function(){
    getUserInput();
    // addBookMark();
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

function addTitle () {
  newTitle = document.createElement('p');
  newTitle.classList.add('website-title');
  var userTitle = document.createTextNode(userEntry[0]);
  newDiv.appendChild(newTitle);
}

function addLink () {
  newLink = document.createElement('a');
  newLink.classList.add('website-url');
  var userLink = document.createTextNode(userEntry[1]);
  newDiv.appendChild(newLink);
}



//Use this nwMark() for populating new bookmark box
// function newMark(webName, urlLocate, read, dlt) {
//   this.webName = ;
//   this.urlLocate = ;
//   this.read = ;
//   this.dlt = ;
// }

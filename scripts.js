var webTitle = document.querySelector('.web-title')
var webUrl = document.querySelector('.web-url')
var enterButton = document.querySelector('.enter-btn');
var userEntry = [];

//Enter Button click event//
enterButton.addEventListener('click', function(){
    getUserInput();
    newBox();
    popNewBox();
    // addBookMark();
    console.log('addbookmark');
});

function getUserInput() {
  userTitleInput = document.querySelector('.web-title').value;
  userURLInput = document.querySelector('.web-url').value;
  userEntry = [userTitleInput, userURLInput];
  console.log(userTitleInput, userURLInput)
};

function newBox() {
var cloneBox = document.getElementsByTagName('div')[0];
var clone= cloneBox.cloneNode(true);
var section1 = document.getElementsByTagName('section')[1];
section1.appendChild(clone);
}

// function popNewBox() {
//   nodeCopy.websiteTitle = websiteTitle+i;
//   nodeCopy.websiteURL = websiteURL+i;
//   websiteTitle.innerText = userTitleInput;
//   websiteURL.innerText = userURLInput;
// }

// Use this nwMark() for populating new bookmark box
// function newMark(webName, urlLocate, read, dlt) {
//   this.webName = web-title();
//   this.urlLocate = ;
//   this.read = ;
//   this.dlt = ;
// }

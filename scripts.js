var userWebsiteTitle = document.querySelector('.web-title')
var userWebsiteURL = document.querySelector('.web-url')
var enterButton = document.querySelector('.enter-btn')


//Enter Button click event//
enterButton.addEventListener('click', function(){

  console.log();
});

function getWebEntry() {
  var userTitleInput = userWebsiteTitle.value;
  var userURLInput = userWebsiteURL.value;
  console.log(userTitleInput, userURLInput);
}

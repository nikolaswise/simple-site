console.log('I Am Javascript');

// create a thing called 'foo'
// 'foo' is a function that does stuff
// it takes no inputs
var foo = function () {
  //it does this stuff
  
  //create a new thing
  // that equals all the nodes that match this selector in the document
  var slides = document.querySelectorAll('.a-slide')
  console.log(slides)
} 

foo();

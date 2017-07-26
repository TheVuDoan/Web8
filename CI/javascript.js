/*function aRose() {
  console.log("Sweet!");
}

var anotherName = aRose;

typeof(anotherName);
anotherName();

function multiplyBy3(num) {
  return num*3;
}

function multiplyBy6(num) {
  return num*6;
}

function transformNumberWith(num, transformer) {
  console.log(transformer(num));
}

transformNumberWith(3,multiplyBy3); //3*3=9
transformNumberWith(3,multiplyBy6); //3*6=18
*/

function countDown(time){
  setTimeout(function(){
    console.log(time);
    if (time>0) countDown(time-1);
  },1000);
}

countDown(5);

function createWebsiteCounter(){
  var numberofVisitor = 0;

  function getNumberOfVisitor(){
    return numberofVisitor;
  }

  function setNumberOfVisitor(){
    if (num > 0) numberofVisitor = num;
  }

  return {
    getNumberOfVisitor : getNumberOfVisitor,
    setNumberOfVisitor : setNumberOfVisitor
  }
}

var myWebsite = createWebsiteCounter();

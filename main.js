var img=["boy.jpg","girl.png","dad.jpg","mom.png"];
var id=["Pulkit","Himanshi","Vishnu","Silpa"];

var i=0;

function family(){
    i++;
    var fm=4;
    if (i>=fm) {
        i=0;
    }
  var updateimg=img[i];
  var updatename=id[i];
  document.getElementById("id").innerHTML=updatename;
  document.getElementById("id1").src=updateimg;
}
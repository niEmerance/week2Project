function getInput(){
        var bd=document.getElementById("birthDate").value;

    var bdArray=bd.split("-");
    var YY=parseInt(bdArray[0]); 
        CC=19;
        MM=parseInt(bdArray[1]);
        DD=parseInt(bdArray[2]);

      var d=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;

      alert(Math.round(d));
  
}
// function century(){
//     var ln=document.getElementById("century").value;
// }
// function selectGender(){
//     var gd=document.getElementById("gender").value;
// }

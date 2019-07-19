function getInput(){
        var bd=document.getElementById("birthDate").value;
        var gd=document.getElementById("gender").value;
        var bdArray=bd.split("-");
        var YY=parseInt(bdArray[0]); 
            CC=YY/100 +1;
            MM=parseInt(bdArray[1]);
            DD=parseInt(bdArray[2]);

      var answer=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
      var d=Math.round(answer);
      
      if(gd==="Male" && d===0)
      {
          alert(d+" means you were born on Sunday,so your name is Kwasi");
      }
      else if(gd="Male" && d===1)
      {
         alert(d+" means you were born on Monday,so your name is Kwasi");
      }
      else if(gd="Male" && d===2)
      {
         alert(d+" means you were born on Tuesday,so your name is Kwabena");
      }
      else if(gd="Male" && d===3)
      {
         alert(d+" means you were born on Wednesday ,so your name is Kwaku");
      }
      else if(gd="Male" && d===4)
      {
         alert(d+" means you were born on Thursday,so your name is Yaw");
      }
      else if(gd="Male" && d===5)
      {
         alert(d+" means you were born on Friday,so your name is Kofi");
      }
      else if(gd="Male" && d===6)
      {
         alert(d+" means you were born on Saturday,so your name is Kwame");
      }
      else if(gd="Female" && d===0)
      {
         alert(d+" means you were born on Sunday,so your name is Akosua");
      }
      else if(gd="Female" && d===1)
      {
         alert(d+" means you were born on Monday,so your name is Adwoa");
      }
      else if(gd="Female" && d===2)
      {
         alert(d+" means you were born on Tuesday,so your name is Abenaa");
      }
      else if(gd="Female" && d===3)
      {
         alert(d+" means you were born on Wednesday,so your name is Akua");
      }
      else if(gd="Female" && d===4)
      {
         alert(d+" means you were born on Thursday,so your name is Yaa");
      }
      else if(gd="Female" && d===5)
      {
         alert(d+" means you were born on Friday,so your name is Afua");
      }
      else if(gd="Female" && d===6)
      {
         alert(d+" means you were born on Saturday,so your name is Ama");
      }
      else
      {
          alert("invalid input");
      }
}

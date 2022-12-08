function validate()
{
  var msg;
  if(document.myForm.userPass.value.length>5) 
  {
    msg='good';
  } 
  else{
    msg='poor';
  }
  document.getElementById("location").innerHTML=msg;

}
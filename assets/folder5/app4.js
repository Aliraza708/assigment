 var English = +prompt("Enter your  English marks");
 var Math = +prompt ("Enter your Math marks");
 var Sindhi = +prompt ("Enter your Sindhi");

 var totalmarks = (English+ Math + Sindhi)/3; 

if (totalmarks>=90 && totalmarks <=120 ){
  document.write("A+")
}
else if (English>=70 && totalmarks<=90){
  document.write("A")
}
else if(totalmarks>=50 && totalmarks<=70){
  document.write("B")
}
else if (totalmarks>=30 && totalmarks<=50){
  document.write("C")
}
else{
  document.write("Fail")
}




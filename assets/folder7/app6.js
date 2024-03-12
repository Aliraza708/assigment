
  // Question 15  Age Group Classifier

  var age = +prompt("Enter your age") ;
  if (age === 12){
    document.write("Child");
  }
  else if (age >=13 && age<= 19 ){
    document.write("Teenager");
  }
  else if (age >= 20 && age <= 64 ){
    document.write("Adult");
  }
  else {
    document.write("Senior");
  }
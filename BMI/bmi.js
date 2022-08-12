function calculateTip() {
  var we = document.getElementById("we").value;
  var units = document.getElementById("units").value;
  var unith = document.getElementById("unith").value;
  var he = document.getElementById("he").value;
  we=parseFloat(we)
  he=parseFloat(he)
  if (!(we>=0 && we <=2000)) {
    alert("Please enter valid weight");
    return;
  }
  if (!(he>=0 && he <=2000)) {
    alert("Please enter valid height");
    return;
  }
  if (unith=="inches"){
    he=he*2.54;
  }
  else{
    he=he;
  }
  if (units=="kg"){
    var bmi=(we/(he*he))*10000;
  }
  else {
    we=we*0.453592;
    var bmi=(we/(he*he))*10000;
  }
  bmi=bmi.toFixed(2);

  document.getElementById("tip").innerHTML = "Your bmi is" ;
  document.getElementById("tip2").innerHTML = bmi ;
if (bmi<18.5){
 document.getElementById("tip3").innerHTML = ",which is less than 18.5; You are underweight." ; 
 document.getElementById("tip4").innerHTML = "Tips : Eat more frequently, Choose nutrient-rich foods, Try smoothies and shakes, excercise, Don't drink water before meals,Drink milk, Get quality sleep" ;
}
if (bmi>=18.5 && bmi <25){
 document.getElementById("tip3").innerHTML = ",which is in range from 18.5 to 24.9; You have a healthy weight." ; 
 document.getElementById("tip4").innerHTML = "Tips : To keep your weight the same, you need to burn the same number of calories as you eat and drink. Limit portion size to control calorie intake. Be as physically active as you can be." ;
}
if (bmi>=25 && bmi <30){
 document.getElementById("tip3").innerHTML = ",which is in range from 25 to 30; You are over weight." ; 
 document.getElementById("tip4").innerHTML = "Tips : You should eat fruits and vegies. Fruit and veg are low in calories and fat, and high in fibre – 3 essential ingredients for successful weight loss. They also contain plenty of vitamins and minerals. Get more active. Drink plenty of water" ;
}

if (bmi>=30){
 document.getElementById("tip3").innerHTML = ",which is over 30; You are in obesity." ; 
 document.getElementById("tip4").innerHTML = "Tips : You should excercise a lot. Eat 5 servings of fruits and veggies a day.  Big portions pile on extra calories that can cause weight gain. Choose smaller portions, especially when eating high-calorie snacks. Reduce screen time.Drink more water.";}}
document.getElementById("calculate").onclick = function(){calculateTip();}

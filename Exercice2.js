$(function () {
  //1.	Cachez les lignes 2 et 3
  //   var li = $("li:first li:nth-child(2)").clone();
  //   $("li:first").hide();
  //   $("li:nth-child(2)").before(li);
  //2.	Colorez en bleu les lignes 3,4 ,5 et 6
  $("li li:nth-child(2)").css("background-color", "blue");
  $("li:gt(0)").css("background-color", "blue");
});

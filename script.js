String = "";
let one = document.querySelectorAll(".button");
let inp = document.getElementById("input");

Array.from(one).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      String = eval(String);
      inp.value = String;
    }else if(e.target.innerHTML == "C")
    {
        String = "";
        inp.value = String;
    } 
    else {
      console.log("hi");
      console.log(e.target);
      String = String + e.target.innerHTML;
      inp.value = String;
    }
  });
});

let ekran = document.querySelector(".myInput");
document.querySelectorAll("button").forEach(function (button) {
  button.addEventListener("click", function (e) {
      let belgi = e.target.innerText;
      if(belgi=="C"){
        ekran.value=" "
      }else if(belgi=="="){
        ekran.value= eval(ekran.value); 
      }else{
        ekran.value += belgi;
      }
      // console.log(belgi);
  });
});

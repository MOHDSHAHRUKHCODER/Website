window.addEventListener("DOMContentLoaded", function() {
    var nextPageBtn = document.querySelector(".centered-button2");
    nextPageBtn.addEventListener("click", function() {
      window.location.href = "sarkaripage.html";
    });
  });
  window.addEventListener("DOMContentLoaded", function() {
    var nextPageBtn = document.querySelector(".centered-button1");
    nextPageBtn.addEventListener("click", function() {
      window.location.href = "resultpage.html";
    });
  });
  window.addEventListener("DOMContentLoaded", function() {
    var nextPageBtn = document.querySelector(".centered-button3");
    nextPageBtn.addEventListener("click", function() {
      window.location.href = "privatejobs.html";
    });
  });
  window.addEventListener("DOMContentLoaded", function() {
    var nextPageBtn = document.querySelector(".login");
    nextPageBtn.addEventListener("click", function() {
      window.location.href = "loginpage.html";
    });
  });
  window.addEventListener("DOMContentLoaded", function() {
    var nextPageBtn = document.querySelector(".Registraionform");
    nextPageBtn.addEventListener("click", function() {
      window.location.href = "registrationform.html";
    });
  });
  function loginsubmitbutton(){
  const passwordInput = document.getElementById('password');
  const password = passwordInput.value;

  const useridInput = document.getElementById('userid');
  const userveri = useridInput.value;

  if ((password==20232023) && (userveri==="shahrukh")){
    window.location.href = "LOGIN.html";
  }else{
    alert('Sorry sir\nI think your password is wrong?');
  }
}
 







  
  

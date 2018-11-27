window.onload = function(){
  let mainNav = document.getElementById('js-menu');
  let navBarToggle = document.getElementById('js-navbar-toggle');

  navBarToggle.addEventListener('click', function () {

      mainNav.classList.toggle('active');
  });


// ----------------- photo grid
  // Get the elements with class="column"
  var elements = document.getElementsByClassName("column");

  // Declare a loop variable
  var i;

  // Four images side by side
  function four() {
      for (i = 0; i < elements.length; i++) {
          elements[i].style.msFlex = "25%";  // IE10
          elements[i].style.flex = "25%";
      }
  }

  }
};

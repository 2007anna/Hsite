
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */

function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    let slides = document.getElementsByClassName("mainSlides");

    if (n > slides.length) {
        slideIndex = 1
      }
      if (n < 1) {
          slideIndex = slides.length
      }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
   
    var name = document.getElementById('fname').value;
    var lastname = document.getElementById('lname').value;
    var country = document.getElementById('country').value;
    var message = document.getElementById('subject').value;
   
    // код для отправки данных на сервер
   
    alert('Message sent');
    this.reset();
  });
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 4000); 
}
   
   var form = document.getElementById('sheetdb-form');
   form.addEventListener("submit", e => {
   e.preventDefault();
   fetch(form.action, {
   method : "POST",
   body: new FormData(document.getElementById("sheetdb-form")),
   }).then(
   response => response.json()
   ).then((html) => {
   // you can put any JS code here
   window.open('page2.html', '_blank');
   
   });
   });
   
   const sun = document.querySelector(".text");
   
   const textLoad = () => {
   setTimeout(() => {
   sun.textContent = "Coder";
   }, 0);
   
   setTimeout(() => {
   sun.textContent = "Designer";
   }, 4000);
   
   setTimeout(() => {
   sun.textContent = "Devloper";
   }, 8000);
   
   setTimeout(() => {
   sun.textContent = "Blogger";
   }, 12000);
   
   setTimeout(() => {
   sun.textContent = "Freelancer";
   }, 16000);
   
   setTimeout(() => {
   sun.textContent = "YouTuber";
   }, 20000);
   
   }
   
   textLoad();
   setInterval(textLoad, 24000);
   
   function darkMode() {
   
   var element = document.body;
   
   element.classList.toggle("dark-mode");
   
   }
   
   var modal = document.getElementById('id01');
   
   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
   if (event.target == modal) {
   modal.style.display = "none";
   }
   }
   
 
 function passcheck() {
 const resultRef = document.getElementById('result');
 const inputRef = document.getElementById('password');
 
 /* You can pass any other condition 
 for checking the validity of the password
 instead of inputRef.value.length >= 6
 */
 const resultText = inputRef.value.length >= 8 ? 'OK' : 'ERROR';
 
 resultRef.innerHTML = resultText;
 }

// Calling showTime function at every second
setInterval(showTime, 1000);
 
// Defining showTime funcion

function showTime() {

    // Getting current time and date

    let time = new Date();

    let hour = time.getHours();

    let min = time.getMinutes();

    let sec = time.getSeconds();

    am_pm = "AM";
 

    // Setting time for 12 Hrs format

    if (hour >= 12) {

        if (hour > 12) hour -= 12;

        am_pm = "PM";

    } else if (hour == 0) {

        hr = 12;

        am_pm = "AM";

    }
 

    hour =

        hour < 10 ? "0" + hour : hour;

    min = min < 10 ? "0" + min : min;

    sec = sec < 10 ? "0" + sec : sec;
 

    let currentTime =

        hour +

        ":" +

        min +

        ":" +

        sec +

        am_pm;
 

    // Displaying the time

    document.getElementById(

        "clock"

    ).innerHTML = currentTime;
}
 
			showTime();
			
			btn = document.getElementById('btn');
			btn.addEventListener('click', function(e) {
			e.preventDefault()
			var name = document.getElementById('name').value;
			var email = document.getElementById('email').value;
			var subject = document.getElementById('message').value;
			var body = 'name: ' +name + '<br/> email: ' + email + '<br/> subject' + 
			subject + '<br/> message' + message;
			
			Email.send({
			SecureToken : "a165e633-c643-43cf-991c-22f54baff7f6",
			To : 'ayobamiolamilekan704@gmail.com',
			From : "damilaraolamilekan@gmail.com",
			Subject : "contact message",
			Body : body
			}).then(
			message => alert(message)
			);
			})
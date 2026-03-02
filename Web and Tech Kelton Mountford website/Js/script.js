
// Form Validation 0000000000000000000000000000000000000000000000000


document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("formMessage");

            if (name === "" || email === "") {
                message.textContent = "Please complete all required fields.";
                message.style.color = "red";
            } else {
                message.textContent = "Form successfully validated!";
                message.style.color = "green";
                form.reset();
            }
        });
    }

});
// Skill Highlight Interaction (Click to Hightlight) 000000000000000000000000000000000000
// Changed to use the CSS and only highlight on hover instead

//const skills = document.querySelectorAll("#skillsList li");

//skills.forEach(skill => {
  //  skill.addEventListener("click", function () {
    //    this.style.backgroundColor = "#f4b400";
      //  this.style.color = "white";
        //this.style.borderRadius = "10px";
        //this.style.padding = "5px";
    //});
//});

// API Integration - Button Triggered Quote 0000000000000000000000000000000000000000000000000000000
// Using Git hub API

//document.addEventListener("DOMContentLoaded", function () {

 //   const quoteButton = document.getElementById("quoteButton");
 //   const quoteElement = document.getElementById("quote");

  //  if (quoteButton && quoteElement) {

  //      quoteButton.addEventListener("click", function () {

//            quoteElement.textContent = "Loading inspiration...";

 //           fetch("https://api.adviceslip.com/advice")
 //               .then(response => response.json())
 //               .then(data => {
  //                  quoteElement.textContent =
 //                       `"${data.slip.advice}"`;
 //               })
 //               .catch(error => {
//                   quoteElement.textContent =
 //                       "Unable to load inspiration.";
 //               });
//
 //       });  

 //   } 

//}); 

// API Integration - Button Triggered Quote 0000000000000000000000000000000000000000000000
// Using Dummyjason due to Git hub not showing Author, and this one doing that
document.addEventListener("DOMContentLoaded", function () {

    const quoteButton = document.getElementById("quoteButton");
    const quoteElement = document.getElementById("quote");

    if (quoteButton && quoteElement) {
		
		quoteButton.addEventListener("click", function () {

			quoteElement.textContent = "Getting quote from DummyJson...";

			fetch("https://dummyjson.com/quotes/random")
				.then(response => response.json())
				.then(data => {
					quoteElement.textContent =
						`"${data.quote}" — ${data.author}`;
				})
				.catch(error => {
					quoteElement.textContent =
						"Unable to load Quote.";
				});
		});
	}
});
// Custom 404 Demonstration 000000000000000000000000000000000000000

document.addEventListener("DOMContentLoaded", function () {

    const js404Button = document.getElementById("js404Button");

    if (js404Button) {
        js404Button.addEventListener("click", function () {
            window.location.href = "404.html";
        });
    }

});
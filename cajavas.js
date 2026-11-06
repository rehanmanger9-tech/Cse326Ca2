
// Select workshop when button is clicked

function selectEvent(eventName) {
    document.getElementById("workshop").value = eventName;

    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });
}

// Registration form

document.getElementById("clubForm").addEventListener("submit", function(event) {

    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var club = document.getElementById("club").value;

    var interests = document.querySelectorAll(
        'input[name="interest"]:checked'
    );

    var message = document.getElementById("message");

    if (interests.length == 0) {
        message.style.color = "red";
        message.innerHTML = "Please select at least one interest.";
    }

    else {
        message.style.color = "green";

        message.innerHTML =
            "Congratulations " + name +
            "! Your registration for " + club +
            " Club is successful.";

        document.getElementById("clubForm").reset();
    }

});

document.getElementById('registrationForm').onsubmit = function(event) {
    event.preventDefault();
    var errors = [];

    var name = document.getElementById('name').value;
    if (name.length < 3) {
        errors.push("Name must be at least 3 characters long.");
    }

    var yearOfBirth = document.getElementById('yearOfBirth').value;
    if (yearOfBirth < 1901 || yearOfBirth > new Date().getFullYear()) {
        errors.push("Year of Birth must be between 1901 and " + new Date().getFullYear() + ".");
    }

    var liveInUS = document.getElementById('liveInUS').checked;
    var zipcode = document.getElementById('zipcode').value;
    if (liveInUS && (zipcode.length !== 5 || !/^\d{5}$/.test(zipcode))) {
        errors.push("Zipcode must be 5 digits long.");
    }

    var password = document.getElementById('password').value;
    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }

    if (errors.length > 0) {
        document.getElementById('errorMessages').innerHTML = errors.join("<br>");
    } else {
        alert("Accepted");
        document.getElementById('registrationForm').reset(); 
    }
};


function toggleZipcodeVisibility() {
    var liveInUS = document.getElementById('liveInUS').checked;
    var zipcodeWrapper = document.getElementById('zipcodeWrapper');
    var zipcodeInput = document.getElementById('zipcode');
    
    if (liveInUS) {
        zipcodeWrapper.style.display = 'block';
        zipcodeInput.required = true;  
    } else {
        zipcodeWrapper.style.display = 'none';
        zipcodeInput.required = false; 
        zipcodeInput.value = '';       
    }
}


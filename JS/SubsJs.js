document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const birthday = document.getElementById('birthday').value;
    const genderMale = document.getElementById('male').checked;
    const genderFemale = document.getElementById('female').checked;
    const terms = document.getElementById('terms').checked;

    if (!firstName) {
        alert('First Name is required');
        isValid = false;
    }

    if (!lastName) {
        alert('Last Name is required');
        isValid = false;
    }

    if (!email) {
        alert('Email Address is required');
        isValid = false;
    } else if (!email.includes('@')) {
        alert('Email Address must contain @ symbol');
        isValid = false;
    }

    if (!birthday) {
        alert('Birthday is required');
        isValid = false;
    } else {
        const birthDate = new Date(birthday);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 13) {
            alert('You must be at least 13 years old');
            isValid = false;
        }
    }

    if (!genderMale && !genderFemale) {
        alert('Gender is required');
        isValid = false;
    }

    if (!terms) {
        alert('You must agree to the terms and conditions');
        isValid = false;
    }

    if (isValid) {
        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            birthday: birthday,
            gender: genderMale ? 'Male' : 'Female',
            terms: terms
        };

        // Log to console
        console.log('Form Data:', formData);
        alert('Form data logged to the console!');
    }
});

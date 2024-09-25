function handleSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the value entered in the username input field
    const username = document.getElementById('username').value;
    // Get the value entered in the password input field
    const password = document.getElementById('password').value;

    // Check if the entered username and password match the expected values
    if (username === "student@gmail.edu.ph" && password === "learning") {
        // If the credentials are correct, redirect to the quiz page
        window.location.href = "quiz/quiz-game.html";
    } else {
        // If the credentials are incorrect, show an alert message
        alert("Invalid username or password!");
    }

    // Return false to prevent further actions (optional since we already used preventDefault)
    return false;
}

let runagain = true;

const canDrive = (age) => {
    return age >= 18;
};

while (runagain) {
    let age = prompt("Enter your age");
    age = Number.parseInt(age);

    if (age < 0) {
        console.error("Please enter a valid age");
        break;
    }

    if (canDrive(age)) {
        alert('You can drive');
    } else {
        alert("You cannot drive");
    }

    let color = prompt("Enter a color for the background");
    
    // Check if color input is valid
    if (color) {
        document.body.style.backgroundColor = color;
    } else {
        alert("Invalid color input");
    }

    runagain = confirm("Do you want to play again?");
}

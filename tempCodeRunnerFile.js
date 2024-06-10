    let sum = 0;
    for (let i = 0; i < 5; i++) {
        let marks = parseInt(prompt("Enter marks:"), 10);
        if (!isNaN(marks)) {
            sum += marks;
        } else {
            alert("Please enter a valid number.");
            i--; 
        }
    }
    let per = sum / 5;
    if(per<40){
        alert(`Percentage: ${per}% , You failed!`);
    }
    else{ 
        alert(`Percentage: ${per}% , You passed!`);
    }
document.getElementById('checkMarriageEligibility').addEventListener('click', function() {
    let gender = prompt("लिंग प्रविष्ट करा:");
    let age = parseInt(prompt("वय प्रविष्ट करा:"), 10);

    if ((gender.toLowerCase() === "male" && age >= 21) || (gender.toLowerCase() === "female" && age >= 18)) {
        alert("आपण लग्नासाठी पात्र आहात!");
    } else {
        alert("आपण लग्नासाठी पात्र नाही!");
    }
});

document.getElementById('greatestOfTwo').addEventListener('click', function() {
    let num1 = parseInt(prompt("पहिली संख्या प्रविष्ट करा:"), 10);
    let num2 = parseInt(prompt("दुसरी संख्या प्रविष्ट करा:"), 10);

    if (num1 > num2) {
        alert(`पहिली संख्या मोठी आहे: ${num1}`);
    } else {
        alert(`दुसरी संख्या मोठी आहे: ${num2}`);
    }
});

document.getElementById('greatestOfThree').addEventListener('click', function() {
    let num1 = parseInt(prompt("पहिली संख्या प्रविष्ट करा:"), 10);
    let num2 = parseInt(prompt("दुसरी संख्या प्रविष्ट करा:"), 10);
    let num3 = parseInt(prompt("तिसरी संख्या प्रविष्ट करा:"), 10);

    if (num1 > num2 && num1 > num3) {
        alert(`पहिली संख्या मोठी आहे: ${num1}`);
    } else if (num2 > num1 && num2 > num3) {
        alert(`दुसरी संख्या मोठी आहे: ${num2}`);
    } else {
        alert(`तिसरी संख्या मोठी आहे: ${num3}`);
    }
});

document.getElementById('checkPercentage').addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i < 5; i++) {
        let marks = parseInt(prompt("गुण प्रविष्ट करा:"), 10);
        if (!isNaN(marks)) {
            sum += marks;
        } else {
            alert("कृपया वैध संख्या प्रविष्ट करा.");
            i--;
        }
    }
    let percentage = sum / 5;
    if (percentage > 75) {
        alert(`टक्केवारी: ${percentage}%, श्रेणी: A`);
    } else if (percentage >= 60 && percentage <= 70) {
        alert(`टक्केवारी: ${percentage}%, श्रेणी: B`);
    } else if (percentage >= 35 && percentage < 60) {
        alert(`टक्केवारी: ${percentage}%, श्रेणी: C`);
    } else {
        alert(`टक्केवारी: ${percentage}%, तुम्ही नापास झाला आहात!`);
    }
});


document.getElementById('feez&buzz').addEventListener('click', function(){
    let num =parseInt(prompt("Enter the number:"), 10);

    if(num%3==0 && num%5==0){
        alert("Feez and buzz!");
    }
    else if(num%3==0){
        alert("Feez");
    }
    else if(num%5==0){
        alert("Buzz");
    }
    else{
        alert(num);
    }
});

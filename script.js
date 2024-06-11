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

document.getElementById('table').addEventListener('click', function() {
    let num = parseInt(prompt("संख्या प्रविष्ट करा:"), 10);
    if (isNaN(num)) {
        alert("कृपया वैध संख्या प्रविष्ट करा.");
        return;
    }

    let tableOutput = document.getElementById('tableOutput');
    tableOutput.innerHTML = `<h2>गुणाकार तक्ता ${num}</h2>`;
    
    for (let i = 0; i < 10; i++) {
        let result = `${num} * ${i + 1} = ${num * (i + 1)}`;
        let p = document.createElement('p');
        p.textContent = result;
        tableOutput.appendChild(p);
    }
});

document.getElementById('fibonacci').addEventListener('click', function() {
    let fibonacciOutput = document.getElementById('fibonacciOutput');
    fibonacciOutput.innerHTML = '<h2>पहिल्या 10 फिबोनाची संख्यां</h2>';

    let a = 0, b = 1;
    for (let i = 0; i < 10; i++) {
        let p = document.createElement('p');
        p.textContent = a;
        fibonacciOutput.appendChild(p);

        let next = a + b;
        a = b;
        b = next;
    }
});

document.getElementById('guessNumberGame').addEventListener('click', function() {
    let total_num = [];
    let total = Math.floor(Math.random() * 100);
    
    for (let i = 0; i < total; i++) {
        total_num[i] = Math.floor(Math.random() * 100);
    }

    let guessNumberOutput = document.getElementById('guessNumberOutput');
    guessNumberOutput.innerHTML = `<h2>Generated numbers: ${total_num.join(', ')}</h2>`;
    document.getElementById('makeGuess').style.display = 'inline';

    let attempts = 10;
    let found = false;
    let attemptCount = 0;

    document.getElementById('makeGuess').addEventListener('click', function() {
        if (attemptCount >= attempts) {
            alert("No more attempts left.");
            return;
        }

        let temp = parseInt(document.getElementById('guessInput').value, 10);
        if (isNaN(temp)) {
            alert("कृपया वैध संख्या प्रविष्ट करा.");
            return;
        }

        attemptCount++;
        console.log(`Attempt ${attemptCount}: Guessing number ${temp}`);
        if (total_num.includes(temp)) {
            alert(`Number found! Guess: ${temp}`);
            console.log(`Number found! Guess: ${temp}`);
            found = true;
            return;
        } else {
            alert(`Attempt ${attemptCount}: Number not found. Try again.`);
        }

        if (attemptCount >= attempts && !found) {
            alert("Number not found in the given attempts.");
            console.log("Number not found in the given attempts.");
        }
    });
});


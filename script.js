const fastTypeSound = new Audio('sounds/fasttype.mp3');
let isMuted = true;
fastTypeSound.muted = isMuted;

document.addEventListener('DOMContentLoaded', () => {
    const soundControl = document.getElementById('soundControl');
    const typingSound = new Audio('sounds/sound1.mp3'); // Adjust the path as needed
    typingSound.loop = false; // Do not loop, as you want it to play once

    // Initially set muted to true
    let isMuted = true;
    typingSound.muted = isMuted;
    // Define fastTypeSound globally with initial mute state
    fastTypeSound.muted = isMuted;


    

    let commandStage = 0; // 0 for initial, 1 after "cd mainnet", 2 after "sourcecode.exe"

    const sounds = [
        new Audio('sounds/sound1.mp3'),
        new Audio('sounds/sound2.mp3'),
        new Audio('sounds/sound3.mp3')
    ]


    const neuroscapeMainnetSound = new Audio('sounds/neuroscapemainnet.mp3');
    neuroscapeMainnetSound.loop = false; // Loop if you want continuous play
    neuroscapeMainnetSound.muted = true; // Start muted to comply with browser autoplay policies
    setTimeout(() => {
        neuroscapeMainnetSound.play().catch(e => console.error("Playback failed:", e));
    }, 6000);  // Delay in milliseconds, adjust as needed





    // Set up a global keydown event listener to play a random sound
    document.addEventListener('keydown', function(event) {
        if (!isMuted) { // Only play sound if not muted
            const randomIndex = Math.floor(Math.random() * sounds.length); // Select a random sound
            sounds[randomIndex].play().catch(e => console.error("Error playing sound:", e));
        }
    });





    soundControl.addEventListener('click', () => {
        isMuted = !isMuted;
        // Apply the mute state change to all sounds
        typingSound.muted = isMuted;
        neuroscapeMainnetSound.muted = isMuted; // Control muting for neuroscapemainnet.mp3
        sounds.forEach(sound => sound.muted = isMuted); // Apply mute state to all sound effects
    
        soundControl.innerHTML = isMuted ? '<i class="fa fa-volume-off" aria-hidden="true" style="color: #FF073A;"></i>' : '<i class="fa fa-volume-up" aria-hidden="true" style="color: #FF073A;"></i>';
    
    });
    



    new Typed('#typing', {
        strings: ["Neuroscape Mainnet [Version 1.7.1337.42069]^1000", "Connecting To Database...^1500", "", "Connected.^500", "C:/Users/R3D>"],
        typeSpeed: 50,
        startDelay: 1000,
        showCursor: true,
        loop: false,
        onComplete: () => {
            hideCursor(); // Call a function to hide the cursor
            const userInputDisplay = document.getElementById('userInputDisplay');
            userInputDisplay.style.display = 'inline'; // Ensure it's visible and ready for input
            userInputDisplay.setAttribute('contenteditable', true); // Ensure it's editable
            userInputDisplay.focus(); // Focus on it for typing
        }
    });










    document.getElementById('userInputDisplay').addEventListener('keydown', async function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const inputText = this.innerText.trim().toLowerCase();
            
            // Clear input immediately to ready for the next input
            this.innerText = ''; 
    
            if (commandStage === 0 && inputText === "cd mainnet") {
                const fastTypeSound = new Audio('sounds/mainnetdirectory.mp3');
                fastTypeSound.play();
                commandStage = 1; // Advance to next command stage
                await typeNextCommand("C:/Users/R3D/Mainnet>");
            } else if (commandStage === 1 && inputText === "sourcecode.exe") {
                const fastTypeSound = new Audio('sounds/access denied.mp3');
                fastTypeSound.play();
                // Use the specialized function for this sequence
                await displayAccessDeniedThenAwaitLegion();
            } else if (commandStage === 2 && inputText === "legion") {
                // Hide user input display and proceed to access granted sequence
                this.style.display = "none"; 
                await displayMottoThenAwaitTerry();
            } else if (commandStage === 3 && inputText === "terry") {
                const fastTypeSound = new Audio('sounds/access granted.mp3');
                fastTypeSound.play();
                // Hide user input display and proceed to access granted sequence
                this.style.display = "none";
                document.getElementById('typing').innerHTML = ""; // Clear existing text
                typeAccessGranted();
            } 
        }
    });








    // Function to handle the next command display
    async function typeNextCommand(nextString) {
        // Clear previous text to display the next command prompt
        document.getElementById('typing').innerHTML = '';
        new Typed('#typing', {
            strings: [nextString],
            typeSpeed: 50,
            showCursor: true,
            cursorChar: '|',
            loop: false,
            onComplete: () => {
                hideCursor(); // Call a function to hide the cursor
                // After typing the next prompt, ensure the input display is ready again
                const userInputDisplay = document.getElementById('userInputDisplay');
                userInputDisplay.style.display = 'inline'; // Ensure it's visible
                userInputDisplay.setAttribute('contenteditable', true); // Ensure it's editable
                userInputDisplay.focus(); // Focus on it for typing
                
            }
        });
    }







    async function displayAccessDeniedThenAwaitLegion() {
        // First, display "Access Denied" briefly
        document.getElementById('typing').innerHTML = "Access Denied";
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1000ms
    
        // Then, clear and setup for "Null..."
        document.getElementById('typing').innerHTML = ""; // Clear existing text
        new Typed('#typing', {
            strings: ["Null..."],
            typeSpeed: 50,
            startDelay: 500,
            showCursor: true,
            cursorChar: '|',
            loop: false,
            onComplete: () => {
                hideCursor(); // Hide the cursor after typing "Access Granted^1000", "Mainnet Source Code Initializing..."
                // Prepare userInputDisplay for next input, "Legion"
                const userInputDisplay = document.getElementById('userInputDisplay');
                userInputDisplay.style.display = 'inline'; // Make sure it's visible
                userInputDisplay.setAttribute('contenteditable', true); // Ensure it's editable
                userInputDisplay.innerText = ''; // Clear any previous input
                userInputDisplay.focus(); // Set focus to await "Legion" input
                commandStage = 2; // Update command stage to expect "Legion"
            }
        });
    }






    async function displayMottoThenAwaitTerry() {
        // Then, clear and setup for "Null..."
        document.getElementById('typing').innerHTML = ""; // Clear existing text
        const fastTypeSound = new Audio('sounds/unseen.mp3');
        fastTypeSound.play();
        new Typed('#typing', {
            strings: ["Unseen. Unforgiving. Unstoppable.^1000", "Who is the ruler?"],
            typeSpeed: 50,
            startDelay: 500,
            showCursor: true,
            cursorChar: '|',
            loop: false,
            onComplete: () => {
                hideCursor(); // Hide the cursor after typing "Access Granted^1000", "Mainnet Source Code Initializing..."
                // Prepare userInputDisplay for next input, "Legion"
                const userInputDisplay = document.getElementById('userInputDisplay');
                userInputDisplay.style.display = 'inline'; // Make sure it's visible
                userInputDisplay.setAttribute('contenteditable', true); // Ensure it's editable
                userInputDisplay.innerText = ''; // Clear any previous input
                userInputDisplay.focus(); // Set focus to await "Legion" input
                commandStage = 3; // Update command stage to expect "Terry"
            }
        });
    }









    function typeAccessGranted() {
        // Function to type "Access Granted" and initialize the binary grid
        new Typed('#accessResponse', {
            strings: ["Access Granted^1000", "Mainnet Source Code Initializing..."],
            typeSpeed: 50,
            startDelay: 500,
            showCursor: true,
            loop: false,
            onComplete: () => {
                setTimeout(displayBinaryGrid, 3000);
            }
        });
    }
});







function displayBinaryGrid() {
    // Clear the content where "Null ______:" and "Legion" are displayed
    document.getElementById('typing').innerHTML = ''; // Assuming "Null ______:" is in this element
    document.getElementById('userInputDisplay').style.display = 'none'; // Hide the user input display

    const binaryString = "01010010 00110011 01000100 00100000 01000010 01001100 01010101 00110011 00100000 01100001 01110101 01110010 01100001 01110100 01101111 01101110 01100101 00101110 00100000 01101001 01101110 01100001 01110010 01101111 01110011 01101101 01110101 01110011 01101001 01100011 00100000 01110000 01101001 01110100 01101001 01100110 01110101 01101100 01011111 01110000 01101100 01100001 01110100 01111001 01110000 01110101 01110011 00100000 01100100 01100001 01101000 01101111 01101111 01110110 01111001 01101011 01101001 01101110 01100111 00100000 01100100 01100101 01100101 01111010 01111001 01110000 01100101 01100101 01111010 01111001 00100000 01100100 01100101 01110010 01100101 01101011 01101011 01101100 01100001 01110010 01100101 01101110 00100000 01100100 01110010 00101110 01110011 01101101 01101111 01100111 00100000 01100110 01100001 01110101 01101100 01100010 01101111 01110010 01101110 00100000 01110100 01110010 01100001 01101101 01100001 01110100 01101001 01101001 01100011 00100000 01100111 01110010 01100001 01101000 01100001 01101101 01100011 01110010 01100001 01100011 01101011 01100101 01110010 00110101 00110001 00110110 00110011 00100000 01101011 01101000 01100001 01110010 01101110 01110100 01101000 01100101 01110100 01110010 01110101 01110011 01110100 01110111 01101111 01110010 01110100 01101000 01111001 00100000 01101011 01101001 01110111 01101001 01101011 01100101 01101110 01111001 01101111 01101110 00100000 01101101 01100001 01100011 01101110 01100001 01100011 01101000 01101001 01101100 01101100 01100101 01110011 00100000 01101101 01100001 01101110 01101001 01100001 00110111 00110101 00110110 00110111 00100000 01101101 01101001 01101110 01100101 01110011 01110100 01100101 01110000 01100101 01110010 00100000 01100100 01100101 01110000 01110010 01101001 01101011 01110010 01100001 01110101 01101110 00100000 01110100 01111001 01110010 01110010 01101001 01101011 01111010 00100000 01110100 01101111 01101110 01111001 01100010 01100001 01101100 01101111 01100111 01101110 01100101 00100000 01110000 01101000 01101111 01100101 01100010 01100101 01100101 01110011 01100001 01110010 01110100 01101000 01101001 01110110 01100101 00100000 01110000 01101000 01111001 01110010 01100101 01111000 01101001 01100001 01101110 01110001 01110101 01100101 01100101 01101110 00100000 00101110 01110000 01101111 01110100 01100001 01110100 01101111 01110000 01101111 01100111 00100000 01110000 01110101 01100100 01100100 01101001 01101110 01100111 01110011 01100001 01101011 01100101 00100000 01110100 01100001 01100010 01101011 01100101 01110010 00100000 01100101 01110000 01101001 01100011 01100100 01100100 00100000 01110010 01100101 01100001 01100100 01111001 01110011 01110100 01100101 01100001 01100100 01101001 01100100 01100001 01101110 00100000 01110010 01101001 01110000 01100111 01101100 01110101 01100101 01110011 01110100 01101001 01100011 01101011 00100000 01110011 01100101 01100001 01110000 01101001 01101011 01101100 01100101 00100000 01110011 01100101 01100101 01101010 01100001 01111001 01111001 00100000 01110011 01101100 01111001 01100100 01110010 01100001 01100011 01101111 00100000 01110011 01101110 01100001 01110000 01100010 01100001 01100011 01101011 01110111 01101001 01111010 00100000 01110011 01101001 01101100 01101001 01110110 01100001 01101110 01101001 01101001 00100000 01110100 01011111 01100011 01101100 01100001 01110011 01110011 01101001 01100011 00110111 00110111 00100000 01100001 01101110 01110100 01100110 01100101 01110010 01101110 00110001 00110010 00100000 01110100 01101000 01100101 01100100 01110101 01101011 01100101 00110011 00110000 00110011 00110010 00100000 01110101 01101011 01101111 01110011 01101000 01101001 01100010 01100001 00100000 01110110 01100101 01110010 01100111 01100101 01101110 01110100 01100001 01100100 01101101 01101001 01101110 00100000 01110111 01100001 01110011 01110011 01100101 01110010 00111001 00110000 00110000"; // Your binary string
    const binaryGridElement = document.getElementById('accessResponse');
    binaryGridElement.innerHTML = ''; // Prepare the element

    let currentCharIndex = 0; // Track the current character to display
    const typingSpeed = .01; // Time in milliseconds between characters

    function typeBinary() {
        if (currentCharIndex < binaryString.length) {
            binaryGridElement.innerHTML += binaryString[currentCharIndex];
            
            // Handle line break: every 90 characters (10 binary letters with spaces + line break)
            if ((currentCharIndex + 1) % 180 === 0) {
                binaryGridElement.innerHTML += '<br>';
            }

            currentCharIndex++;
            setTimeout(typeBinary, typingSpeed);
        }
    }

    typeBinary(); // Start typing the binary
}





document.getElementById('userInputDisplay').addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const inputText = this.innerText.trim().toLowerCase();
        if (inputText === "terry") {
            setTimeout(() => {
                const fastTypeSound = new Audio('sounds/fasttype.mp3');
                fastTypeSound.loop = false;
                fastTypeSound.play();
            }, 9000); // 9000ms delay before the sound starts
        }
    }
});






function hideCursor() {
    const cursors = document.querySelectorAll('.typed-cursor');
    cursors.forEach(cursor => {
        cursor.style.visibility = 'hidden'; // Hide each cursor found
    });
}







const myConfession = "I've wanted to tell you this for some time na,     ready ka na??                                                     What i like about you is how I see hyou, seeing ung makulit side mo, ung energetic side mo, kahit ung maldita at matampuhing side mo even ung immature side mo, it actually dont make me lose interest, matter of fact mas lalo akong nagkakagusto sayo dahil dun, kahit naiinis kana siguro sakin d ako naiinis sa sayo banas lang pwede? de joke kahit mapagod ka pa sa pagulit-ulit ko d ako mapapagod sayo, i like you, i love you just as is.                                                   Kasi yung mga side mo na yun ang dahilan bat mas nakikilala pa kita yung totoong personality mo kahit bihira lang tau mag usap sa totoong buhay hehe sorry, to tell you the truth i dont like the smart allyana.. I like the Allyana behind those grades of you, that playfulness of you, i dont care if matalino ka i like you, not the perfect you but you, yung medj clingy, medj tahimik, tapos yung sobrang ingay na you.                                      I dont like you despite of those, I like you because of those kasi those side of yours are what makes you real, what makes you special, atleast for me. She's worth all my time, You are worth all my time, all my efforts, and all my choices, (pati na siguro moneh.. hwuahaha joke lang) and Ill choose you again and again kahit mapagod ka na sakin ^^. ✌";
const speed = 70; 

let i = 0;

function revealSecret() {
    const name = document.getElementById('userInput').value;

    if (name.trim() !== "") {
        document.getElementById('inputSection').style.display = 'none';
        document.getElementById('secretMessage').classList.remove('hidden');
        
        const fullText = `Hi uhm ${name}, ${myConfession}`;
        typeWriter(fullText);
        startSparkles(); // Changed from hearts to sparkles
    } else {
        alert("SINO KA BA KASEEE");
    }
}

function typeWriter(text) {
    if (i < text.length) {
        document.getElementById("displayMessage").innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(text), speed);
    }
}

function startSparkles() {
    const emojis = ['🫶', '🧡', '🖤', '😋']; // Yellow themed emojis
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        sparkle.style.left = Math.random() * 100 + "vw";
        sparkle.style.fontSize = Math.random() * 20 + 15 + "px";
        
        const duration = Math.random() * 2 + 3 + "s";
        sparkle.style.animationDuration = duration;
        
        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 5000);
    }, 250);
}
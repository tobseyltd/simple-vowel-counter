// GLOBAL VARIABLES AND FUNCTIONS //


const checkAgain = () => {
    document.getElementById('submit-phrase').innerHTML = 'Click for another Phrase';
    document.getElementById('submit-phrase').style.backgroundColor = 'green';
    document.getElementById('submit-phrase').style.color = 'white';
    
    document.getElementById('submit-phrase').onclick = () => {
        window.location.reload();
    }
}

// COUNTER FUNCTION START //

document.getElementById('submit-phrase').onclick = () => {

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;
    const input_phrase = document.querySelector('#text-input').value.split('');

    for (let i = 0; i < input_phrase.length; i++) {
        
        vowels.forEach(vowel => {
            if (input_phrase[i] === vowel) {
                counter++;
            }
        });
    };

    document.getElementById('result').innerHTML += `${counter} Vowels found.`;
    checkAgain();
};


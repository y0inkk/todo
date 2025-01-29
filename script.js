const dynamicParagraph = document.getElementById('dynamicParagraph');
const inputField = document.getElementById('inputele')
const button = document.getElementById('addBtn');
let count = 0;
const clearFunc = document.querySelector('.clearFunc');

const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('do validate')
    }
}



button.addEventListener('click', () => {
    const input = document.querySelector('.inputTask').value;

    if (input.trim() !== "") {
        localStorage.setItem('userInput', input);

        const anchor = document.createElement('a');
        anchor.innerText = "[ ] " + input;
        dynamicParagraph.appendChild(anchor);
        anchor.id = 'anchor';

        anchor.addEventListener('click', () => {
            if (anchor.innerText.startsWith('[ ]')) {
                anchor.innerText = "[x] " + input;
            } else {
                anchor.innerText = "[ ] " + input;
            }
        });

        inputField.value = '';
        clearFunc.classList.remove('hidden');
    }
});



inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const input = document.querySelector('.inputTask').value;

    if (input.trim() !== "") {
        localStorage.setItem('userInput', input);

        const anchor = document.createElement('a');
        anchor.innerText = "[ ] " + input;
        dynamicParagraph.appendChild(anchor);
        anchor.id = 'anchor';

        anchor.addEventListener('click', () => {
            if (anchor.innerText.startsWith('[ ]')) {
                anchor.innerText = "[x] " + input;
            } else {
                anchor.innerText = "[ ] " + input;
            }
        });

        inputField.value = '';
        clearFunc.classList.remove('hidden');
    }
    }

    
})

function clearAll(){
    if (confirm("It will delete everything. Do you want to proceed?")) {
        localStorage.clear();
        location.reload()
    }
    
}

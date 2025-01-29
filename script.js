const dynamicParagraph = document.getElementById('dynamicParagraph');
const inputField = document.getElementById('inputele')
const button = document.getElementById('addBtn');
let count = 0;
let sum = 0;
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

        const taskCount = document.getElementById('taskCount');
        sum = sum + 1;
        taskCount.innerHTML = count + "/" + sum + ' tasks completed';
        anchor.addEventListener('click', () => {
            
            if (anchor.innerText.startsWith('[ ]')) {
                anchor.innerText = "[x] " + input;
                count = count + 1;
                taskCount.innerHTML = count + "/" + sum + ' tasks completed';

            } 
            else {
                anchor.innerText = "[ ] " + input;
                count = count - 1;
                taskCount.innerHTML = count + "/" + sum + ' tasks completed';
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

        const taskCount = document.getElementById('taskCount');
        sum = sum + 1;
        taskCount.innerHTML = count + "/" + sum + ' tasks completed';
        anchor.addEventListener('click', () => {
            
            if (anchor.innerText.startsWith('[ ]')) {
                anchor.innerText = "[x] " + input;
                count = count + 1;
                taskCount.innerHTML = count + "/" + sum + ' tasks completed';

            } 
            else {
                anchor.innerText = "[ ] " + input;
                count = count - 1;
                taskCount.innerHTML = count + "/" + sum + ' tasks completed';
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

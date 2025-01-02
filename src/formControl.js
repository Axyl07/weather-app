export default function formControl() {
    const form = document.querySelector(form);
    const goButton = document.querySelector('#go');
    goButton.addEventListener('click', (event) => {
        const locationInputValue = document.querySelector('#locationInput').value;
        console.log('testin')
        console.log(locationInputValue);
        event.preventDefault();
    })
}
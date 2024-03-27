const inputs = document.querySelectorAll('.inputs');
const submit = document.getElementById('submit');

submit.addEventListener('click', Element=>{
    Element.preventDefault()

    inputs.forEach(input=>{
        if(input.value){
           input.classList.add('checked');  
        }
        else{
            input.classList.add('invalid');
            input.nextElementSibling.classList.add('span-invalid');
        }
    });
});
const inputs = document.querySelectorAll('.inputs');
const spans = document.getElementsByTagName('span');
const submit = document.getElementById('submit');

//função para inputs invalidos   
function erro (index){
    inputs[index].classList.add('invalid');
    spans[index].classList.add('span-invalid');
}
//função para inputs validos
function checked(index){
    spans[index].style.display = 'none'
}
//input name
function nameCheck(){
    if(inputs[0].value.length < 3 ){
        erro(0);
    }
    else{
        inputs[0].classList.add('checked');
        checked(0);
    }
}

//input email
function emailCheck(){
    if(inputs[1].value.length < 3 ){
        erro(1);
    }
    else{
        inputs[1].classList.add('checked');
        checked(1);
    }
}

//input tel
function telCheck(){
    if(inputs[2].value.length < 3 ){
        erro(2);
    }
    else{
        inputs[2].classList.add('checked');
        checked(2);
    }
}

//input mensagem/textarea
function msgCheck(){
    if(inputs[3].value.length < 3 ){
        erro(3);
    }
    else{
        inputs[3].classList.add('checked');
        checked(3);
    }
}



 

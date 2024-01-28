import HashMap from "./HashMap";

// IntializeDomContent(): Will initialize all dom content into the application.
export function InitializeDomContent(){
    NodeReferences();
}

// NodeReferences(): All node values.
function NodeReferences(){
    CreateMainTitle();
    CreateInputField(); 
    SubmitButton();
}

// CreateMainTitle(): Creates the main title logo.
function CreateMainTitle(){
    const content = document.getElementById('content');

    const mainTitleContainer = document.createElement('div');
    mainTitleContainer.classList.add('main-title-container'); 
    const mainTitle = document.createElement('h1');
    mainTitle.textContent = 'HashMap Table';
    mainTitleContainer.appendChild(mainTitle);

    content.appendChild(mainTitleContainer); 
}

// CreateInputField(): Creates the input field for the user to enter strings. 
function CreateInputField(){
    const content = document.getElementById('content'); 

    const form = document.createElement('form'); 

    const formSectionOne = document.createElement('div');
    const formSectionTwo = document.createElement('div'); 

    const label = document.createElement('label'); 
    label.textContent = 'Enter First Names Here';
    label.setAttribute('for', 'name'); 

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'name');
    input.setAttribute('name', 'name');

    formSectionOne.appendChild(label);
    formSectionOne.appendChild(input); 

    const submit = document.createElement('button');
    submit.textContent = 'Submit';

    formSectionTwo.appendChild(submit); 

    form.appendChild(formSectionOne); 
    form.appendChild(formSectionTwo);

    content.appendChild(form);
}

// SubmitButton(): The submit button to enter data. 
function SubmitButton(){
    const submit = document.querySelector('form > div:nth-child(2) > button');
    
    submit.addEventListener('click', SubmitKey);
}

// SubmitKey(): Will submit data into the hashmap field. 
function SubmitKey(e){
    e.preventDefault();
    const input = document.querySelector('form > div:nth-child(1) > input'); 
    const form = document.querySelector('form'); 
    let string = input.value;
    form.reset(); 
    console.log('Entered Value: ', string); // Testing 

    const hashMapObj = new HashMap(43); 
    hashMapObj.hash(string);
    console.log('The hash code: ', hashMapObj.hashCode); // Testing

    hashMapObj.set(hashMapObj.hashCode, string);

}
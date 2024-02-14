import HashMap from "./HashMap";
import { buckets } from "../utils/Buckets";

// IntializeDomContent(): Will initialize all dom content into the application.
export function InitializeDomContent(){
    NodeReferences();
}

// NodeReferences(): All node values.
function NodeReferences(){
    CreateMainTitle();

    CreateInputFields();

    CreateButtonField();

    CreateDataField();
    
    CreateBucketField();
    
    CreateBuckets();

    PlaceInBucket(); 
}

// CreateDataField(): The data field will display all the data output data from the bucket field. 
function CreateDataField(){
    const dataField = document.createElement('div');
    dataField.classList.add('data-field');

    const content = document.getElementById('content'); 
    content.appendChild(dataField);

    DisplayGetData(null); 

    DisplayDataExist(null);

    DisplayRemovedData(null);
}

// DisplayRemovedKey(): 
function DisplayRemovedData(valueRemoved){
    const removeDataContainer = document.createElement('div');

    const removeDataTitle = document.createElement('div'); 
    const removeDataValue = document.createElement('div');

    const dataField = document.querySelector('.data-field');

    removeDataTitle.textContent = "Data Removed";
    if (valueRemoved === null)
    {
        removeDataValue.textContent = 'N/A'; 
    }
    else 
    {
        removeDataValue.textContent = `${valueRemoved}`;
    }

    removeDataContainer.appendChild(removeDataTitle);
    removeDataContainer.appendChild(removeDataValue); 

    dataField.appendChild(removeDataContainer); 
}

// DisplayGetData():
function DisplayGetData(value){
    const getDataContainer = document.createElement('div');
    
    const getDataTitle = document.createElement('div');
    const getDataValue = document.createElement('div');

    const dataField = document.querySelector('.data-field');

    getDataTitle.textContent = "Hash Value";
    if (value === null)
    {
        getDataValue.textContent = 'N/A'; 
    }
    else
    {
        getDataValue.textContent = `${value}`;
    }

    getDataContainer.appendChild(getDataTitle);
    getDataContainer.appendChild(getDataValue); 

    
    dataField.appendChild(getDataContainer); 
}

// DisplayDataExist():
function DisplayDataExist(hasData){
    const dataExist = document.createElement('div'); 

    const dataExistTitle = document.createElement('div'); 
    const dataExistValue = document.createElement('div');

    const dataField = document.querySelector('.data-field');

    dataExistTitle.textContent = "Data Exist";
    if (hasData === null)
    {
        dataExistValue.textContent = 'N/A';
    }
    else if (hasData)
    {
        dataExistValue.textContent = `${hasData}`; 
    }
    else if (!hasData)
    {
        dataExistValue.textContent = `${hasData}`; 
    }

    dataExist.appendChild(dataExistTitle);
    dataExist.appendChild(dataExistValue);

    dataField.appendChild(dataExist); 
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
function CreateInputFields(){
    const inputFields = document.createElement('div'); 
    inputFields.classList.add('input-fields'); 

    const content = document.getElementById('content');

    content.appendChild(inputFields); 

    CreateSetField();
    SetButton();

    CreateGetField(); 
    GetButton(); 

    CreateRemoveField();
    RemoveButton(); 
}

// CreateSetField(): Data can be entered into buckets using this field. 
function CreateSetField(){
    const inputFields = document.querySelector('.input-fields'); 

    const setForm = document.createElement('form'); 
    setForm.classList.add('set-form'); 

    const formSectionOne = document.createElement('div');
    const formSectionTwo = document.createElement('div'); 

    const label = document.createElement('label'); 
    label.textContent = 'Enter First Names Here';
    label.setAttribute('for', 'name'); 

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'name');
    input.setAttribute('name', 'name');
    input.setAttribute('maxLength', `${30}`); 
    input.setAttribute('required', `${true}`); 

    formSectionOne.appendChild(label);
    formSectionOne.appendChild(input); 

    const submit = document.createElement('button');
    submit.textContent = 'Submit';

    formSectionTwo.appendChild(submit); 

    setForm.appendChild(formSectionOne); 
    setForm.appendChild(formSectionTwo);

    inputFields.appendChild(setForm);
}

// CreateGetField(): Creates the get field for the user gather data from the hash map table.
function CreateGetField(){
    const inputFields = document.querySelector('.input-fields'); 

    const getForm = document.createElement('form');
    getForm.classList.add('get-form'); 

    const getFormSectionOne = document.createElement('div');
    const getFormSectionTwo = document.createElement('div');

    const getLabel = document.createElement('label'); 
    getLabel.textContent = 'Enter Hash Key To Get Data From Table';
    getLabel.setAttribute('for', 'get-name');

    const get = document.createElement('input');
    get.setAttribute('type', 'number');
    get.setAttribute('id', 'get-name');
    get.setAttribute('name', 'getName'); 
    get.setAttribute('required', `${true}`); 

    getFormSectionOne.appendChild(getLabel);
    getFormSectionOne.appendChild(get); 

    const getSubmit = document.createElement('button');
    getSubmit.setAttribute('type', 'submit');
    getSubmit.textContent = 'Submit'; 

    getFormSectionTwo.appendChild(getSubmit);

    getForm.appendChild(getFormSectionOne); 
    getForm.appendChild(getFormSectionTwo); 

    inputFields.appendChild(getForm); 
}

// CreateRemoveField(): Can remove bucket data using this field. 
function CreateRemoveField(){
    const inputFields = document.querySelector('.input-fields'); 

    const removeForm = document.createElement('form');
    removeForm.classList.add('remove-form');

    const removeFormSectionOne = document.createElement('div');
    const removeFormSectionTwo = document.createElement('div'); 

    const removeLabel = document.createElement('label');
    removeLabel.setAttribute('for', 'remove-name');
    removeLabel.textContent = 'Enter Key To Remove It From Table';

    const removeInput = document.createElement('input'); 
    removeInput.setAttribute('type', 'number'); 
    removeInput.setAttribute('id', 'remove-name');
    removeInput.setAttribute('name', 'removeName');
    removeInput.setAttribute('required', `${true}`); 

    removeFormSectionOne.appendChild(removeLabel); 
    removeFormSectionOne.appendChild(removeInput);

    const removeButton = document.createElement('button');
    removeButton.setAttribute('type', 'submit'); 
    removeButton.textContent = "Submit";

    removeFormSectionTwo.appendChild(removeButton);

    removeForm.appendChild(removeFormSectionOne); 
    removeForm.appendChild(removeFormSectionTwo); 

    inputFields.appendChild(removeForm); 
}

// RemoveButton(): 
function RemoveButton(){
    const removeSubmit = document.querySelector('.remove-form > div:nth-child(2) > button');

    removeSubmit.addEventListener('click', RemoveValue);
}

// RemoveValue():
function RemoveValue(e){
    e.preventDefault();

    const removeInput = document.querySelector('.remove-form > div:nth-child(1) > input');
    const bucketField = document.querySelector('.bucket-field'); 
    const removeForm = document.querySelector('.remove-form');
    const dataField = document.querySelector('.data-field'); 
    
    if (removeInput.validity.valueMissing)
    {
        removeInput.setCustomValidity("Please enter a numerical value first.");
        removeInput.reportValidity(); 
    }
    else
    {
        let number = Number(removeInput.value);

        removeForm.reset(); 

        const HashMapObj = new HashMap(43); 
    
        dataField.replaceChildren(); 
        console.log('Removal Index: ', number); // Testing
        console.log('Removal Index Type: ', typeof(number)); // Testing 
    
        DisplayRemovedData(HashMapObj.remove(number)); 
        bucketField.replaceChildren();
        CreateBuckets();
        PlaceInBucket();
    }
}

// GetButton(): Input field that will allow the user to get data from the hash map table.
function GetButton(){
    const getSubmit = document.querySelector('.get-form > div:nth-child(2) > button');

    getSubmit.addEventListener('click', GetValue); 
}

// GetKey(): Function will allow the user get the value by submitting the correct key. 
function GetValue(e){
    e.preventDefault(); 

    const dataField = document.querySelector('.data-field'); 
    const getInput = document.querySelector('.get-form > div:nth-child(1) > input');
    const getForm = document.querySelector('.get-form');

    if (getInput.validity.valueMissing)
    {
        getInput.setCustomValidity("Please enter a numerical value first.");
        getInput.reportValidity();
    }
    else
    {
        let number = Number(getInput.value);
        console.log(number); // Testing

        getForm.reset(); 

        const HashMapObj = new HashMap(43); 
    
        dataField.replaceChildren(); // Overall Parent replacing all child nodes. 
        DisplayGetData(HashMapObj.get(number)); // Note: May Need to reset at some point for new data. 
        DisplayDataExist(HashMapObj.has(number));
    }
}

// CreateButtonField(): Creates button field to output data. 
function CreateButtonField(){
    const content = document.getElementById('content');

    const buttonField = document.createElement('div');
    buttonField.classList.add('button-field');

    content.appendChild(buttonField);

    CreateLengthButton();
    LengthButton();

    CreateClearButton();
    ClearButton();

    CreateKeysButton();
    KeysButton(); 

    CreateValuesButton(); 
    ValuesButton(); 

    CreateEntriesButton();
    EntriesButton(); 
}

// CreateLengthButton(): Length button will output all the number of keys inside the hash map.
function CreateLengthButton(){
    const buttonField = document.querySelector('.button-field');

    const lengthButton = document.createElement('button'); 
    lengthButton.textContent = 'Length';

    buttonField.appendChild(lengthButton); 
}

// LengthButton(): User length button.
function LengthButton(){
    const lengthButton = document.querySelector('.button-field > button:nth-child(1)'); 

    lengthButton.addEventListener('click', DisplayLengthData);
}

// DisplayLengthData(): Displays the length data. 
function DisplayLengthData(){
    const dataField = document.querySelector('.data-field');

    const lengthData = document.createElement('div'); 
    const lengthDataTitle = document.createElement('div');
    const lengthDataValue = document.createElement('div');

    const HashMapObj = new HashMap(43);
    
    lengthDataTitle.textContent = 'Length'
    lengthDataValue.textContent = `${HashMapObj.length()}`;

    lengthData.appendChild(lengthDataTitle);
    lengthData.appendChild(lengthDataValue);

    dataField.replaceChildren(); 
    dataField.appendChild(lengthData); 
}

// CreateClearButton(): Creates a clear button that will remove all the entries in the hash map.
function CreateClearButton(){
    const buttonField = document.querySelector('.button-field');

    const clearButton = document.createElement('button'); 
    clearButton.textContent = 'Clear';

    buttonField.appendChild(clearButton);
}

// ClearButton(): User clear button. 
function ClearButton(){
    const clearButton = document.querySelector('.button-field > button:nth-child(2)'); 
    
    clearButton.addEventListener('click', ClearData);
}

// ClearData(): Clears all the key entries in the hash map.
function ClearData(){
    const bucketField = document.querySelector('.bucket-field');
    const dataField = document.querySelector('.data-field');

    const HashMapObj = new HashMap(43);

    HashMapObj.clear(); 
    bucketField.replaceChildren();
    dataField.replaceChildren();

    DisplayGetData(null);
    DisplayDataExist(null);
    DisplayRemovedData(null);

    CreateBuckets();
    PlaceInBucket();     
}

// CreateKeysButton(): Creates a keys button that will return an array containing all the keys on the hash table.
function CreateKeysButton(){
    const buttonField = document.querySelector('.button-field');

    const keysButton = document.createElement('button');
    keysButton.textContent = 'Keys';

    buttonField.appendChild(keysButton); 
}

// KeysButton(): User keys button.
function KeysButton(){
    const keysButton = document.querySelector('.button-field > button:nth-child(3)');
    
    keysButton.addEventListener('click', DisplayKeys);
}

// DisplayKeys(): Will the number of keys on the hash table.
function DisplayKeys(){
    const dataField = document.querySelector('.data-field');

    const HashMapObj = new HashMap(43);
    const keysOnHashTable = HashMapObj.keys();

    const keysData = document.createElement('div');
    keysData.classList.add('keys-data'); 

    const keysDataTitle = document.createElement('div');
    keysDataTitle.textContent = "Keys On Hash Table";

    const keysDataValue = document.createElement('div'); 

    keysData.appendChild(keysDataTitle); 
    keysData.appendChild(keysDataValue); 

    for (let i = 0; i < keysOnHashTable.length; i++)
    {
        const key = document.createElement('div');
        key.textContent = `${keysOnHashTable[i]}`;
        
        keysDataValue.appendChild(key); 
    }

    dataField.replaceChildren();
    dataField.appendChild(keysData);
}

// CreateValuesButton(): Will create a button that will return an array containing all the values.
function CreateValuesButton(){
    const buttonField = document.querySelector('.button-field'); 

    const valuesButton = document.createElement('button'); 
    valuesButton.textContent = 'Values';

    buttonField.appendChild(valuesButton);
}

// ValuesButton(): User values Button 
function ValuesButton(){
    const valuesButton = document.querySelector('.button-field > button:nth-child(4)');

    valuesButton.addEventListener('click', DisplayValues); 
}

// DisplayValues(): Will display all the values on the hash table. 
function DisplayValues(){
    const dataField = document.querySelector('.data-field');

    const valuesData = document.createElement('div');
    valuesData.classList.add('values-data');

    const valuesDataTitle = document.createElement('div'); 
    valuesDataTitle.textContent = 'Values On Hash Table';

    const valuesDataValue = document.createElement('div'); 

    valuesData.appendChild(valuesDataTitle); 
    valuesData.appendChild(valuesDataValue);

    const HashMapObj = new HashMap(43); 
    const valuesOnHashTable = HashMapObj.values(); 

    for(let i = 0; i < valuesOnHashTable.length; i++)
    {
        const value = document.createElement('div');
        value.textContent = `${valuesOnHashTable[i]}`; 
        valuesDataValue.appendChild(value); 
    }

    dataField.replaceChildren(); 
    dataField.appendChild(valuesData);
}

// CreatesEntriesButton(): Will create a entries button that returns an array that contains each key and value pair. 
function CreateEntriesButton(){
    const buttonField = document.querySelector('.button-field');
    
    const entriesButton = document.createElement('button');
    entriesButton.textContent = 'Entries'; 

    buttonField.appendChild(entriesButton); 
}

// EntriesButton(): User entries button.
function EntriesButton(){
    const entriesButton = document.querySelector('.button-field > button:nth-child(5)'); 

    entriesButton.addEventListener('click', DisplayEntries);
}

// DisplayEntries(): Will display all the key and value pairs on the hash table.
function DisplayEntries(){
    const dataField = document.querySelector('.data-field'); 

    const entriesData = document.createElement('div');
    entriesData.classList.add('entries-data');

    const entriesDataTitle = document.createElement('div');
    entriesDataTitle.textContent = "Entries On Hash Table";

    const entriesDataValue = document.createElement('div'); 

    entriesData.appendChild(entriesDataTitle);
    entriesData.appendChild(entriesDataValue);

    const HashMapObj = new HashMap(43);
    const entriesOnHashTable = HashMapObj.entries();

    for (let i = 0; i < entriesOnHashTable.length; i++)
    {
        const entry = document.createElement('div');
        entry.textContent = `[${entriesOnHashTable[i]}]`;
        entriesDataValue.appendChild(entry);
    } 

    dataField.replaceChildren(); 
    dataField.appendChild(entriesData);
}


// SubmitButton(): The submit button to enter data. 
function SetButton(){
    const submit = document.querySelector('.set-form > div:nth-child(2) > button');
    
    submit.addEventListener('click', SubmitKey);
}

// SubmitKey(): Will submit data into the hashmap field. 
function SubmitKey(e){
    e.preventDefault();
    const input = document.querySelector('.set-form > div:nth-child(1) > input'); 
    const setForm = document.querySelector('.set-form'); 
    
    if (input.validity.valueMissing)
    {
        input.setCustomValidity('Please enter a name first.');
        input.reportValidity(); 
    }
    else if (Number(input.value))
    {
        input.setCustomValidity("Can't use numerical values in this field."); 
        input.reportValidity(); 
    }
    else
    {
        let string = input.value;

        setForm.reset(); 
        console.log('Entered Value: ', string); // Testing 
    
        const hashMapObj = new HashMap(43); 
        hashMapObj.hash(string);
        console.log('The hash code: ', hashMapObj.hashCode); // Testing
    
        hashMapObj.set(hashMapObj.hashCode, string);
        
        PlaceInBucket(); 
    }
}

// CreateBucketsField(): Creates the buckets field that will hold all the data. 
function CreateBucketField(){
    const content = document.getElementById('content');
    const bucketField = document.createElement('div');
    bucketField.classList.add('bucket-field'); 
    
    content.appendChild(bucketField); 
}

// CreateBuckets(): Will create buckets for the bucket field. 
export function CreateBuckets(){
    const bucketField = document.querySelector('.bucket-field'); 
    console.log('Set of buckets in the field: ', bucketField); // Testing
    for (let i = 0; i < buckets.length; i++)
    {
        const bucket = document.createElement('div');
        bucket.dataset.bucket = i;

        const empty = document.createElement('div');
        empty.classList.add('empty-bucket');
        empty.textContent = 'Empty';

        bucket.appendChild(empty); 
        bucketField.appendChild(bucket); 
    }
}

// PlaceInBucket(): Will place the hash data inside a bucket. 
export function PlaceInBucket(){
    const bucketsInField = document.querySelectorAll('.bucket-field > div'); 

    for (let i = 0; i < buckets.length; i++)
    {
        if (buckets[i] !== null && !bucketsInField[i].children.item(1))
        {            
            bucketsInField[i].removeChild(bucketsInField[i].children.item(0)); // Remove 'empty' node as the first node. 

            const bucketIndex = document.createElement('div');
            const bucketValue = document.createElement('div');
            const data = buckets[i];
            bucketIndex.textContent = data[1];
            bucketValue.textContent = data[0]; 
            bucketsInField[i].appendChild(bucketIndex);
            bucketsInField[i].appendChild(bucketValue); 
        }
        else if (buckets[i] !== null && bucketsInField[i].children.item(1))
        {
            console.log(bucketsInField[i].children.item(0)); // Testing
            console.log(bucketsInField[i].children.item(1)); // Testing

            bucketsInField[i].replaceChildren();

            const bucketIndex = document.createElement('div');
            const bucketValue = document.createElement('div');
            const data = buckets[i];
            bucketIndex.textContent = data[1];
            bucketValue.textContent = data[0]; 
            bucketsInField[i].appendChild(bucketIndex);
            bucketsInField[i].appendChild(bucketValue);
        }
    }
}

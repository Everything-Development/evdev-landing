var globalBaseURL = window.location.origin;


function openContainer(id, display){

    let el = document.querySelector(`#${id}`)
    if(el === null){
        console.log('object not found')
    }
    if(el.classList.contains('d-none')){
        el.classList.add(`d-${display}`)
        el.classList.remove('d-none')
    }else{
        el.classList.add('d-none')
        el.classList.remove(`d-${display}`)
    }

    if(id === 'RegisterForm'){
        document.querySelector('#EntryForm').classList.remove(`d-${display}`)
        document.querySelector('#EntryForm').classList.add(`d-none`)

        document.querySelector('#btnEntryForm').classList.add(`secondary-gray`)
        document.querySelector('#btnEntryForm').classList.remove(`primary-black`)

        document.querySelector('#btnRegisterForm').classList.add(`primary-black`)
    }
    if(id === 'EntryForm'){
        document.querySelector('#RegisterForm').classList.remove(`d-${display}`)
        document.querySelector('#RegisterForm').classList.add(`d-none`)

        document.querySelector('#btnRegisterForm').classList.add(`secondary-gray`)
        document.querySelector('#btnRegisterForm').classList.remove(`primary-black`)

        document.querySelector('#btnEntryForm').classList.add(`primary-black`)
    }
}



///////////////////////////////////////////////////////////////
// functions which make
// add/update/delete requests
// with fetch to server
///////////////////////////////////////////////////////////////

function deleteElement(id, url){
    console.log(id);
    console.log(globalBaseURL+url);

    fetch(globalBaseURL+url, {
		header:{
			'Accept': 'application/json',
			'X-Requested-With': 'XMLHttpRequest',
		},
	}).then(response=>{
	    return response.json()
	}).then(data=>{
	    if( data.code == 200 ){
	        document.querySelector(`#${id}`).outerHTML = '';
	        console.log('deleted');
	    }
	})
}

// Refresh Values on DOM Elements
/////////////////////////////////////
function refreshValues(parentID){

}

// FETCHES

document.addEventListener('DOMContentLoaded', function(){
    //------------------
    // Log In Fetch
    // ------------------

    let btnEntryForm = document.querySelector('#EntryForm form')

    btnEntryForm.addEventListener('submit', function(e){
    e.preventDefault();
    fetch(globalBaseURL + '/api/login/', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
        	'Accept': 'application/json',
		    'X-Requested-With': 'XMLHttpRequest',
        },
        body: new FormData(btnEntryForm),
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        let errorBlock = document.querySelector('#errorMessage');
        // Clearing Errors from ErrorBlock
        if( errorBlock.childElementCount > 0 ){
            for( let i = 0; i <= errorBlock.childElementCount; i++ ){
                errorBlock.removeChild(errorBlock.firstElementChild);
            }
        }
	    if( data.code == 200 ){
	        let successMessage = document.createElement('p');
	        successMessage.innerHTML = data.message;
	        successMessage.classList.add('fs-16', 'fw-500', 'primary-green')
	        errorBlock.appendChild(successMessage);
	        setTimeout(function(){
	            window.open(globalBaseURL + '/profile/', '_self')
	        }, 2000)

	        return true;
	    }


        // If Errors Need to Error Handling

	    let newError = document.createElement('p');
	    newError.classList.add('fs-16', 'fw-500', 'primary-red')
	    errorBlock.appendChild(newError);
	    newError.innerHTML = data.message;
    })
    })


    //---------------------
    // Registration Fetch
    // --------------------
    let btnRegisterForm = document.querySelector('#RegisterForm form')

    btnRegisterForm.addEventListener('submit', function(e){
    e.preventDefault();
    fetch(globalBaseURL + '/api/registration/', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
        	'Accept': 'application/json',
		    'X-Requested-With': 'XMLHttpRequest',
        },
        body: new FormData(btnRegisterForm),
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
let errorBlock = document.querySelector('#errorMessageRegister');
        // Clearing Errors from ErrorBlock
        if( errorBlock.childElementCount > 0 ){
            for( let i = 0; i <= errorBlock.childElementCount; i++ ){
                errorBlock.removeChild(errorBlock.firstElementChild);
            }
        }
	    if( data.code == 200 ){
	        let successMessage = document.createElement('p');
	        successMessage.innerHTML = data.message;
	        successMessage.classList.add('fs-16', 'fw-500', 'primary-green')
	        errorBlock.appendChild(successMessage);
	        setTimeout(function(){
	            window.open(globalBaseURL + '/profile/', '_self')
	        }, 2000)

	        return true;
	    }


        // If Errors Need to Error Handling

	    let newError = document.createElement('p');
	    newError.classList.add('fs-16', 'fw-500', 'primary-red')
	    errorBlock.appendChild(newError);
	    newError.innerHTML = data.message;
    })


    })


})


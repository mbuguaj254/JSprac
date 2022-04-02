//Ensure JS only runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    //Make sure the submit button is disabled at first
    document.querySelector('#submit').disabled = true

    //Activate the submit button after release of key
    document.querySelector('#task').onkeyup = () => {
        //Disable the submit button when the input field is empty
        if(document.querySelector('#task').value.length > 0) {
           document.querySelector('#submit').disabled = false
        }else{
            document.querySelector('#submit').disabled = true
        }
    }

    //Adding an event listener for form submission
    document.querySelector('form').onsubmit = () => {
        //Saving the input value in a variable named task
        const task = document.querySelector('#task').value;

        //create a new element in JS, and saving it as a variable li
        const li = document.createElement('li');
        li.innerHTML = task;

        //incl the value of the new element to the ul with id = tasks using append() func
        document.querySelector('#tasks').append(li)
        
        //Ensure field remains empty after submitting, set the value to an empty string
        document.querySelector('#task').value = ''

        //Disable submit button after submitting until the next keyup is detected
        document.querySelector('#submit').disabled = true



        //Stop form from submitting to server as its default
        return false
    }
})
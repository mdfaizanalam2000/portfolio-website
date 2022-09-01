var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-content")

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



var menu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0"
}

function closemenu() {
    sidemenu.style.right = "-200px"
}

// --------------//

const scriptURL = 'https://script.google.com/macros/s/AKfycbxXg8VmOpocmmgtLvi45tJSPXllrm8gyr6_jHjIULPhIg6QtWMNXd1TtkPuvmsosqGr/exec'
const form = document.forms['submit-to-google-sheet']
const message = document.getElementById("message")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            message.innerHTML = "Form was submitted successfully"
            setTimeout(function () {
                message.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
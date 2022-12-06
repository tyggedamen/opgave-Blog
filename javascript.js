



//let messageDiv = document.getElementById("message")

// console.log(messageDiv)

 let html

 html = "<h1>"
 html += "Skønt "
//html += urlObject.searchParams.get("your-name")
 html += "</h1>"

 html += "<p>"
 html += " Tak for din tilmelding ❤️‍🔥"
 html += "</p>"
 html += "Glæd dig, du hører fra mig i din mail. "
 //html += urlObject.searchParams.get("your-email")
 html += "</p>"

 //messageDiv.innerHTML = html 


 let backBtn = document.getElementById("back-btn")

 //backBtn.onclick = function (){
   //  window.location = "nyhedsbrev.html"
    //}

    const submit = document.querySelector(".c-form")
    submit.addEventListener("submit", submitHandler)

    function submitHandler(e){
        e.preventDefault()
        document.querySelector(".c-form").innerHTML = html
    }
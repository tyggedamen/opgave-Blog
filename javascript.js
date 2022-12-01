let btn = document.getElementById("menu-btn")

let items = document.getElementById("menu-items")

btn.onclick = function () {
    items.classList.toggle ("visible")
}

let urlString = window.location

// console.log(urlString)
let urlObject = new URL(urlString)



let messageDiv = document.getElementById("message")

// console.log(messageDiv)

let html

html = "<h1>"
html += "Skønt "
html += urlObject.searchParams.get("your-name")
html += "</h1>"

html += "<p>"
html += " Tak for din tilmelding ❤️‍🔥"
html += "</p>"

html += "Glæd dig, du hører fra mig i din mail. "
html += urlObject.searchParams.get("your-email")
html += "</p>"

messageDiv.innerHTML = html 
document.body.style.backgroundColor = urlObject.searchParams.get("your-color")

let backBtn = document.getElementById("back-btn")

backBtn.onclick = function (){
    window.location = "index.html"
}




let html

html = "<h1>"
html += "Skønt "

html += "</h1>"

html += "<p>"
html += " Tak for din tilmelding ❤️‍🔥"
html += "</p>"
html += "Glæd dig, -du hører fra mig i din mail. "

html += "</p>"


let backBtn = document.getElementById("back-btn")

const submitBtn = document.querySelector(".c-form")

submitBtn.addEventListener("submit", submitHandler)

function submitHandler(e) {
    e.preventDefault()
    document.querySelector(".c-form").innerHTML = html
}
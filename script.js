const downButton = document.querySelector(".dn-btn")

downButton.addEventListener("click", () => {
    fetch("http://192.168.1.6:8060/keypress/PowerOff", {method: "POST"})
})
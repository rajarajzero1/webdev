let button = document.getElementById("btn")


//List of all mouse events
// htttp://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


// button.addEventListener("click", ()=>{
//     // alert("I was clicked")

//     document.querySelector(".box").innerHTML = "<b> Yea ! you were clicked </b> Enjoy your click "
// })


// button.addEventListener("dblclick", ()=>{
//      document.querySelector(".box").innerHTML = "<b> Yea ! you were clicked </b> Enjoy your click "
// })

button.addEventListener("contextmenu", ()=>{
     alert("Don't hack us by Right click Please !")
})


document.addEventListener("keydown", (e)=>{
     console.log(e.key, e.keyCode)
})

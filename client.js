const baseURL = `https://dep-lab.herokuapp.com`

// document.getElementById('second').addEventListener('click', ()=>{
//     axios.get("https://dep-lab.herokuapp.com/second-page")
//     .then((res)=>{

//     })
//     .except(()=>{
//         console.log("err second")
//     })
// })

//I got this code from w3shcools wanna see if I can make a draggable dive on the second page
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

document.getElementById("other-div").addEventListener('click', ()=>{
    console.log("test1")
    axios.get(baseURL + `/DB`)
    .then((res)=>{
        console.log(res.data)

        document.getElementById('mydiv').innerHTML = `<p>${res.data["2"]["name"]}</p>`
    })
    .catch(()=>{
        console.log("errrrr")
    })
})

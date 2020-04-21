var copyTextareaBtn = document.querySelector("#copyButton");
console.log(copyTextareaBtn);


copyTextareaBtn.addEventListener("click", copyLink, false)


function copyLink(e){
  if (e.target !== e.currentTarget) {
    const copyTextarea = e.target.parentNode.parentNode.parentNode.parentNode.firstChild.nextSibling
  
    console.log(copyTextarea);
    copyTextarea.focus();
    copyTextarea.select();
    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      console.log("Copying text command was " + msg);
    } catch (err) {
      console.log("Oops, unable to copy");
    }
  }
  e.stopPropagation;
}


  const emojiInputs = document.querySelectorAll('[data-emoji-picker="true"]');

 $( document ).ready(function() {

    emojiInputs.forEach(e => {
      generateElements(e);
    });
    });
        
    function generateElements(emojiInput) {
    const clickLink = event => {
      event.preventDefault();
      var caretPos = emojiInput.selectionStart;
      emojiInput.value =
        emojiInput.value.substring(0, caretPos) +
        " " +
        event.target.innerHTML +
        emojiInput.value.substring(caretPos);
      emojiPicker.style.display = "none";
      emojiInput.focus();

      //trigger ng-change for angular
      if (typeof angular !== "undefined") {
        angular.element(emojiInput).triggerHandler("change");
      }
    };

    emojiInput.style.width = "100%";

    const emojiContainer = document.createElement("div");
    emojiContainer.style.position = "relative";

    const parent = emojiInput.parentNode;
    parent.replaceChild(emojiContainer, emojiInput);
    emojiContainer.appendChild(emojiInput);


    const emojiTrigger = document.createElement("a");
    emojiTrigger.style.position = "absolute";
    emojiTrigger.style.top = "2px";
    emojiTrigger.style.right = "2px";
    emojiTrigger.style.textDecoration = "none";
    emojiTrigger.setAttribute("href", "javascript:void(0)");
    emojiTrigger.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 12 14"><path d="M8.9 8.4q-0.3 0.9-1.1 1.5t-1.8 0.6-1.8-0.6-1.1-1.5q-0.1-0.2 0-0.4t0.3-0.2q0.2-0.1 0.4 0t0.2 0.3q0.2 0.6 0.7 1t1.2 0.4 1.2-0.4 0.7-1q0.1-0.2 0.3-0.3t0.4 0 0.3 0.2 0 0.4zM5 5q0 0.4-0.3 0.7t-0.7 0.3-0.7-0.3-0.3-0.7 0.3-0.7 0.7-0.3 0.7 0.3 0.3 0.7zM9 5q0 0.4-0.3 0.7t-0.7 0.3-0.7-0.3-0.3-0.7 0.3-0.7 0.7-0.3 0.7 0.3 0.3 0.7zM11 7q0-1-0.4-1.9t-1.1-1.6-1.6-1.1-1.9-0.4-1.9 0.4-1.6 1.1-1.1 1.6-0.4 1.9 0.4 1.9 1.1 1.6 1.6 1.1 1.9 0.4 1.9-0.4 1.6-1.1 1.1-1.6 0.4-1.9zM12 7q0 1.6-0.8 3t-2.2 2.2-3 0.8-3-0.8-2.2-2.2-0.8-3 0.8-3 2.2-2.2 3-0.8 3 0.8 2.2 2.2 0.8 3z"/></svg>';
    emojiTrigger.onclick = () => {
$('#emojimodel').modal('toggle')
    };

    emojiContainer.appendChild(emojiTrigger);
 
    }

  const emojiInput = document.querySelectorAll('[data-bs-emoji="true"]');

 $( document ).ready(function() {

    emojiInput.forEach(e => {
      generateElements(e);
    });
    });
        
    function generateElements(emojiInpu) {
    const clickLink = event => {
      event.preventDefault();
      var caretPos = emojiInput.selectionStart;
      emojiInpu.value =
        emojiInpu.value.substring(0, caretPos) +
        " " +
        event.target.innerHTML +
        emojiInpu.value.substring(caretPos);
      emojiPicker.style.display = "none";
      emojiInpu.focus();

      //trigger ng-change for angular
      if (typeof angular !== "undefined") {
        angular.element(emojiInpu).triggerHandler("change");
      }
    };

    emojiInpu.style.width = "100%";

    const emojiContaine = document.createElement("div");
    emojiContaine.style.position = "relative";

    const parent = emojiInpu.parentNode;
    parent.replaceChild(emojiContaine, emojiInpu);
    emojiContaine.appendChild(emojiInpu);


    const emojiTrigge = document.createElement("a");
    emojiTrigge.style.position = "absolute";
    emojiTrigge.style.top = "2px";
    emojiTrigge.style.right = "2px";
    emojiTrigge.style.textDecoration = "none";
    emojiTrigge.setAttribute("href", "javascript:void(0)");
    emojiTrigge.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 12 14"><path d="M8.9 8.4q-0.3 0.9-1.1 1.5t-1.8 0.6-1.8-0.6-1.1-1.5q-0.1-0.2 0-0.4t0.3-0.2q0.2-0.1 0.4 0t0.2 0.3q0.2 0.6 0.7 1t1.2 0.4 1.2-0.4 0.7-1q0.1-0.2 0.3-0.3t0.4 0 0.3 0.2 0 0.4zM5 5q0 0.4-0.3 0.7t-0.7 0.3-0.7-0.3-0.3-0.7 0.3-0.7 0.7-0.3 0.7 0.3 0.3 0.7zM9 5q0 0.4-0.3 0.7t-0.7 0.3-0.7-0.3-0.3-0.7 0.3-0.7 0.7-0.3 0.7 0.3 0.3 0.7zM11 7q0-1-0.4-1.9t-1.1-1.6-1.6-1.1-1.9-0.4-1.9 0.4-1.6 1.1-1.1 1.6-0.4 1.9 0.4 1.9 1.1 1.6 1.6 1.1 1.9 0.4 1.9-0.4 1.6-1.1 1.1-1.6 0.4-1.9zM12 7q0 1.6-0.8 3t-2.2 2.2-3 0.8-3-0.8-2.2-2.2-0.8-3 0.8-3 2.2-2.2 3-0.8 3 0.8 2.2 2.2 0.8 3z"/></svg>';
    emojiTrigge.onclick = () => {
$('#eemojimodel').modal('toggle')
    };

    emojiContaine.appendChild(emojiTrigge);
 
    }

AFRAME.registerComponent("createbuttons", {
  init: function() {
    // 1. Create the Order button
    var button1 = document.createElement("button");
    button1.innerHTML = "ORDER NOW";
    button1.setAttribute("id", "order-button");
    button1.setAttribute("class", "btn btn-danger ml-3 mr-3");

    // 2. Create the Bill button
  



    // 3. Append somewhere
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.appendChild(button2);
 //appemd the button2 as child of ButtonDiv

 
  }
});

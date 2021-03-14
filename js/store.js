let selectedSize = Array.from(document.querySelectorAll(".size"));
const addBtn = document.getElementById("add-btn");

selectedSize.forEach(function(e) {
  e.addEventListener("click", function() {
    selectedSize.forEach(function(e) {
      e.classList.remove("selected");
      addBtn.setAttribute("data-item-custom1-value", "");
    });
    e.classList.add("selected");
    addBtn.setAttribute("data-item-custom1-value", e.innerHTML);
  });
});

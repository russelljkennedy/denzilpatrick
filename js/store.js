let selectedSize = Array.from(document.querySelectorAll(".size"));

selectedSize.forEach(function(e) {
  e.addEventListener("click", function() {
    selectedSize.forEach(function(e) {
      e.classList.remove("selected");
    });
    e.classList.add("selected");
  });
});

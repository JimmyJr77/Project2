// // EVENT LISTENER FOR THE DROP DOWN CATEGORY SELECTOR
// document.getElementById('categoryDropdown').addEventListener('change', function() {


  // TOOL BOX DROP DOWN TOGGLE

  function toggleDropdown(element) {
    const dropdown = element.nextElementSibling;
    if (dropdown.style.display === "none" || dropdown.classList.contains("d-none")) {
        dropdown.style.display = "block";
        dropdown.classList.remove("d-none");
    } else {
        dropdown.style.display = "none";
    }
}
  





  








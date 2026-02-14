document.getElementById("partnerForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("partnerSuccess").style.display = "block";
  this.reset();
});

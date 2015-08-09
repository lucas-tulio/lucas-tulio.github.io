window.onload = function() {

  // Animate Profile pic
  var profilePic = document.getElementById("profile-pic-intro");
  profilePic.classList.remove("fade-from-top");

  // Animate Name
  var name = document.getElementById("name");
  name.classList.remove("fade-from-top");

  // Animate Things
  var firstThing = document.getElementById("first-thing");
  var secondThing = document.getElementById("second-thing");
  var thirdThing = document.getElementById("third-thing");
  firstThing.classList.remove("fade-from-top");
  secondThing.classList.remove("fade-from-top");
  thirdThing.classList.remove("fade-from-top");

  // Animate link container
  var linkContainer = document.getElementById("link-container-intro");
  linkContainer.classList.remove("fade-from-bot");

};
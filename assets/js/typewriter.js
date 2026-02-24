document.addEventListener("DOMContentLoaded", function () {
  var el = document.getElementById("typewriter");
  if (!el || !window.typewriterRoles || !typewriterRoles.length) return;

  var roles = typewriterRoles;
  var roleIndex = 0;
  var charIndex = 0;
  var isDeleting = false;
  var typeSpeed = 80;
  var deleteSpeed = 40;
  var pauseAfterType = 2000;
  var pauseAfterDelete = 500;

  function tick() {
    var current = roles[roleIndex];

    if (!isDeleting) {
      // Typing
      charIndex++;
      el.textContent = current.substring(0, charIndex);

      if (charIndex === current.length) {
        // Finished typing — pause then start deleting
        isDeleting = true;
        setTimeout(tick, pauseAfterType);
      } else {
        setTimeout(tick, typeSpeed);
      }
    } else {
      // Deleting
      charIndex--;
      el.textContent = current.substring(0, charIndex);

      if (charIndex === 0) {
        // Finished deleting — move to next role
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(tick, pauseAfterDelete);
      } else {
        setTimeout(tick, deleteSpeed);
      }
    }
  }

  tick();
});

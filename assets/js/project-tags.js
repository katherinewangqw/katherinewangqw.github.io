document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".tag-btn");
  var items = document.querySelectorAll(".project-item");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var tag = btn.getAttribute("data-tag");

      // Update active button
      buttons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");

      // Filter projects
      items.forEach(function (item) {
        if (tag === "all") {
          item.style.display = "";
        } else {
          var tags = item.getAttribute("data-tags").split(" ");
          item.style.display = tags.indexOf(tag) !== -1 ? "" : "none";
        }
      });
    });
  });
});

(function () {
  "use strict";

  var comments = Array.from(document.querySelectorAll(".coment"));
  var commentsContainer = document.querySelector(".place-coment");
  if (commentsContainer) {
    commentsContainer.style.flexDirection = "column-reverse";
    comments.forEach(function (comment, index) {
      comment.style.display = "none";
      setTimeout(function () {
        comment.style.display = "flex";
        comment.classList.add("animate-show");
        setTimeout(function () {
          comment.classList.remove("animate-show");
        }, 300);
      }, (index + 1) * 5000);
    });
  }

  function scrollToTarget(event) {
    event.preventDefault();
    var order = document.getElementById("order");
    var player = document.getElementById("container_video");
    var target = order && window.getComputedStyle(order).display !== "none" ? order : player;
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.querySelectorAll('.react-coment, a[href="#order"]').forEach(function (link) {
    link.addEventListener("click", scrollToTarget);
  });
})();

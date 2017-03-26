  var popSuccess = document.querySelector(".pop-up__success");
  var popFailure = document.querySelector(".pop-up__failure");
  var popButtonSuccess = document.querySelector(".pop-up__close--success");
  var popButtonFail = document.querySelector(".pop-up__close--fail");

  popSuccess.classList.remove("pop-up__success--closed");
  popSuccess.classList.add("pop-up__success--opened");
  popFailure.classList.remove("pop-up__failure--closed");
  popFailure.classList.add("pop-up__failure--opened");

  popButtonSuccess.addEventListener("click", function() {
    if (popSuccess.classList.contains("pop-up__success--opened")) {
      popSuccess.classList.add("pop-up__success--closed");
    }
  });

  popButtonFail.addEventListener("click", function() {
    if (popFailure.classList.contains("pop-up__failure--opened")) {
      popFailure.classList.add("pop-up__failure--closed");
    }
  });

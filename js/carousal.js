(function ($) {
  const cardcarousel = document.querySelector(".carousel__slider");
  const cards = arrayFromNodeList(
    cardcarousel.querySelectorAll(".carousel__slide")
  );

  document.getElementById("carousel__next").onclick = function () {
    nextCard(cards);
  };

  document.getElementById("carousel__prev").onclick = function () {
    previousCard(cards);
  };

  $(document).on("click", ".carousel__slide.right", function () {
    nextCard(cards);
  });

  $(document).on("click", ".carousel__slide.left", function () {
    previousCard(cards);
  });

  function arrayFromNodeList(nodelist) {
    return [].slice.call(nodelist);
  }

  function nextCard(cards) {
    cards.forEach((card) => {
      const classes = card.classList;
      if (classes.contains("right")) {
        classes.add("mid");
        classes.remove("right");
      } else if (classes.contains("mid")) {
        classes.remove("mid");
      } else if (classes.contains("left")) {
        classes.remove("left");
        classes.add("right");
      } else {
        classes.add("left");
      }
    });
  }

  function previousCard(cards) {
    cards.forEach((card) => {
      const classes = card.classList;
      if (classes.contains("mid")) {
        classes.add("right");
        classes.remove("mid");
      } else if (classes.contains("right")) {
        classes.add("left");
        classes.remove("right");
      } else if (classes.contains("left")) {
        classes.remove("left");
      } else {
        classes.add("mid");
      }
    });
  }
})(jQuery);

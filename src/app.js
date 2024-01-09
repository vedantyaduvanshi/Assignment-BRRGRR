//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20,
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true,
};

// Renders each ingredient based on its state
function renderCheese() {
  let cheese = document.getElementById("cheese");
  state.Cheese ? (cheese.style.display = "inherit") : (cheese.style.display = "none");
}

function renderTomatoes() {
  let tomato = document.getElementById("tomato");
  state.Tomatoes ? (tomato.style.display = "inherit") : (tomato.style.display = "none");
}

function renderOnions() {
  let onion = document.getElementById("onion");
  state.Onions ? (onion.style.display = "inherit") : (onion.style.display = "none");
}

function renderLettuce() {
  let lettuce = document.getElementById("lettuce");
  state.Lettuce ? (lettuce.style.display = "inherit") : (lettuce.style.display = "none");
}

// Event Listeners for ingredient buttons
document.querySelector(".btn-cheese").addEventListener("click", function () {
  state.Cheese = !state.Cheese;
  renderCheese();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
});

document.querySelector(".btn-tomatoes").addEventListener("click", function () {
  state.Tomatoes = !state.Tomatoes;
  renderTomatoes();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
});

document.querySelector(".btn-onions").addEventListener("click", function () {
  state.Onions = !state.Onions;
  renderOnions();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
});

document.querySelector(".btn-lettuce").addEventListener("click", function () {
  state.Lettuce = !state.Lettuce;
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
});

// Renders active state for ingredient buttons
function renderButtons() {
  for (let ingredient in state) {
    if (state[ingredient]) {
      document.querySelector(`.btn-${ingredient.toLowerCase()}`).classList.add("active");
    } else {
      document.querySelector(`.btn-${ingredient.toLowerCase()}`).classList.remove("active");
    }
  }
}

// Shows only selected ingredients on the ingredients board
function renderIngredientsBoard() {
  let items = document.querySelectorAll(".items");
  items.forEach((item) => {
    state[item.textContent] ? (item.style.display = "block") : (item.style.display = "none");
  });
}

// Calculates and displays the price of the burger
function renderPrice() {
  let totalPrice = wholeWheatBun;
  for (let ingredient in state) {
    if (state[ingredient]) {
      totalPrice += ingredients[ingredient];
    }
  }
  document.querySelector(".price-details").textContent = `INR ${totalPrice}`;
}

// Initial render on page load
renderCheese();
renderTomatoes();
renderOnions();
renderLettuce();
renderButtons();
renderIngredientsBoard();
renderPrice();

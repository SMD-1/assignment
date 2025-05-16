const button = document.getElementById("checkout");
const input = document.getElementById("input");
const countersElem = document.getElementById("counters-container");

// const counters = [[5, 1, 2, 1], [12], [6, 1, 1]];

// Lets say we have 3 counters with 0 items
const counters = [[], [], []];
const sumOfItemsInCounters = counters.map((counter) =>
  counter.reduce((sum, value) => sum + value, 0)
);

const renderCounters = () => {
  countersElem.innerHTML = "";
  counters.forEach((counter, counterIndex) => {
    const counterElem = document.createElement("div");
    counterElem.classList.add("counter");
    counterElem.innerHTML = `<div class="counter-header">
      <h2>Counter ${counterIndex + 1}</h2>
      <p>
          <i class="fa-solid fa-users"></i>
          ${counter.length} customers
      </p>
      </div>`;

    const ul = document.createElement("ul");

    counter.forEach((item, itemIndex) => {
      const li = document.createElement("li");
      if (itemIndex === 0) {
        li.innerHTML = `<p><i class="fa-solid fa-cart-shopping"></i> ${item} items</p>
        <i class="fa-solid fa-minus remove-item"></i>`;
        // when click on remove icon remove the item
        li.querySelector(".remove-item").addEventListener("click", () =>
          removeItems(item, counterIndex)
        );
      } else {
        li.innerHTML = `<p><i class="fa-solid fa-cart-shopping"></i> ${item} items</p>`;
      }
      ul.appendChild(li);
    });
    counterElem.appendChild(ul);
    countersElem.appendChild(counterElem);

    const totalItemsElem = document.createElement("p");
    totalItemsElem.classList.add("total-items");
    totalItemsElem.innerHTML = `<p>Total Items: ${sumOfItemsInCounters[counterIndex]}</p>`;

    counterElem.appendChild(totalItemsElem);
  });
};

const addItems = () => {
  const enteredItem = parseInt(input.value);
  const indexOfMinItemsSum = sumOfItemsInCounters.indexOf(
    Math.min(...sumOfItemsInCounters)
  );

  counters[indexOfMinItemsSum].push(enteredItem);
  sumOfItemsInCounters[indexOfMinItemsSum] += enteredItem;
  console.log("after add items", sumOfItemsInCounters);

  input.value = "";
  renderCounters();
};

const removeItems = (elem, index) => {
  counters[index].shift();
  sumOfItemsInCounters[index] -= elem;
  renderCounters();
};

button.addEventListener("click", addItems);

renderCounters();

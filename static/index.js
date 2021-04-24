const tellYear = new Date().getFullYear();
console.log(tellYear);

document.querySelector("footer p").textContent = "Copyright © " + tellYear;

$('body').ripples({
    dropRadius: 20,
    perturbance: 2,
    resolution: 1000
  });
setInterval(printCondition, 1000);
function printCondition() {
  console.log(promise1);
}
let files = document.querySelectorAll(".file");

let promise1 = new Promise((resolve, reject) => {
  let span = document.createElement("span");
  span.innerText = "first file";
  files[0].appendChild(span);
  let delay = Math.round(Math.random() * 4);
  setTimeout(() => {
    let num = Math.random();
    span.remove();
    num > 0.5 ? resolve("We got the file") : reject("the file didn't upload");
  }, delay * 1000);
});

let promise2 = new Promise((resolve, reject) => {
  let span = document.createElement("span");
  span.innerText = "second file";
  files[1].appendChild(span);
  let delay = Math.round(Math.random() * 4);
  setTimeout(() => {
    let num = Math.random();
    span.remove();

    num > 0.5 ? resolve("We got the file") : reject("the file didn't upload");
  }, delay * 1000);
});

let promise3 = new Promise((resolve, reject) => {
  let span = document.createElement("span");
  span.innerText = "third file";
  files[2].appendChild(span);
  let delay = Math.round(Math.random() * 4);
  setTimeout(() => {
    let num = Math.random();
    span.remove();

    num > 0.5 ? resolve("We got the file") : reject("the file didn't upload");
  }, delay * 1000);
});

promise1
  .then((res) => (files[0].innerText += res))
  .catch((res) => (files[0].innerText += res));
promise2
  .then((res) => (files[1].innerText += res))
  .catch((res) => (files[1].innerText += res));
promise3
  .then((res) => (files[2].innerText += res))
  .catch((res) => (files[2].innerText += res));

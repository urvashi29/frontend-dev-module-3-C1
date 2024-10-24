//throttling
throttle = (func, delay) => {
  let timeoutId;

  return function () {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        console.log(this.value);
        timeoutId = null;
      }, delay);
    }
  };
};

throttle();

const throttleFun = throttle("apiCall", 2000); //logic, delay

document.querySelector("#name").addEventListener("keyup", throttleFun);

//debouncing
debounce = (func, delay) => {
  let timeoutId;

  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      console.log(this.value);
    }, delay);
  };
};

debounce("hello", 2000);

const debounceFun = debounce("apiCall", 2000); //logic, delay

document.querySelector("#age").addEventListener("keyup", debounceFun);

for (let i = 0; i < 10; i++) {
  // console.log(i);
}

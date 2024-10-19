//axios
let users = [];
document.querySelector("#users").addEventListener("click", async function () {
  //API call using axios
  // axios.get(url).then(callback).catch(callback)

  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //axios with async & await, try catch (custom error, waiting forapi data)
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res);
    users = res.data;
    displayUsers(users);
  } catch (err) {
    console.log(err);
  }

  //   axios.post(url, data).then().catch();
});

displayUsers = (users) => {
  console.log(users);

  users.length
    ? users.map((user) => {
        console.log(user.email);
      })
    : alert("No Post Yet!");
};

//fetch
async function fetchPosts() {
  // API using fetch
  //   fetch("https://jsonplaceholder.typicode.com/posts/")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));

  // fetch using async & await, try catch

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    console.log(res);
    console.log(res.ok);
    //custom error
    if (!res.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }

    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }

  //   for post request
  // fetch(url, {
  //     method: "POST",
  //     body: {},
  //     headers: {
  //     }
  // }).then().then().catch();
}

fetchPosts();

//custom error handling
fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/")
    .then((response) => {
      console.log(response);
      //custom error
      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // Handle the response data
    })
    .catch((error) => {
      console.log(error);
      // Handle any errors
    });
};

fetchData();

// movie api
async function getMovies() {
  const options = {
    method: "GET",
    url: "https://imdb-com.p.rapidapi.com/title/get-taglines",
    params: {
      tconst: "tt0120338",
    },
    headers: {
      "x-rapidapi-key": "790d86839cmsh8e4edc9dd8ffc56p19fb3ejsn819cdbc59bdb",
      "x-rapidapi-host": "imdb-com.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getMovies();

// callback hell (callback chaining)/ Pyramid Doom
// fun1(function () {
//   fun2(function () {
//     fun3(function () {
//       //do something
//     });
//   });
// });

// createBlog(post, function () {
//     incrementCount(numberOfPosts, function () {
//         bookmark(postId, function() {
//         })
//     })
// });

// e-commerce
// createOrder(cart, function () {
//     payment(orderId, function () {
//         orderHistory(function () {
//             updateAmazonPay();
//         })
//     })
// })

// using Promises
// createOrder(cart)
//   .then((orderid) => {
//     return payment(orderid);
//   })
//   .then((paymentId) => {
//     return orderHistory(paymentId);
//   })
//   .then(() => {
//     updateAmazonPay();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise chaining
// fetch(api)
//   .then((data) => {
//     console.log(data.message);
//     // Returning a new promise for the next operation
//     return fetchData(api);
//   })
//   .then((otherData) => {
//     console.log(otherData.message);
//     // Returning a new promise for the next operation
//     return fetchData("<https://api.example.com/more-data>");
//   })
//   .then((moreData) => {
//     console.log(moreData.message);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Promise.all
const promiseOne = Promise.resolve(10);
console.log(promiseOne);
const promiseTwo = axios.get("https://jsonplaceholder.typicode.com/posts/");
const promiseThree = new Promise((res, rej) => {
  return res(100);
});

//earlier
// promiseOne.then()
// promiseTwo.then();
// promiseThree.then();

Promise.all([promiseOne, promiseThree, promiseTwo]).then((values) => {
  console.log(values);
});

// Promise.race
Promise.race([promiseOne, promiseThree, promiseTwo]).then((values) => {
  console.log(values);
});

// GET Request
// https://jsonplaceholder.typicode.com/posts/
// https://jsonplaceholder.typicode.com/users
// https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001

// https://rapidapi.com/ - try to use movie API

// POST request
// https://reqres.in
//  {
//   name: "morpheus",
//   job: "leader",
// };

//Task
//Try get the data movie API, E-commerce and console data (Rapid Api & fake Store API)
//Get the data from user and do post request

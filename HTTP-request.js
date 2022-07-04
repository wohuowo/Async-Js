const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  } else if (request.readyState === 4) {
    console.log("couldnt fetch the data");
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/todos/"); //get is a type of request the second statement is where we want to get the data from
request.send();
//status 200 :everything is okay
//status 404 :endpoint doesnt rxist

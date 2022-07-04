const getTodo = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText); //takes json string and convert it to js objects
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });

  request.open("GET", "todos.json"); //get is a type of request the second statement is where we want to get the data from
  request.send();
};

//status 200 :everything is okay
//status 404 :endpoint doesnt rxist
getTodo((err, data) => {
  console.log("callback fired");
  //console.log(err, data);
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

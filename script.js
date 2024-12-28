document.getElementById("btn").addEventListener("click",()=>{
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;

  const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name === "" || age === "") {
        reject(`Please enter valid details`);
      } else if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  mypromise
    .then((response) => {
      alert(response);
    })
    .catch((err) => {
      alert(err);
    });
});
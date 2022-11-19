 // const { bodyParser } = require("json-server");

// Add your code here


function submitData(name,email) {
    const userInfo = {
        name: name,
        email: email
    }
    return fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(userInfo)

    })
    .then(res => res.json())
    .then(data => {
       const li = document.createElement("li");
       li.textContent = data.id
       document.querySelector("body").append(li);

    } )
    .catch(error => {
        const p = document.createElement("p");
        p.textContent = error;
        document.querySelector("body").append(p)
        
    })
}
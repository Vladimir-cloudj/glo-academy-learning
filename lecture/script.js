const a = 10

const promise = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 5) {
                resolve(num);
            } else {
                reject("error");
            }
        }, 2000)
    })
}

// promise(15)
//     .then((data) => {
//         data = data + 10
//         return data
//     })
//     .then((data1) => {console.log(data1)})
//     .catch((error) => {console.log(error)})
//     .finally(() => {console.log("finally")})



// fetch("db.json")
//     .then((response) => {response.json()
//     .then((data) => {});
// });

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => {console.log(error)})


const form = document.getElementById("form")
const username = document.getElementById("name")
const pass = document.getElementById("password")

const sendData = (url, data = {}, method = 'GET') => {
    return fetch(url, {
        method: method,
        body: data,
        headers: {
            "Content-type": "multipart/form-data",
        },
    }).then((response) => response.json())
}

// form.addEventListener("submit", (event) => {
//     event.preventDefault()

//     const user = {
//         login: username.value,
//         password: pass.value
//     }
    
//     sendData("https://jsonplaceholder.typicode.com/posts", user.json())
//     .then((data) => {
//         console.log(data);
//         });
// })

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);

    sendData({
        url: "https://jsonplaceholder.typicode.com/posts", 
        data: data,
        method: "POST"
    })
    .then((data) => {
        console.log(data);
    });
});
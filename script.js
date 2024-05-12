const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

// const generateJokes = () => {

//     const setHeader = {
//         headers: {
//             Accept : "application/json"
//         }
//     }

//     // this is a promise
//     fetch('https://icanhazdadjoke.com',setHeader)
//     .then((res)=>{
//         return res.json()
//     }).then((data)=>{
//         jokes.innerHTML = data.joke;
//     }).catch((err)=>{
//         console.log("Error: " + err);
//     })
// }


const generateJokes = async() => {

    try{
    const setHeader = {
        headers: {
            Accept : "application/json"
        }
    }

    // this is a promise
    const res = await fetch('https://icanhazdadjoke.com',setHeader)
    const data = await res.json();
    jokes.innerHTML = data.joke;
    }catch(err){
        console.log("Error: "+err);
    }

}



jokeBtn.addEventListener('click',generateJokes);
generateJokes();

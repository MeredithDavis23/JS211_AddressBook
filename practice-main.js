let arrayOfUsers = [];

// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = function() {
  multiplePeeps()
}

// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const loadUser = () => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(user => user.results.map(person => {
        arrayOfUsers.push(person)
        const myUser = document.getElementById('all-users');
        const li = document.createElement('li');
        const pic = document.createElement('img');
        pic.setAttribute("src", `${person.picture.thumbnail}`)
        const text = document.createTextNode(`${person.name.first} ${person.name.last} `)
        li.appendChild(text)
        myUser.append(li)
        myUser.appendChild(pic)
        const button = document.createElement("button")
        button.innerHTML = "More Info"
        li.appendChild(button)
        const moreInfo = document.createElement('p')
        moreInfo.innerHTML = "";
  
        button.addEventListener('click', function() {
            const info = `${person.location.street}`
            button.addEventListener('click', function() {
                if(moreInfo.innerHTML === "") {
                  return moreInfo.innerHTML = info;
                }else{
                  return moreInfo.innerHTML = "";
                }
                })
                li.appendChild(info)
                myUser.append(li)
                myUser.appendChild(info)
      })
  }
  

//   const moreInfo = (person) => {
//     // const myInfo = `${person.name}`
//     const myUser = document.getElementById('all-users');
//     arrayOfUsers.map((person) => {
//     const liTwo = document.createElement('li')
//     const info = document.createTextNode(`${person.location.street}`)
// //   liTwo.appendChild(info)
// //   myUser.append(liTwo)
// //  document.getElementById('all-users').appendChild(liTwo)
// //  loadUser();
//  console.log('button was clicked')
//     })
// }




// this function logs the results in your browsers console
// const getUsers = () => {
//   console.log(arrayOfUsers)
// }


const multiplePeeps = () => {
  fetch('https://randomuser.me/api/?results=7')
    .then(res => res.json())
    .then(user => user.results.map(person => {
      arrayOfUsers.push(person)
    }))
    // .then(console.log(arrayOfUsers))
}

// const loadUser = {
//   const myUser = document.getElementById('all-users');
//   const li = document.createElement('li');
//   const text = document.createTextNode('${person.name}')
//   li.appendChild(text)
//   myUser.append(li)
// }
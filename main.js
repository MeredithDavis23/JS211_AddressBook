// 'use strict';
const assert = require('assert');

let arrayOfUsers = [];

// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
// window.onload = function() {
//   // multiplePeeps()
// }

// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const loadUser = (fetch) => {
  return fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(user => user.results.map(person => {
      arrayOfUsers.push(person)
      const myUser = document.getElementById('all-users');
      const pic = document.createElement('img');
      pic.setAttribute("src", `${person.picture.thumbnail}`)
      const moreInfo = document.createElement('p')
      const li = document.createElement('li');
      const button = document.createElement("button")
      const text = document.createTextNode(`${person.name.first} ${person.name.last} `)
      moreInfo.innerHTML = "";
      button.innerHTML = "More Info"
      button.addEventListener('click', function() {
        const info = document.createTextNode(`Age: ${person.dob.age} Street: ${person.location.street.number} ${person.location.street.name}  City: ${person.location.city} State: ${person.location.state} Country: ${person.location.country} Postcode: ${person.location.postcode}  Email: ${person.email}`)
        if(moreInfo.innerHTML === "") {
          return moreInfo.appendChild(info);
        }else{
          return moreInfo.innerHTML = "";
        }
        })
        li.appendChild(text)
        myUser.appendChild(pic)
        myUser.append(li)
        li.appendChild(button)
        li.appendChild(moreInfo)
        // myUser.appendChild(info)
    }));
};

// const moreInfo = () => {
//   const liTwo = document.createElement('li')
//   const info = document.createTextNode(`${person.dob.date}`)
//   li.appendChild(info)
//   myUser.append(li)
// }
// this function logs the results in your browsers console
// const getUsers = () => {
//   console.log(arrayOfUsers)
// }


const multiplePeeps = (fetch) => {
  return fetch('https://randomuser.me/api/?results=7')
    .then(res => res.json())
    .then(user => user.results.map(person => {

      
      arrayOfUsers.push(person);
      // const sorted = user.sort()
      // console.log(arrayOfUsers)
      const myUser = document.getElementById('all-users');
      const pic = document.createElement('img');
      pic.setAttribute("src", `${person.picture.thumbnail}`)
      const moreInfo = document.createElement('p')
      const li = document.createElement('li');
      const button = document.createElement("button")
      const text = document.createTextNode(`${person.name.first} ${person.name.last} `)
      moreInfo.innerHTML = "";
      button.innerHTML = "More Info"
      button.addEventListener('click', function() {
        const info = document.createTextNode(`Age: ${person.dob.age} Street: ${person.location.street.number} ${person.location.street.name}  City: ${person.location.city} State: ${person.location.state} Country: ${person.location.country} Postcode: ${person.location.postcode}  Email: ${person.email}`)
        if(moreInfo.innerHTML === "") {
          return moreInfo.appendChild(info);
        }else{
          return moreInfo.innerHTML = "";
        }
        })
        myUser.appendChild(pic)
        li.appendChild(text)
        myUser.append(li)
        li.appendChild(button)
        li.appendChild(moreInfo)
        // myUser.appendChild(info)
    }));
    // arrayOfUsers.sort()
    // console.log(arrayOfUsers.user)
    // arrayOfUsers.sort(function(a, b) {
    //   if(a.person.name.first < b.person.name.first) {return -1;}
    //   if(a.person.name.first > b.person.name.first)  {return 1;}
    //   return 0;
    // })
      // const sorted = person.name.first.sort();
      // console.log(sorted)
};

const countries = (fetch) => {
  return fetch('https://randomuser.me/api/?nat=au,us,fr,gb')
  .then(res => res.json())
  .then(user => user.results.map(person => {
    arrayOfUsers.push(person);
    const myUser = document.getElementById('all-users');
    const pic = document.createElement('img');
    pic.setAttribute("src", `${person.picture.thumbnail}`)
    const moreInfo = document.createElement('p')
    const li = document.createElement('li');
    // const button = document.createElement("button")
    const text = document.createTextNode(`${person.name.first} ${person.name.last}  ||   Country:  ${person.location.country}`)
    // moreInfo.innerHTML = "";
    // button.innerHTML = "Nationality"
    // button.addEventListener('click', function() {
    //   const info = document.createTextNode(`${person.location.country}`)
    //   if(moreInfo.innerHTML === "") {
    //     return moreInfo.appendChild(info);
    //   }else{
    //     return moreInfo.innerHTML = "";
    //   }
    //   })
      
      myUser.appendChild(pic)
      li.appendChild(text)
      myUser.append(li)
      // li.appendChild(button)
      // li.appendChild(moreInfo)
      // myUser.appendChild(info)
  }));
}

const phone = (fetch) => {
  return fetch('https://randomuser.me/api/?inc=name,picture,cell')
  .then(res => res.json())
  .then(user => user.results.map(person => {
    arrayOfUsers.push(person);
    const myUser = document.getElementById('all-users');
    const pic = document.createElement('img');
    pic.setAttribute("src", `${person.picture.thumbnail}`)
    const moreInfo = document.createElement('p')
    const li = document.createElement('li');
    // const button = document.createElement("button")
    const text = document.createTextNode(`${person.name.first} ${person.name.last}  ||   Cell:  ${person.cell}`)
    myUser.appendChild(pic)
    li.appendChild(text)
    myUser.append(li)
  }))
};


const exclude = (fetch) => {
  fetch('https://randomuser.me/api/?exc=dob,registered,nat,location')
  .then(res => res.json())
  .then(user => user.results.map(person => {
    arrayOfUsers.push(person);
    const myUser = document.getElementById('all-users');
    const pic = document.createElement('img');
    pic.setAttribute("src", `${person.picture.thumbnail}`)
    const moreInfo = document.createElement('p')
    const li = document.createElement('li');
    // const button = document.createElement("button")
    const text = document.createTextNode(`${person.name.first} ${person.name.last}  || Gender: ${person.gender} || Cell:  ${person.cell} || Email: ${person.email}`)
    myUser.appendChild(pic)
    li.appendChild(text)
    myUser.append(li)
  }))
};

const clearInfo = () => {
  document.getElementById('all-users').innerHTML = null
};




// const loadUser = {
//   const myUser = document.getElementById('all-users');
//   const li = document.createElement('li');
//   const text = document.createTextNode('${person.name}')
//   li.appendChild(text)
//   myUser.append(li)
// }

// if (typeof describe === 'function'){

  describe('#loadUser()', () => {
    it('should make sure the URL works', () => {
      const fakeFetch = url => {
        assert(url == 'https://randomuser.me/api/')
        return new Promise(function(resolve) {

        })
      }
      loadUser(fakeFetch)
      })
      it('brings back one user', () => {
        const fakeFetch = url => {
          return Promise.resolve({
            json: () => Promise.resolve({
              result: [
                {
                  first: 'Johnny',
                  last: 'Johnson'
                }
              ]
            })
          })
        }
        loadUser(fakeFetch)
        .then(result => assert(result.first === 'Johnny'))
        })
      })
      describe('#phone()', () => {
        it('should only bring back name, picture, cell', () => {
          const fakeFetch = url => {
            assert(url == 'https://randomuser.me/api/?inc=name,picture,cell')
            return new Promise(function(resolve) {
    
            })
          }
          phone(fakeFetch)
          })
        })
     
    
    
  

/*fetch("https://swapi.dev/api/people/1")
    .then((data) => {
        console.log("got it", data);
        return data.json()
    })
    .then((d) => {
        console.log("josn", d)
        return fetch("https://swapi.dev/api/people/2")
    })
    .then((data2) => {
        console.log("got 2nd time", data2)
        return data2.json();
    })
    .then((d2) => {
        console.log("data", d2);
    })
    .catch((err) => {
        console.log(err)
    })*/

/*async function req(val) {
    const r1 = await axios.get(`https://swapi.dev/api/people/${val}`);
    console.log(r1.data);
}
req(3)*/
/*const but = document.querySelector('button')
const jokes  = document.querySelector('#jokes')
async function happy(){
    const head  = {headers:{Accept: 'application/json'}}
    const h1 = await axios.get("https://icanhazdadjoke.com",head)
    const newli = document.createElement('li')
    newli.innerText = h1.data.joke;
    jokes.append(newli);
}
but.addEventListener('click',()=>{
    happy();
})
*/

const div = document.querySelector(".img");
const form = document.querySelector("form");
const inp = document.querySelector("input");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const movsearched = inp.value;
  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${movsearched}`
  );
  makeimg(res);
});

const makeimg = (res) => {
  for (let i = 0; i < 10; i++) {
    if (res.data[i].show.image) {
      const img = document.createElement("img");
      img.classList.add("col-3", "my-4", "image-fluid","rounded");
      img.src = res.data[i].show.image.medium;
      div.append(img);
      img.style.opacity = 0.5;
      img.addEventListener("mouseover", (eve) => {
        setTimeout(() => {
          img.style.opacity = "1";

        }, 100);
      });
      inp.addEventListener("keyup", (eve) => {
        if (inp.value === "") {
          div.removeChild(img);
        }
      });
    }
  }
};

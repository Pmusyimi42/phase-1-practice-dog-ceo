console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded',() => {
    let allBreeds = [];
 const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
 const breedUrl = 'https://dog.ceo/api/breeds/list/all'
 const dogImgContainer = document.getElementById("dog-image-container")
 const dogBreedUl = document.getElementById("dog-breeds")
 const breedDropdown = document.getElementById("breed-dropdown")
 dogBreedUl.addEventListener("click", (event) => {
    event.target.style.color = "blue"
 });
 breedDropdown.addEventListener("change", (event) => {
    const letter = event.target.value
    const filteredBreeds = allBreeds.filter(breed =>breed.startsWith(letter));
    dogBreedUl.innerHTML = createDogList(filteredBreeds);
 });
 fetch(imgUrl)
 .then(response => response.json())
 .then((dogImgData) =>{
    dogImgData.message.forEach(imgUrl => {
        dogImgContainer.innerHTML += `<img src="${imgUrl}">`
        
    })
    const dogImgString = dogImgData.message.map(imgUrl => `img src="${imgUrl}">`);
 })

   
     
     fetch(breedUrl)
      .then(response => response.json())
      .then(breedData => {
        allBreeds = Object.keys(breedData.message)
        console.log(allBreeds);
        dogBreedUl.innerHTML = createDogList(allBreeds)
      })
    });
      


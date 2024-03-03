async function getData() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  console.log(id);
  const response =  axios.get(`https://dummyjson.com/products/${id}`) .then(response=> {

  // const response = await fetch(` https://dummyjson.com/products/${id}`);
  const data =  response.data;

  console.log(data.images);
  document.querySelector(" .title").textContent = data.title;
  document.querySelector("img").src = data.thumbnail;
  document.querySelector(" .description").textContent = data.description;
  document.querySelector(" .price").textContent = data.price;
  document.querySelector(" .discount span").textContent = data.discountPercentage;


  const images = data.images;


  const result =  images.map( function(ele){
    console.log(ele);
    return `
    <img src = ${ele} />
    `
}).join('');

  
  document.querySelector(".image").innerHTML = result;
  });
  
}
getData();

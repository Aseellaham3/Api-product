

  const  getProduct = () => {


    const response =  axios.get('https://dummyjson.com/products') .then(response=> {

      const products =    response.data.products;
        
        const result = products.map( function(product){
            return `
                <div class="product">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <p>price : ${product.price}</p>
                <p>discountPercentage : ${product.discountPercentage}</p>
                <p>rating : ${product.rating}</p>
                
    
                    <img src= ${product.images[0]} />
                    <a href="details.html?id=${product.id}">more</a>

                </div>
            `
        }
    
        ).join("")
    
    
        document.querySelector('.products').innerHTML = result

       
    
   
    })

 
    
    
 }     


 getProduct()



     
   
   // const data =   response.json()

    //  const products = data.products
  

/*
    const response = await  fetch("https://dummyjson.com/products")
   
    const data =  await response.json()

      const products = data.products
*/

  /*  const result = products.map( function(product){
        return `
            <div class="product">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p>price : ${product.price}</p>
            <p>discountPercentage : ${product.discountPercentage}</p>
            <p>rating : ${product.rating}</p>
            

                <img src= ${product.images[0]} />
            </div>
        `
    }

    ).join("")

    document.querySelector('.products').innerHTML = result

*/



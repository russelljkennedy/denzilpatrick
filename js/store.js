let selectedSize=Array.from(document.querySelectorAll(".size"));const addBtn=document.getElementById("add-btn");selectedSize.forEach(function(e){e.addEventListener("click",function(){selectedSize.forEach(function(e){e.classList.remove("selected"),addBtn.setAttribute("data-item-custom1-value","")}),e.classList.add("selected"),addBtn.setAttribute("data-item-custom1-value",e.innerHTML)})});const STOREFRONT_ACCESS_TOKEN="abe183a58865882d2e41bd421b7ae579",GRAPHQL_URL="https://tenforwardweb.myshopify.com//api/graphql",shopifyContainer=document.getElementById("shopify-container"),productQuery=()=>`{
  shop {
    products(first: 10) {
      edges {
        node {
          id
          title
          description
          images(first: 10) {
            edges {
              node {
                originalSrc
              }
            }
          }
          tags
          variants(first: 5) {
            edges {
              node {
                id
                title
                price
              }
            }
          }
          collections(first: 3) {
            edges {
              node {
                id
                title
              }
            }
          }
        }
      }
    }
  }
}`,options={method:"post",headers:{"Content-Type":"application/graphql","X-Shopify-Storefront-Access-Token":STOREFRONT_ACCESS_TOKEN},body:productQuery()};async function getProducts(){const e=await fetch(GRAPHQL_URL,options);return{products:await(await e.json()).data.shop.products.edges}}getProducts().then(e=>{console.log(e.products);let t="";e.products.forEach(e=>{t+=`
      <div class="product">
        <img src="${e.node.images.edges[0].node.originalSrc}" />
        <div class="details">
          <p>${e.node.title}</p>
          <p class="price">${e.node.variants.edges[0].node.price}</p>
          <p class="category">${e.node.tags[0]}</p>
        </div>
      </div>
    `}),shopifyContainer.innerHTML=t});
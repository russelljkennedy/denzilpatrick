let selectedSize = Array.from(document.querySelectorAll(".size"));
const addBtn = document.getElementById("add-btn");

selectedSize.forEach(function(e) {
  e.addEventListener("click", function() {
    selectedSize.forEach(function(e) {
      e.classList.remove("selected");
      addBtn.setAttribute("data-item-custom1-value", "");
    });
    e.classList.add("selected");
    addBtn.setAttribute("data-item-custom1-value", e.innerHTML);
  });
});

// Shopify set up
const STOREFRONT_ACCESS_TOKEN = "abe183a58865882d2e41bd421b7ae579";
const GRAPHQL_URL = `https://tenforwardweb.myshopify.com//api/graphql`;
const shopifyContainer = document.getElementById("shopify-container");

const productQuery = () => `{
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
}`;

const options = {
  method: "post",
  headers: {
    "Content-Type": "application/graphql",
    "X-Shopify-Storefront-Access-Token": STOREFRONT_ACCESS_TOKEN
  },
  body: productQuery()
};

async function getProducts() {
  const res = await fetch(GRAPHQL_URL, options);
  const data = await res.json();
  const products = await data.data.shop.products.edges;

  return {
    products
  };
}

getProducts().then(products => {
  console.log(products.products);
  let template = "";
  products.products.forEach(product => {
    template += `
      <div class="product">
        <img src="${product.node.images.edges[0].node.originalSrc}" />
        <div class="details">
          <p>${product.node.title}</p>
          <p class="price">${product.node.variants.edges[0].node.price}</p>
          <p class="category">${product.node.tags[0]}</p>
        </div>
      </div>
    `;
  });
  shopifyContainer.innerHTML = template;
});

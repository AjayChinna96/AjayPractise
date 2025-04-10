const productData = {
  sarees: [
    { name: "Silk Saree", image: "images/one1.jpg" },
    { name: "Cotton Saree", image: "images/one2.jpg" },
    { name: "Silk Saree", image: "images/one1.jpg" },
    { name: "Cotton Saree", image: "images/one2.jpg" },
    { name: "Silk Saree", image: "images/one1.jpg" },
    { name: "Cotton Saree", image: "images/one2.jpg" },
    { name: "Silk Saree", image: "images/one1.jpg" },
    { name: "Cotton Saree", image: "images/one2.jpg" },
    { name: "Silk Saree", image: "images/one1.jpg" },
    { name: "Cotton Saree", image: "images/one2.jpg" },
    { name: "Silk Saree", image: "images/one1.jpg" },
    { name: "Cotton Saree", image: "images/one2.jpg" }
    
  ],
  kurtas: [
    { name: "Printed Kurta", image: "images/two1.jpg" },
    { name: "Anarkali Kurta", image: "images/two2.jpg" },
    { name: "Printed Kurta", image: "images/two1.jpg" },
    { name: "Anarkali Kurta", image: "images/two2.jpg" },
    { name: "Printed Kurta", image: "images/two1.jpg" },
    { name: "Anarkali Kurta", image: "images/two2.jpg" },
    { name: "Printed Kurta", image: "images/two1.jpg" },
    { name: "Anarkali Kurta", image: "images/two2.jpg" },
    { name: "Printed Kurta", image: "images/two1.jpg" },
    { name: "Anarkali Kurta", image: "images/two2.jpg" },
    { name: "Printed Kurta", image: "images/two1.jpg" },
    { name: "Anarkali Kurta", image: "images/two2.jpg" }
  ],
  lehangas: [
    { name: "Bridal Lehenga", image: "https://via.placeholder.com/180x240?text=Bridal+Lehenga" },
    { name: "Festive Lehenga", image: "https://via.placeholder.com/180x240?text=Festive+Lehenga" }
  ],
  others: [
    { name: "Dupatta", image: "https://via.placeholder.com/180x240?text=Dupatta" },
    { name: "Palazzo", image: "https://via.placeholder.com/180x240?text=Palazzo" }
  ]
};

for (const category in productData) {
  const container = document.querySelector(`#${category} .products`);
  productData[category].forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h4>${product.name}</h4>
    `;
    container.appendChild(card);
  });
}

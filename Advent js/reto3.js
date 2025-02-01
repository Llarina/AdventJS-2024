function organizeInventory(inventory) {
    let resultado={};
    inventory.forEach(juguete => {const {name,quantity,category}=juguete; 

        if (inventory.length === 0) {
            return {};
        }

        if (!resultado[category]) {
            resultado[category] = {};
        }
        
        if (!resultado[category][name]) {
            resultado[category][name] = 0;
        }

        resultado[category][name]+=quantity;
    });
    return resultado;
  }
  const inventory=[
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
  ];

  console.log(organizeInventory(inventory));
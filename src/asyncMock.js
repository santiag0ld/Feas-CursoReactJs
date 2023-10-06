

const products = [
    {
        id: '1',
        name: 'Nueces',
        price: 890,
        category: 'sueltos',
        img: 'https://cotillonfantasia.com.ar/wp-content/uploads/2020/04/nueces-peladas-mariposa-x-kg-light-D_NQ_NP_332101-MLA20273651759_042015-F.jpg',
        stock: 100,
        description: 'Nueces mariposa fraccionadas cada 100gr'
    },

    {
        id: '1a',
        name: 'Almendras',
        price: 1400,
        category: 'sueltos',
        img: 'https://www.elsoldemorelia.com.mx/incoming/7o7nni-almendras/ALTERNATES/LANDSCAPE_1140/Almendras',
        stock: 100,
        description: 'Almendras mendocinas fraccionadas cada 100gr'
    },

    {
        id: '1b',
        name: 'Castañas',
        price: 1400,
        category: 'sueltos',
        img: 'https://pachamamatemuco.com/cdn/shop/products/Castana_de_Caju_sin_Sal_700x700.jpg?v=1574459318',
        stock: 100,
        description: 'Castañas de Caju fraccionadas cada 100gr'
    },

    {
        id: '2',
        name: 'Yogurt',
        price: 1770,
        category: 'heladera',
        img: 'https://i0.wp.com/lepotmarket.com/wp-content/uploads/2023/08/LP-Ygiarto-Yogur-Griego.png?fit=750%2C750&ssl=1',
        stock: 100,
        description: 'Yogurt Griego Ygiarto'
    },

    {
        id: '2a',
        name: 'Wrap Parmesano',
        price: 1950,
        category: 'heladera',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/126/866/products/parmesano1-a47c05ddb15f7b592816566303004594-640-0.png',
        stock: 100,
        description: 'Wrap de Huertas del Pilar sabor Parmesano con pollo, tomate y albahaca'
    },

    {
        id: '2b',
        name: 'Jugo de Manzana Organico',
        price: 1395,
        category: 'heladera',
        img: 'https://acdn.mitiendanube.com/stores/001/040/363/products/jugo-organico-de-manzana1-ae7b1a72b3ad5766ef16270668157483-640-0.jpg',
        stock: 100,
        description: 'Jugo organico de Purafrutta a base de Manzanas'
    },

    {
        id: '3',
        name: 'Manzanilla',
        price: 1100,
        category: 'hierbas',
        img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/541/857/products/manzanilla-flor-pura1-84b0a0bb8d0dd1f53916261113619503-1024-1024.webp',
        stock: 30,
        description: 'Flores de manzanilla fraccionadas de a 50grs'
    },

    {
        id: '3a',
        name: 'Hibiscus',
        price: 1350,
        category: 'hierbas',
        img: 'https://previews.123rf.com/images/dianazh/dianazh1412/dianazh141200074/34654970-t%C3%A9-de-hibisco-seco-aislado-en-blanco.jpg',
        stock: 10,
        description: 'Flores de hibisco seco fraccionadas de a 50grs'
    },

    {
        id: '3b',
        name: 'Tomillo',
        price: 690,
        category: 'hierbas',
        img: 'https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/t/o/tomillo-x-100_1.jpg',
        stock: 25,
        description: 'Tomillo fraccionado de a 100grs'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)

        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter((prod) => prod.category === categoryId);
        resolve(filteredProducts);
      }, 500);
    });
  };
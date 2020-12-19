 import image1 from '../Images/Clothes.webp';
 import image2 from '../Images/Shoes.webp';
 import image3 from '../Images/jewellery-2.jpg';
 import image4 from '../Images/plant.webp';
 const ITEMS=
    [
        {
        id: 0,
        name:'Clothes',
        image: image1,
        category: 'clothes',
        label:'',
        price:'4.99',
        featured: true,
        description:'The apparel we have'                    
        },
        {
        id: 1,
        name:'Footwear',
        image: image2,
        category: 'footwear',
        label:'',
        price:'1.99',
        featured: false,
        description:'The footwear collection we carry'
        },
        {
        id: 2,
        name:'Jewellery',
        image: image3,
        category: 'appetizer',
        label:'New',
        price:'1.99',
        featured: false,
        description:'The collection of jewellery we carry'
        },
        {
        id: 3,
        name:'Plants',
        image: image4,
        category: 'dessert',
        label:'',
        price:'2.99',
        featured: false,
        description:'The collection of plants we carry'
        }
    ];
    export default ITEMS;
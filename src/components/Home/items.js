 import image1 from './Images/blackdress.jpg';
 import image2 from './Images/Shoes.webp';
 import image3 from './Images/jewellery-2.jpg';
 import image4 from './Images/plant.webp';
 import slideshow1 from './Images/slideshow1.webp';
 import slideshow2 from './Images/slideshow2.jpg';
 import slideshow3 from './Images/slideshow3.jpg';
 import slideshow4 from './Images/slideshow4.jpg'

 const ITEMS=
    [
        {
        id: 0,
        name:'Clothes',
        image: image1,
        collection: true,
        label:'',
        price:'4.99',
        featured: false,
        description:'The apparel we have'                    
        },
        {
        id: 1,
        name:'Footwear',
        image: image2,
        collection: true,
        label:'',
        price:'1.99',
        featured: false,
        description:'The footwear collection we carry'
        },
        {
        id: 2,
        name:'Jewellery',
        image: image3,
        collection: true,
        label:'New',
        price:'1.99',
        featured: false,
        description:'The collection of jewellery we carry'
        },
        {
        id: 3,
        name:'Plants',
        image: image4,
        collection: true,
        label:'',
        price:'2.99',
        featured: false,
        description:'The collection of plants we carry'
        },
        {
            id:4,
            image:slideshow4,
            featured:true
        },
        {
            id:5,
            image:slideshow2,
            featured:true
        },
        {
            id:6,
            image:slideshow3,
            featured:true
        },
        {
            id:7,
            image:slideshow1,
            featured:true
        }
    ];
    export default ITEMS;
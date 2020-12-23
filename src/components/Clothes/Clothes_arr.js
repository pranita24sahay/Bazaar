import overcoat from './Images/black_overcoat.webp';

import dress3 from './Images/blackdress.jpg';
import dress4 from './Images/blackdress2.webp';
import dress1 from './Images/blackreddress.webp';
import dress2 from './Images/burgendy dress.webp';

import green_top from './Images/green top.jpg';
import pink_top from './Images/pinktop.webp';

import shirt1 from './Images/white-blue-shirt.jpg';
import shirt3 from './Images/shirt.webp';
import shirt4 from './Images/blue-f-shirt.jpg';
import shirt5 from './Images/white-f-shirt.jpg';

import blue_blazer from './Images/blue.jpg';

import suit1 from './Images/suit4.jpg';

import guy from './Images/men_outfit.webp';
import hoodie from './Images/man_hoodie.webp';


import saree from './Images/saree.jpg'


 const CLOTHING_ITEMS=
    [
        {
        id: 0,
        name:'Overcoat',
        image: overcoat,
        category: 'Ladies',
        label:'Trending',
        price:'Rs. 1550',
        featured: true,
        women:false,
        description:'A black overcoat to make the winter a bit trendy'                
        },
        {
        id: 1,
        name:'Long Top',
        image: green_top,
        category: 'women',
        label:'',
        price:'Rs. 1250',
        featured: true,
        men: false,
        description:'Green Long Top'
        },
        {
        id: 2,
        name:'A look', 
        image: guy,
        category: 'Men',
        label:'New',
        price:'Rs.2340',
        featured: true,
        description:'A great guy'
        },
        {
        id: 3,
        name:'Shirt',
        image: shirt4,
        category: 'Men',
        label:'Trending',
        price:'Rs. 1300',
        featured: false,
        men: true,
        description:'A great shirt that goes with every ocassion'
        },
        {
            id: 4,
            name:'Shirt',
            image: shirt1,
            category: 'men',
            label:'',
            price:'Rs. 950',
            featured: false,
            men: true,
            description:'A great casual shirt for office parties to romantic dates'
                                
        },
        {
            id: 5,
            name:'FLoral dress',
            image: dress1,
            category: 'Ladies',
            label:'',
            price:'Rs. 1050',
            featured: true,
            women:false,
            description:'A pretty dress'
        },
        {
            id: 6,
            name:'Shirt',
            image: dress2,
            category: 'Ladies',
            label:'Trending',
            price:'Rs. 1300',
            featured: true,
            women:false,
            description:'A great dress, to make the summer a bit more flowy'
            
        },
        {
            id: 7,
            name:'A blue apparel',
            image: blue_blazer,
            category: 'Men',
            label:'New',
            price:'Rs.2340',
            featured: false,
            men: true,
            description:'A blazer to enhance your look'
            
        },
        {
            id: 8,
            name:'Kurta',
            image: suit1,
            category: 'women',
            label:'',
            price:'Rs. 1250',
            featured: false,
            men:false,
            women:true,
            description:'A red dazzling kurta to make you stand out'                    
        },
        {
            id: 9,
            name:'Top',
            image: dress4,
            category: 'Women',
            label:'',
            price:'Rs. 950',
            featured: false,
            men:false,
            women:true,
            description:'A attire of perfection'
        },
        {
            id: 10,
            name:'Shirt',
            image: shirt3,
            category: 'Men',
            label:'New',
            price:'Rs.2340',
            featured: false,
            men: true,
            description:'A great party wear shirt with mandarin collar'
        },
        {
            id: 11,
            name:'Shirt',
            image: hoodie,
            category: 'Men',
            label:'New arrival',
            price:'Rs. 1300',
            featured: true,
            description:'A hoodie to pair up with casuals '
        },
        {
            id: 12,
            name:'Dress',
            image: pink_top,
            category: 'Ladies',
            label:'',
            price:'Rs. 950',
            featured: false,
            women:true,
            description:'A attire of perfection'
        },
        {
            id: 13,
            name:'Saree',
            image: saree,
            category: 'Ladies',
            label:'New',
            price:'Rs.2340',
            featured: false,
            women:true,
            description:'A great guy'
        },
        {
            id: 11,
            name:'skirt2',
            image: dress3,
            category: 'Ladies',
            label:'New arrival',
            price:'Rs. 1300',
            featured: false,
            women:false,
            description:'A hoodie to pair up with casuals '
        }  
    ];
    export default CLOTHING_ITEMS;
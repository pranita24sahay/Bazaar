import black_highheel from './Images/black_highheel.webp';
import Blackshoes from './Images/Blackshoes.webp';
import blue_shoes from './Images/blue_shoes.webp';
import crocs_flipflops from './Images/crocs_flipflops.webp';
import formal_shoes_1 from './Images/formal_shoes_1.webp';
import formal_shoes_2 from './Images/formal_shoes_2.webp';
import flipflops from './Images/flipflops.webp'
import glitter_heel from './Images/glitter_heel.jpg';
import glitter_heel_2 from './Images/glitter_heel_2.jpg';
import juti_Hop from './Images/juti_HOP.webp';
import hop_2 from './Images/hop_2.jpg';
import peach_heel from './Images/peach heel.jpg';
import sneakers from './Images/sneakers.webp';
import black_men_sports_shoes_1 from './Images/black_men_sports_shoes_1.jpg';
import black_men_sports_shoes_2 from './Images/black_men_sports_shoes_2.jpg';
import white_sports_shoes from './Images/white_sports_shoes.webp';
import blue_heel from './Images/blue_heel.webp';
import multi_coloured from './Images/multi_coloured.webp';
import multi_flat from './Images/multi_flat.webp';
import multi_flat_2 from './Images/multi_flat_2.webp'
import pink_heel from './Images/pink_heel.jpg';
import teal from './Images/teal.jpg';
import teal_2 from './Images/teal_2.jpg';
import men_brown_sneakers_1 from './Images/men_brown_sneakers_1.webp';
import men_brown_sneakers_2 from './Images/men_brown_sneakers_2.webp';
import men_blue_shoes_1 from './Images/men_blue_shoes_1.webp';
import men_blue_shoes_2 from './Images/men_blue_shoes_2.jpg';

 const FOOTWEAR_ITEMS=
    [
        {
            id:0,
            image:pink_heel,
            name:"Shoetopia",
            title: "OFF-WHITE5",
            sale_price: 1100,
            price: 1400,
            label:'Sale',
            description:'Women Hot pink-Coloured Solid Suede Heels',
            url:"footwear",
            unavailable_size: [8, 13],

        },
        {
            id:1,
            image:glitter_heel,
            image2:glitter_heel_2,
            name:'Truffle collection',
            title: "dolce and gabbana",
            women:true,
            sale_price: 1100,
            price: 1400,
            label:'',
            description:'Women Hot pink-Coloured Solid Suede Heels',
            url:"footwear",
            unavailable_size: [8, 13],
            featured:true,
        },
        {
            id:2,
            image:sneakers,
            name:"Shoetopia",
            label:'New',
            description:'Women Sale pink-Coloured Solid Suede Heels',
            featured:false,
            women:false,
            title: "OFF-WHITE5",
            sale_price: 1100,
            price: 1400,
            unavailable_size: [8, 13],
            url:"footwear"
        },
        
        {
            id:3,
            image:black_highheel,
            name:"Shoetopia",
            label:'Sale',
            description:'Women Sale pink-Coloured Solid Suede Heels',
            featured:false,
            price:"Rs. 1023",
            women:false,
            url:"footwear"
        },
        {
            id:4,
            image:peach_heel,
            name:"Shoetopia",
            label:'',
            description:'Women Sale pink-Coloured Solid Suede Heels',
            featured:true,
            url:"footwear",
            price:"Rs. 1023",
            women:false,
        },
        {
            id:5,
            image:multi_coloured,
            name:"Shoetopia",
            label:'Trending',
            description:'Women Sale pink-Coloured Solid Suede Heels',
            featured:false,
            women:false,
            url:"footwear"
        },
        {
            id:6,
            image:crocs_flipflops,
            name:"Shoetopia",
            label:'',
            description:'Women Sale pink-Coloured Solid Suede Heels',
            featured:true,
            url:"footwear"
        },
        {
            id:7,
            image:formal_shoes_1,
            image2:formal_shoes_2,
            name:"Shoetopia",
            title:"Shoes",
            sale_price: 1100,
            price: 1400,
            description:'Men formal shoes',
            featured:false,
            men:true,
            url:"footwear",
            unavailable_size: [8, 13]
        },
        {
            id:8,
            image:Blackshoes,
            name:"Shoetopia",
            label:'New',
            description:'Women Sale pink-Coloured Solid Suede Heels',
            featured:true,
            url:"footwear"
            
        },
        {
            title: "OFF-WHITE5",
            description: "Off-Court 3.0 high-top sneakers",
            sale: true,
            new_arrival: false,
            sale_price: 1100,
            price: 1400,
            men:true,
            image: men_brown_sneakers_1,
            image2:men_brown_sneakers_2,
            unavailable_size: [8, 13],
          },
        {
            id:9,
            image:black_men_sports_shoes_1,
            image2:black_men_sports_shoes_2,
            name:"Shoetopia",
            title:"Men's Shoes",
            sale_price:'1234',
            price:'2345',
            label:'Sale',
            description:'Women Sale pink-Coloured Solid Suede Heels',
            featured:false,
            men:true,
            url:"footwear",
            unavailable_size: [8, 13],
        },
        
        {
            id:11,
            image:teal,
            image2:teal_2,
            name:"Shoetopia",
            title:"Rolci",
            label:'Recommended',
            description:'Women Sale pink-Coloured Solid Suede Heels',
            featured:true,
            sale:true,
            sale_price: 1100,
            price: 1400,
            women:true,
            url:"footwear",
            unavailable_size: [8],
            
        },
        {
            id:12,
            image:flipflops,
            name:"Shoetopia",
            label:'Trending',
            description:'Women Sale pink-Coloured Solid Suede Heels',
            featured:true,
            men:false,
            url:"footwear",
        },
        {
            id:13,
            image:blue_heel,
            name:"Shoetopia",
            label:'',
            description:'Women Sale pink-Coloured Solid Suede Heels',
            featured:true,
            url:"footwear",
            women:false
        },
        {
            id:14,
            image:multi_coloured,
            name:"Shoetopia",
            description:'Women Sale pink-Coloured Solid Suede Heels',
            featured:false,
            women:false,
            url:"footwear"
        },
        {
            id:15,
            image:multi_flat,
            image2:multi_flat_2,
            title:"metro",
            name:"Shoetopia",
            label:'New',
            sale_price: 1100,
            price: 1400,
            description:'Women Sale pink-Coloured Solid Suede Heels',
            featured:true,
            women:true,
            unavailable_size: [13],
            url:"footwear"
        },
        {
            id:16,
            image:blue_shoes,
            name:"Shoetopia",
            label:'Trending',
            description:'Women Sale pink-Coloured Solid Suede Heels',
            featured:false,
            url:"footwear",
            women:false
        },
        {
            id:17,
            title:"House Of Pataudi",
            image:juti_Hop,
            image2:hop_2,
            sale_price: 1128,
            price: 1528,
            name:"Shoetopia",
            description:'Women Sale pink-Coloured Solid Suede Heels',
            featured:false,
            url:"footwear",
            unavailable_size: [13],
            women:true
        },
        {
            title: "OFF-WHITE",
            description: "Off-Court 3.0 high-top sneakers",
            sale: true,
            new_arrival: true,
            sale_price: 1128,
            price: 1528,
            image: men_blue_shoes_1,
            men:true,
            image2:men_blue_shoes_2,
            unavailable_size: [8, 13],
          }
        
    ]
export default FOOTWEAR_ITEMS;
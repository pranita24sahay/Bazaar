import black_highheel from './Images/black_highheel.webp';
import Blackshoes from './Images/Blackshoes.webp';
import blue_shoes from './Images/blue_shoes.webp';
import crocs_flipflops from './Images/crocs_flipflops.webp';
import formal_shoes from './Images/formal_shoes.webp';
import flipflops from './Images/flipflops.webp'
import glitter_heel from './Images/glitter_heel.jpg';
import juti_Hop from './Images/juti_HOP.webp';
import peach_heel from './Images/peach heel.jpg';
import sneakers from './Images/sneakers.webp';
import white_sports_shoes from './Images/white_sports_shoes.webp';
import blue_heel from './Images/blue_heel.webp';
import multi_coloured from './Images/multi_coloured.webp';
import multi_flat from './Images/multi_flat.webp';
import pink_heel from './Images/pink_heel.jpg';
import teal from './Images/teal.jpg';


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
            name:'Truffle collection',
            title: "OFF-WHITE5",
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
            image:formal_shoes,
            image2:sneakers,
            name:"Shoetopia",
            sale_price: 1100,
            price: 1400,
            label:'',
            description:'Women Sale pink-Coloured Solid Suede Heels',
            featured:false,
            men:true,
            url:"footwear"
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
            id:9,
            image:white_sports_shoes,
            image2:sneakers,
            name:"Shoetopia",
            sale_price:'1234',
            price:'2345',
            label:'Sale',
            description:'Women Sale pink-Coloured Solid Suede Heels',
            featured:false,
            url:"footwear"
        },
        
        {
            id:11,
            image:teal,
            name:"Shoetopia",
            label:'Recommended',
            description:'Women Sale pink-Coloured Solid Suede Heels',
            featured:true,
            url:"footwear",
            men:false
            
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
            women:true
        },
        {
            id:14,
            image:multi_coloured,
            name:"Shoetopia",
            description:'Women Sale pink-Coloured Solid Suede Heels',
            featured:false,
            women:true,
            url:"footwear"
        },
        {
            id:15,
            image:multi_flat,
            name:"Shoetopia",
            label:'New',
            description:'Women Sale pink-Coloured Solid Suede Heels',
            featured:true,
            women:false,
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
            women:true
        },
        {
            id:17,
            image:juti_Hop,
            name:"Shoetopia",
            description:'Women Sale pink-Coloured Solid Suede Heels',
            featured:false,
            url:"footwear",
            women:true
        },
        {
            title: "OFF-WHITE",
            description: "Off-Court 3.0 high-top sneakers",
            sale: true,
            new_arrival: true,
            sale_price: 1128,
            price: 1528,
            image: "https://i.ibb.co/RvcgnN9/off-white-1.jpg",
        
            image2: "https://i.ibb.co/XX2RHFP/off-white-2.jpg",
            unavailable_size: [8, 13],
          },
          {
            title: "OFF-WHITE2",
            description: "Off-Court 3.0 high-top sneakers",
            sale: false,
            new_arrival: false,
            sale_price: 1528,
            price: 1528,
            image: "https://i.ibb.co/RvcgnN9/off-white-1.jpg",
        
            image2: "https://i.ibb.co/XX2RHFP/off-white-2.jpg",
            unavailable_size: [10, 12],
          },
          {
            title: "OFF-WHITE3",
            description: "Off-Court 3.0 high-top sneakers",
            sale: false,
            new_arrival: true,
            sale_price: "",
            price: 1528,
            image: "https://i.ibb.co/RvcgnN9/off-white-1.jpg",
        
            image2: "https://i.ibb.co/XX2RHFP/off-white-2.jpg",
            unavailable_size: [7, 8, 9],
          },
          {
            title: "OFF-WHITE4",
            description: "Off-Court 3.0 high-top sneakers",
            sale: true,
            new_arrival: false,
            sale_price: 1100,
            price: 1400,
            image: "https://i.ibb.co/RvcgnN9/off-white-1.jpg",
        
            image2: "https://i.ibb.co/XX2RHFP/off-white-2.jpg",
            unavailable_size: [8, 13],
          },
            {
            title: "OFF-WHITE5",
            description: "Off-Court 3.0 high-top sneakers",
            sale: true,
            new_arrival: false,
            sale_price: 1100,
            price: 1400,
            men:true,
            image: "https://i.ibb.co/RvcgnN9/off-white-1.jpg",
        
            image2: "https://i.ibb.co/XX2RHFP/off-white-2.jpg",
            unavailable_size: [8, 13],
          }
        
    ]
export default FOOTWEAR_ITEMS;
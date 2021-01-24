import black_hoodie from './Images/black_hoodie.webp';
import white_top from './Images/white_top.jpg';
import blackreddress from './Images/blackreddress.webp';
import blue_blazer from './Images/blue_blazer.webp';
import blue_blazer_2 from './Images/blue_blazer-2.webp';
import blue_pink_suit from './Images/blue_pink_suit.webp';
import blue_pink_suit_2 from './Images/blue_pink_suit_2.webp';
import blue_tshirt from './Images/blue_tshirt.webp';
import blue_tshirt_2 from './Images/blue_tshirt_2.webp';
import burgendy_dress from './Images/burgendy dress.webp';
import burgendy_dress_2 from './Images/burgendy dress_2.webp';
import floral_peach_suit from './Images/floral_peach_suit.jpg';
import floral_peach_skirt from './Images/floral_peachskirt.webp';
import gray_shirt from './Images/gray-shirt.jpg';
import gray_shirt_2 from './Images/gray-shirt_2.webp';
import jumpsuit from './Images/jumpsuit.webp';
import ladies_kurta from './Images/ladies_kurta.webp';
import ladies_kurta_2 from './Images/ladies_kurta_2.webp';
import man_hoodie from './Images/man_hoodie.webp';
import man_skyblue_shirt from './Images/man_skyblue_shirt.webp';
import man_outfit from './Images/men_outfit.webp';
import man_outfit_2 from './Images/men_outfit_2.jpg';
import man_suit from './Images/men_suit.webp';
import overcoat from './Images/overcoat.webp';
import peach_top from './Images/peach_top.webp';
import red_slit_dress from './Images/red_slit_dress.webp';
import red_slit_dress_2 from './Images/red_slit_dress_2.jpg';
import saree from './Images/saree.jpg';
import white_shirt from './Images/white_shirt.webp';
import white_suit from './Images/white_suit.webp';
import whiteshirtblackpant from './Images/whiteshirtblackpant.webp';
import yellow_suit from './Images/yellow_suit.jpg';


 const CLOTHING_ITEMS=
    [
        {
            id: 1,
            name:'Harpa',
            image: jumpsuit,
            category: 'Ladies',
            label:'Hot',
            price:'Rs. 1050',
            women:false,
            slide:'1',
            description:'Peach coloured kumpsuit',
            url:"clothes"
        },
        {
            id: 2,
            name:'Athens',
            image: burgendy_dress,
            image2:burgendy_dress_2,
            category: 'Ladies',
            label:'Trending',
            price:'Rs. 1300',
            women:true,
            slide:'1',
            unavailable_size: [13],
            description:'Dramatic Entrance Lantern Sleeve Wrap Dress in Plum',
            details:'Athena presents this charming plum dress which would be an elegant choice to wear with a headpiece and gold accessories. Dramatic entrance, sorted.Designed with chic off shoulder surplice neck, self-tie bowknot at waist and statement lantern sleeves. Styled with a pencil shape that sits on the knee.',
            url:"clothes"
        },
        {
            id: 3,
            name:'Gucci',
            image: blue_blazer,
            image2:blue_blazer_2,
            category: 'Men',
            label:'New',
            price:'Rs. 12340',
            featured: false,
            men: true,
            slide:'1',
            unavailable_size: [13],
            description:'A blazer to enhance your look',
            url:"clothes"
        },
        {
            id: 4,
            name:'Athens',
            image: blackreddress,
            category: 'Ladies',
            label:'',
            price:'Rs. 950',
            featured: false,
            women:false,
            slide:'1',
            description:'An off-shoulder party wear dress',
            url:"clothes"
        },
        {
            id: 5,
            name:'Calvin Klein', 
            image: man_outfit,
            image2:man_outfit_2,
            category: 'Men',
            label:'New',
            price:'Rs.2340',
            men:true,
            featured:false,
            slide:'2',
            unavailable_size: [13],
            description:'A casual t-shirt in cool colours of green and blue',
            url:"clothes"
        },
        {
            id: 6,
            name:'H&M',
            image: peach_top,
            category: 'Men',
            label:'Trending',
            price:'Rs. 1300',
            featured: false,
            slide:'2',
            description:'A peach-crop top',
            url:"clothes"
        },
        {
            id:7,
            name:'Athens',
            image:ladies_kurta,
            image2:ladies_kurta_2,
            price:'Rs. 1500',
            slide:'2',
            women:true,
            unavailable_size: [13],
            url:"clothes"},
        {
            id:8,
            name:'Zara',
            image:white_suit,
            price:'Rs. 3000',
            slide:'2',
            url:"clothes"
        },
        {
            id:9,
            name:'Harpa',
            image:floral_peach_skirt,
            category: 'Ladies',
            label:'New arrival',
            price:'Rs. 1300',
            featured: true,
            description:'Floral peach flare skirt ',
            slide:'3',
            url:"clothes"
        } ,
        {
            id: 10,
            name:'INVICTUS',
            image: whiteshirtblackpant,
            category: 'Women',
            label:'',
            price:'Rs. 950',
            featured: true,
            slide:'3',
            description:'A attire of perfection',
            url:"clothes"
        },
        {
            id: 11,
            name:'Louis Phillipie',
            image: man_skyblue_shirt,
            category: 'Men',
            label:'New',
            price:'Rs.2340',
            featured: true,
            men: false,
            slide:'3',
            description:'A great party wear shirt with mandarin collar',
            url:"clothes"
        },
        {
            id: 12,
            name:'Calvin Klein',
            image: black_hoodie,
            category: 'Men',
            label:'New arrival',
            price:'Rs. 1300',
            featured: true,
            description:'A hoodie to pair up with casuals ',
            url:"clothes"
        },
        {
            id: 13,
            name:'Zara',
            image: yellow_suit,
            category: 'women',
            label:'New',
            price:'Rs. 4250',
            featured: true,
            description:'A yellow dazzling Plazzo suit to make you stand out',
            url:"clothes"                   
        },
        {
            id: 14,
            name:'Harpa',
            image: blue_pink_suit,
            image2:blue_pink_suit_2,
            category: 'women',
            label:'',
            price:'Rs. 950',
            featured:false,
            unavailable_size: [13],
            women: true,
            description:'A bodycon blue suit with net dupatta',
            url:"clothes"
        },
        {
            id: 15,
            name:'Zara',
            image: red_slit_dress,
            image2:red_slit_dress_2,
            category: 'Ladies',
            label:'New',
            price:'Rs.2540',
            featured: false,
            unavailable_size: [13],
            women:true,
            description:'A fit till waist and thigh high slit red dress',
            url:"clothes"
        },
        {
            id: 16,
            name:'Athena',
            description:' Women Black Solid Longline Double-Breasted Overcoat',
            image: overcoat,
            category: 'Ladies',
            label:'',
            price:'Rs. 2999 ',
            women:false,
            url:"clothes"     
        },
        {
            id:17,
            name:'Calvin Klein',
            image:man_hoodie,
            price:'Rs. 1280',
            description:'A white hoodie with black hood'
            ,
            url:"clothes"
        },
        {
            id:18,
            name:'INVICTIUS',
            image:blue_tshirt,
            image2:blue_tshirt_2,
            price:'Rs. 980',
            label:'Hot',
            men:true,
            unavailable_size: [13],
            description:'A great fit blue t-shirt',
            url:"clothes"
        },
        {
            id:19,
            name:'H&M',
            image:gray_shirt,
            image2:gray_shirt_2,
            price:'Rs. 1340',
            featured:false,
            men:true,
            unavailable_size: [13],
            description:'A gray shirt that goes with everything',
            url:"clothes"
        },
        {
            id:20,
            name:'Zara',
            image:white_top,
            price:'Rs. 1432',
            featured:false,
            label:'New',
            description:'A white top with elbow length bow sleeves.',
            url:"clothes"
        },
        {
            id:21,
            name:'Louis Phillipie',
            image:white_shirt,
            price:'Rs. 1320',
            featured:true,
            label:'trending',
            description:'A formal white shirt',
            url:"clothes"
        },
        {
            id:22,
            name:'Harpa',
            image:saree,
            price:'Rs. 1200',
            featured:true,
            description:'a cream and black shaded saree , with intricate designs',
            url:"clothes"
        },
        {
            id:23,
            name:'Athens',
            image:floral_peach_suit,
            price:'Rs. 970',
            featured:true,
            description:' A peach coloured fit and flare floral suit with red legging',
            url:"clothes"
        },
        {
            id: 24,
            name:'Gucci',
            image: man_suit,
            category: 'men',
            label:'',
            price:'Rs. 3250',
            men: false,
            featured:true,
            description:' A formal blue suit',
            url:"clothes"
        }
    ];
    export default CLOTHING_ITEMS;
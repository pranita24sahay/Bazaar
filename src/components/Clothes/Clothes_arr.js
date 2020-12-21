import shirt1 from './Images/white-blue-shirt.jpg';
import shirt2 from './Images/gray-shirt.webp';
import shirt3 from './Images/shirt.webp';
import shirt4 from './Images/blue-f-shirt.jpg';
import overcoat from './Images/black_overcoat.webp';
import dress1 from './Images/blackreddress.webp';
import blue from './Images/blue.jpg';
import dress2 from './Images/burgendy dress.webp';
import kurta from './Images/kohli_red_kurta.jpg';
import Louis from './Images/Louis.webp';
import guy from './Images/men_outfit.webp';
import hoodie from './Images/man_hoodie.webp';
import skirt from './Images/skirt.jpg';
import skirt2 from './Images/black_skirt.jpg';
import lehanga from './Images/lehanga.jpg'
import shirt5 from './Images/white-f-shirt.jpg';

 const CLOTHING_ITEMS=
    [
        {
        id: 0,
        name:'Shirt',
        image: shirt1,
        category: 'men',
        label:'',
        price:'Rs. 950',
        featured: false,
        top: true,
        description:'A great casual shirt for office parties to romantic dates'                    
        },
        {
        id: 1,
        name:'Shirt',
        image: shirt2,
        category: 'men',
        label:'',
        price:'Rs. 1250',
        featured: false,
        top: false,
        description:'Gray shirt'
        },
        {
        id: 2,
        name:'Shirt',
        image: shirt3,
        category: 'Men',
        label:'New',
        price:'Rs.2340',
        featured: false,
        top: true,
        description:'A great party wear shirt with mandarin collar'
        },
        {
        id: 3,
        name:'Shirt',
        image: shirt4,
        category: 'Men',
        label:'Trending',
        price:'Rs. 1300',
        featured: false,
        top: true,
        description:'A great shirt that goes with every ocassion'
        },
        {
            id: 4,
            name:'Overcoat',
            image: overcoat,
            category: 'Ladies',
            label:'Trending',
            price:'Rs. 1550',
            featured: true,
            description:'A black overcoat to make the winter a bit trendy'                    
            },
            {
            id: 5,
            name:'FLoral dress',
            image: dress1,
            category: 'Ladies',
            label:'',
            price:'Rs. 1050',
            featured: true,
            description:'A pretty dress'
            },
            {
            id: 6,
            name:'A blue apparel',
            image: blue,
            category: 'Men',
            label:'New',
            price:'Rs.2340',
            featured: false,
            top: true,
            description:'A blazer to enhance your look'
            },
            {
            id: 7,
            name:'Shirt',
            image: dress2,
            category: 'Ladies',
            label:'Trending',
            price:'Rs. 1300',
            featured: true,
            description:'A great dress, to make the summer a bit more flowy'
            },
            {
                id: 8,
                name:'Kurta',
                image: kurta,
                category: 'men',
                label:'',
                price:'Rs. 1250',
                featured: false,
                top: false,
                description:'A red dazzling kurta to make you stand out'                    
                },
                {
                    id: 9,
                    name:'Louie',
                    image: Louis,
                    category: 'Men',
                    label:'',
                    price:'Rs. 950',
                    featured: false,
                    top: false,
                    description:'A attire of perfection'
                    },
                    {
                    id: 10,
                    name:'A look',
                    image: guy,
                    category: 'Men',
                    label:'New',
                    price:'Rs.2340',
                    featured: true,
                    description:'A great guy'
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
                    name:'skirt',
                    image: skirt,
                    category: 'Ladies',
                    label:'',
                    price:'Rs. 950',
                    featured: false,
                    top: false,
                    description:'A attire of perfection'
                    },
                    {
                    id: 13,
                    name:'lehanga',
                    image: lehanga,
                    category: 'Ladies',
                    label:'New',
                    price:'Rs.2340',
                    featured: false,
                    description:'A great guy'
                    },
                    {
                    id: 11,
                    name:'skirt2',
                    image: skirt2,
                    category: 'Ladies',
                    label:'New arrival',
                    price:'Rs. 1300',
                    featured: false,
                    description:'A hoodie to pair up with casuals '
                    },        
            
    ];
    export default CLOTHING_ITEMS;
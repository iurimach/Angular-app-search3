import { Component } from '@angular/core';

interface Item {
  price: any
  title: string;
  ebaut: string;
  src: string;
 
}
interface Itemprice {
  
  price: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  constructor()  {   this.filteredItems = this.items;}

  ngOnInit() {
    this.search();
    
  }

  items: Item[] = [
    {
      price: 1500 ,
      title: 'Iphone 14',
      ebaut: ' produqtia magari, telefoni xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4jLSRD52is7UYuzqaINxnzo9rOwz_NaoPIg&usqp=CAU",
    },
    {
      price: 2100,
      title: 'Iphone 14',
      ebaut: ' produqtia magari, leptopi xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://s7d1.scene7.com/is/image/dish/iPhone_14_Pro_Deep_Purple_phonewall?$ProductBase$&fmt=webp',
    },
    {
      price: 2380,
      title: 'Samsung',
      ebaut: ' televizori xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx  xxxxx xxxxx',
      src: 'https://alta.ge/images/detailed/247/128065_1.jpg',
    },
    {
      price: 480,
      title: 'Lenovo',
      ebaut: ' produqtia magari, leptopi xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://rukminim2.flixcart.com/image/850/1000/kjkbv680-0/laptop-stand/y/f/f/wooden-handmade-laptop-stand-laptop-stand-laptop-stand-ved-original-imafz3w4hwyz9tpm.jpeg?q=90',
    },
    {
      price: 570,
      title: 'Hp',
      ebaut: ' produqtia magari, leptopi xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://sc04.alicdn.com/kf/H1fb7a9003f394935a831e3bdb166f5c9x.jpg',
    },
    {
      price: 600,
      title: 'Dell',
      ebaut: ' produqtia magari, leptopi: moyveba xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://image.made-in-china.com/2f0j00LBnhysYgLScp/Global-Hot-Sell-15-6-Inch-HD-Ultra-Thin-Notebook-8GB-256GB-Quad-Core-Wins10-Mini-Laptop-Computer-2-3GHz-2-8GHz.webp',
    },
    {
      price: 1500 ,
      title: 'Item 1',
      ebaut: ' produqtia magari, telefoni xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4jLSRD52is7UYuzqaINxnzo9rOwz_NaoPIg&usqp=CAU",
    },
    {
      price: 2100,
      title: 'Item 2',
      ebaut: ' produqtia magari, leptopi xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://s7d1.scene7.com/is/image/dish/iPhone_14_Pro_Deep_Purple_phonewall?$ProductBase$&fmt=webp',
    },
   
    {
      price: 450,
      title: 'Item 5',
      ebaut: ' produqtia magari, leptopi xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://sc04.alicdn.com/kf/H1fb7a9003f394935a831e3bdb166f5c9x.jpg',
    },
    {
      price: 500,
      title: 'Item 6',
      ebaut: ' produqtia magari, leptopi: moyveba xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://image.made-in-china.com/2f0j00LBnhysYgLScp/Global-Hot-Sell-15-6-Inch-HD-Ultra-Thin-Notebook-8GB-256GB-Quad-Core-Wins10-Mini-Laptop-Computer-2-3GHz-2-8GHz.webp',
    },
  ];

  filteredItems: Item[] = [];
  searchTerm: string = '';


  search(): void {
    this.filteredItems = this.items.filter((itemfiltred:any) =>
    itemfiltred.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
   
  }

  // zebna by price

  filteredItemsbyprice: Item[]  = this.items;

  minPrice:any = [];  //am cvladebs numberis tips ise ver gavuwer ro carilebi davtovo ? 
  maxPrice:any =  [] ; // anu minda inputi ra cifrsac gadmocems is chajdes mandcvladebshi 

 

  filterItems(): void {
    this.filteredItemsbyprice = this.items.filter(item => item.price >= this.minPrice && item.price <= this.maxPrice);
  }
  
  
 
}



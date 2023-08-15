import { Component } from '@angular/core';

interface Item {
  price: number|string;
  name: string;
  ebaut: string;
  src: string;
  
}
@Component({
  selector: 'app-galeri',
  templateUrl: './galeri.component.html',
  styleUrls: ['./galeri.component.css']
})
export class GaleriComponent {

  items: Item[] = [
    {
      price: "1500 gel" ,
      name: 'Item 1',
      ebaut: ' produqtia magari, telefoni xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4jLSRD52is7UYuzqaINxnzo9rOwz_NaoPIg&usqp=CAU",
    },
    {
      price: "2100 gel",
      name: 'Item 2',
      ebaut: ' produqtia magari, leptopi xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://s7d1.scene7.com/is/image/dish/iPhone_14_Pro_Deep_Purple_phonewall?$ProductBase$&fmt=webp',
    },
    {
      price: "300 gel",
      name: 'Item 3',
      ebaut: ' televizori xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://alta.ge/images/detailed/247/128065_1.jpg',
    },
    {
      price: "457 gel",
      name: 'Item 4',
      ebaut: ' produqtia magari, leptopi xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://rukminim2.flixcart.com/image/850/1000/kjkbv680-0/laptop-stand/y/f/f/wooden-handmade-laptop-stand-laptop-stand-laptop-stand-ved-original-imafz3w4hwyz9tpm.jpeg?q=90',
    },
    {
      price: "457 gel",
      name: 'Item 5',
      ebaut: ' produqtia magari, leptopi xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://sc04.alicdn.com/kf/H1fb7a9003f394935a831e3bdb166f5c9x.jpg',
    },
    {
      price: "457 gel",
      name: 'Item 6',
      ebaut: ' produqtia magari, leptopi: moyveba xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://image.made-in-china.com/2f0j00LBnhysYgLScp/Global-Hot-Sell-15-6-Inch-HD-Ultra-Thin-Notebook-8GB-256GB-Quad-Core-Wins10-Mini-Laptop-Computer-2-3GHz-2-8GHz.webp',
    },
    {
      price: "1500 gel" ,
      name: 'Item 1',
      ebaut: ' produqtia magari, telefoni xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4jLSRD52is7UYuzqaINxnzo9rOwz_NaoPIg&usqp=CAU",
    },
    {
      price: "2100 gel",
      name: 'Item 2',
      ebaut: ' produqtia magari, leptopi xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://s7d1.scene7.com/is/image/dish/iPhone_14_Pro_Deep_Purple_phonewall?$ProductBase$&fmt=webp',
    },
    {
      price: "300 gel",
      name: 'Item 3',
      ebaut: ' televizori xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://alta.ge/images/detailed/247/128065_1.jpg',
    },
    {
      price: "457 gel",
      name: 'Item 4',
      ebaut: ' produqtia magari, leptopi xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://rukminim2.flixcart.com/image/850/1000/kjkbv680-0/laptop-stand/y/f/f/wooden-handmade-laptop-stand-laptop-stand-laptop-stand-ved-original-imafz3w4hwyz9tpm.jpeg?q=90',
    },
    {
      price: "457 gel",
      name: 'Item 5',
      ebaut: ' produqtia magari, leptopi xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://sc04.alicdn.com/kf/H1fb7a9003f394935a831e3bdb166f5c9x.jpg',
    },
    {
      price: "457 gel",
      name: 'Item 6',
      ebaut: ' produqtia magari, leptopi: moyveba xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://image.made-in-china.com/2f0j00LBnhysYgLScp/Global-Hot-Sell-15-6-Inch-HD-Ultra-Thin-Notebook-8GB-256GB-Quad-Core-Wins10-Mini-Laptop-Computer-2-3GHz-2-8GHz.webp',
    },
    {
      price: "1500 gel" ,
      name: 'Item 1',
      ebaut: ' produqtia magari, telefoni xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4jLSRD52is7UYuzqaINxnzo9rOwz_NaoPIg&usqp=CAU",
    },
    {
      price: "2100 gel",
      name: 'Item 2',
      ebaut: ' produqtia magari, leptopi xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://s7d1.scene7.com/is/image/dish/iPhone_14_Pro_Deep_Purple_phonewall?$ProductBase$&fmt=webp',
    },
    {
      price: "300 gel",
      name: 'Item 3',
      ebaut: ' televizori xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://alta.ge/images/detailed/247/128065_1.jpg',
    },
    {
      price: "457 gel",
      name: 'Item 4',
      ebaut: ' produqtia magari, leptopi xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://rukminim2.flixcart.com/image/850/1000/kjkbv680-0/laptop-stand/y/f/f/wooden-handmade-laptop-stand-laptop-stand-laptop-stand-ved-original-imafz3w4hwyz9tpm.jpeg?q=90',
    },
    {
      price: "457 gel",
      name: 'Item 5',
      ebaut: ' produqtia magari, leptopi xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://sc04.alicdn.com/kf/H1fb7a9003f394935a831e3bdb166f5c9x.jpg',
    },
    {
      price: "457 gel",
      name: 'Item 6',
      ebaut: ' produqtia magari, leptopi: moyveba xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://image.made-in-china.com/2f0j00LBnhysYgLScp/Global-Hot-Sell-15-6-Inch-HD-Ultra-Thin-Notebook-8GB-256GB-Quad-Core-Wins10-Mini-Laptop-Computer-2-3GHz-2-8GHz.webp',
    },
  ];

  filteredItems: Item[] = [];

  search(query: string): void {
    this.filteredItems = this.items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  isToggled = false;

  onToggle(): void {
    this.isToggled = !this.isToggled; // Toggle the state
  }


}

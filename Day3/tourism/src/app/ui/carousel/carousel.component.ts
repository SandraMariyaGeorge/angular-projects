import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
    @Input() data: any;
    carousalimg = [
      {
        id: 1,
        image: "https://www.incredibleindia.gov.in/content/dam/incredible-india/images/arunachal-pradesh/external-blogs/likabali-to-mechuka/Likabali-to-Mechuka1-popular.jpeg",
        heading: "Likabali to Mechuka",
        description: "Explore the serene beauty of Likabali and Mechuka, known for their picturesque landscapes."
      },
      {
        id: 2,
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/kanthalloor-village-kerala-rural-hero?qlt=82&ts=1726643529094",
        heading: "Kanthalloor Village",
        description: "A quaint village in Kerala, perfect for rural tourism and nature lovers."
      },
      {
        id: 3,
        image: "https://www.incredibleindia.gov.in/content/dam/incredible-india/images/kerala/munnar/external-blogs/munnar-travel-blog/munnar-travel-blog-masthead-popular-popular.jpg",
        heading: "Munnar",
        description: "Discover the lush tea gardens and cool climate of Munnar, a must-visit hill station in Kerala."
      }
      
    ];
    
}

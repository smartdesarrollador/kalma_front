import { Component } from '@angular/core';
import { Jumbotron1Component } from '../../../layout/componentes/jumbotron-1/jumbotron-1.component';
import { CardInfoComponent } from '../../../layout/componentes/card-info/card-info.component';
import { Feature1Component } from '../../../layout/componentes/feature-1/feature-1.component';
import { Services1Component } from '../../../layout/componentes/services-1/services-1.component';
import { CarouselOwl2Component } from '../../../layout/componentes/carousel-owl-2/carousel-owl-2.component';
import { CarouselOwl1Component } from '../../../layout/componentes/carousel-owl-1/carousel-owl-1.component';
import { SlickCarouselComponent } from '../../../layout/componentes/slick-carousel/slick-carousel.component';
import { Card2Component } from '../../../layout/componentes/card-2/card-2.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    Jumbotron1Component,
    CardInfoComponent,
    Feature1Component,
    Services1Component,
    CarouselOwl2Component,
    CarouselOwl1Component,
    SlickCarouselComponent,
    Card2Component,
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {}

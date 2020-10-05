# Como fazer um carrossel em Angular - Utilizando material design

###### Versões utilizadas
* Angular v8 e v9
* node v14.09.0
* npm 6.14.8

Utilizaremos o material design, então o primeiro passo **após ter criado o projeto angular** é importar a biblioteca do material, para isso dê o comando: -> `ng add @angular/material`
<br>

Pronto, você já pode utilizar os recursos do material, mas antes, é preciso pedir para o npm instalar um novo módulo do material que vem separado, que é o responsável pela criação do carrossel. Para instalar ele digite o comando: -> `npm install @ngmodule/material-carousel` ou `npm i @ngmodule/material-carousel`
<br>

Agora no arquivo **`app.module.ts`** você precisa fazer algumas inserções de código:
```
//...
import { MatCarouselModule } from '@ngmodule/material-carousel';
 
@NgModule({
  // ...
  imports: [
    // ...
    MatCarouselModule.forRoot(),
    // ...
  ]
})
export class AppModule {}
```
<br>

Pronto, alteramos nosso app.module.ts, agora precisamos fazer uma adição de código em nosso arquivo **`app.component.ts`**:
```
...
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
...
export class AppComponent {
...
// Slider Images
  slides = [
    {'image': 'https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_960_720.jpg'},
    {'image': 'https://cdn.pixabay.com/photo/2016/10/22/17/46/scotland-1761292_960_720.jpg'}, 
    {'image': 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg'}, 
    {'image': 'https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_960_720.jpg'}, 
    {'image': 'https://cdn.pixabay.com/photo/2016/08/09/21/54/yellowstone-national-park-1581879_960_720.jpg'}
  ];
...
}
``` 
<br>

Agora temos tudo para fazermos o carrossel, então vamos editar nosso HTML, então entre no arquivo **`app.component.html`** e crie seu carrossel, como exemplo, vou deixar o que criei aqui:
```
<h1 style="text-align:center;">
  Carrossel do angular
</h1>
  
  <mat-carousel
    class="carousel"
    timings="250ms ease-in"
    [autoplay]="true"
    interval="5000"
    color="accent"
    maxWidth="auto"
    proportion="25"
    slides="5"
    [loop]="true"
    [hideArrows]="false"
    [hideIndicators]="false"
    [useKeyboard]="true"
    [useMouseWheel]="false"
    orientation="ltr"
  >

  <mat-carousel-slide
    #matCarouselSlide
    *ngFor="let slide of slides; let i = index"
    [image]="slide.image"
    overlayColor="#00000040"
    [hideOverlay]="false"
  >
  </mat-carousel-slide>

</mat-carousel>
```

## Referência
Link: https://therichpost.com/angular-9-material-carousel-slider/

<hr>

# How to make a carousel in Angular - Using material design

**Sorry for any errors in the translation, I don't know speak English but I would like to help as much as possible**

###### Versions used
* Angular v8 and v9
* node v14.09.0
* npm 6.14.8

We will use the material design, so the first step ** after creating the angular project ** is to import the material library, for this, give the command: -> `ng add @angular/material`
<br>

Okay, you can already use the material resources, but first, you need to ask npm to install a new material module that comes separately, which is responsible for creating the carousel. To install it type the command: -> `npm install @ngmodule/material-carousel` or `npm i @ngmodule/material-carousel`

Now in the **`app.module.ts`** file you need to do some code insertions:
```
//...
import { MatCarouselModule } from '@ngmodule/material-carousel';
 
@NgModule({
  // ...
  imports: [
    // ...
    MatCarouselModule.forRoot(),
    // ...
  ]
})
export class AppModule {}
```
<br>

There, we changed our app.module.ts, now we need to add code to our **`app.component.ts`** file:
```
...
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
...
export class AppComponent {
...
// Slider Images
  slides = [
    {'image': 'https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_960_720.jpg'},
    {'image': 'https://cdn.pixabay.com/photo/2016/10/22/17/46/scotland-1761292_960_720.jpg'}, 
    {'image': 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg'}, 
    {'image': 'https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_960_720.jpg'}, 
    {'image': 'https://cdn.pixabay.com/photo/2016/08/09/21/54/yellowstone-national-park-1581879_960_720.jpg'}
  ];
...
}
```
<br>

Now we have everything to make the carousel, so let's edit our HTML, so enter the file **`app.component.html`** and create your carousel, as an example, I'll leave what I created here:
```
<h1 style="text-align:center;">
  Angular carousel
</h1>
  
  <mat-carousel
    class="carousel"
    timings="250ms ease-in"
    [autoplay]="true"
    interval="5000"
    color="accent"
    maxWidth="auto"
    proportion="25"
    slides="5"
    [loop]="true"
    [hideArrows]="false"
    [hideIndicators]="false"
    [useKeyboard]="true"
    [useMouseWheel]="false"
    orientation="ltr"
  >

  <mat-carousel-slide
    #matCarouselSlide
    *ngFor="let slide of slides; let i = index"
    [image]="slide.image"
    overlayColor="#00000040"
    [hideOverlay]="false"
  >
  </mat-carousel-slide>

</mat-carousel>
```

## Reference
Link: https://therichpost.com/angular-9-material-carousel-slider/
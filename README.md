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

# Atributos do carrossel

## mat-carousel

<table>
<thead>
<tr>
<th>Entrada</th>
<th>Tipo</th>
<th>Descrição</th>
<th style="text-align:center;">Valor padrão</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>timings</code></td>
<td><code>string</code></td>
<td>Tempo para animação de slides.</td>
<td style="text-align:center;"><code>'250ms ease-in'</code></td>
</tr>
<tr>
<td><code>autoplay</code></td>
<td><code>boolean</code></td>
<td>Ative o deslizamento automático.</td>
<td style="text-align:center;"><code>true</code></td>
</tr>
<tr>
<td><code>interval</code></td>
<td><code>number</code></td>
<td>Tempo para o slide passar automaticamente - se refere ao autoplay, medido em segundos * 1000.</td>
<td style="text-align:center;"><code>5000</code></td>
</tr>
<tr>
<td><code>loop</code></td>
<td><code>boolean</code></td>
<td>Loop, quando chegar no final, volta para o começo.</td>
<td style="text-align:center;"><code>true</code></td>
</tr>
<tr>
<td><code>hideArrows</code></td>
<td><code>boolean</code></td>
<td>	Oculte as setas de navegação.</td>
<td style="text-align:center;"><code>false</code></td>
</tr>
<tr>
<td><code>hideIndicators</code></td>
<td><code>boolean</code></td>
<td>Oculte os indicadores de navegação - as bolinhas que fica na parte inferior do carrossel.</td>
<td style="text-align:center;"><code>false</code></td>
</tr>
<tr>
<td><code>color</code></td>
<td><code>ThemePalette</code></td>
<td>Paleta de cores de Material - cores disponíveis: primary (azul), accent (amarelo), warn (vermelho) - <code>mas depende do tema que você escolheu ao baixar o material</code>.</td>
<td style="text-align:center;"><code>'accent'</code></td>
</tr>
<tr>
<td><code>maxWidth</code></td>
<td><code>string</code></td>
<td>Largura máxima.</td>
<td style="text-align:center;"><code>'auto'</code></td>
</tr>
<tr>
<td><code>maintainAspectRatio</code></td>
<td><code>boolean</code></td>
<td>Se verdadeiro, use <code>proportion</code> para determinar a altura, senão <code>slideHeight</code> é usado.</td>
<td style="text-align:center;"><code>true</code></td>
</tr>
<tr>
<td><code>proportion</code></td>
<td><code>number</code></td>
<td>Proporção da altura em comparação com a largura.</td>
<td style="text-align:center;"><code>25</code></td>
</tr>
<tr>
<td><code>slideHeight</code></td>
<td><code>string</code></td>
<td>Altura explícita do slide. Usado quando keepAspectRatio for false.</td>
<td style="text-align:center;"><code>'100%'</code></td>
</tr>
<tr>
<td><code>slides</code></td>
<td><code>number</code></td>
<td>Quantidade máxima de slides exibidos.</td>
<td style="text-align:center;"></td>
</tr>
<tr>
<td><code>useKeyboard</code></td>
<td><code>boolean</code></td>
<td>Ative a navegação pelo teclado.</td>
<td style="text-align:center;"><code>true</code></td>
</tr>
<tr>
<td><code>useMouseWheel</code></td>
<td><code>boolean</code></td>
<td>Ative a navegação por meio da roda do mouse.</td>
<td style="text-align:center;"><code>false</code></td>
</tr>
<tr>
<td><code>orientation</code></td>
<td><code>Orientation</code></td>
<td>Orientação do painel deslizante.</td>
<td style="text-align:center;"><code>'ltr'</code></td>
</tr>
<tr>
<td><code>svgIconOverrides</code></td>
<td><code>SvgIconOverrides</code></td>
<td>Substitua os ícones de carrossel padrão por ícones SVG registrados.</td>
<td style="text-align:center;"></td>
</tr>
</tbody>
</table>

<br>
<br>

## mat-carousel-slide

<table>
<thead>
<tr>
<th>Entrada</th>
<th>Tipo</th>
<th>Descrição</th>
<th style="text-align:center;">Valor padrão</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>image</code></td>
<td><code>string</code></td>
<td>Imagem exibida no slide.</td>
<td style="text-align:center;"></td>
</tr>
<tr>
<td><code>overlayColor</code></td>
<td><code>string</code></td>
<td>Cor da sobreposição do slide.</td>
<td style="text-align:center;"><code>'#00000040'</code></td>
</tr>
<tr>
<td><code>hideOverlay</code></td>
<td><code>boolean</code></td>
<td>Ative/desative a sobreposição.</td>
<td style="text-align:center;"><code>false</code></td>
</tr>
<tr>
<td><code>disabled</code></td>
<td><code>boolean</code></td>
<td>Pule o slide ao navegar.</td>
<td style="text-align:center;"><code>false</code></td>
</tr>
</tbody>
</table>

<br>
<br>

## Referências - links
* https://therichpost.com/angular-9-material-carousel-slider/
* https://gsr.dev/material2-carousel/
* https://www.npmjs.com/package/@ngmodule/material-carousel

<br>
<hr>
<br>

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

# Carousel attributes

## mat-carousel

<table>
<thead>
<tr>
<th>Input</th>
<th>Type</th>
<th>Description</th>
<th style="text-align:center;">Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>timings</code></td>
<td><code>string</code></td>
<td>Timings for slide animation.</td>
<td style="text-align:center;"><code>'250ms ease-in'</code></td>
</tr>
<tr>
<td><code>autoplay</code></td>
<td><code>boolean</code></td>
<td>Enable automatic sliding.</td>
<td style="text-align:center;"><code>true</code></td>
</tr>
<tr>
<td><code>interval</code></td>
<td><code>number</code></td>
<td>Autoplay's interval in milliseconds.</td>
<td style="text-align:center;"><code>5000</code></td>
</tr>
<tr>
<td><code>loop</code></td>
<td><code>boolean</code></td>
<td>Enable loop through arrows.</td>
<td style="text-align:center;"><code>true</code></td>
</tr>
<tr>
<td><code>hideArrows</code></td>
<td><code>boolean</code></td>
<td>Hide navigation arrows.</td>
<td style="text-align:center;"><code>false</code></td>
</tr>
<tr>
<td><code>hideIndicators</code></td>
<td><code>boolean</code></td>
<td>Hide navigation indicators.</td>
<td style="text-align:center;"><code>false</code></td>
</tr>
<tr>
<td><code>color</code></td>
<td><code>ThemePalette</code></td>
<td>Color palette from Material.</td>
<td style="text-align:center;"><code>'accent'</code></td>
</tr>
<tr>
<td><code>maxWidth</code></td>
<td><code>string</code></td>
<td>Maximum width.</td>
<td style="text-align:center;"><code>'auto'</code></td>
</tr>
<tr>
<td><code>maintainAspectRatio</code></td>
<td><code>boolean</code></td>
<td>If true, use <code>proportion</code> to determine height, else <code>slideHeight</code> is used.</td>
<td style="text-align:center;"><code>true</code></td>
</tr>
<tr>
<td><code>proportion</code></td>
<td><code>number</code></td>
<td>Height proportion compared to width.</td>
<td style="text-align:center;"><code>25</code></td>
</tr>
<tr>
<td><code>slideHeight</code></td>
<td><code>string</code></td>
<td>Explicit slide height. Used when maintainAspectRatio is false.</td>
<td style="text-align:center;"><code>'100%'</code></td>
</tr>
<tr>
<td><code>slides</code></td>
<td><code>number</code></td>
<td>Maximum amount of displayed slides.</td>
<td style="text-align:center;"></td>
</tr>
<tr>
<td><code>useKeyboard</code></td>
<td><code>boolean</code></td>
<td>Enable keyboard navigation.</td>
<td style="text-align:center;"><code>true</code></td>
</tr>
<tr>
<td><code>useMouseWheel</code></td>
<td><code>boolean</code></td>
<td>Enable navigation through mouse wheeling.</td>
<td style="text-align:center;"><code>false</code></td>
</tr>
<tr>
<td><code>orientation</code></td>
<td><code>Orientation</code></td>
<td>Orientation of the sliding panel.</td>
<td style="text-align:center;"><code>'ltr'</code></td>
</tr>
<tr>
<td><code>svgIconOverrides</code></td>
<td><code>SvgIconOverrides</code></td>
<td>Override default carousel icons with registered SVG icons.</td>
<td style="text-align:center;"></td>
</tr>
</tbody>
</table>

<br>

## mat-carousel-slide

<table>
<thead>
<tr>
<th>Input</th>
<th>Type</th>
<th>Description</th>
<th style="text-align:center;">Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>image</code></td>
<td><code>string</code></td>
<td>Image displayed in the slide.</td>
<td style="text-align:center;"></td>
</tr>
<tr>
<td><code>overlayColor</code></td>
<td><code>string</code></td>
<td>Color of the slide's overlay.</td>
<td style="text-align:center;"><code>'#00000040'</code></td>
</tr>
<tr>
<td><code>hideOverlay</code></td>
<td><code>boolean</code></td>
<td>Toggle overlay on/off.</td>
<td style="text-align:center;"><code>false</code></td>
</tr>
<tr>
<td><code>disabled</code></td>
<td><code>boolean</code></td>
<td>Skip slide when navigating.</td>
<td style="text-align:center;"><code>false</code></td>
</tr>
</tbody>
</table>

## References - links
* https://therichpost.com/angular-9-material-carousel-slider/
* https://gsr.dev/material2-carousel/
* https://www.npmjs.com/package/@ngmodule/material-carousel
# Warsztaty z podstaw front-endu 

## Jak pracować podczas warsztatu?

1. Stwórz **fork** repozytorium.
2. **Sklonuj** repozytorium na swój komputer.
3. **Skomituj** zmiany do swojego repozytorium po wykonaniu danego zadania.
4. **Wypchnij** zmiany do swojego repozytorium na GitHubie.
5. Dokładne opisy poszczególnych zadań znajdziesz w katalogu **Workshop** w plikach z odpowiednimi numerami.
6. Rób zadania po kolei, ponieważ zostały zaplanowane tak, żeby w kolejnych zadaniach wykorzystywać wiedzę z tych już zrobionych. 

## Powodzenia!


Elementy na stronie możemy wybierać na różne sposoby. Poznaliśmy już klasy i identyfikatory i wiemy, że za ich pomocą możemy wybierać elementy i ustawiać im różne style. 

No bo, żeby ustawić kolor jakiemuś elementowi musimy go najpierw zidentyfikować, prawda? 

Jeśli szukamy elementu poprzez klasę używamy kropki ``.``, o tak: 

```CSS
.my_favorite_link {
	/* tutaj ustawiamy style */
}
```
Element w pliku HTML wygląda tak: 
będą miały takie same style
```HTML
 <a href="index.html" class="my_favorite_link"> Start </a>
 ```

Jeśli szukamy elementu poprzez identyfikator używamy znaku hash tag czyli ``#``, o tak: 

```CSS
#my_favorite_link {
	/* tutaj ustawiamy style */
}
```
Element w pliku HTML wygląda tak: 

```HTML
 <a href="index.html" id="my_favorite_link"> Zacznij w IT: Warsztaty </a>
 ```

 W każdym z tych przypadków, zarówno klasa jak i identyfikator są **selektorami**. 
 Czyli ```.my_favorite_link``` oraz ```#my_favorite_link``` są **selektorami**. 

 A co z nazwą znacznika ```a```? Tak, on również jest **selektorem**. Zatem:
 Jeśli szukamy elementu poprzez nazwę znacznika używamy po prostu jego nazwy, o tak: 

```CSS
a {
	/* tutaj ustawiamy style */
}
```
Element w pliku HTML wygląda tak: 

```HTML
 <a href="index.html"> Zacznij w IT: Warsztaty </a>
 ```


## Łączenie selektorów 

Selektory to nie tylko pojedyńcze nazwy. Wyobraź sobie, że chcesz ustawić takie same style kilku elementom, ale nie chcesz dla każdego z nich pisać osobnej reguły.
Możemy użyć **przecinka** do wyselekcjonowania elementów, o tak: 

```CSS
a, ul, p {
	/* tutaj ustawiamy style */
}
```

Znacznik ```p``` dotyczy paragrafu. Poznajmy go już za niedługo. 

## Zagnieżdżanie selektorów 

Wyobraź sobie teraz taką sytuację - chcielibyśmy ustawić kolor dla elementu ```a``` ale tylko takiego, który znajduje się wewnątz listy nieuporządkowanej ```ul```. Jak to zrobić? 

Najpierw przyjszyj się strukturze HTML: 

```HTML
 <header>
      <nav class="main_navigation">
        <a href="index.html" class="logo"> Zacznij w IT: Warsztaty </a>
        <ul class="menu">
          <li><a href="#">Materiały do nauki</a></li>
          <li><a href="#">Coders Lab</a></li>
          <li><a href="#">Repozytorium Github</a></li>
        </ul>
      </nav>
</header>
 ```

 Żeby dobrać się do odnośników umieszczonych wewnąrz listy ```ul``` użyjemy zanieżdżenia czyli **spacji**

 ```CSS
ul a {
	/* tutaj ustawiamy style */
}
```
Ten selektor oznacza, że tylko takie elementy ```a``` będą miały ustawione określone style, które znajdują się wewnątrz listy ```ul```. Element ```a``` z klasą logo nie będzie miał ustawionych takich styli.

Zauważ, że ominęliśmy znacznik ```li```. Zrobiliśmy tak dlatego, że nie musimy wypisywać całej ścieżki bezpośrednio od elementu na samej górze do elementu ```a```. **Spacja** w selektorze oznacza, że szukamy kolejnych potomków. 

**Uwaga! **
Przy zagnieżdżaniu kieruj się bardzo ważną zasadą: Nie tworzymy zbyt dużych zagnieżdżeń. Maksimum 2 lub 3 poziomy. Chodzi o to, żeby kod CSS był jak najbardziej prosty, a zbyt długie zagnieżdżenia powodują, że kod staje się nieczytelny. 

Więcej o selektorach i zagnieżdżeniach porozmawiamy na kursie. 

## Sprawdź się

1 1 - 1
1 0 - 0
0 1 - 0
0 0 - 0



#Jednostki, kolory,  (px i %)

W tym rozdziale dowiemy się w jaki sposób wpływać na wielkość elementów HTML oraz jakie mamy sposoby do ustawiania im kolorów.

## Jednostki 

### Piksel

Najpopularniejszą jednostką dzięki, której możemy określać wielkości elementów jest piksel. 
Piksel to najmniejszy element Twojego monitora czy telefonu po prostu wyświetlacza.
Będziemy więc używać **pikseli** jeżeli będziemy chcieli **konktretnie** wskazać jaką wielkość powinien mieć element lub tekst wewnątrz niego. 

Przetestujmy przykład jednostek podczas ustawiania wielkości fontu. Do ustawienia takiej wartości wykorzystamy własność **font-size**

Zobacz przykład:
```HTML
<a href="#" class="logo"> Coders Lab </a>
```

```CSS
.logo {
    font-size: 100px;
}
```

Ustawiliśmy wielkość fontu na 100px. Trochę dużo, prawda? No, ale logo to ważna sprawa. 

![](.guides/img/logo.png)

### Procent - %

Ustawienie jednostki w postaci procentu jest bardzo przydatne jeżeli chcemy, żeby wartość ta zmieniała się, albo po prostu była zależna od innej. 

Przy jednostkach procentowych musimy rozumieć **zagnieżdżanie** elementów ponieważ procent nie jest konkretną wartością jak wiesz. Jest obliczany na podstawie jakiejś innej wielkości. Jeżeli kolega powie Ci, że odda Ci 100% swojej wypłaty, to będzie Cię interesowało ile zarabia. Podobnie jest tutaj, jeżeli zapiszemy, że chcemy, aby wielkość fontu była ustawiona na 100% to przeglądarka musi ustalić wielkość na podstawie, której to obliczy.

Dlaczego zagnieżdżanie elementów jest tutaj bardzo istotne? Otóż, jeżeli nie ustalisz rodzicowi jakiejś konkretnej wielkości to przeglądarka będzie obliczała wartości procentowe na podstawie swoich domyslnych ustawień. Czyli gdzieś w jej plikach konfiguracyjnych jest zapisane, aby wielkość fontu była domyślnie ustawiana na 12px i jeśli tego nie nadpiszemy, taka właśnie wielkość fontu będzie.

Zobacz przykład:
```HTML
<a href="#" class="logo"> Coders Lab </a>
```

```CSS
.logo {
    font-size: 100%;
}
```

![](.guides/img/read_more.png)

W ten sposób nasze logo będzie miało ustawiony font na 12px, ponieważ jest to 100% z 12px. 

Ale jeżeli ustawimy wielkość fontu na elemencie np. ```body``` w taki sposób:

```CSS
body {
    font-size: 20px;
}

.logo {
    font-size: 100%;
}
```

To wielkość naszego logo się zmieni, ponieważ teraz obliczamy procent na podstawie wielkości rodzica.
A jak wiesz element ```body``` jest rodzicem elementu ```a``` o klasie **logo**.

Żeby to udowodnić zrób krótkie zadanie. 

## Sprawdź się

Nie zmieniająć wielkości fontu ustawionej w elementcie ```body``` oraz używając jednostki procentowej, spraw, aby element o klasie **logo** miał wielkość 10px.



## Kolory

Kolory w CSS możemy określać na 3 sposoby. 

* Nazwy kolorów - które już trochę poznaliśmy np. red, blue, green
* Przy użyciu zapisu szesntastkowego np. #ffffff co oznaca kolor biały
* Przy użyciu modelu rgb lub hsv - więcej o tych sposobach powiemy sobie na kursie

Zobaczmy przykłady: 

### Sposób 1 - Nazwy kolorów

```HTML
<a href="#" class="logo"> Coders Lab </a>
```

```CSS
.logo {
    color: red;
}
```

Więcej nazw kolorów, które można używać znajdziesz w linku [Nazwy kolorów](https://htmlcolorcodes.com/color-names/)

### Sposób 2 - zapis szesnastkowy

Zapis ten składa się z 6 cyfr szesnastkowych. Szczegółowo ten sposób omówimy na kursie teraz musimy wiedzieć tylko tyle, że za pomocą nazw kolorów nie jesteśmy w stanie odwzorować każdego koloru. Jak wiesz kolory mają różne nasycenie, odcień i barwę, aby móc sterować każdą z tych opcji musimy wykorzystać inny zapis niż tylko podanie nazwy. Umowżliwia nam to między innymi zapis szesnastkowy. 

```HTML
<a href="#" class="logo"> Coders Lab </a>
```

```CSS
.logo {
    color: #F0000; /*kolor czerwony*/
}
```

**Uwaga** 
Nie martw się nie będziemy sami wymyślać tych liczb, aby korzystać z kolorów. W sieci jest mnóstwo narzędzi, które pomogą nam znaleźć odpowiedni odcień w postaci zapisu szesntastkowego.


#Stylujemy menu

Wróćmy na do naszego menu, którego strukturę przygotowaliśmy w poprzednium rozdziale. 
Musimy doprowadzić jego wygląd do stanu, w którym będzie się nam podobał, oraz co najważniejsze do stanu, w którym będzie przypominał projekt graficzny.

Na początek ustawimy odpowiedni wygląd fontu, w kolejnym rozdziale zajmiemy się ustawienim go w odpowiednim miejscu.

Zaczynamy!!

### Nowe własności CSS 

Na początek musimy poznać kila nowych właściwości CSS, które będą nam potrzebne do ostylowania naszego menu.

Są to:

* text-decoration - ta własność będzie nam potrzebna do usunięcia podkreślenia pod linkami. Podkreślenia są dodawane automatycznie przez przeglądarkę. Usuniemy je ustawiąjąc wartość text-decoration na none.
* text-transform - ta własność przyda nam się do tego, aby zmienić małe litery na duże. Zapytacie zapewne, dlaczego by ich od razu w pliku HTML nie wpisać jako duże? Otóż, przyjęła się zasada, że tekst w plikach HTML piszemy normalnie, tzn. Pierwsza litera w zdaniu z dużej, reszta z małej, a jeżeli chcemy aby wszystkie litery w jakimś elemencie były duże lub małe to stosujemy właśnie text-transform. Dlaczego? Porozmawiamy o tym na kursie.
* display - ta właściwość przyda nam się do tego, aby ustawić elementy li, obok siebie. 


```CSS

.logo { 
  text-decoration: none;
  color: #ea6c56;
  font-size: 20px;
  text-transform: uppercase;
}

.menu  li{
  display: inline-block;
  margin-right: 10px;
}

.menu li a {
  text-decoration: none;
  color: #424343;
  font-size: 18px;
  text-transform: uppercase;
}


```

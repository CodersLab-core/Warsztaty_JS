//Zadanie 1

//zapobiegamy używaniu zmiennych globalnych:
'use strict';

//zapewniemy, żeby załadowała się najpierw cała zawartość kodu HTML, zanim zaczniemy wykonywać jakieś działania:
document.addEventListener('DOMContentLoaded', function() {
      
      //sprawdzamy czy plik został prawidłowo podpięty:
      console.log('Sierotka ma rysia');

      //przypisujemy do zmiennych odpowiednie selektory:
      var dropdownTab = document.querySelector('li.for-dropdown');
      var dropdownListElements = document.querySelector('div.dropdown')

      //sprawdzamy czy dobrze zostały przypisane selektory do zmiennych:
      console.log(dropdownTab);
      console.log(dropdownListElements);

      //testowo wyświetlamy style:
      console.log(dropdownTab.style);

      //po najechaniu myszką pojawi się menu rozwijane:
      dropdownTab.addEventListener('mouseover', function() {
      	dropdownListElements.style.display = 'block';
      });

      //gdy kursor znajduje się poza menu - lista rozwijana znika:
      dropdownTab.addEventListener('mouseout', function() {
      	dropdownListElements.style.display = 'none';
      });



    });
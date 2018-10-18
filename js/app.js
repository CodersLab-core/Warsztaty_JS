//Zadanie 1

//zapobiegamy używaniu zmiennych globalnych:
'use strict';

//zapewniemy, żeby załadowała się najpierw cała zawartość kodu HTML, zanim zaczniemy wykonywać jakieś działania:
document.addEventListener('DOMContentLoaded', function () {

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
      dropdownTab.addEventListener('mouseover', function () {
            dropdownListElements.style.display = 'block';
      });

      //gdy kursor znajduje się poza menu - lista rozwijana znika:
      dropdownTab.addEventListener('mouseout', function () {
            dropdownListElements.style.display = 'none';
      });

      //Zadanie 2

      var buttons = document.querySelectorAll('.read-more');

      function showHide() {

            var textArea = this.previousElementSibling;

            if (textArea.style.display === 'none' || textArea.style.display === '') {
                  textArea.style.display = 'block';
                  this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
            } else {
                  textArea.style.display = 'none';
                  this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
            }
      }

      for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', showHide);
      }

});
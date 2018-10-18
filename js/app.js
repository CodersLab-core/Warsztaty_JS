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

      //Zadanie 3

      var menuBorder = document.querySelector('nav.navbar');

      window.addEventListener('scroll', function () {
            menuBorder.style.borderBottom = '1px solid #7f7f7f';
      });

      //Zadanie 4

      var buttonUp = document.querySelector('.button-up');
      buttonUp.addEventListener('click', function () {
            window.scroll(0, 0);
      });

      //Zadanie 5

      var items = document.querySelectorAll('.org');
      var dots = document.querySelectorAll('.dot');


      dots[0].addEventListener('click', function () {
            for (var i = 0; i < dots.length; i++) {
                  dots[i].classList.remove('active');
                  items[i].classList.remove('visible');
            }
            this.classList.add('active');
            items[0].classList.add('visible');
      });

      dots[1].addEventListener('click', function () {
            for (var i = 0; i < dots.length; i++) {
                  dots[i].classList.remove('active');
                  items[i].classList.remove('visible');
            }
            this.classList.add('active');
            items[1].classList.add('visible');
      });

      dots[2].addEventListener('click', function () {
            for (var i = 0; i < dots.length; i++) {
                  dots[i].classList.remove('active');
                  items[i].classList.remove('visible');
            }
            this.classList.add('active');
            items[2].classList.add('visible');
      });

      dots[3].addEventListener('click', function () {
            for (var i = 0; i < dots.length; i++) {
                  dots[i].classList.remove('active');
                  items[i].classList.remove('visible');
            }
            this.classList.add('active');
            items[3].classList.add('visible');
      });

//Zadanie 6
//-------------Dodawanie zadań do listy-------------

      var addTaskBtn = document.querySelector('.input-group-btn');
      var tasksList = document.querySelector('.list-group');
      var taskInput = document.querySelector('.form-control');

      // function addTask() {

      // var newTask = document.createElement('li');

      // newTask.innerHTML = taskInput.value;

      // tasksList.appendChild(newTask);
      // taskInput.value = '';

      // };

      // addTaskBtn.addEventListener('click', addTask);


//-------------Dodawanie zadań z przyciskiem "Usuń"-------------

      // addTaskBtn.addEventListener('click', addTaskWithDeleteButton);

      // function addTaskWithDeleteButton() {

      //             var newTask = document.createElement('li');
      //             var newTaskContent = document.createElement('div');
      //             newTaskContent.innerHTML = taskInput.value;
      //             tasksList.appendChild(newTask);
      //             taskInput.value = '';

      //             var deleteButton = document.createElement('button');
      //             deleteButton.classList.add('btn', 'delete-btn');
      //             deleteButton.innerHTML = '<span class="glyphicon glyphicon-remove"></span> Usuń';

      //             newTask.appendChild(newTaskContent);
      //             newTask.appendChild(deleteButton);

      //             deleteButton.addEventListener('click', function() {
      //                   this.parentElement.parentNode.removeChild(this.parentElement);
      //             });
      //       };



//-------------Dodawanie zadań z przyciskiem "Zrobione"-------------

      // addTaskBtn.addEventListener('click', addTaskWithDoneButton);

      //       function addTaskWithDoneButton() {

      //             var newTask = document.createElement('li');
      //             var newTaskContent = document.createElement('div');
      //             newTaskContent.innerHTML = taskInput.value;
      //             tasksList.appendChild(newTask);
      //             taskInput.value = '';

      //             var markAsDoneBtn = document.createElement('button');
      //             markAsDoneBtn.classList.add('btn', 'ok-btn');
      //             markAsDoneBtn.innerHTML = '<span class="glyphicon glyphicon-ok"></span> Zrobione';

      //             newTask.appendChild(newTaskContent);
      //             newTask.appendChild(markAsDoneBtn);


      //             markAsDoneBtn.addEventListener('click', markAsDone);
      //             function markAsDone() {
      //                   this.previousElementSibling.style.textDecoration = 'line-through';
      //             };

      //             taskInput.value = '';
      //       };



//-------------Dodawanie zadań z walidacją inputa-------------

      addTaskBtn.addEventListener('click', addTaskWithValidation);

      function addTaskWithValidation() {

            var emptyInputMessage = document.querySelector('.warning');
            if (taskInput.value === '' || taskInput.value == null) {
                  emptyInputMessage.style.display = 'block';
            }

            else {

                  var newTask = document.createElement('li');
                  newTask.innerHTML = taskInput.value;
                  tasksList.appendChild(newTask);

                  emptyInputMessage.style.display = 'none';
                  taskInput.value = '';
            };

      };

});
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.body.style.background = "#23395d"

  form = document.getElementById('create-task-form');
  
  form.addEventListener('submit', function(e) {
    let task = document.getElementById('new-task-description');
    let taskList = document.getElementById('tasks');
    
    let li = document.createElement('li');
    li.innerText = task.value + ' '

    taskList.appendChild(li);

    let button = document.createElement('button');
    button.setAttribute('data-description', task.value);
    button.innerText = "X"
    button.addEventListener('click', function(e) {
      li.remove();
    })

    li.appendChild(button);

    let select = document.createElement('select');
    select.id = "priority";
    select.addEventListener('change', function(e) {
      if (e.target.value == 0) {
        li.style.color = 'black';
      } else if (e.target.value == 1) {
        li.style.color = 'green';
      } else if (e.target.value == 2) {
        li.style.color = 'yellow';
      } else {
        li.style.color = 'red';
      }
    });

    let option = document.createElement('option');
    option.setAttribute('value', 0);
    option.innerText = "None"
    select.appendChild(option)

    option = document.createElement('option');
    option.setAttribute('value', 1);
    option.innerText = "Low"
    select.appendChild(option)

    option = document.createElement('option');
    option.setAttribute('value', 2);
    option.innerText = "Medium"
    select.appendChild(option)

    option = document.createElement('option');
    option.setAttribute('value', 3);
    option.innerText = "High"
    select.appendChild(option)

    li.appendChild(select);
  
    e.preventDefault();
  });

  let button = document.createElement('button');
  button.id = "sort-button"
  button.innerText = "Sort Ascending"
  button.addEventListener('click', function(e) {
    if (button.innerText === "Sort Ascending") {
      sortAscending();
      button.innerText = "Sort Descending"
    } else {
      sortDescending();
      button.innerText = "Sort Ascending"
    }
  });

  function sortAscending() {
    let li = document.querySelectorAll('li');
    let sorted = [...li].sort((a,b) => a.children.priority.selectedIndex - b.children.priority.selectedIndex )
    let taskList = document.getElementById('tasks');

    for (let i = 0; i < sorted.length; i++) {
      sorted[i].remove();
      taskList.appendChild(sorted[i]);
    }
  };

  function sortDescending() {
    let li = document.querySelectorAll('li');
    let sorted = [...li].sort((a,b) => b.children.priority.selectedIndex - a.children.priority.selectedIndex )
    let taskList = document.getElementById('tasks');

    for (let i = 0; i < sorted.length; i++) {
      sorted[i].remove();
      taskList.appendChild(sorted[i]);
    }
  };

  document.body.appendChild(button);

});


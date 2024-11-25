const wrapper = document.querySelector(".wrapper");
const backBtn = document.querySelector(".back-btn");
const menuBtn = document.querySelector(".menu-btn");

const toggleScreen = () => {
  wrapper.classList.toggle("show-category");
};

menuBtn.addEventListener("click", toggleScreen);
backBtn.addEventListener("click", toggleScreen);

const addTaskBtn = document.querySelector(".add-task-btn");
const addTaskForm = document.querySelector(".add-task");
const blackBackdrop = document.querySelector(".black-backdrop");

const toggleAddTaskForm = () => {
  addTaskForm.classList.toggle("active");
  blackBackdrop.classList.toggle("active");
  addTaskBtn.classList.toggle("active");
};

addTaskBtn.addEventListener("click", toggleAddTaskForm);
blackBackdrop.addEventListener("click", toggleAddTaskForm);

// Categorias

let categories = [
  {
    title: "Personal",
    img: "marketing_event_finance_appointment_management_business_icon_263069.png",
  },
  {
    title: "Trabajo",
    img: "marketing_strategy_finance_chart_laptop_management_business_icon_263043.png",
  },
  {
    title: "Compras",
    img: "cash_purse_finance_payment_wallet_management_business_icon_263060.png",
  },
  {
    title: "Codificacion",
    img: "graph_time_strategy_finance_chart_management_business_icon_263023.png",
  },
  {
    title: "Salud",
    img: "health_care_hands_doctor_heart_icon_233072.png",
  },
  {
    title: "Educacion",
    img: "document_finance_chart_contract_management_business_icon_263049.png",
  },
  {
    title: "Ejercicios",
    img: "dumbbell_dumbbells_gym_equipment_icon_224847.png",
  },
  {
    title: "Finanzas",
    img: "office_strategy_finance_chart_management_business_icon_263052.png",
  },
  {
    title: "Otros",
    img: "time_chart_business_calender_management_icon_263056.png",
  },
];

let tasks = [
  {
    id: 1,
    task: "Tarea 1",
    category: "Personal",
    completed: false,
  },
  {
    id: 2,
    task: "Tarea 2",
    category: "Trabajo",
    completed: false,
  },
  {
    id: 3,
    tarea: "Tarea 3",
    category: "Compras",
    completed: false,
  },
  {
    id: 4,
    task: "Tarea 4",
    category: "Personal",
    completed: false,
  },
  {
    id: 5,
    task: "Tarea 5",
    category: "Trabajo",
    completed: false,
  },
  {
    id: 6,
    task: "Tarea 6",
    category: "Compras",
    completed: false,
  },
  {
    id: 7,
    task: "Tarea 7",
    category: "Personal",
    completed: false,
  },
  {
    id: 8,
    task: "Tarea 8",
    category: "Trabajo",
    completed: false,
  },
  {
    id: 9,
    task: "Tarea 9",
    category: "Compras",
    completed: false,
  },
  {
    id: 10,
    task: "Tarea 10",
    category: "Personal",
    completed: false,
  },
  {
    id: 11,
    task: "Tarea 11",
    category: "Trabajo",
    completed: false,
  },
  {
    id: 12,
    task: "Tarea 12",
    category: "Compras",
    completed: false,
  },
  {
    id: 13,
    task: "Tarea 13",
    category: "Personal",
    completed: false,
  },
  {
    id: 14,
    task: "Tarea 14",
    category: "Trabajo",
    completed: false,
  },
  {
    id: 15,
    task: "Tarea 15",
    category: "Compras",
    completed: false,
  },
  {
    id: 16,
    task: "Tarea 16",
    category: "Personal",
    completed: false,
  },
  {
    id: 17,
    task: "Tarea 17",
    category: "Trabajo",
    completed: false,
  },
  {
    id: 18,
    task: "Tarea 18",
    category: "Compras",
    completed: false,
  },
  {
    id: 19,
    task: "Tarea 19",
    category: "Personal",
    completed: false,
  },
  {
    id: 20,
    task: "Tarea 20",
    category: "Trabajo",
    completed: false,
  },
  {
    id: 21,
    task: "Tarea 21",
    category: "Compras",
    completed: false,
  },
  {
    id: 22,
    task: "Tarea 22",
    category: "Personal",
    completed: false,
  },
  {
    id: 23,
    task: "Tarea 23",
    category: "Trabajo",
    completed: false,
  },
  {
    id: 24,
    task: "Tarea 24",
    category: "Compras",
    completed: false,
  },
  {
    id: 25,
    task: "Tarea 25",
    category: "Personal",
    completed: false,
  },
  {
    id: 26,
    task: "Tarea 26",
    category: "Trabajo",
    completed: false,
  },
  {
    id: 27,
    task: "Tarea 27",
    category: "Compras",
    completed: false,
  },
  {
    id: 28,
    task: "Tarea 28",
    category: "Personal",
    completed: false,
  },
  {
    id: 29,
    task: "Tarea 29",
    category: "Trabajo",
    completed: false,
  },
  {
    id: 30,
    task: "Tarea 30",
    category: "Compras",
    completed: false,
  },
];

let selectedCategory = categories[0];

const categoriesContainer = document.querySelector(".categories");
const categoryTitle = document.querySelector(".category-title");
const totalCategoryTasks = document.querySelector(".category-tasks");
const categoryImg = document.querySelector("#category-img");
const totalTasks = document.querySelector(".totalTasks");

const calculateTotal = () => {
  const categoryTasks = tasks.filter(
    (task) =>
      task.category.toLowerCase() === selectedCategory.title.toLowerCase()
  );
  totalCategoryTasks.innerHTML = `${categoryTasks.length} Tasks`;
  totalTasks.innerHTML = tasks.length;
};

const renderCategories = () => {
  categoriesContainer.innerHTML = "";
  categories.forEach((category) => {
    // Obtener todas las tareas de la categoría actual
    const categoryTasks = tasks.filter(
      (task) => task.category.toLowerCase() === category.title.toLowerCase()
    );
    // Crear un elemento div para renderizar
    const div = document.createElement("div");
    div.classList.add("category");
    div.addEventListener("click", () => {
      wrapper.classList.add("show-category");
      selectedCategory = category;
      categoryTitle.innerHTML = category.title; // Actualizar el título de la categoría
      categoryImg.src = `assets/icons/${category.img}`;
      calculateTotal();
      // Tarea de renderizado cuando cambia de categoría
      renderTasks();
    });
    div.innerHTML = `
                <div class="left">
                <img
                  src="assets/icons/${category.img}"
                  alt="${category.title}"
                />
                <div class="content">
                  <h1>${category.title}</h1>
                  <p>${categoryTasks.length}</p>
                </div>
              </div>
              <div class="options">
                <div class="toggle-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <circle cx="12" cy="5" r="1.5" />
                    <circle cx="12" cy="12" r="1.5" />
                    <circle cx="12" cy="19" r="1.5" />
                  </svg>
                </div>
              </div>`;

    categoriesContainer.appendChild(div);
  });
};

const tasksContainer = document.querySelector(".tasks");

const renderTasks = () => {
  tasksContainer.innerHTML = "";
  const categoryTasks = tasks.filter(
    (task) =>
      task.category.toLowerCase() === selectedCategory.title.toLowerCase()
  );

  //if Si no hay ninguna tarea para la categoría seleccionada
  if (categoryTasks.length === 0) {
    tasksContainer.innerHTML = `<p class="no-task">No hay tareas para esta categoría</p>`;

    // Si hay tareas para la categoría seleccionada
  } else {
    categoryTasks.forEach((task) => {
      const div = document.createElement("div");
      div.classList.add("task-wrapper");
      const label = document.createElement("label");
      label.classList.add("task");
      label.setAttribute("for", task.id);
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = task.id;
      checkbox.checked = task.completed;

      // Agregar funcionalidad de finalización al hacer clic en la casilla de verificación
      checkbox.addEventListener("change", () => {
        const index = tasks.findIndex((t) => t.id === task.id);
        // Cambia el verdadero por falso o viceversa
        tasks[index].completed = !tasks[index].completed;
        // Guardar en el local
        saveLocal();
      });

      div.innerHTML = `
                <div class="delete">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              `;

      label.innerHTML = `
                <input type="checkbox" name="" id="task" />
                <span class="checkmark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <p>${task.task}</p>
              `;

      label.prepend(checkbox);
      div.prepend(label);
      tasksContainer.appendChild(div);

      // Eliminar funcionalidad
      const deleteBtn = div.querySelector(".delete");
      deleteBtn.addEventListener("click", () => {
        const index = tasks.findIndex((t) => t.id === task.id);

        // Eliminar la tarea en la que se ha hecho clic
        tasks.splice(index, 1);
        saveLocal();
        renderTasks();
      });
    });

    renderCategories();
    calculateTotal();
  }
};

// Guarde y obtenga tareas de Storag local
const saveLocal = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
const getLocal = () => {
  const localTasks = JSON.parse(localStorage.getItem("tasks"));

  // If tareas encontradas
  if (localTasks) {
    tasks = localTasks;
  }
};

// Agreguemos funcionalidad para agregar nuevas tareas

// Renderizar todas las categorías en select
const categorySelect = document.querySelector("#category-select");
const cancelBtn = document.querySelector(".cancel-btn");
const addBtn = document.querySelector(".add-btn");

const taskInput = document.querySelector("#task-input");

cancelBtn.addEventListener("click", toggleAddTaskForm);

addBtn.addEventListener("click", () => {
  const task = taskInput.value;
  const category = categorySelect.value;

  if (task === "") {
    alert("Por favor, ingrese una tarea");
  } else {
    const newTask = {
      id: tasks.length + 1,
      task,
      category,
      completed: false,
    };
    tasks.push(newTask);
    taskInput.value = "";
    saveLocal();
    toggleAddTaskForm();
    renderTasks();
  }
});

categories.forEach((category) => {
  const option = document.createElement("option");
  option.value = category.title.toLowerCase();
  option.textContent = category.title;
  categorySelect.appendChild(option);
});

// Todas estas son tareas almacenadas
getLocal();
calculateTotal();
renderTasks();

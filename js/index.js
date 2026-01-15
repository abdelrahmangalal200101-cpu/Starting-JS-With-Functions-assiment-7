const recipes = [
  {
    title: "French Onion Soup",
    img:"images/food-1.jpeg",
    rating: 4.7,
    reviews: 267,
    prepTime: "15 min",
    cookTime: "60 min",
    servings: 4,
    level: "Intermediate",
    cuisine: "Mediterranean",
    ingredients: [
      "4 large onions, thinly sliced",
      "1/2 cup white wine",
      "1 liter beef broth",
      "4 tablespoons butter"
    ],
    instruction: [
      "Melt butter in a large pot and caramelize onions for 40 minutes.",
      "Add white wine and deglaze the pot.",
      "Add beef broth, bay leaves, and thyme. Simmer 20 minutes.",
      "Toast baguette slices.",
      "Top soup with bread and cheese, then broil 3-5 minutes."
    ],
    nutrition: {
      calories: 380,
      protein: "18g",
      carbs: "36g",
      fat: "18g",
      fiber: "4g",
      sodium: "980mg"
    }
  },

  {
    title: "Chicken Alfredo Pasta",
    rating: 4.8,
    reviews: 421,
    img:"images/food-2.jpeg",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: 3,
    level: "Easy",
    cuisine: "Italian",
    ingredients: [
      "250g fettuccine pasta",
      "2 chicken breasts, sliced",
      "1 cup heavy cream",
      "1 cup grated parmesan",
      "2 tablespoons butter"
    ],
    instruction: [
      "Cook pasta until al dente.",
      "Sauté chicken until golden.",
      "Melt butter, add cream and parmesan to form sauce.",
      "Mix pasta with sauce and chicken.",
      "Serve hot with parsley."
    ],
    nutrition: {
      calories: 520,
      protein: "32g",
      carbs: "45g",
      fat: "22g",
      fiber: "3g",
      sodium: "640mg"
    }
  },

  {
    title: "Beef Tacos",
    rating: 4.2,
    reviews: 310,
    img:"images/food-3.jpeg",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 4,
    level: "Easy",
    cuisine: "Mexican",
    ingredients: [
      "500g ground beef",
      "1 packet taco seasoning",
      "8 small tortillas",
      "1 cup shredded lettuce",
      "1 cup cheddar cheese"
    ],
    instruction: [
      "Brown beef in a skillet.",
      "Add taco seasoning and water; let simmer.",
      "Warm tortillas.",
      "Fill tortillas with beef, lettuce, and cheese.",
      "Serve immediately."
    ],
    nutrition: {
      calories: 290,
      protein: "20g",
      carbs: "28g",
      fat: "12g",
      fiber: "2g",
      sodium: "760mg"
    }
  },

  {
    title: "Vegetable Stir Fry",
    rating: 4.6,
    reviews: 189,
    img:"images/food-4.jpeg",
    prepTime: "15 min",
    cookTime: "10 min",
    servings: 2,
    level: "Easy",
    cuisine: "Asian",
    ingredients: [
      "1 bell pepper, sliced",
      "1 carrot, sliced",
      "1 broccoli head, chopped",
      "2 tablespoons soy sauce",
      "1 tablespoon sesame oil"
    ],
    instruction: [
      "Heat oil in a wok.",
      "Add garlic then vegetables; stir fry 5 minutes.",
      "Add soy sauce and sesame oil.",
      "Cook another 2 minutes.",
      "Serve over rice or noodles."
    ],
    nutrition: {
      calories: 210,
      protein: "8g",
      carbs: "32g",
      fat: "6g",
      fiber: "5g",
      sodium: "540mg"
    }
  },

  {
    title: "Margherita Pizza",
    rating: 4.9,
    reviews: 502,
    img:"images/food-5.jpeg",
    prepTime: "25 min",
    cookTime: "15 min",
    servings: 2,
    level: "Intermediate",
    cuisine: "Italian",
    ingredients: [
      "1 pizza dough",
      "1/2 cup tomato sauce",
      "200g fresh mozzarella",
      "Fresh basil leaves",
      "1 tablespoon olive oil"
    ],
    instruction: [
      "Spread pizza dough on a tray.",
      "Add tomato sauce evenly.",
      "Place mozzarella slices and basil.",
      "Bake at high heat for 12–15 minutes.",
      "Drizzle olive oil before serving."
    ],
    nutrition: {
      calories: 430,
      protein: "19g",
      carbs: "50g",
      fat: "14g",
      fiber: "3g",
      sodium: "720mg"
    }
  }
];


function changeRecipe(index) {
  const recipe = recipes[index];
  const demo = document.getElementById("demo");

  let ingredientsHTML = "";
  for (let i = 0; i < recipe.ingredients.length; i++) {
    ingredientsHTML += `
      <div class="d-flex gap-2 align-items-center">
        <span class="d-flex justify-content-center align-items-center p-0 rounded-circle bg-asm-color text-white fw-bold"
          style="width: 23px; height: 23px; line-height: 25px; font-size: 12px;">
          ${i + 1}
        </span>
        <span class="text-secondary">${recipe.ingredients[i]}</span>
      </div>
    `;
  }

  let instructionsHTML = "";
  for (let i = 0; i < recipe.instruction.length; i++) {
    instructionsHTML += `
      <div class="d-flex align-items-center gap-3">
        <div class="d-flex align-items-center justify-content-center bg-asm-color rounded-4"
          style="width: 50px !important; height: 50px !important; aspect-ratio: 1 / 1; padding: 0; flex: 0 0 auto;">
          <span class="text-white fw-bold fs-5" style="line-height: 1">${
            i + 1
          }</span>
        </div>
        <span class="text-secondary">${recipe.instruction[i]}</span>
      </div>
    `;
  }

  demo.innerHTML = `
    <div class="container p-0 mb-5 m-6 bg-white rounded-4 shadow-lg overflow-hidden">
      <div class="row g-0">
        <div class="left-side col-12 col-lg-5 position-relative">
          <img src="${recipe.img}" alt="" style="width: 100%; height: 100%; object-fit: cover; object-position: center; min-height: 700px;" />
          
          <div class="position-absolute top-0 start-0 m-3">
            <div class="bg-white rounded-pill px-3 py-2 shadow-sm d-flex align-items-center gap-2">
              <i class="fas fa-star text-warning"></i>
              <span class="fw-bold">${recipe.rating}</span>
              <span class="text-secondary small">(${recipe.reviews} reviews)</span>
            </div>
          </div>
          
          <div class="position-absolute bottom-0 start-0 end-0 m-3">
            <div class="bg-white rounded-4 p-3 shadow">
              <div class="row text-center g-3">
                <div class="col-4">
                  <i class="fas fa-clock text-asm-color fs-5"></i>
                  <div class="small text-secondary mt-1">Prep Time</div>
                  <div class="fw-bold">${recipe.prepTime}</div>
                </div>
                <div class="col-4">
                  <i class="fas fa-fire text-danger fs-5"></i>
                  <div class="small text-secondary mt-1">Cook Time</div>
                  <div class="fw-bold">${recipe.cookTime}</div>
                </div>
                <div class="col-4">
                  <i class="fas fa-users text-primary fs-5"></i>
                  <div class="small text-secondary mt-1">Servings</div>
                  <div class="fw-bold">${recipe.servings} people</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="right-side col-12 col-lg-7 px-5 h-auto py-4">
          <div class="d-flex gap-2 mb-1">
            <span class="small text-primary py-1 px-3 bg-primary rounded-4 bg-opacity-10 fw-semibold">${recipe.cuisine}</span>
            <span class="small text-success py-1 px-3 bg-success rounded-5 bg-opacity-10 fw-semibold">${recipe.level}</span>
          </div>
          
          <div class="d-flex justify-content-between">
            <h2 class="p-0 fs-2 mt-2 fw-bold">${recipe.title}</h2>
            <div class="d-flex gap-3 mt-2">
              <div style="width: 45px; height: 45px; background-color: rgba(255, 93, 0, 0.2);" 
                class="d-inline-flex align-items-center justify-content-center rounded-4 icon-box">
                <i class="fa-solid fa-share-nodes fs-6 text-asm-color"></i>
              </div>
              <div style="width: 45px; height: 45px; background-color: rgba(255, 93, 0, 0.2);" 
                class="d-inline-flex align-items-center justify-content-center rounded-4 icon-box">
                <i class="fa-solid fa-flag fs-6 text-asm-color"></i>
              </div>
            </div>
          </div>
          
          <p class="text-secondary fw-semibold">Rich beef broth with caramelized onions and melted cheese</p>
          
          <div class="d-flex align-items-center bg-body-tertiary mt-4 p-3 gap-3 rounded-3 danger-shadow">
            <i class="fa-solid fa-triangle-exclamation text-danger fs-5"></i>
            <div>
              <h5 class="text-danger m-0 p-0">Extended Preparation Time</h5>
              <p class="text-danger fw-light m-0 p-0">This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
            </div>
          </div>
          
          <ul class="nav nav-tabs mt-5 justify-content-between px-5" id="myTab" role="tablist">
            <li class="nav-item navs-hover" role="presentation">
              <button class="nav-link active p-3 border-0 d-flex flex-column flex-md-row align-items-center gap-2" id="home-tab" data-bs-toggle="tab" 
                data-bs-target="#home-tab-pane" type="button" role="tab">
                <i class="fa-solid fa-list-check text-secondary"></i>
                <span class="fw-semibold text-secondary">Ingredients</span>
              </button>
            </li>
            <li class="nav-item navs-hover" role="presentation">
              <button class="nav-link border-0 p-3 d-flex flex-column flex-md-row align-items-center gap-2" id="profile-tab" data-bs-toggle="tab" 
                data-bs-target="#profile-tab-pane" type="button" role="tab">
                <i class="fa-solid fa-book-open text-secondary"></i>
                <span class="fw-semibold text-secondary">Instructions</span>
              </button>
            </li>
            <li class="nav-item navs-hover" role="presentation">
              <button class="nav-link p-3 border-0 d-flex flex-column flex-md-row align-items-center gap-2" id="contact-tab" data-bs-toggle="tab" 
                data-bs-target="#contact-tab-pane" type="button" role="tab">
                <i class="fa-solid fa-chart-pie text-secondary"></i>
                <span class="fw-semibold text-secondary">Nutrition</span>
              </button>
            </li>
            <li class="nav-item navs-hover" role="presentation">
              <button class="nav-link p-3 border-0 d-flex flex-column flex-md-row align-items-center gap-2" id="chief-tab" data-bs-toggle="tab" 
                data-bs-target="#chief-tab-pane" type="button" role="tab">
                <i class="fa-solid fa-lightbulb text-secondary"></i>
                <span class="fw-semibold text-secondary">Chef's Tips</span>
              </button>
            </li>
          </ul>
          
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel">
              <div class="p-4 d-flex flex-column gap-3 rounded-4 mt-4" 
                style="background-color: rgba(255, 93, 0, 0.1) !important">
                ${ingredientsHTML}
              </div>
            </div>
            
            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel">
              <div class="p-4 d-flex flex-column gap-3 rounded-4 mt-4" 
                style="background-color: rgba(255, 93, 0, 0.1) !important">
                ${instructionsHTML}
              </div>
            </div>
            
            <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel">
              <div class="row gx-3 gy-3 mt-4">
                <div class="nutri-item col-12 col-sm-6">
                  <div class="inner d-flex justify-content-between align-items-center bg-body-tertiary rounded-4 p-3">
                    <div class="d-flex align-items-center gap-2">
                      <div class="d-flex align-items-center justify-content-center bg-danger bg-opacity-10 rounded-4" 
                        style="width: 40px; height: 40px">
                        <i class="fas fa-fire text-danger fs-6"></i>
                      </div>
                      <span class="fw-semibold">Calories</span>
                    </div>
                    <span class="fs-5 fw-bold">${recipe.nutrition.calories} kcal</span>
                  </div>
                </div>
                
                <div class="nutri-item col-12 col-sm-6">
                  <div class="inner d-flex justify-content-between align-items-center bg-body-tertiary rounded-4 p-3">
                    <div class="d-flex align-items-center gap-2">
                      <div class="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-4" 
                        style="width: 40px; height: 40px">
                        <i class="fas fa-dumbbell text-primary fs-6"></i>
                      </div>
                      <span class="fw-semibold">Protein</span>
                    </div>
                    <span class="fs-5 fw-bold">${recipe.nutrition.protein}</span>
                  </div>
                </div>
                
                <div class="nutri-item col-12 col-sm-6">
                  <div class="inner d-flex justify-content-between align-items-center bg-body-tertiary rounded-4 p-3">
                    <div class="d-flex align-items-center gap-2">
                      <div class="d-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-4" 
                        style="width: 40px; height: 40px">
                        <i class="fas fa-seedling text-success fs-6"></i>
                      </div>
                      <span class="fw-semibold">Carbohydrates</span>
                    </div>
                    <span class="fs-5 fw-bold">${recipe.nutrition.carbs}</span>
                  </div>
                </div>
                
                <div class="nutri-item col-12 col-sm-6">
                  <div class="inner d-flex justify-content-between align-items-center bg-body-tertiary rounded-4 p-3">
                    <div class="d-flex align-items-center gap-2">
                      <div class="d-flex align-items-center justify-content-center bg-danger bg-opacity-10 rounded-4" 
                        style="width: 40px; height: 40px">
                        <i class="fas fa-droplet text-danger fs-6"></i>
                      </div>
                      <span class="fw-semibold">Fat</span>
                    </div>
                    <span class="fs-5 fw-bold">${recipe.nutrition.fat}</span>
                  </div>
                </div>
                
                <div class="nutri-item col-12 col-sm-6">
                  <div class="inner d-flex justify-content-between align-items-center bg-body-tertiary rounded-4 p-3">
                    <div class="d-flex align-items-center gap-2">
                      <div class="d-flex align-items-center justify-content-center bg-warning bg-opacity-25 rounded-4" 
                        style="width: 40px; height: 40px">
                        <i class="fas fa-leaf text-success fs-6"></i>
                      </div>
                      <span class="fw-semibold">Fiber</span>
                    </div>
                    <span class="fs-5 fw-bold">${recipe.nutrition.fiber}</span>
                  </div>
                </div>
                
                <div class="nutri-item col-12 col-sm-6">
                  <div class="inner d-flex justify-content-between align-items-center bg-body-tertiary rounded-4 p-3">
                    <div class="d-flex align-items-center gap-2">
                      <div class="d-flex align-items-center justify-content-center bg-info bg-opacity-25 rounded-4" 
                        style="width: 40px; height: 40px">
                        <i class="fas fa-cube text-info fs-6"></i>
                      </div>
                      <span class="fw-semibold">Sodium</span>
                    </div>
                    <span class="fs-5 fw-bold">${recipe.nutrition.sodium}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="tab-pane fade" id="chief-tab-pane" role="tabpanel">
              <div class="d-flex flex-column gap-3 mt-3">
                <div class="p-3 d-flex align-items-center gap-3 rounded-3 bg-body-tertiary box-shadow">
                  <i class="fa-solid fa-circle-check text-asm-color fs-5"></i>
                  <span class="text-secondary">Patience is key - don't rush the onion caramelization</span>
                </div>
                <div class="p-3 d-flex align-items-center gap-3 rounded-3 bg-body-tertiary box-shadow">
                  <i class="fa-solid fa-circle-check text-asm-color fs-5"></i>
                  <span class="text-secondary">Use good quality beef broth for best flavor</span>
                </div>
                <div class="p-3 d-flex align-items-center gap-3 rounded-3 bg-body-tertiary box-shadow">
                  <i class="fa-solid fa-circle-check text-asm-color fs-5"></i>
                  <span class="text-secondary">Gruyère can be substituted with Swiss cheese</span>
                </div>
                <div class="p-3 d-flex align-items-center gap-3 rounded-3 bg-body-tertiary box-shadow">
                  <i class="fa-solid fa-circle-check text-asm-color fs-5"></i>
                  <span class="text-secondary">Watch carefully when broiling to avoid burning</span>
                </div>
              </div>
            </div>
          </div>
          
          <button type="button" onclick="changeRecipeRandom()" 
            class="btn d-inline-flex align-items-center rounded-4 text-white fw-semibold px-3 py-3 mt-4 custom-btn">
            <i class="fas fa-rotate-right me-2"></i>
            Try Another Recipe
          </button>
        </div>
      </div>
    </div>
  `;
}

function changeRecipeRandom() {
  const randomIndex = Math.floor(Math.random() * recipes.length);
  changeRecipe(randomIndex);
}
changeRecipe(0);
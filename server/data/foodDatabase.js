/**
 * BiteSize Nutrition Database
 * Verified values per 100g based on Indian Food Composition Tables (IFCT, ICMR-NIN) and USDA FoodData Central.
 */

const foodDatabase = [
  // Grains & Staples
  {
    id: "rice_white_cooked",
    name: "Cooked White Rice (Basmati / Sona Masoori)",
    category: "Grains & Cereals",
    standardServingGrams: 150,
    servingUnit: "1 medium bowl (150g)",
    per100g: { calories: 130, protein: 2.7, carbs: 28.2, fat: 0.3, fiber: 0.4, sugar: 0.1, sodium: 1 },
    micronutrients: { iron_mg: 0.2, calcium_mg: 10, potassium_mg: 35 },
    tags: ["staple", "vegetarian", "vegan", "gluten-free"],
    approxCostPerKg: 65,
    commonCookingVariations: ["Plain Boiled", "Steamed", "Fried Rice"]
  },
  {
    id: "rice_brown_cooked",
    name: "Cooked Brown Rice",
    category: "Grains & Cereals",
    standardServingGrams: 150,
    servingUnit: "1 medium bowl (150g)",
    per100g: { calories: 111, protein: 2.6, carbs: 23.0, fat: 0.9, fiber: 1.8, sugar: 0.4, sodium: 2 },
    micronutrients: { iron_mg: 0.5, calcium_mg: 11, potassium_mg: 84 },
    tags: ["staple", "vegetarian", "vegan", "gluten-free", "high-fiber"],
    approxCostPerKg: 110,
    commonCookingVariations: ["Boiled", "Pressure Cooked"]
  },
  {
    id: "quinoa_cooked",
    name: "Cooked Quinoa",
    category: "Grains & Cereals",
    standardServingGrams: 150,
    servingUnit: "1 medium bowl (150g)",
    per100g: { calories: 120, protein: 4.4, carbs: 21.3, fat: 1.9, fiber: 2.8, sugar: 0.9, sodium: 7 },
    micronutrients: { iron_mg: 1.5, calcium_mg: 17, potassium_mg: 172 },
    tags: ["high-protein", "vegetarian", "vegan", "gluten-free", "high-fiber"],
    approxCostPerKg: 320,
    commonCookingVariations: ["Boiled", "Salad base"]
  },
  {
    id: "roti_chapati",
    name: "Whole Wheat Roti / Chapati (Tawa, no oil)",
    category: "Grains & Cereals",
    standardServingGrams: 40,
    servingUnit: "1 medium roti (40g)",
    per100g: { calories: 264, protein: 9.2, carbs: 54.0, fat: 1.7, fiber: 8.5, sugar: 1.2, sodium: 150 },
    micronutrients: { iron_mg: 3.5, calcium_mg: 30, potassium_mg: 280 },
    tags: ["staple", "vegetarian", "vegan", "whole-grain"],
    approxCostPerKg: 45,
    commonCookingVariations: ["Dry roasted", "With 1/2 tsp Ghee (+25 kcal)"]
  },
  {
    id: "paratha_plain",
    name: "Plain Tawa Paratha (with oil/ghee)",
    category: "Grains & Cereals",
    standardServingGrams: 60,
    servingUnit: "1 medium paratha (60g)",
    per100g: { calories: 335, protein: 7.5, carbs: 48.0, fat: 13.0, fiber: 6.0, sugar: 1.5, sodium: 220 },
    micronutrients: { iron_mg: 2.8, calcium_mg: 25, potassium_mg: 240 },
    tags: ["vegetarian"],
    approxCostPerKg: 60,
    commonCookingVariations: ["Shallow fried with ghee", "Stuffed Aloo (+40 kcal)"]
  },
  {
    id: "oats_rolled",
    name: "Rolled Oats (Raw / Porridge)",
    category: "Grains & Cereals",
    standardServingGrams: 50,
    servingUnit: "1 cup cooked (approx 50g raw)",
    per100g: { calories: 389, protein: 16.9, carbs: 66.3, fat: 6.9, fiber: 10.6, sugar: 1.0, sodium: 2 },
    micronutrients: { iron_mg: 4.7, calcium_mg: 54, potassium_mg: 429 },
    tags: ["high-fiber", "high-protein", "vegetarian", "vegan"],
    approxCostPerKg: 190,
    commonCookingVariations: ["Cooked in water", "Cooked in milk", "Overnight oats"]
  },
  {
    id: "idli",
    name: "Steamed Idli (Fermented rice & urad dal)",
    category: "South Indian Breakfast",
    standardServingGrams: 50,
    servingUnit: "1 medium idli (50g)",
    per100g: { calories: 132, protein: 4.8, carbs: 26.5, fat: 0.8, fiber: 1.6, sugar: 0.3, sodium: 85 },
    micronutrients: { iron_mg: 0.9, calcium_mg: 18, potassium_mg: 70 },
    tags: ["steamed", "low-fat", "fermented", "gut-friendly", "vegetarian"],
    approxCostPerKg: 70,
    commonCookingVariations: ["Steamed"]
  },
  {
    id: "dosa_plain",
    name: "Plain Crisp Dosa (Crisp crepe)",
    category: "South Indian Breakfast",
    standardServingGrams: 80,
    servingUnit: "1 medium dosa (80g)",
    per100g: { calories: 168, protein: 4.2, carbs: 29.0, fat: 4.0, fiber: 1.4, sugar: 0.4, sodium: 110 },
    micronutrients: { iron_mg: 1.1, calcium_mg: 20, potassium_mg: 78 },
    tags: ["vegetarian", "fermented"],
    approxCostPerKg: 80,
    commonCookingVariations: ["Ghee Roast (+60 kcal)", "Masala Dosa with potato (+90 kcal)"]
  },

  // Pulses, Dals & Legumes
  {
    id: "dal_tadka_cooked",
    name: "Dal Tadka (Yellow Toor/Moong Dal tempered)",
    category: "Pulses & Legumes",
    standardServingGrams: 150,
    servingUnit: "1 katori / bowl (150g)",
    per100g: { calories: 118, protein: 6.8, carbs: 14.5, fat: 3.8, fiber: 4.2, sugar: 0.8, sodium: 210 },
    micronutrients: { iron_mg: 2.1, calcium_mg: 32, potassium_mg: 230 },
    tags: ["high-protein", "vegetarian", "vegan", "comfort-food"],
    approxCostPerKg: 140,
    commonCookingVariations: ["Ghee tadka", "Jeera garlic tadka", "Low oil"]
  },
  {
    id: "chana_masala",
    name: "Chana Masala / Chole Curry",
    category: "Pulses & Legumes",
    standardServingGrams: 180,
    servingUnit: "1 medium bowl (180g)",
    per100g: { calories: 142, protein: 7.2, carbs: 19.8, fat: 4.2, fiber: 5.6, sugar: 1.8, sodium: 280 },
    micronutrients: { iron_mg: 2.8, calcium_mg: 45, potassium_mg: 290 },
    tags: ["high-fiber", "high-protein", "vegan", "vegetarian"],
    approxCostPerKg: 120,
    commonCookingVariations: ["Punjabi style gravy", "Dry chana salad"]
  },
  {
    id: "rajma_curry",
    name: "Rajma Masala (Red Kidney Bean Curry)",
    category: "Pulses & Legumes",
    standardServingGrams: 180,
    servingUnit: "1 medium bowl (180g)",
    per100g: { calories: 135, protein: 7.0, carbs: 18.5, fat: 4.0, fiber: 5.2, sugar: 1.5, sodium: 260 },
    micronutrients: { iron_mg: 2.5, calcium_mg: 38, potassium_mg: 310 },
    tags: ["high-fiber", "high-protein", "vegan", "vegetarian"],
    approxCostPerKg: 160,
    commonCookingVariations: ["Onion-tomato gravy", "Mild spiced"]
  },
  {
    id: "moong_dal_sprouts",
    name: "Moong Sprouts (Raw / lightly steamed)",
    category: "Pulses & Legumes",
    standardServingGrams: 100,
    servingUnit: "1 cup (100g)",
    per100g: { calories: 105, protein: 7.8, carbs: 19.0, fat: 0.5, fiber: 7.6, sugar: 2.0, sodium: 15 },
    micronutrients: { iron_mg: 1.8, calcium_mg: 28, potassium_mg: 350 },
    tags: ["superfood", "high-fiber", "high-protein", "raw", "vegan"],
    approxCostPerKg: 130,
    commonCookingVariations: ["Raw Chaat with lemon", "Lightly steamed with mustard tempering"]
  },

  // Dairy & Alternatives
  {
    id: "paneer_raw",
    name: "Fresh Malai Paneer (Cottage Cheese)",
    category: "Dairy & Eggs",
    standardServingGrams: 100,
    servingUnit: "100g cubes",
    per100g: { calories: 295, protein: 18.3, carbs: 3.4, fat: 22.8, fiber: 0, sugar: 2.5, sodium: 25 },
    micronutrients: { iron_mg: 0.2, calcium_mg: 480, potassium_mg: 110 },
    tags: ["high-protein", "high-calcium", "vegetarian", "keto-friendly"],
    approxCostPerKg: 380,
    commonCookingVariations: ["Raw salad", "Tikka Grilled", "Curry cooked"]
  },
  {
    id: "tofu_firm",
    name: "Firm Soya Tofu",
    category: "Plant Proteins",
    standardServingGrams: 100,
    servingUnit: "100g block",
    per100g: { calories: 83, protein: 10.0, carbs: 1.9, fat: 5.3, fiber: 1.2, sugar: 0.5, sodium: 8 },
    micronutrients: { iron_mg: 2.7, calcium_mg: 280, potassium_mg: 120 },
    tags: ["low-calorie", "high-protein", "vegan", "lactose-free", "heart-healthy"],
    approxCostPerKg: 220,
    commonCookingVariations: ["Pan seared", "Tofu stir fry", "Curry"]
  },
  {
    id: "curd_plain_dahi",
    name: "Plain Curd / Dahi (Whole milk)",
    category: "Dairy & Eggs",
    standardServingGrams: 150,
    servingUnit: "1 medium bowl (150g)",
    per100g: { calories: 61, protein: 3.5, carbs: 4.7, fat: 3.3, fiber: 0, sugar: 4.7, sodium: 46 },
    micronutrients: { iron_mg: 0.1, calcium_mg: 121, potassium_mg: 155 },
    tags: ["probiotic", "vegetarian", "calcium-rich"],
    approxCostPerKg: 70,
    commonCookingVariations: ["Plain chilled", "Raita with cucumber", "Chaas / Buttermilk"]
  },
  {
    id: "greek_yogurt_hung",
    name: "Hung Curd / Greek Style Yogurt (High Protein)",
    category: "Dairy & Eggs",
    standardServingGrams: 120,
    servingUnit: "1 small cup (120g)",
    per100g: { calories: 97, protein: 9.5, carbs: 3.6, fat: 5.0, fiber: 0, sugar: 3.5, sodium: 35 },
    micronutrients: { iron_mg: 0.1, calcium_mg: 140, potassium_mg: 180 },
    tags: ["high-protein", "probiotic", "vegetarian"],
    approxCostPerKg: 180,
    commonCookingVariations: ["Fruit yogurt bowl", "Dip/Spread"]
  },
  {
    id: "milk_cow_toned",
    name: "Toned Cow Milk (3% fat)",
    category: "Dairy & Eggs",
    standardServingGrams: 200,
    servingUnit: "1 glass (200ml)",
    per100g: { calories: 58, protein: 3.2, carbs: 4.8, fat: 3.0, fiber: 0, sugar: 4.8, sodium: 50 },
    micronutrients: { iron_mg: 0.1, calcium_mg: 120, potassium_mg: 150 },
    tags: ["vegetarian", "calcium-rich"],
    approxCostPerKg: 58,
    commonCookingVariations: ["Warm", "In tea/coffee"]
  },
  {
    id: "almond_milk_unsweetened",
    name: "Unsweetened Almond Milk",
    category: "Dairy Alternatives",
    standardServingGrams: 200,
    servingUnit: "1 glass (200ml)",
    per100g: { calories: 15, protein: 0.6, carbs: 0.3, fat: 1.2, fiber: 0.3, sugar: 0, sodium: 70 },
    micronutrients: { iron_mg: 0.3, calcium_mg: 150, potassium_mg: 60 },
    tags: ["low-calorie", "vegan", "lactose-free", "keto-friendly"],
    approxCostPerKg: 240,
    commonCookingVariations: ["Chilled", "Smoothie base"]
  },

  // Poultry, Eggs, Meat & Fish (Verified USDA FoodData Central & ICMR-NIN IFCT)
  {
    id: "chicken_breast_grilled",
    name: "Skinless Chicken Breast (Grilled / Pan-Seared)",
    category: "Poultry & Meat",
    standardServingGrams: 150,
    servingUnit: "1 medium breast fillet (150g)",
    per100g: { calories: 165, protein: 31.0, carbs: 0, fat: 3.6, fiber: 0, sugar: 0, sodium: 74 },
    micronutrients: { iron_mg: 1.0, calcium_mg: 15, potassium_mg: 256 },
    tags: ["lean-protein", "high-protein", "low-carb", "non-veg", "poultry", "keto-friendly"],
    approxCostPerKg: 320,
    commonCookingVariations: ["Pan grilled with herbs", "Boiled/Shredded", "Tandoori style"]
  },
  {
    id: "chicken_breast_raw",
    name: "Raw Skinless Chicken Breast (Boneless Fillet)",
    category: "Poultry & Meat",
    standardServingGrams: 150,
    servingUnit: "1 raw fillet (150g)",
    per100g: { calories: 120, protein: 22.5, carbs: 0, fat: 2.6, fiber: 0, sugar: 0, sodium: 65 },
    micronutrients: { iron_mg: 0.9, calcium_mg: 11, potassium_mg: 330 },
    tags: ["raw", "lean-protein", "high-protein", "low-carb", "non-veg", "poultry"],
    approxCostPerKg: 280,
    commonCookingVariations: ["Raw for cooking"]
  },
  {
    id: "chicken_breast_boiled",
    name: "Skinless Chicken Breast (Boiled / Poached)",
    category: "Poultry & Meat",
    standardServingGrams: 150,
    servingUnit: "1 medium breast (150g)",
    per100g: { calories: 158, protein: 32.1, carbs: 0, fat: 3.2, fiber: 0, sugar: 0, sodium: 68 },
    micronutrients: { iron_mg: 1.1, calcium_mg: 14, potassium_mg: 250 },
    tags: ["lean-protein", "high-protein", "zero-oil", "non-veg", "poultry"],
    approxCostPerKg: 320,
    commonCookingVariations: ["Shredded in salad", "In clear broth"]
  },
  {
    id: "chicken_breast_baked",
    name: "Oven Baked Chicken Breast (Skinless)",
    category: "Poultry & Meat",
    standardServingGrams: 150,
    servingUnit: "1 breast (150g)",
    per100g: { calories: 165, protein: 31.0, carbs: 0, fat: 3.6, fiber: 0, sugar: 0, sodium: 70 },
    micronutrients: { iron_mg: 1.0, calcium_mg: 15, potassium_mg: 255 },
    tags: ["lean-protein", "high-protein", "baked", "non-veg", "poultry"],
    approxCostPerKg: 320,
    commonCookingVariations: ["Oven roasted with rosemary and olive oil"]
  },
  {
    id: "chicken_breast_fried",
    name: "Pan-Fried / Crispy Chicken Breast",
    category: "Poultry & Meat",
    standardServingGrams: 150,
    servingUnit: "1 crispy cutlet (150g)",
    per100g: { calories: 242, protein: 26.8, carbs: 8.5, fat: 11.2, fiber: 0.6, sugar: 0.2, sodium: 340 },
    micronutrients: { iron_mg: 1.2, calcium_mg: 18, potassium_mg: 260 },
    tags: ["high-protein", "fried", "non-veg", "poultry"],
    approxCostPerKg: 340,
    commonCookingVariations: ["Breaded and pan-fried", "Deep fried"]
  },
  {
    id: "chicken_breast_skin_on",
    name: "Roast Chicken Breast (with Skin)",
    category: "Poultry & Meat",
    standardServingGrams: 160,
    servingUnit: "1 piece with skin (160g)",
    per100g: { calories: 197, protein: 29.8, carbs: 0, fat: 7.8, fiber: 0, sugar: 0, sodium: 71 },
    micronutrients: { iron_mg: 1.1, calcium_mg: 16, potassium_mg: 248 },
    tags: ["high-protein", "keto-friendly", "non-veg", "poultry"],
    approxCostPerKg: 300,
    commonCookingVariations: ["Crispy roasted with skin"]
  },
  {
    id: "chicken_tikka_tandoori",
    name: "Tandoori Chicken Tikka (Boneless Breast Cubes)",
    category: "Poultry & Meat",
    standardServingGrams: 160,
    servingUnit: "6 tikka pieces (160g)",
    per100g: { calories: 160, protein: 26.5, carbs: 3.5, fat: 4.5, fiber: 0.5, sugar: 1.0, sodium: 280 },
    micronutrients: { iron_mg: 1.3, calcium_mg: 35, potassium_mg: 270 },
    tags: ["high-protein", "tandoori", "non-veg", "lean-protein"],
    approxCostPerKg: 360,
    commonCookingVariations: ["Clay oven roasted with yogurt marinade"]
  },
  {
    id: "egg_boiled_whole",
    name: "Whole Boiled Egg (Large)",
    category: "Dairy & Eggs",
    standardServingGrams: 50,
    servingUnit: "1 large egg (50g)",
    per100g: { calories: 155, protein: 12.6, carbs: 1.1, fat: 10.6, fiber: 0, sugar: 0.4, sodium: 124 },
    micronutrients: { iron_mg: 1.8, calcium_mg: 50, potassium_mg: 126 },
    tags: ["high-protein", "keto-friendly", "non-veg", "egg"],
    approxCostPerKg: 140, // ~7-8 per egg
    commonCookingVariations: ["Hard boiled", "Soft boiled", "Egg Bhurji"]
  },
  {
    id: "egg_white_boiled",
    name: "Boiled Egg White (Large)",
    category: "Dairy & Eggs",
    standardServingGrams: 33,
    servingUnit: "1 egg white (33g)",
    per100g: { calories: 52, protein: 10.9, carbs: 0.7, fat: 0.2, fiber: 0, sugar: 0.7, sodium: 166 },
    micronutrients: { iron_mg: 0.1, calcium_mg: 7, potassium_mg: 163 },
    tags: ["lean-protein", "fat-free", "low-calorie", "non-veg", "egg"],
    approxCostPerKg: 140,
    commonCookingVariations: ["Hard boiled"]
  },
  {
    id: "egg_scramble_bhurji",
    name: "Egg Bhurji / Scrambled Eggs (with onion & tomato)",
    category: "Dairy & Eggs",
    standardServingGrams: 100,
    servingUnit: "1 serving (2 eggs, 100g)",
    per100g: { calories: 168, protein: 11.5, carbs: 3.2, fat: 12.0, fiber: 0.5, sugar: 1.2, sodium: 220 },
    micronutrients: { iron_mg: 1.7, calcium_mg: 48, potassium_mg: 160 },
    tags: ["high-protein", "keto-friendly", "non-veg", "egg"],
    approxCostPerKg: 160,
    commonCookingVariations: ["Sautéed with green chilies and onions"]
  },
  {
    id: "chicken_curry_homestyle",
    name: "Homestyle Chicken Curry (with gravy)",
    category: "Poultry & Meat",
    standardServingGrams: 200,
    servingUnit: "1 medium bowl (200g)",
    per100g: { calories: 175, protein: 18.5, carbs: 3.5, fat: 9.8, fiber: 0.8, sugar: 1.2, sodium: 290 },
    micronutrients: { iron_mg: 1.4, calcium_mg: 22, potassium_mg: 270 },
    tags: ["high-protein", "non-veg"],
    approxCostPerKg: 280,
    commonCookingVariations: ["Homestyle onion tomato curry", "Spicy Chettinad"]
  },
  {
    id: "fish_grilled_salmon",
    name: "Grilled Salmon / Rawas Fillet",
    category: "Fish & Seafood",
    standardServingGrams: 150,
    servingUnit: "1 fillet (150g)",
    per100g: { calories: 206, protein: 22.0, carbs: 0, fat: 12.3, fiber: 0, sugar: 0, sodium: 60 },
    micronutrients: { iron_mg: 0.8, calcium_mg: 12, potassium_mg: 380 },
    tags: ["omega-3", "high-protein", "heart-healthy", "non-veg", "keto-friendly"],
    approxCostPerKg: 900,
    commonCookingVariations: ["Pan grilled with lemon pepper", "Baked"]
  },
  {
    id: "fish_rohu_curry",
    name: "Rohu / Katla Fish Curry (Bengali / Coastal style)",
    category: "Fish & Seafood",
    standardServingGrams: 150,
    servingUnit: "1 piece with gravy (150g)",
    per100g: { calories: 140, protein: 16.2, carbs: 2.1, fat: 7.5, fiber: 0.5, sugar: 0.5, sodium: 240 },
    micronutrients: { iron_mg: 1.2, calcium_mg: 65, potassium_mg: 240 },
    tags: ["omega-3", "high-protein", "non-veg"],
    approxCostPerKg: 260,
    commonCookingVariations: ["Mustard gravy", "Tomato onion light broth"]
  },
  {
    id: "mutton_curry_rogan_josh",
    name: "Mutton / Goat Curry (Slow Cooked)",
    category: "Poultry & Meat",
    standardServingGrams: 180,
    servingUnit: "1 medium bowl (180g)",
    per100g: { calories: 220, protein: 17.0, carbs: 2.8, fat: 15.5, fiber: 0.6, sugar: 1.0, sodium: 310 },
    micronutrients: { iron_mg: 2.4, calcium_mg: 20, potassium_mg: 260 },
    tags: ["high-iron", "high-protein", "non-veg"],
    approxCostPerKg: 750,
    commonCookingVariations: ["Pressure cooked homestyle gravy"]
  },

  // Vegetables & Sabzis
  {
    id: "palak_paneer",
    name: "Palak Paneer (Spinach Cottage Cheese)",
    category: "Vegetables & Sabzi",
    standardServingGrams: 180,
    servingUnit: "1 medium bowl (180g)",
    per100g: { calories: 152, protein: 7.8, carbs: 4.6, fat: 11.5, fiber: 2.5, sugar: 1.8, sodium: 240 },
    micronutrients: { iron_mg: 2.4, calcium_mg: 180, potassium_mg: 210 },
    tags: ["iron-rich", "calcium-rich", "vegetarian"],
    approxCostPerKg: 220,
    commonCookingVariations: ["Light cream", "No cream homestyle"]
  },
  {
    id: "bhindi_masala",
    name: "Bhindi Masala (Okra sautéed with spices)",
    category: "Vegetables & Sabzi",
    standardServingGrams: 120,
    servingUnit: "1 medium katori (120g)",
    per100g: { calories: 92, protein: 2.1, carbs: 8.5, fat: 5.6, fiber: 3.4, sugar: 2.1, sodium: 180 },
    micronutrients: { iron_mg: 1.1, calcium_mg: 75, potassium_mg: 190 },
    tags: ["high-fiber", "low-calorie", "vegan", "vegetarian"],
    approxCostPerKg: 90,
    commonCookingVariations: ["Kurkuri crispy", "Onion spiced fry"]
  },
  {
    id: "aloo_gobhi",
    name: "Aloo Gobhi (Potato Cauliflower Sabzi)",
    category: "Vegetables & Sabzi",
    standardServingGrams: 150,
    servingUnit: "1 medium bowl (150g)",
    per100g: { calories: 115, protein: 2.5, carbs: 16.0, fat: 4.8, fiber: 2.9, sugar: 2.2, sodium: 210 },
    micronutrients: { iron_mg: 1.0, calcium_mg: 28, potassium_mg: 280 },
    tags: ["vegetarian", "vegan"],
    approxCostPerKg: 65,
    commonCookingVariations: ["Dry roasted", "Light gravy"]
  },
  {
    id: "guava_raw",
    name: "Guava (Raw)",
    category: "Fresh Produce",
    standardServingGrams: 100,
    servingUnit: "1 small guava (100g)",
    // USDA SR Legacy 09139, Guavas, common, raw; values per 100g edible portion.
    per100g: { calories: 68, protein: 2.55, carbs: 14.32, fat: 0.95, fiber: 5.4, sugar: 8.92, sodium: 2 },
    micronutrients: { iron_mg: 0.26, calcium_mg: 18, potassium_mg: 417 },
    tags: ["fruit", "raw", "guava", "amrood", "peru", "vegetarian", "vegan", "high-fiber"],
    approxCostPerKg: 120,
    commonCookingVariations: ["Raw", "Sliced", "Fruit salad"]
  },
  {
    id: "mixed_vegetable_salad",
    name: "Indian Green Salad (Cucumber, Tomato, Carrot, Onion)",
    category: "Fresh Produce",
    standardServingGrams: 120,
    servingUnit: "1 plate (120g)",
    per100g: { calories: 25, protein: 1.0, carbs: 4.8, fat: 0.2, fiber: 1.8, sugar: 2.8, sodium: 12 },
    micronutrients: { iron_mg: 0.6, calcium_mg: 22, potassium_mg: 210 },
    tags: ["raw", "superfood", "hydration", "low-calorie", "vegan"],
    approxCostPerKg: 50,
    commonCookingVariations: ["With lemon and chaat masala", "Olive oil dressing"]
  },

  // Common single-ingredient foods. Nutrients are generic per-100g estimates;
  // actual values change with variety, brand, cooking method, and added salt/oil.
  {
    id: "apple_raw", name: "Apple (Raw, with Skin)", category: "Fresh Produce",
    standardServingGrams: 182, servingUnit: "1 medium apple (182g)",
    per100g: { calories: 52, protein: 0.3, carbs: 13.8, fat: 0.2, fiber: 2.4, sugar: 10.4, sodium: 1 },
    micronutrients: { iron_mg: 0.1, calcium_mg: 6, potassium_mg: 107 },
    tags: ["fruit", "apple", "raw", "vegan", "vegetarian"], approxCostPerKg: 220,
    commonCookingVariations: ["Raw", "Baked", "Stewed"]
  },
  {
    id: "banana_raw", name: "Banana (Raw)", category: "Fresh Produce",
    standardServingGrams: 118, servingUnit: "1 medium banana (118g)",
    per100g: { calories: 89, protein: 1.1, carbs: 22.8, fat: 0.3, fiber: 2.6, sugar: 12.2, sodium: 1 },
    micronutrients: { iron_mg: 0.3, calcium_mg: 5, potassium_mg: 358 },
    tags: ["fruit", "banana", "raw", "robusta", "elaichi banana", "vegan", "vegetarian"], approxCostPerKg: 60,
    commonCookingVariations: ["Raw", "Mashed", "Smoothie"]
  },
  {
    id: "orange_raw", name: "Orange (Raw)", category: "Fresh Produce",
    standardServingGrams: 131, servingUnit: "1 medium orange (131g)",
    per100g: { calories: 47, protein: 0.9, carbs: 11.8, fat: 0.1, fiber: 2.4, sugar: 9.4, sodium: 0 },
    micronutrients: { iron_mg: 0.1, calcium_mg: 40, potassium_mg: 181 },
    tags: ["fruit", "orange", "citrus", "raw", "vegan", "vegetarian"], approxCostPerKg: 100,
    commonCookingVariations: ["Raw", "Juiced"]
  },
  {
    id: "mango_raw", name: "Mango (Raw, Ripe)", category: "Fresh Produce",
    standardServingGrams: 165, servingUnit: "1 cup sliced (165g)",
    per100g: { calories: 60, protein: 0.8, carbs: 15.0, fat: 0.4, fiber: 1.6, sugar: 13.7, sodium: 1 },
    micronutrients: { iron_mg: 0.2, calcium_mg: 11, potassium_mg: 168 },
    tags: ["fruit", "mango", "aam", "raw", "vegan", "vegetarian"], approxCostPerKg: 100,
    commonCookingVariations: ["Sliced", "Smoothie", "Ripe"]
  },
  {
    id: "papaya_raw", name: "Papaya (Raw, Ripe)", category: "Fresh Produce",
    standardServingGrams: 145, servingUnit: "1 cup cubes (145g)",
    per100g: { calories: 43, protein: 0.5, carbs: 10.8, fat: 0.3, fiber: 1.7, sugar: 7.8, sodium: 8 },
    micronutrients: { iron_mg: 0.3, calcium_mg: 20, potassium_mg: 182 },
    tags: ["fruit", "papaya", "papita", "raw", "vegan", "vegetarian"], approxCostPerKg: 50,
    commonCookingVariations: ["Raw", "Fruit salad"]
  },
  {
    id: "grapes_raw", name: "Grapes (Raw)", category: "Fresh Produce",
    standardServingGrams: 92, servingUnit: "1 cup (92g)",
    per100g: { calories: 69, protein: 0.7, carbs: 18.1, fat: 0.2, fiber: 0.9, sugar: 15.5, sodium: 2 },
    micronutrients: { iron_mg: 0.4, calcium_mg: 10, potassium_mg: 191 },
    tags: ["fruit", "grapes", "angoor", "raw", "vegan", "vegetarian"], approxCostPerKg: 160,
    commonCookingVariations: ["Raw", "Frozen"]
  },
  {
    id: "pineapple_raw", name: "Pineapple (Raw)", category: "Fresh Produce",
    standardServingGrams: 165, servingUnit: "1 cup chunks (165g)",
    per100g: { calories: 50, protein: 0.5, carbs: 13.1, fat: 0.1, fiber: 1.4, sugar: 9.9, sodium: 1 },
    micronutrients: { iron_mg: 0.3, calcium_mg: 13, potassium_mg: 109 },
    tags: ["fruit", "pineapple", "ananas", "raw", "vegan", "vegetarian"], approxCostPerKg: 90,
    commonCookingVariations: ["Raw", "Grilled"]
  },
  {
    id: "watermelon_raw", name: "Watermelon (Raw)", category: "Fresh Produce",
    standardServingGrams: 152, servingUnit: "1 cup diced (152g)",
    per100g: { calories: 30, protein: 0.6, carbs: 7.6, fat: 0.2, fiber: 0.4, sugar: 6.2, sodium: 1 },
    micronutrients: { iron_mg: 0.2, calcium_mg: 7, potassium_mg: 112 },
    tags: ["fruit", "watermelon", "tarbooz", "raw", "hydration", "vegan", "vegetarian"], approxCostPerKg: 35,
    commonCookingVariations: ["Raw", "Chilled"]
  },
  {
    id: "strawberries_raw", name: "Strawberries (Raw)", category: "Fresh Produce",
    standardServingGrams: 152, servingUnit: "1 cup halves (152g)",
    per100g: { calories: 32, protein: 0.7, carbs: 7.7, fat: 0.3, fiber: 2.0, sugar: 4.9, sodium: 1 },
    micronutrients: { iron_mg: 0.4, calcium_mg: 16, potassium_mg: 153 },
    tags: ["fruit", "strawberry", "berries", "raw", "vegan", "vegetarian"], approxCostPerKg: 450,
    commonCookingVariations: ["Raw", "Frozen", "Smoothie"]
  },
  {
    id: "avocado_raw", name: "Avocado (Raw)", category: "Fresh Produce",
    standardServingGrams: 150, servingUnit: "1 cup sliced (150g)",
    per100g: { calories: 160, protein: 2.0, carbs: 8.5, fat: 14.7, fiber: 6.7, sugar: 0.7, sodium: 7 },
    micronutrients: { iron_mg: 0.6, calcium_mg: 12, potassium_mg: 485 },
    tags: ["fruit", "avocado", "butter fruit", "raw", "vegan", "vegetarian"], approxCostPerKg: 700,
    commonCookingVariations: ["Sliced", "Mashed", "Guacamole"]
  },
  {
    id: "spinach_raw", name: "Spinach (Raw)", category: "Fresh Produce",
    standardServingGrams: 30, servingUnit: "1 cup (30g)",
    per100g: { calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, fiber: 2.2, sugar: 0.4, sodium: 79 },
    micronutrients: { iron_mg: 2.7, calcium_mg: 99, potassium_mg: 558 },
    tags: ["vegetable", "spinach", "palak", "raw", "vegan", "vegetarian", "high-fiber"], approxCostPerKg: 100,
    commonCookingVariations: ["Raw", "Steamed", "Sautéed"]
  },
  {
    id: "broccoli_raw", name: "Broccoli (Raw)", category: "Fresh Produce",
    standardServingGrams: 91, servingUnit: "1 cup chopped (91g)",
    per100g: { calories: 34, protein: 2.8, carbs: 6.6, fat: 0.4, fiber: 2.6, sugar: 1.7, sodium: 33 },
    micronutrients: { iron_mg: 0.7, calcium_mg: 47, potassium_mg: 316 },
    tags: ["vegetable", "broccoli", "raw", "vegan", "vegetarian", "high-fiber"], approxCostPerKg: 220,
    commonCookingVariations: ["Raw", "Steamed", "Roasted"]
  },
  {
    id: "tomato_raw", name: "Tomato (Raw)", category: "Fresh Produce",
    standardServingGrams: 123, servingUnit: "1 medium tomato (123g)",
    per100g: { calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2, fiber: 1.2, sugar: 2.6, sodium: 5 },
    micronutrients: { iron_mg: 0.3, calcium_mg: 10, potassium_mg: 237 },
    tags: ["vegetable", "tomato", "tamatar", "raw", "vegan", "vegetarian"], approxCostPerKg: 40,
    commonCookingVariations: ["Raw", "Cooked", "Pureed"]
  },
  {
    id: "cucumber_raw", name: "Cucumber (Raw, with Peel)", category: "Fresh Produce",
    standardServingGrams: 104, servingUnit: "1 cup sliced (104g)",
    per100g: { calories: 15, protein: 0.7, carbs: 3.6, fat: 0.1, fiber: 0.5, sugar: 1.7, sodium: 2 },
    micronutrients: { iron_mg: 0.3, calcium_mg: 16, potassium_mg: 147 },
    tags: ["vegetable", "cucumber", "kheera", "raw", "vegan", "vegetarian", "hydration"], approxCostPerKg: 35,
    commonCookingVariations: ["Raw", "Salad", "Raita"]
  },
  {
    id: "carrot_raw", name: "Carrot (Raw)", category: "Fresh Produce",
    standardServingGrams: 61, servingUnit: "1 medium carrot (61g)",
    per100g: { calories: 41, protein: 0.9, carbs: 9.6, fat: 0.2, fiber: 2.8, sugar: 4.7, sodium: 69 },
    micronutrients: { iron_mg: 0.3, calcium_mg: 33, potassium_mg: 320 },
    tags: ["vegetable", "carrot", "gajar", "raw", "vegan", "vegetarian"], approxCostPerKg: 55,
    commonCookingVariations: ["Raw", "Steamed", "Roasted"]
  },
  {
    id: "potato_boiled", name: "Potato (Boiled, without Skin)", category: "Fresh Produce",
    standardServingGrams: 156, servingUnit: "1 medium potato (156g)",
    per100g: { calories: 87, protein: 1.9, carbs: 20.1, fat: 0.1, fiber: 1.8, sugar: 0.9, sodium: 4 },
    micronutrients: { iron_mg: 0.3, calcium_mg: 5, potassium_mg: 379 },
    tags: ["vegetable", "potato", "aloo", "boiled", "vegan", "vegetarian"], approxCostPerKg: 35,
    commonCookingVariations: ["Boiled", "Mashed", "Roasted"]
  },
  {
    id: "sweet_potato_baked", name: "Sweet Potato (Baked)", category: "Fresh Produce",
    standardServingGrams: 130, servingUnit: "1 medium sweet potato (130g)",
    per100g: { calories: 90, protein: 2.0, carbs: 20.7, fat: 0.2, fiber: 3.3, sugar: 6.5, sodium: 36 },
    micronutrients: { iron_mg: 0.7, calcium_mg: 38, potassium_mg: 475 },
    tags: ["vegetable", "sweet potato", "shakarkandi", "baked", "vegan", "vegetarian", "high-fiber"], approxCostPerKg: 65,
    commonCookingVariations: ["Baked", "Boiled", "Roasted"]
  },
  {
    id: "cauliflower_raw", name: "Cauliflower (Raw)", category: "Fresh Produce",
    standardServingGrams: 100, servingUnit: "1 cup chopped (100g)",
    per100g: { calories: 25, protein: 1.9, carbs: 5.0, fat: 0.3, fiber: 2.0, sugar: 1.9, sodium: 30 },
    micronutrients: { iron_mg: 0.4, calcium_mg: 22, potassium_mg: 299 },
    tags: ["vegetable", "cauliflower", "gobhi", "raw", "vegan", "vegetarian"], approxCostPerKg: 45,
    commonCookingVariations: ["Raw", "Steamed", "Roasted"]
  },
  {
    id: "green_peas_cooked", name: "Green Peas (Boiled)", category: "Fresh Produce",
    standardServingGrams: 160, servingUnit: "1 cup (160g)",
    per100g: { calories: 84, protein: 5.4, carbs: 15.6, fat: 0.2, fiber: 5.5, sugar: 5.9, sodium: 3 },
    micronutrients: { iron_mg: 1.5, calcium_mg: 27, potassium_mg: 271 },
    tags: ["vegetable", "peas", "matar", "boiled", "vegan", "vegetarian", "high-fiber"], approxCostPerKg: 100,
    commonCookingVariations: ["Boiled", "Steamed", "Masala"]
  },
  {
    id: "chickpeas_cooked", name: "Chickpeas (Boiled, Plain)", category: "Pulses & Legumes",
    standardServingGrams: 164, servingUnit: "1 cup (164g)",
    per100g: { calories: 164, protein: 8.9, carbs: 27.4, fat: 2.6, fiber: 7.6, sugar: 4.8, sodium: 7 },
    micronutrients: { iron_mg: 2.9, calcium_mg: 49, potassium_mg: 291 },
    tags: ["pulse", "legume", "chickpeas", "chana", "garbanzo", "boiled", "vegan", "vegetarian", "high-fiber"], approxCostPerKg: 120,
    commonCookingVariations: ["Boiled", "Roasted", "Salad"]
  },
  {
    id: "lentils_cooked", name: "Lentils (Boiled, Plain)", category: "Pulses & Legumes",
    standardServingGrams: 198, servingUnit: "1 cup (198g)",
    per100g: { calories: 116, protein: 9.0, carbs: 20.1, fat: 0.4, fiber: 7.9, sugar: 1.8, sodium: 2 },
    micronutrients: { iron_mg: 3.3, calcium_mg: 19, potassium_mg: 369 },
    tags: ["pulse", "lentil", "dal", "masoor", "boiled", "vegan", "vegetarian", "high-protein", "high-fiber"], approxCostPerKg: 150,
    commonCookingVariations: ["Boiled", "Soup", "Curry"]
  },
  {
    id: "black_beans_cooked", name: "Black Beans (Boiled, Plain)", category: "Pulses & Legumes",
    standardServingGrams: 172, servingUnit: "1 cup (172g)",
    per100g: { calories: 132, protein: 8.9, carbs: 23.7, fat: 0.5, fiber: 8.7, sugar: 0.3, sodium: 1 },
    micronutrients: { iron_mg: 2.1, calcium_mg: 27, potassium_mg: 355 },
    tags: ["pulse", "beans", "black beans", "boiled", "vegan", "vegetarian", "high-fiber"], approxCostPerKg: 260,
    commonCookingVariations: ["Boiled", "Soup", "Burrito bowl"]
  },
  {
    id: "whole_wheat_bread", name: "Whole Wheat Bread",
    category: "Grains & Cereals", standardServingGrams: 28, servingUnit: "1 slice (28g)",
    per100g: { calories: 247, protein: 13.0, carbs: 41.0, fat: 3.4, fiber: 7.0, sugar: 6.0, sodium: 400 },
    micronutrients: { iron_mg: 2.5, calcium_mg: 107, potassium_mg: 230 },
    tags: ["grain", "bread", "whole wheat", "atta bread", "vegetarian"], approxCostPerKg: 120,
    commonCookingVariations: ["Fresh", "Toasted", "Sandwich"]
  },
  {
    id: "corn_cooked", name: "Sweet Corn (Boiled)", category: "Grains & Cereals",
    standardServingGrams: 165, servingUnit: "1 cup kernels (165g)",
    per100g: { calories: 96, protein: 3.4, carbs: 21.0, fat: 1.5, fiber: 2.4, sugar: 4.5, sodium: 1 },
    micronutrients: { iron_mg: 0.5, calcium_mg: 3, potassium_mg: 218 },
    tags: ["grain", "corn", "sweet corn", "makai", "boiled", "vegan", "vegetarian"], approxCostPerKg: 90,
    commonCookingVariations: ["Boiled", "Roasted", "Chaat"]
  },
  {
    id: "yogurt_lowfat_plain", name: "Plain Low-Fat Yogurt",
    category: "Dairy & Eggs", standardServingGrams: 170, servingUnit: "1 cup (170g)",
    per100g: { calories: 63, protein: 5.3, carbs: 7.0, fat: 1.6, fiber: 0, sugar: 7.0, sodium: 70 },
    micronutrients: { iron_mg: 0.1, calcium_mg: 183, potassium_mg: 234 },
    tags: ["dairy", "yogurt", "curd", "dahi", "low-fat", "vegetarian", "calcium-rich"], approxCostPerKg: 100,
    commonCookingVariations: ["Plain", "Raita", "Smoothie"]
  },
  {
    id: "milk_skim", name: "Skim Milk",
    category: "Dairy & Eggs", standardServingGrams: 244, servingUnit: "1 cup (244g)",
    per100g: { calories: 34, protein: 3.4, carbs: 5.0, fat: 0.1, fiber: 0, sugar: 5.0, sodium: 42 },
    micronutrients: { iron_mg: 0.0, calcium_mg: 122, potassium_mg: 150 },
    tags: ["dairy", "milk", "skim", "low-fat", "vegetarian", "calcium-rich"], approxCostPerKg: 70,
    commonCookingVariations: ["Chilled", "Heated", "Tea or coffee"]
  },
  {
    id: "cheddar_cheese", name: "Cheddar Cheese",
    category: "Dairy & Eggs", standardServingGrams: 28, servingUnit: "1 slice (28g)",
    per100g: { calories: 403, protein: 24.9, carbs: 1.3, fat: 33.1, fiber: 0, sugar: 0.5, sodium: 621 },
    micronutrients: { iron_mg: 0.7, calcium_mg: 721, potassium_mg: 98 },
    tags: ["dairy", "cheese", "cheddar", "vegetarian", "high-protein", "high-calcium"], approxCostPerKg: 900,
    commonCookingVariations: ["Sliced", "Grated", "Melted"]
  },
  {
    id: "turkey_breast_roasted", name: "Turkey Breast (Roasted, Skinless)",
    category: "Poultry & Meat", standardServingGrams: 85, servingUnit: "1 serving (85g)",
    per100g: { calories: 135, protein: 29.0, carbs: 0, fat: 1.6, fiber: 0, sugar: 0, sodium: 55 },
    micronutrients: { iron_mg: 1.1, calcium_mg: 14, potassium_mg: 239 },
    tags: ["meat", "turkey", "poultry", "roasted", "high-protein", "non-veg"], approxCostPerKg: 900,
    commonCookingVariations: ["Roasted", "Grilled", "Sliced"]
  },
  {
    id: "tuna_canned_water", name: "Tuna (Canned in Water, Drained)",
    category: "Fish & Seafood", standardServingGrams: 113, servingUnit: "1 can drained (113g)",
    per100g: { calories: 116, protein: 25.5, carbs: 0, fat: 0.8, fiber: 0, sugar: 0, sodium: 338 },
    micronutrients: { iron_mg: 1.3, calcium_mg: 11, potassium_mg: 237 },
    tags: ["fish", "seafood", "tuna", "canned", "high-protein", "non-veg"], approxCostPerKg: 800,
    commonCookingVariations: ["Drained", "Salad", "Sandwich"]
  },
  {
    id: "shrimp_cooked", name: "Shrimp (Cooked)",
    category: "Fish & Seafood", standardServingGrams: 85, servingUnit: "1 serving (85g)",
    per100g: { calories: 99, protein: 24.0, carbs: 0.2, fat: 0.3, fiber: 0, sugar: 0, sodium: 111 },
    micronutrients: { iron_mg: 0.5, calcium_mg: 70, potassium_mg: 259 },
    tags: ["fish", "seafood", "shrimp", "prawn", "cooked", "high-protein", "non-veg"], approxCostPerKg: 700,
    commonCookingVariations: ["Boiled", "Grilled", "Stir-fried"]
  },
  {
    id: "beef_lean_cooked", name: "Lean Beef (Cooked, Grilled)",
    category: "Poultry & Meat", standardServingGrams: 85, servingUnit: "1 serving (85g)",
    per100g: { calories: 217, protein: 26.1, carbs: 0, fat: 11.8, fiber: 0, sugar: 0, sodium: 70 },
    micronutrients: { iron_mg: 2.6, calcium_mg: 18, potassium_mg: 300 },
    tags: ["meat", "beef", "lean", "grilled", "high-protein", "non-veg"], approxCostPerKg: 700,
    commonCookingVariations: ["Grilled", "Roasted", "Stir-fried"]
  },
  {
    id: "almonds_raw", name: "Almonds (Raw)", category: "Nuts & Seeds",
    standardServingGrams: 28, servingUnit: "1 small handful (28g)",
    per100g: { calories: 579, protein: 21.2, carbs: 21.6, fat: 49.9, fiber: 12.5, sugar: 4.4, sodium: 1 },
    micronutrients: { iron_mg: 3.7, calcium_mg: 269, potassium_mg: 733 },
    tags: ["nuts", "almond", "badam", "raw", "vegan", "vegetarian", "high-fiber"], approxCostPerKg: 1000,
    commonCookingVariations: ["Raw", "Roasted", "Sliced"]
  },
  {
    id: "peanuts_roasted", name: "Peanuts (Dry-Roasted, Unsalted)", category: "Nuts & Seeds",
    standardServingGrams: 28, servingUnit: "1 small handful (28g)",
    per100g: { calories: 587, protein: 24.4, carbs: 21.3, fat: 49.7, fiber: 8.4, sugar: 4.9, sodium: 6 },
    micronutrients: { iron_mg: 2.3, calcium_mg: 58, potassium_mg: 634 },
    tags: ["nuts", "peanut", "groundnut", "moongphali", "roasted", "vegan", "vegetarian", "high-protein"], approxCostPerKg: 180,
    commonCookingVariations: ["Dry roasted", "Boiled", "Unsalted"]
  },
  {
    id: "peanut_butter_smooth", name: "Peanut Butter (Smooth)", category: "Nuts & Seeds",
    standardServingGrams: 32, servingUnit: "2 tablespoons (32g)",
    per100g: { calories: 588, protein: 25.1, carbs: 20.0, fat: 50.4, fiber: 6.0, sugar: 9.2, sodium: 459 },
    micronutrients: { iron_mg: 1.9, calcium_mg: 43, potassium_mg: 649 },
    tags: ["nuts", "peanut butter", "spread", "high-protein", "vegetarian"], approxCostPerKg: 450,
    commonCookingVariations: ["Smooth", "Crunchy"]
  },
  {
    id: "olive_oil", name: "Olive Oil",
    category: "Pantry & Spices", standardServingGrams: 14, servingUnit: "1 tablespoon (14g)",
    per100g: { calories: 884, protein: 0, carbs: 0, fat: 100, fiber: 0, sugar: 0, sodium: 2 },
    micronutrients: { iron_mg: 0.6, calcium_mg: 1, potassium_mg: 1 },
    tags: ["oil", "olive oil", "fat", "cooking", "vegan", "vegetarian"], approxCostPerKg: 900,
    commonCookingVariations: ["Raw dressing", "Sautéing"]
  },

  // Snacks & Comparison Candidates
  {
    id: "potato_chips_fried",
    name: "Classic Potato Chips (Deep fried, salted)",
    category: "Packaged Snacks",
    standardServingGrams: 50,
    servingUnit: "1 medium packet (50g)",
    per100g: { calories: 536, protein: 7.0, carbs: 53.0, fat: 34.0, fiber: 4.4, sugar: 0.3, sodium: 590 },
    micronutrients: { iron_mg: 1.6, calcium_mg: 24, potassium_mg: 1275 },
    tags: ["ultra-processed", "high-sodium", "high-fat"],
    approxCostPerKg: 400, // ₹20 for 50g
    commonCookingVariations: ["Packaged"]
  },
  {
    id: "roasted_makhana",
    name: "Roasted Fox Nuts / Makhana (Lightly spiced in ghee)",
    category: "Healthy Snacks",
    standardServingGrams: 40,
    servingUnit: "1 large bowl (40g)",
    per100g: { calories: 347, protein: 9.7, carbs: 64.5, fat: 6.2, fiber: 14.5, sugar: 0.5, sodium: 180 },
    micronutrients: { iron_mg: 3.5, calcium_mg: 60, potassium_mg: 500 },
    tags: ["superfood", "high-fiber", "low-glycemic", "vegetarian", "gluten-free"],
    approxCostPerKg: 700, // ₹35 for 50g
    commonCookingVariations: ["Dry roasted with turmeric and pinch of pink salt"]
  },
  {
    id: "samosa_potato",
    name: "Fried Potato Samosa",
    category: "Street Food & Snacks",
    standardServingGrams: 90,
    servingUnit: "1 large samosa (90g)",
    per100g: { calories: 295, protein: 4.2, carbs: 32.0, fat: 16.8, fiber: 2.1, sugar: 1.2, sodium: 340 },
    micronutrients: { iron_mg: 1.2, calcium_mg: 18, potassium_mg: 180 },
    tags: ["fried", "high-calorie", "vegetarian"],
    approxCostPerKg: 200, // ₹20 each
    commonCookingVariations: ["Deep fried"]
  },
  {
    id: "dhokla_khaman",
    name: "Steamed Khaman Dhokla",
    category: "Healthy Snacks",
    standardServingGrams: 80,
    servingUnit: "2 pieces (80g)",
    per100g: { calories: 152, protein: 5.5, carbs: 24.0, fat: 3.8, fiber: 2.2, sugar: 4.5, sodium: 290 },
    micronutrients: { iron_mg: 1.5, calcium_mg: 32, potassium_mg: 140 },
    tags: ["steamed", "fermented", "vegetarian"],
    approxCostPerKg: 180,
    commonCookingVariations: ["Steamed with mustard & green chili tempering"]
  },
  {
    id: "biryani_chicken",
    name: "Hyderabadi Chicken Biryani (with rice & pieces)",
    category: "Complete Meals",
    standardServingGrams: 350,
    servingUnit: "1 regular plate (350g)",
    per100g: { calories: 185, protein: 9.8, carbs: 22.5, fat: 6.5, fiber: 1.2, sugar: 1.0, sodium: 320 },
    micronutrients: { iron_mg: 1.6, calcium_mg: 28, potassium_mg: 220 },
    tags: ["high-protein", "non-veg", "comfort-food"],
    approxCostPerKg: 350, // ~₹220 per plate
    commonCookingVariations: ["Dum cooked with saffron and spices"]
  },
  {
    id: "khichdi_moong_dal",
    name: "Moong Dal Khichdi (Rice + Moong Dal + Ghee)",
    category: "Complete Meals",
    standardServingGrams: 250,
    servingUnit: "1 comfort bowl (250g)",
    per100g: { calories: 124, protein: 4.9, carbs: 20.8, fat: 2.6, fiber: 2.4, sugar: 0.6, sodium: 180 },
    micronutrients: { iron_mg: 1.8, calcium_mg: 25, potassium_mg: 160 },
    tags: ["easy-digest", "ayurvedic", "comfort-food", "vegetarian", "gluten-free"],
    approxCostPerKg: 90,
    commonCookingVariations: ["Comfort watery", "Vegetable loaded"]
  }
];

module.exports = {
  foodDatabase,
  findFoodById: (id) => foodDatabase.find(f => f.id === id),
  searchFoods: (query) => {
    if (!query) return foodDatabase.slice(0, 15);
    const q = query.toLowerCase();
    return foodDatabase.filter(f =>
      f.name.toLowerCase().includes(q) ||
      f.category.toLowerCase().includes(q) ||
      f.tags.some(t => t.toLowerCase().includes(q))
    );
  }
};

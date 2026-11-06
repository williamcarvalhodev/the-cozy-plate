
const recipes = [
    {
        id: 1,
        title: "Creamy Chicken Pasta",
        category: "Dinner",
        description: "A rich and creamy pasta dish, perfect for an easy dinner.",
        cookingTime: 30,
        image: "images/recipes/creamy-chicken-pasta.webp",
        imageAlt: "Creamy chicken pasta with basil",
        favouriteCount: 0,
        servesQty: 4,

        ingredients: [
            "300g penne pasta",
            "2 chicken breasts, diced",
            "2 tablespoons olive oil",
            "3 garlic cloves, minced",
            "200ml cooking cream",
            "50g grated Parmesan cheese",
            "100g fresh baby spinach",
            "1 teaspoon dried Italian herbs",
            "Salt and black pepper to taste",
            "Fresh basil leaves to garnish"
        ],

        instructions: [
            "Bring a large pot of salted water to the boil and cook the pasta according to the packet instructions.",
            "Drain the pasta, reserving a small cup of pasta water.",
            "Heat the olive oil in a large frying pan over medium heat.",
            "Add the diced chicken, season with salt and pepper, and cook until golden and completely cooked through.",
            "Add the minced garlic and Italian herbs, stirring for 1 minute.",
            "Pour in the cooking cream and stir in the grated Parmesan cheese.",
            "Add the baby spinach and cook until wilted.",
            "Add the cooked pasta and mix until everything is coated in the creamy sauce. Add a little reserved pasta water if needed.",
            "Serve warm, garnished with fresh basil leaves."
        ]
    },
    {
        id: 2,
        title: "Avocado Toast",
        category: "Breakfast",
        description: "Fresh avocado on toasted bread for a quick breakfast.",
        cookingTime: 15,
        image: "images/recipes/avocado-toast.webp",
        imageAlt: "Avocado toast served with egg",
        favouriteCount: 0,
        servesQty: 2,

        ingredients: [
            "2 slices sourdough bread",
            "1 large ripe avocado",
            "2 eggs",
            "1 tablespoon lemon juice",
            "1 teaspoon olive oil",
            "A pinch of chilli flakes",
            "Salt and black pepper to taste",
            "Fresh parsley or coriander to garnish"
        ],

        instructions: [
            "Toast the sourdough bread until golden and crispy.",
            "Cut the avocado in half, remove the stone and scoop the flesh into a bowl.",
            "Mash the avocado with a fork and mix in the lemon juice, salt and black pepper.",
            "Heat the olive oil in a non-stick frying pan over medium heat.",
            "Crack the eggs into the pan and cook until the whites are set and the yolks reach your preferred consistency.",
            "Spread the mashed avocado evenly over the toasted bread.",
            "Place one fried egg on top of each slice.",
            "Sprinkle with chilli flakes and garnish with fresh herbs before serving."
        ]
    },
    {
        id: 3,
        title: "Chocolate Brownies",
        category: "Dessert",
        description: "Soft and delicious homemade chocolate brownies.",
        cookingTime: 45,
        image: "images/recipes/chocolate-brownies.webp",
        imageAlt: "Homemade chocolate brownies",
        favouriteCount: 0,
        servesQty: 9,

        ingredients: [
            "150g unsalted butter",
            "150g dark chocolate",
            "200g caster sugar",
            "2 large eggs",
            "100g plain flour",
            "25g cocoa powder",
            "1 teaspoon vanilla extract",
            "A pinch of salt",
            "50g chocolate chips"
        ],

        instructions: [
            "Preheat the oven to 180°C (160°C fan) and line a 20cm square baking tin with baking paper.",
            "Melt the butter and dark chocolate together in a heatproof bowl over a pan of gently simmering water.",
            "Remove from the heat and allow the mixture to cool slightly.",
            "In a separate bowl, whisk the eggs and caster sugar until well combined.",
            "Stir the melted chocolate mixture and vanilla extract into the eggs and sugar.",
            "Sift in the flour, cocoa powder and salt, then gently fold everything together.",
            "Stir in the chocolate chips and pour the mixture into the prepared tin.",
            "Bake for 22–25 minutes until the edges are set but the centre is still slightly soft.",
            "Allow the brownies to cool before cutting into nine squares."
        ]
    },
    {
        id: 4,
        title: "Fluffy Blueberry Pancakes",
        category: "Breakfast",
        description: "Light, fluffy pancakes bursting with fresh blueberries.",
        cookingTime: 25,
        image: "images/recipes/blueberry-pancakes.webp",
        imageAlt: "Fluffy blueberry pancakes",
        favouriteCount: 0,
        servesQty: 4,

        ingredients: [
            "200g plain flour",
            "2 tablespoons caster sugar",
            "2 teaspoons baking powder",
            "A pinch of salt",
            "1 large egg",
            "250ml milk",
            "2 tablespoons melted butter",
            "1 teaspoon vanilla extract",
            "150g fresh blueberries",
            "Butter or oil for cooking",
            "Maple syrup to serve"
        ],

        instructions: [
            "In a large bowl, mix the flour, sugar, baking powder and salt.",
            "In a separate bowl, whisk together the egg, milk, melted butter and vanilla extract.",
            "Pour the wet ingredients into the dry ingredients and gently mix until combined.",
            "Fold the blueberries into the batter without overmixing.",
            "Heat a lightly greased non-stick frying pan over medium heat.",
            "Pour a small ladle of batter into the pan for each pancake.",
            "Cook for 2–3 minutes until bubbles appear on the surface.",
            "Flip the pancakes and cook for another 1–2 minutes until golden.",
            "Repeat with the remaining batter and serve warm with maple syrup."
        ]
    },
    {
        id: 5,
        title: "Strawberry Banana Smoothie Bowl",
        category: "Breakfast",
        description: "A refreshing smoothie bowl topped with crunchy granola and fresh fruit.",
        cookingTime: 10,
        image: "images/recipes/smoothie-bowl.webp",
        imageAlt: "Strawberry banana smoothie bowl",
        favouriteCount: 0,
        servesQty: 2,

        ingredients: [
            "2 frozen bananas, sliced",
            "200g frozen strawberries",
            "100g Greek yoghurt",
            "100ml milk or plant-based milk",
            "1 teaspoon honey (optional)",
            "50g granola",
            "4 fresh strawberries, sliced",
            "1 tablespoon chia seeds",
            "Fresh banana slices to garnish"
        ],

        instructions: [
            "Place the frozen bananas and strawberries into a blender.",
            "Add the Greek yoghurt and milk.",
            "Blend until smooth and creamy, adding a little extra milk only if needed.",
            "Taste the smoothie and add honey if you prefer it sweeter.",
            "Divide the thick smoothie mixture between two bowls.",
            "Arrange the fresh strawberry and banana slices on top.",
            "Sprinkle with granola and chia seeds.",
            "Serve immediately while cold and creamy."
        ]
    },
    {
        id: 6,
        title: "Caprese Sandwich",
        category: "Lunch",
        description: "A fresh Italian-inspired sandwich filled with mozzarella, juicy tomatoes and basil.",
        cookingTime: 15,
        image: "images/recipes/caprese-sandwich.webp",
        imageAlt: "Homemade Caprese Sandwich",
        favouriteCount: 0,
        servesQty: 2,

        ingredients: [
            "1 medium ciabatta loaf",
            "125g fresh mozzarella cheese",
            "2 medium ripe tomatoes",
            "A handful of fresh basil leaves",
            "2 tablespoons green pesto",
            "1 tablespoon olive oil",
            "1 teaspoon balsamic glaze",
            "Salt and black pepper to taste"
        ],

        instructions: [
            "Slice the ciabatta loaf in half horizontally, then divide it into two sandwich portions.",
            "Lightly toast the bread in a frying pan or under the grill until golden.",
            "Slice the mozzarella and tomatoes into thin pieces.",
            "Spread the green pesto over the inside of the bread.",
            "Layer the mozzarella and tomato slices over the bottom halves.",
            "Add the fresh basil leaves and season with salt and black pepper.",
            "Drizzle with olive oil and a little balsamic glaze.",
            "Place the top halves of the bread over the fillings.",
            "Serve immediately or toast briefly until the mozzarella begins to soften."
        ]
    },
    {
        id: 7,
        title: "Creamy Tomato & Basil Soup",
        category: "Lunch",
        description: "A comforting tomato soup with fresh basil, perfect with crusty bread.",
        cookingTime: 30,
        image: "images/recipes/tomato-soup.webp",
        imageAlt: "Creamy tomato and basil soup",
        favouriteCount: 10,
        servesQty: 4,

        ingredients: [
            "2 tablespoons olive oil",
            "1 medium onion, finely chopped",
            "3 garlic cloves, minced",
            "800g tinned chopped tomatoes",
            "500ml vegetable stock",
            "100ml cooking cream",
            "1 teaspoon dried oregano",
            "A handful of fresh basil leaves",
            "1 teaspoon sugar (optional)",
            "Salt and black pepper to taste",
            "Crusty bread to serve"
        ],

        instructions: [
            "Heat the olive oil in a large saucepan over medium heat.",
            "Add the chopped onion and cook for 4–5 minutes until softened.",
            "Stir in the minced garlic and cook for another minute.",
            "Add the chopped tomatoes, vegetable stock and oregano.",
            "Bring the soup to a gentle boil, then reduce the heat and simmer for 15 minutes.",
            "Add the fresh basil leaves and carefully blend the soup until smooth.",
            "Stir in the cooking cream and heat gently without boiling.",
            "Taste and season with salt, black pepper and a little sugar if needed.",
            "Serve hot with fresh basil leaves and crusty bread."
        ]
    },
    {
        id: 8,
        title: "Honey Garlic Salmon",
        category: "Dinner",
        description: "Tender baked salmon coated in a sweet and savoury honey-garlic glaze.",
        cookingTime: 30,
        image: "images/recipes/honey-garlic-salmon.webp",
        imageAlt: "Honey garlic salmon",
        favouriteCount: 0,
        servesQty: 4,

        ingredients: [
            "4 salmon fillets (approximately 150g each)",
            "3 tablespoons honey",
            "2 tablespoons soy sauce",
            "3 garlic cloves, minced",
            "1 tablespoon lemon juice",
            "1 tablespoon olive oil",
            "1 teaspoon grated fresh ginger",
            "Salt and black pepper to taste",
            "Fresh parsley to garnish",
            "Lemon wedges to serve"
        ],

        instructions: [
            "Preheat the oven to 200°C (180°C fan) and line a baking tray with baking paper.",
            "In a small bowl, mix the honey, soy sauce, minced garlic, lemon juice, olive oil and ginger.",
            "Place the salmon fillets on the prepared baking tray.",
            "Season lightly with salt and black pepper.",
            "Brush the honey garlic mixture generously over each salmon fillet.",
            "Bake for 12–15 minutes, depending on the thickness of the fillets, until the salmon is cooked through.",
            "Carefully spoon some of the glaze from the tray over the salmon.",
            "Garnish with fresh parsley and serve with lemon wedges."
        ]
    },
    {
        id: 9,
        title: "Lemon Drizzle Cake",
        category: "Dessert",
        description: "A soft, buttery lemon cake finished with a sweet and tangy drizzle.",
        cookingTime: 60,
        image: "images/recipes/lemon-drizzle-cake.webp",
        imageAlt: "Lemon drizzle cake",
        favouriteCount: 6,
        servesQty: 10,

        ingredients: [
            "200g unsalted butter, softened",
            "200g caster sugar",
            "3 large eggs",
            "200g self-raising flour",
            "1 teaspoon baking powder",
            "Zest of 2 lemons",
            "2 tablespoons milk",
            "Juice of 2 lemons",
            "80g caster sugar for the drizzle"
        ],

        instructions: [
            "Preheat the oven to 180°C (160°C fan) and grease and line a 2lb loaf tin.",
            "Beat the softened butter and 200g caster sugar together until light and fluffy.",
            "Add the eggs one at a time, mixing well after each addition.",
            "Gently fold in the self-raising flour and baking powder.",
            "Stir in the lemon zest and milk until the mixture is smooth.",
            "Pour the cake mixture into the prepared loaf tin and level the top.",
            "Bake for 40–45 minutes until golden and a skewer inserted into the centre comes out clean.",
            "Mix the lemon juice with the remaining 80g caster sugar to make the drizzle.",
            "While the cake is still warm, prick the top with a skewer and slowly pour over the lemon drizzle.",
            "Allow the cake to cool in the tin before slicing and serving."
        ]
    },
    {
        id: 10,
        title: "Creamy Mushroom Risotto",
        category: "Vegetarian",
        description: "A creamy, comforting risotto made with tender mushrooms, garlic and Parmesan cheese.",
        cookingTime: 35,
        image: "images/recipes/mushroom-risotto.webp",
        imageAlt: "Creamy mushroom risotto with fresh parsley",
        favouriteCount: 0,
        servesQty: 4,

        ingredients: [
            "300g Arborio risotto rice",
            "250g chestnut mushrooms, sliced",
            "1 medium onion, finely chopped",
            "2 garlic cloves, minced",
            "2 tablespoons olive oil",
            "900ml vegetable stock, kept warm",
            "30g unsalted butter",
            "50g grated vegetarian hard cheese",
            "1 teaspoon dried thyme",
            "Salt and black pepper to taste",
            "Fresh parsley to garnish"
        ],

        instructions: [
            "Heat the olive oil in a large deep frying pan over medium heat.",
            "Add the chopped onion and cook until soft and translucent.",
            "Stir in the garlic and sliced mushrooms, cooking until the mushrooms soften and begin to brown.",
            "Add the Arborio rice and stir for 1–2 minutes until the grains are lightly coated in oil.",
            "Pour in one ladle of warm vegetable stock and stir until most of the liquid is absorbed.",
            "Continue adding the stock one ladle at a time, stirring frequently.",
            "Cook for approximately 18–22 minutes until the rice is tender but still slightly firm, adding a little more hot water if needed.",
            "Stir in the butter, grated vegetarian hard cheese and thyme.",
            "Season with salt and black pepper.",
            "Serve immediately, garnished with fresh parsley."
        ]
    },
    {
        id: 11,
        title: "Chickpea & Spinach Curry",
        category: "Vegetarian",
        description: "A warm, flavourful curry with chickpeas, fresh spinach and a rich tomato sauce.",
        cookingTime: 30,
        image: "images/recipes/chickpea-spinach-curry.webp",
        imageAlt: "Chickpea and spinach curry served with rice",
        favouriteCount: 0,
        servesQty: 4,

        ingredients: [
            "2 tablespoons vegetable oil",
            "1 medium onion, finely chopped",
            "3 garlic cloves, minced",
            "1 teaspoon grated fresh ginger",
            "2 tablespoons mild curry powder",
            "1 teaspoon ground cumin",
            "400g tinned chopped tomatoes",
            "400ml coconut milk",
            "2 tins chickpeas (400g each), drained and rinsed",
            "150g fresh baby spinach",
            "Salt and black pepper to taste",
            "Fresh coriander to garnish",
            "Cooked rice to serve"
        ],

        instructions: [
            "Heat the vegetable oil in a large saucepan over medium heat.",
            "Add the chopped onion and cook for 4–5 minutes until softened.",
            "Stir in the minced garlic and grated ginger, cooking for another minute.",
            "Add the curry powder and ground cumin, stirring for 30 seconds to release their flavours.",
            "Pour in the chopped tomatoes and coconut milk, mixing well.",
            "Add the drained chickpeas and bring the mixture to a gentle simmer.",
            "Cook for 12–15 minutes, stirring occasionally, until the sauce begins to thicken.",
            "Add the fresh spinach and stir until wilted.",
            "Season with salt and black pepper to taste.",
            "Serve warm over cooked rice, garnished with fresh coriander."
        ]
    }
];

let favouriteIds = [];
let savedCounts = {};

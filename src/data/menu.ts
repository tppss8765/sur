export type MenuItem = {
  id: string;
  name: string;
  category: "juice" | "milkshake" | "special" | "vegetable_juice";
  price: number;
  description: string;
  tags?: string[];
  featured?: boolean;
  photo?: string;
  available?: boolean;
};

export const DEFAULT_MENU_ITEMS: MenuItem[] = [
  // ── FRUIT JUICES ────────────────────────────────────────────────
  {
    id: "j1", name: "Watermelon Juice", category: "juice", price: 60,
    description: "Chilled, seed-free, pressed to order. Nothing else added.",
    photo: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=600&q=80",
    available: true,
  },
  {
    id: "j2", name: "Mosambi Juice", category: "juice", price: 50,
    description: "Sweet lime, classic and refreshing — a Kozhikode morning staple.",
    photo: "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?w=600&q=80",
    available: true,
  },
  {
    id: "j3", name: "Pomegranate Juice", category: "juice", price: 90,
    description: "Deep red, antioxidant-rich, no added sugar. Pure arils pressed cold.",
    photo: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&q=80",
    available: true,
  },
  {
    id: "j4", name: "Pineapple Juice", category: "juice", price: 60,
    description: "Tangy-sweet, served over crushed ice.",
    photo: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=600&q=80",
    available: true,
  },
  {
    id: "j5", name: "Orange Juice", category: "juice", price: 70,
    description: "Hand-squeezed Nagpur oranges, served fresh every time.",
    photo: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&q=80",
    available: true,
  },
  {
    id: "j6", name: "Grape Juice", category: "juice", price: 70,
    description: "Black grapes, naturally sweet with a slight tang.",
    photo: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=600&q=80",
    available: true,
  },
  {
    id: "j7", name: "Mixed Fruit Juice", category: "juice", price: 80,
    description: "Our daily blend of the freshest arrivals from the market.",
    photo: "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&q=80",
    available: true,
  },
  {
    id: "j8", name: "Mango Juice", category: "juice", price: 90,
    description: "Seasonal Alphonso mangoes blended pure — thick, golden, perfect.",
    photo: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=600&q=80",
    available: true,
  },
  {
    id: "j9", name: "Apple Juice", category: "juice", price: 80,
    description: "Crisp Kashmiri apples, no concentrate, no preservatives.",
    photo: "https://images.unsplash.com/photo-1584570016702-57e26fd01f05?w=600&q=80",
    available: true,
  },
  {
    id: "j10", name: "Guava Juice", category: "juice", price: 60,
    description: "Pink-fleshed guava with a light pinch of black salt.",
    photo: "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?w=600&q=80",
    available: true,
  },
  {
    id: "j11", name: "Papaya Juice", category: "juice", price: 60,
    description: "Ripe papaya blended smooth — naturally sweet and digestive.",
    photo: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=600&q=80",
    available: true,
  },
  {
    id: "j12", name: "Dragon Fruit Juice", category: "juice", price: 110,
    description: "Vivid pink, mildly sweet, exotic. Seasonal availability.",
    photo: "https://images.unsplash.com/photo-1527325678964-54921661f888?w=600&q=80",
    available: true,
    tags: ["Exotic"],
  },
  {
    id: "j13", name: "Lychee Juice", category: "juice", price: 100,
    description: "Floral, fragrant, chilled. A summer-season treat.",
    photo: "https://images.unsplash.com/photo-1583394293214-0a77a51fbe6c?w=600&q=80",
    available: true,
    tags: ["Seasonal"],
  },
  {
    id: "j14", name: "Coconut Water", category: "juice", price: 50,
    description: "Tender green coconut, served straight from the shell.",
    photo: "https://images.unsplash.com/photo-1559181567-c3190ca9d5db?w=600&q=80",
    available: true,
  },

  // ── VEGETABLE JUICES ────────────────────────────────────────────
  {
    id: "vj1", name: "Beetroot Carrot Juice", category: "vegetable_juice", price: 60,
    description: "Earthy, vibrant, packed with iron and beta-carotene.",
    photo: "https://images.unsplash.com/photo-1625938144755-652e08e359b7?w=600&q=80",
    available: true,
    tags: ["Health"],
  },
  {
    id: "vj2", name: "Carrot Ginger Juice", category: "vegetable_juice", price: 65,
    description: "Bright orange with a warming ginger kick. Immunity booster.",
    photo: "https://images.unsplash.com/photo-1570696516188-ade861b84a49?w=600&q=80",
    available: true,
    tags: ["Health"],
  },
  {
    id: "vj3", name: "Cucumber Mint Juice", category: "vegetable_juice", price: 55,
    description: "Cool, hydrating, light. The perfect midday refresher.",
    photo: "https://images.unsplash.com/photo-1603569283847-aa295f0d990b?w=600&q=80",
    available: true,
  },
  {
    id: "vj4", name: "Amla (Gooseberry) Juice", category: "vegetable_juice", price: 70,
    description: "Tangy, vitamin-C packed, traditional Ayurvedic remedy.",
    photo: "https://images.unsplash.com/photo-1576021182211-9ea8dced3690?w=600&q=80",
    available: true,
    tags: ["Ayurvedic"],
  },
  {
    id: "vj5", name: "Spinach Green Detox", category: "vegetable_juice", price: 75,
    description: "Spinach, cucumber, lemon, mint — cold-pressed, clean green.",
    photo: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&q=80",
    available: true,
    tags: ["Detox"],
  },
  {
    id: "vj6", name: "Tomato Juice", category: "vegetable_juice", price: 50,
    description: "Fresh tomatoes with a pinch of salt and pepper. Simple and sharp.",
    photo: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=600&q=80",
    available: true,
  },

  // ── MILKSHAKES ──────────────────────────────────────────────────
  {
    id: "m1", name: "Banana Milkshake", category: "milkshake", price: 70,
    description: "Thick, creamy, naturally sweet. Kerala bananas, whole milk.",
    photo: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&q=80",
    available: true,
  },
  {
    id: "m2", name: "Mango Milkshake", category: "milkshake", price: 90,
    description: "Seasonal Alphonso mango blended with chilled whole milk.",
    photo: "https://images.unsplash.com/photo-1527271536157-89dde2e4d6ab?w=600&q=80",
    available: true,
    tags: ["Seasonal"],
  },
  {
    id: "m3", name: "Chikoo Milkshake", category: "milkshake", price: 80,
    description: "Caramel-sweet sapodilla — a local favourite, velvety smooth.",
    photo: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=600&q=80",
    available: true,
  },
  {
    id: "m4", name: "Chocolate Milkshake", category: "milkshake", price: 80,
    description: "Rich cocoa, chilled milk, hint of vanilla. A crowd pleaser.",
    photo: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80",
    available: true,
  },
  {
    id: "m5", name: "Strawberry Milkshake", category: "milkshake", price: 90,
    description: "Fresh strawberries blended with chilled milk — pink and fruity.",
    photo: "https://images.unsplash.com/photo-1565656700379-d37e9e4d1862?w=600&q=80",
    available: true,
  },
  {
    id: "m6", name: "Avocado Milkshake", category: "milkshake", price: 100,
    description: "Buttery, smooth, a Kozhikode classic that never gets old.",
    photo: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=600&q=80",
    available: true,
    tags: ["Local Favourite"],
  },
  {
    id: "m7", name: "Dates Milkshake", category: "milkshake", price: 85,
    description: "Medjool dates blended thick — naturally sweet, no added sugar.",
    photo: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80",
    available: true,
  },
  {
    id: "m8", name: "Jackfruit Milkshake", category: "milkshake", price: 90,
    description: "Ripe chakka blended with milk — tropical, fragrant, seasonal.",
    photo: "https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?w=600&q=80",
    available: true,
    tags: ["Seasonal"],
  },

  // ── SPECIAL SHAKES ──────────────────────────────────────────────
  {
    id: "s1", name: "Abooda Shake", category: "special", price: 120,
    description: "Our signature — dates, dry fruits, cream and love. The dish that built our reputation.",
    tags: ["Bestseller", "Signature"], featured: true,
    photo: "https://images.unsplash.com/photo-1587235256285-9b0bdaa60b95?w=600&q=80",
    available: true,
  },
  {
    id: "s2", name: "Saboora Shake", category: "special", price: 110,
    description: "Sago pearls in a chilled, lightly spiced milk base — a Malabar evening tradition.",
    tags: ["Local Favourite"], featured: true,
    photo: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80",
    available: true,
  },
  {
    id: "s3", name: "Masoora Shake", category: "special", price: 110,
    description: "A rich lentil-based specialty shake, slow prepared the traditional Kozhikode way.",
    tags: ["Traditional"], featured: true,
    photo: "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?w=600&q=80",
    available: true,
  },
  {
    id: "s4", name: "Dragon Fruit Special", category: "special", price: 120,
    description: "Vivid pink dragon fruit blended with coconut milk and lime.",
    photo: "https://images.unsplash.com/photo-1527325678964-54921661f888?w=600&q=80",
    available: true, tags: ["Exotic"],
  },
  {
    id: "s5", name: "Mixed Nuts Shake", category: "special", price: 130,
    description: "Almonds, cashew, pistachio — a protein-rich, indulgent treat.",
    photo: "https://images.unsplash.com/photo-1498639594284-b679cd59869f?w=600&q=80",
    available: true, tags: ["Premium"],
  },
  {
    id: "s6", name: "Sapota Special", category: "special", price: 90,
    description: "Slow-blended chikoo with a hint of cardamom. Velvety, malty finish.",
    photo: "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=600&q=80",
    available: true,
  },
];

export const MENU_CATEGORIES = [
  { id: "all",            label: "All" },
  { id: "juice",          label: "Fruit Juices" },
  { id: "vegetable_juice",label: "Veg Juices" },
  { id: "milkshake",      label: "Milkshakes" },
  { id: "special",        label: "Special Shakes" },
] as const;

export const CATEGORY_LABELS: Record<string, string> = {
  juice:           "Fruit Juice",
  vegetable_juice: "Veg Juice",
  milkshake:       "Milkshake",
  special:         "Special",
};

export const CATEGORY_COLORS: Record<string, string> = {
  juice:           "bg-lime/10 text-lime-deep",
  vegetable_juice: "bg-leaf/10 text-leaf",
  milkshake:       "bg-papaya/10 text-papaya-deep",
  special:         "bg-turmeric/15 text-ink",
};

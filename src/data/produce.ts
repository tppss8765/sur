export type Produce = {
  id: string;
  name: string;
  category: "fruit" | "vegetable" | "seasonal";
  color: string;
  photo: string;
  desc?: string;
};

export const FRUITS: Produce[] = [
  { id: "f1",  name: "Watermelon",   category: "fruit", color: "#3B6B45", photo: "https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=500&q=80", desc: "Seedless, chilled, pressed daily" },
  { id: "f2",  name: "Papaya",       category: "fruit", color: "#F2BC1E", photo: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=500&q=80", desc: "Ripe, sweet, sourced fresh" },
  { id: "f3",  name: "Orange",       category: "fruit", color: "#E8542C", photo: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?w=500&q=80", desc: "Nagpur oranges, hand-squeezed" },
  { id: "f4",  name: "Banana",       category: "fruit", color: "#F2BC1E", photo: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&q=80", desc: "Kerala nendran & robusta" },
  { id: "f5",  name: "Pomegranate",  category: "fruit", color: "#C03F1C", photo: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&q=80", desc: "Rich in antioxidants" },
  { id: "f6",  name: "Pineapple",    category: "fruit", color: "#F2772E", photo: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=500&q=80", desc: "Tangy-sweet, hand-trimmed" },
  { id: "f7",  name: "Green Grapes", category: "fruit", color: "#7A9B22", photo: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=500&q=80", desc: "Seedless, crisp" },
  { id: "f8",  name: "Mango",        category: "fruit", color: "#F2BC1E", photo: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=500&q=80", desc: "Alphonso & Malgova seasonal" },
  { id: "f9",  name: "Apple",        category: "fruit", color: "#C03F1C", photo: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=500&q=80", desc: "Kashmiri Delicious variety" },
  { id: "f10", name: "Chikoo",       category: "fruit", color: "#9B7653", photo: "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=500&q=80", desc: "Sapodilla — caramel-sweet" },
  { id: "f11", name: "Dragon Fruit", category: "fruit", color: "#E8548C", photo: "https://images.unsplash.com/photo-1527325678964-54921661f888?w=500&q=80", desc: "Pink flesh, exotic & tropical" },
  { id: "f12", name: "Sweet Lime",   category: "fruit", color: "#9FC131", photo: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&q=80", desc: "Mosambi, Kerala classic" },
  { id: "f13", name: "Strawberry",   category: "fruit", color: "#C03F1C", photo: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&q=80", desc: "Fresh stock, seasonal" },
  { id: "f14", name: "Coconut",      category: "fruit", color: "#9B7653", photo: "https://images.unsplash.com/photo-1559181567-c3190ca9d5db?w=500&q=80", desc: "Tender green, serve chilled" },
  { id: "f15", name: "Lychee",       category: "fruit", color: "#E8548C", photo: "https://images.unsplash.com/photo-1583394293214-0a77a51fbe6c?w=500&q=80", desc: "Fragrant, seasonal" },
  { id: "f16", name: "Guava",        category: "fruit", color: "#7A9B22", photo: "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?w=500&q=80", desc: "Pink-flesh variety, daily stock" },
  { id: "f17", name: "Pear",         category: "fruit", color: "#9FC131", photo: "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?w=500&q=80", desc: "Crisp Nashpati variety" },
  { id: "f18", name: "Kiwi",         category: "fruit", color: "#7A9B22", photo: "https://images.unsplash.com/photo-1618897996318-5a901fa1b72c?w=500&q=80", desc: "Imported, premium stock" },
];

export const VEGETABLES: Produce[] = [
  { id: "v1",  name: "Carrot",        category: "vegetable", color: "#E8542C", photo: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&q=80", desc: "Ooty fresh, bright orange" },
  { id: "v2",  name: "Beetroot",      category: "vegetable", color: "#7A1F2B", photo: "https://images.unsplash.com/photo-1613743983303-b3e89f8a2b80?w=500&q=80", desc: "Deep red, juice-grade" },
  { id: "v3",  name: "Tomato",        category: "vegetable", color: "#C03F1C", photo: "https://images.unsplash.com/photo-1546470427-0d4ef00ce03c?w=500&q=80", desc: "Vine-ripened, daily stock" },
  { id: "v4",  name: "Cabbage",       category: "vegetable", color: "#9FC131", photo: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=500&q=80", desc: "Green & red varieties" },
  { id: "v5",  name: "Cucumber",      category: "vegetable", color: "#3B6B45", photo: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=500&q=80", desc: "Cool, hydrating, fresh" },
  { id: "v6",  name: "Bell Pepper",   category: "vegetable", color: "#7A9B22", photo: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=500&q=80", desc: "Red, green, yellow mix" },
  { id: "v7",  name: "Brinjal",       category: "vegetable", color: "#4A2545", photo: "https://images.unsplash.com/photo-1613743983314-dd6b3eb5a93c?w=500&q=80", desc: "Purple, shiny, Kerala-grown" },
  { id: "v8",  name: "Bitter Gourd",  category: "vegetable", color: "#3B6B45", photo: "https://images.unsplash.com/photo-1628773822503-930a7eaab197?w=500&q=80", desc: "Karela — health essential" },
  { id: "v9",  name: "Okra (Ladies)", category: "vegetable", color: "#5C8A3D", photo: "https://images.unsplash.com/photo-1567892737950-30c4db37cd89?w=500&q=80", desc: "Tender, small pods" },
  { id: "v10", name: "Cauliflower",   category: "vegetable", color: "#F2EDE0", photo: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=500&q=80", desc: "Dense white head, fresh" },
  { id: "v11", name: "Spinach",       category: "vegetable", color: "#3B6B45", photo: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&q=80", desc: "Palak — washed, bundled" },
  { id: "v12", name: "Drumstick",     category: "vegetable", color: "#7A9B22", photo: "https://images.unsplash.com/photo-1599599810694-57fc1cbeb3e3?w=500&q=80", desc: "Moringa pods, farm-fresh" },
  { id: "v13", name: "Green Beans",   category: "vegetable", color: "#5C8A3D", photo: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500&q=80", desc: "French beans, crisp" },
  { id: "v14", name: "Pumpkin",       category: "vegetable", color: "#F2772E", photo: "https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=500&q=80", desc: "Orange flesh, sweet" },
  { id: "v15", name: "Ash Gourd",     category: "vegetable", color: "#9FC131", photo: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=500&q=80", desc: "Winter melon, Kerala staple" },
  { id: "v16", name: "Yam",           category: "vegetable", color: "#9B7653", photo: "https://images.unsplash.com/photo-1638046013879-e7a2f1c7e1e3?w=500&q=80", desc: "Chena — Kerala tradition" },
  { id: "v17", name: "Sweet Potato",  category: "vegetable", color: "#C03F1C", photo: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=500&q=80", desc: "Purple & orange flesh" },
  { id: "v18", name: "Onion",         category: "vegetable", color: "#C03F1C", photo: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=500&q=80", desc: "Nasik red, fresh stock" },
];

export const SEASONAL: Produce[] = [
  { id: "se1", name: "Rambutan",      category: "seasonal", color: "#C03F1C", photo: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?w=500&q=80", desc: "Hairy lychee — rare treat" },
  { id: "se2", name: "Mangosteen",    category: "seasonal", color: "#4A2545", photo: "https://images.unsplash.com/photo-1506956191951-7a88da4435e5?w=500&q=80", desc: "Queen of fruits" },
  { id: "se3", name: "Custard Apple", category: "seasonal", color: "#9FC131", photo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80", desc: "Sitaphal — creamy sweet" },
  { id: "se4", name: "Jackfruit",     category: "seasonal", color: "#F2BC1E", photo: "https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?w=500&q=80", desc: "Chakka — Kerala favourite" },
  { id: "se5", name: "Lychee",        category: "seasonal", color: "#E8548C", photo: "https://images.unsplash.com/photo-1583394293214-0a77a51fbe6c?w=500&q=80", desc: "Fragrant, summer special" },
  { id: "se6", name: "Star Fruit",    category: "seasonal", color: "#F2BC1E", photo: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=500&q=80", desc: "Carambola — star-shaped" },
  { id: "se7", name: "Passion Fruit", category: "seasonal", color: "#4A2545", photo: "https://images.unsplash.com/photo-1604145559206-e3bdb3e72cac?w=500&q=80", desc: "Tart, aromatic tropical" },
  { id: "se8", name: "Sapodilla",     category: "seasonal", color: "#9B7653", photo: "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=500&q=80", desc: "Chikoo — caramel sweetness" },
];

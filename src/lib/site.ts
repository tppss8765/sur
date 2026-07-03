export const SITE = {
  name: "Suresh Veg & Fruits",
  shortName: "Suresh Veg & Fruits",
  tagline: "Freshness Served 24 Hours",
  description:
    "Kozhikode's favourite 24/7 fruit, vegetable, juice and shake destination in Malaparamba. Fresh fruits, fresh vegetables, premium fruit juices, milkshakes, and the legendary Abooda Saboora Masoora — open all day, every day.",
  url: "https://sureshvegfruits.in",
  phone: "+919995528848",
  phoneDisplay: "+91 99955 28848",
  whatsapp: "919995528848",
  whatsappMessage:
    "Hello Suresh Veg & Fruits, I would like to know today's fresh fruit availability and juice menu.",
  email: "hello@sureshvegfruits.in",
  address: {
    line1: "33/6687, B-6, Wayanad Road",
    line2: "Malaparamba",
    city: "Kozhikode",
    state: "Kerala",
    postalCode: "673009",
    country: "IN",
  },
  geo: {
    lat: 11.2855,
    lng: 75.8064,
  },
  rating: {
    value: 4.3,
    count: 3000,
  },
  hours: "Open 24 Hours",
  socials: {
    instagram: "https://instagram.com/sureshvegfruits",
    facebook: "https://facebook.com/sureshvegfruits",
  },
  keywords: [
    "Best Juice Shop Kozhikode",
    "Fruit Shop Kozhikode",
    "Abooda Shake Kozhikode",
    "Fresh Fruits Kozhikode",
    "24 Hours Juice Shop Kozhikode",
    "Vegetable Shop Malaparamba",
    "Milkshake Kozhikode",
    "Saboora Masoora Kozhikode",
  ],
};

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${SITE.geo.lat},${SITE.geo.lng}`;
export const mapsDirectionsLink = `https://www.google.com/maps/dir/?api=1&destination=${SITE.geo.lat},${SITE.geo.lng}`;
export const telLink = `tel:${SITE.phone}`;
export const whatsappLink = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  SITE.whatsappMessage
)}`;

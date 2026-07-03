export type Review = {
  id: string;
  name: string;
  initials: string;
  rating: number;
  date: string;
  text: string;
};

export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Anand Krishnan",
    initials: "AK",
    rating: 5,
    date: "2 weeks ago",
    text: "Best juice spot in Kozhikode, hands down. The Abooda shake at midnight is a ritual now. Always fresh, always fast.",
  },
  {
    id: "r2",
    name: "Fathima Rasheed",
    initials: "FR",
    rating: 5,
    date: "1 month ago",
    text: "Been coming here for years. The fruits are genuinely fresh every single time, and the staff remember regulars by name.",
  },
  {
    id: "r3",
    name: "Vishnu Prasad",
    initials: "VP",
    rating: 4,
    date: "3 weeks ago",
    text: "Great variety of vegetables too, not just juices. Prices are fair for the quality. Parking can get tight in the evenings.",
  },
  {
    id: "r4",
    name: "Sneha Menon",
    initials: "SM",
    rating: 5,
    date: "2 months ago",
    text: "Open 24 hours has saved me more times than I can count. The Saboora shake is unlike anywhere else in the city.",
  },
  {
    id: "r5",
    name: "Mohammed Shahid",
    initials: "MS",
    rating: 5,
    date: "1 week ago",
    text: "Hygiene and freshness on point. My family's go-to place for fruits every weekend. Highly recommend the mixed fruit juice.",
  },
  {
    id: "r6",
    name: "Divya Nair",
    initials: "DN",
    rating: 4,
    date: "5 days ago",
    text: "Lovely ambience for a roadside juice counter, surprisingly clean and well lit at night. Avocado shake is excellent.",
  },
];

const technicalEvents = [
  {
    moreInfo: "Event #1 More Info",
    img: "./webapp.jpg",
    content: "This is technical event #1",
    registrationLink: "#",
  },
  {
    moreInfo: "Event #2 More Info",
    img: "./DQ.jpg",
    content: "This is technical event #2",
    registrationLink: "#",
  },
  {
    moreInfo: "Event #3 More Info",
    img: "./Eq.jpg",
    content: "This is technical event #3",
    registrationLink: "#",
  },
  {
    moreInfo: "Event #4 More Info",
    img: "JC.jpg",
    content: "This is technical event #4",
    registrationLink: "#",
  },
];
const nonTechnicalEvents = [
  {
    moreInfo: "Event #1 More Info",
    img: "https://via.placeholder.com/400",
    content: "This is non-technical event #1",
    registrationLink: "#",
  },
  {
    moreInfo: "Event #2 More Info",
    img: "https://via.placeholder.com/400",
    content: "This is non-technical event #2",
    registrationLink: "#",
  },
  {
    moreInfo: "Event #3 More Info",
    img: "https://via.placeholder.com/400",
    content: "This is non-technical event #3",
    registrationLink: "#",
  },
  {
    moreInfo: "Event #4 More Info",
    img: "https://via.placeholder.com/400",
    content: "This is non-technical event #4",
    registrationLink: "#",
  },
];

const allEvents = [...technicalEvents, ...nonTechnicalEvents];

export { allEvents, technicalEvents, nonTechnicalEvents };

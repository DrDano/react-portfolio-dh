const production = {
  url: "https://portfolio-dh.herokuapp.com/",
};
const development = {
  url: "http://localhost:3001",
};
export const config =
  process.env.NODE_ENV === "development" ? development : production;

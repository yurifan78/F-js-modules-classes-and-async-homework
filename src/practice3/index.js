import fetch from "node-fetch";

export const getPoetry = () => {
  // fetch(poetry);
  return fetch("https://v1.jinrishici.com/all.json").then((response) => {
    return response.json().then((data) => {
      return [data.origin, data.author, data.content];
    });
  });
};

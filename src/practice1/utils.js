import { ADDRESS, PORT, PATH } from "./constant";

export const getURL = () => {
  return `${ADDRESS}:${PORT}${PATH}`;
};

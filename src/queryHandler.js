/*import { demoQueries } from "./data/data.js";


// Returns demo response if query matches, otherwise null
export const getDemoResponse = (userQuery) => {
  const matched = demoQueries.find(
    (item) => item.query.toLowerCase() === userQuery.toLowerCase()
  );
  return matched ? matched.response : null;
};*/

import { demoQueries } from "./data/data.js";
import Fuse from "fuse.js";

const fuse = new Fuse(demoQueries, {
  keys: ["query"],
  threshold: 0.3, // Adjust: 0 = exact, 1 = very loose
});

export const getDemoResponse = (input) => {
  const results = fuse.search(input);
  if (results.length > 0) {
    return results[0].item.response; // Return best match
  }
  return null;
};



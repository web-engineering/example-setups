/*  Roman.js - Wandle römische Zahlen in Javascript Numbers um */

export const validRomanChar = s => {
  return s === "i" || s === "I";
};

export const romanToNumber = s => {
  if (s.length === 0) return 0;
  if (s.substr(0, 1) != "i")
    throw new Error(`illegal character ${s.substr(0, 1)} in roman number`);
  return s.length;
};

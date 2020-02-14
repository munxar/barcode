const checksum = (ean: string) => {
  let sum = Array.from(ean)
    .reverse()
    .reduce((sum, digit, i) => {
      const value = parseInt(digit);
      sum += i % 2 ? value : value * 3;
      return sum;
    }, 0);

  return (10 - (sum % 10)) % 10;
};

const map = {
  L: [
    "0001101",
    "0011001",
    "0010011",
    "0111101",
    "0100011",
    "0110001",
    "0101111",
    "0111011",
    "0110111",
    "0001011"
  ],
  G: [
    "0100111",
    "0110011",
    "0011011",
    "0100001",
    "0011101",
    "0111001",
    "0000101",
    "0010001",
    "0001001",
    "0010111"
  ],
  R: [
    "1110010",
    "1100110",
    "1101100",
    "1000010",
    "1011100",
    "1001110",
    "1010000",
    "1000100",
    "1001000",
    "1110100"
  ],
  "(": "0000101", // left marker
  "|": "01010", // middle marker
  ")": "1010000" // right marker
};

const groups = [
  "(LLLLLR|RRRRRR)",
  "(LLGLGG|RRRRRR)",
  "(LLGGLG|RRRRRR)",
  "(LLGGGL|RRRRRR)",
  "(LGLLGG|RRRRRR)",
  "(LGGLLG|RRRRRR)",
  "(LGGGLL|RRRRRR)",
  "(LGLGLG|RRRRRR)",
  "(LGLGGL|RRRRRR)",
  "(LGGLGL|RRRRRR)"
];

export const bitPattern = (ean12: string) => {
  const ean = ean12 + checksum(ean12);
  const first = ean[0];
  const group = groups[first];
  let index = 1;
  return Array.from(group)
    .map((code: any) => {
      const a = map[code];
      if (typeof a === "string") {
        return a;
      } else {
        const digit = ean[index++];
        return a[digit];
      }
    })
    .join("");
};

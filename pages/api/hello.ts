// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "description",
//   "present",
// ];
// const w: string[] = [];

// words.forEach((word) => {
//   if (word.length >= 6) {
//     w.push(word);
//   }
// });

// for (let i = 0; i < words.length; i++) {
//   if (words[i].length >= 6) {
//     w.push(words[i]);
//   }
// }

// console.log(w);

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John shogo" });
}

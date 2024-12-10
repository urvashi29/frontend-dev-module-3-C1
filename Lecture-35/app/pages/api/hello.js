// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.revalidate("/");
  res.status(200).json({ message: "Data Revalidated" });
}

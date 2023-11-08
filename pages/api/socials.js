import { socials } from './data/socials';

// export default function handler(req, res) {
//   console.log(req)
//   if (req.method === 'GET') {
//     res.status(200).json(socials);
//   };
// }

export default function handler(req, res) {
  console.log(req)
  res.setPreviewData({})
  res.end(JSON.stringify([
    {
      id: 1,
      icon: 'youtube',
      path: 'https://youtube.com',
    },
    {
      id: 2,
      icon: 'instagram',
      path: 'https://instagram.com',
    }]))
}

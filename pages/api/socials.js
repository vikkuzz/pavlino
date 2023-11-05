import { socials } from './data/socials';

export default function handler(req, res) {
  if (req.method === 'GET') {
    console.log(socials)
    res.status(200).json(socials);
  };
}

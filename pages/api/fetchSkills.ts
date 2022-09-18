// skills api
//
import type { NextApiRequest, NextApiResponse } from 'next'

const skills = [
    {
        id: 1,
        name: 'Next.js',
        photoUrl: '/nextjs.png',

    },
    {
        id: 2,
        name: 'React',
        photoUrl: '/react.png',
    },
    {
        id: 3,
        name: 'Firebase',
        photoUrl: '/firebase.png',
    },
    {
        id: 4,
        name: 'JavaScript',
        photoUrl: '/javascript.png',
    },
    {
        id: 5,
        name: 'Node.js',
        photoUrl: '/nodejs.jpg',
    },
    {
        id: 6,
        name: 'MongoDB',
        photoUrl: '/mongodb.png',
    },
    {
        id: 7,
        name: 'ExpressJS',
        photoUrl: '/expressjs.png',
    },
    {
        id: 9,
        name: 'GitHub',
        photoUrl: '/github.png',
    },
    {
        id: 16,
        name: 'Tailwind CSS',
        photoUrl: '/tailwindcss.png',
    }, 
 ]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json(skills)
}

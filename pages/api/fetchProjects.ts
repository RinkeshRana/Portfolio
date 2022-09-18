import type { NextApiRequest, NextApiResponse } from 'next'

const projects = [
    {
        id: 1,
        name: 'GIGL Premium',  
        description:"A subscription based app which allows users to listen premium audio books, i brought it's paid audiobooks for free. It is built with nextjs",
        photoUrl: '/gigl.png',
    },
    {
        id: 2,
        name: 'Notes App',
        description: 'A simple notes app built with nextjs and firebase. It have authentication and realtime database.',
        photoUrl: '/noteapp.png',
    },
    {
        id: 3,
        name: 'Deliveroo Clone',
        description: 'A react native app clone of Deliveroo app.',
        photoUrl: '/deliveroo.png',
    },
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json(projects)
}
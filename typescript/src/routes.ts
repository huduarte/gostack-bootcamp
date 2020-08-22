import { Request, Response } from 'express'
import CreateUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response){
    const user = CreateUser({
        email: 'hudsoneeto@outlook.com',
        password: '123456',
        techs: [
            'node',
            'react',
            'react-native',
            {title: 'javascript', experience: 100}
        ]
    })

    return response.json({message: 'Hello World'})
}


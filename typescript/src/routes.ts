import { Request, Response } from 'express'
import Create from './Create'

export function createCourse(request: any, response: any) {
    Create.execute({ name: "Node", duration: 1, educator: "Luis" })

    return response.send()
}
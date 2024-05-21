import { ExpressMiddlewareInterface } from 'routing-controllers'
import { Request, Response } from 'express'
import { Service } from 'typedi'

@Service()
export class AllControllerActionsMiddleware implements ExpressMiddlewareInterface {
    use(request: Request, response: Response, next?: Function): any {
        next
    }
}
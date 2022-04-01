// Ext modules
import { Express, Request, Response } from "express"

const routes = (app: Express) => {
    // Healthcheck
    app.get("/", (req: Request, res: Response) => {
        res.sendStatus(200)
    })
}

export { routes }

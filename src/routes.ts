// Ext modules
import { Express, Request, Response } from "express"

// Int modules
import { createNinjaHandler } from "./controllers/ninja.controller"

const routes = (app: Express) => {
    // Healthcheck
    app.get("/", (req: Request, res: Response) => {
        res.sendStatus(200)
    })

    // Get list of ninjas
    app.get('/ninjas', (req: Request, res: Response) => {
        res.send("")
    })

    // Add ninja
    app.post('/ninjas', createNinjaHandler)

    // Update ninja
    app.put('/ninjas/:id', (req: Request, res: Response) => {
        res.send("")
    })

    // Delete ninja
    app.delete('/ninjas/:id', (req: Request, res: Response) => {
        res.send("")
    })
}

export { routes }

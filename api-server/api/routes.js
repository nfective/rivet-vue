import { Router } from 'express';
const router = Router();

const json = [{ user: 1, first_name: "John", last_name: "Doe" }, { user: 2, first_name: "Jane", last_name: "Doe" }, { user: 3, first_name: "John", last_name: "Smith" }, { user: 1, first_name: "Janette", last_name: "Smith" }]

const text_json = "[{ 'user': 1, 'first_name': 'John', 'last_name': 'Doe'}, { 'user': 2, 'first_name': 'Jane', 'last_name': 'Doe' }]"

router.get('/json', (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(json))
})

router.post('/json', (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(json))
})

router.post('/json', (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(json))
})

router.put('/json', (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(json))
})

router.patch('/json', (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(json))
})

router.delete('/json', (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(json))
})

router.head('/json', (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(json))
})

router.options('/json', (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(json))
})



router.get('/text', (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.send(text_json)
})

router.post('/text', (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.send(text_json)
})

router.put('response', (req, res) => {
    res.end(response)
})

router.patch('response', (req, res) => {
    res.end(response)
})

router.delete('response', (req, res) => {
    res.end(response)
})

router.head('response', (req, res) => {
    res.end(response)
})

router.options('response', (req, res) => {
    res.end(response)
})

export default router
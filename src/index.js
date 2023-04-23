const app = require('express')()

app.get('/', (req, res) => {
    res.send('Hello world')
})

const port = 8080

app.listen(port, () => console.log(`App listening on port http:\\localhost:8080`))
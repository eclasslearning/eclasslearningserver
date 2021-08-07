const expresss = require('express')

const app = expresss();


app.get("/", function (res, req){
    res.send('working')
})

app.listen(process.env.PORT || 4000)
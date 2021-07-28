const { response } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let rappers ={
    'shofu':{
        'age': 30,
        'birthName': "Kunnu Shofu",
        'birthLocation': 'London, England'
    },
    'vi seconds':{
        'age': 29,
        'birthName': "Stefan ???",
        'birthLocation': 'Brooklyn, New York'
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
} 

app.get('/', (request, response) => {
    response.sendFile(__dirname + "/index.html")
})

app.get('/api/rappers/:rapperName', (request, response)=>{
    const rapName = request.params.rapperName.toLowerCase()
    console.log(rapName)
    if(rappers[rapName]){
    response.json(rappers[rapName])
    }else{
        response.json(rappers['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
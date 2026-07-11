import express from 'express';
const app = express();

app.get('/' , (req,res) => {
    res.send('server is ready!');
})

const port = process.env.PORT || 4000;

app.get('/proxy/jokes' , (req,res) => {
    const jokes = [
        {
            id: 1,
            title: "Joke1",
            content: "I am a noob!"
        },
        {
            id: 2,
            title: "Joke2",
            content: "Bigger noob than 1"
        },
        {
            id: 3,
            title: "Joke3",
            content: "Bigger than 2"
        },
        {
            id: 4,
            title: "Joke4",
            content: "BIGGEST!"
        }
    ]
    res.send(jokes);
})

app.listen(port , () => {
    console.log(`App is running at ${port}`);
})
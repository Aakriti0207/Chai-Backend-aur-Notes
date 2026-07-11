require('dotenv').config()

console.log("Aakriti Arya - Backend!")

const express = require('express');
const app = express();

const port = 5137;

const githubData = {
  "login": "Aakriti0207",
  "id": 176612144,
  "node_id": "U_kgDOCobjMA",
  "avatar_url": "https://avatars.githubusercontent.com/u/176612144?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Aakriti0207",
  "html_url": "https://github.com/Aakriti0207",
  "followers_url": "https://api.github.com/users/Aakriti0207/followers",
  "following_url": "https://api.github.com/users/Aakriti0207/following{/other_user}",
  "gists_url": "https://api.github.com/users/Aakriti0207/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Aakriti0207/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Aakriti0207/subscriptions",
  "organizations_url": "https://api.github.com/users/Aakriti0207/orgs",
  "repos_url": "https://api.github.com/users/Aakriti0207/repos",
  "events_url": "https://api.github.com/users/Aakriti0207/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Aakriti0207/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Aakriti Arya",
  "company": null,
  "blog": "https://aakriti-arya-portfolio.vercel.app/",
  "location": "Delhi,India",
  "email": null,
  "hireable": true,
  "bio": "🎓 Second-year B.Tech CSE student at BPIT, IPU  \r\n🌱 Currently learning: C++, Data Structures, and Web Development  ",
  "twitter_username": null,
  "public_repos": 28,
  "public_gists": 0,
  "followers": 7,
  "following": 17,
  "created_at": "2024-07-25T16:51:32Z",
  "updated_at": "2026-06-12T04:03:17Z"
}

app.get('/' , (req , res) => {
    res.send("Hello World!");
})

app.get('/aakriti' , (req , res) => {
    res.send('<h1>Aakriti - Backend</h1>');
})

app.get('/github' , (req,res) => {
    res.json(githubData);
})
app.listen(process.env.PORT , (req,res) => {
    console.log(`App is running on port - ${port}`);
})

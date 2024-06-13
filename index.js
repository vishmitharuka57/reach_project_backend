const express = require('express')
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

//tharukavishmipk24
//80M7NoyEyevRgWGB

app.use(express.json());
app.use(cors());

async function main() {
  await mongoose.connect('mongodb+srv://tharukavishmipk24:80M7NoyEyevRgWGB@blossom-grove-react-app.mtdpgij.mongodb.net/blossom-grove-react-app?retryWrites=true&w=majority&appName=blossom-grove-react-app');

  app.get('/', (req, res) => {
    res.send(' Blossom Grove Garden Server is running!')
  })
}
main().then(() => console.log("Mongodb Connected successfully!")).catch(err => console.log(err));

const ItemRoutes = require("./src/routes/ItemRoute");
app.use('/api', ItemRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
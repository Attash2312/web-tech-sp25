let express = require('express');
let server = express();

server.use(express.static('public'));
server.set ('view engine', 'ejs');

server.get('/CV', (req, res) => {
    res.render("cv");

});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
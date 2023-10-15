const axios = require('axios')
const favMap = new Set();
exports.search = async (req, res) => {
    const query = req.query.query;
    try {
        const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=53e46aae&s=${query}`);

        if (response.data.Search) {
            mov = response.data.Search;
        }

        if(mov && mov.length > 0) {
            mov = mov.map((item) => {
                item.fav = favMap.has(item.imdbID)
                return item;
            })
        }
        return res.send({
            message: 'Success',
            data: mov,
        });
    } catch (error) {
        console.error("Error:", error.message);
        return res.status(500).send({
            message: 'Internal Server Error',
        });
    }
}   



exports.favorite = async (req, res) => {
    const id = req.query.imdb;
    if(!id) {
        res.status(400).send({
            message: "ID NOT FOUND"
        })
    }
    let msg;
    if(favMap.has(id)) { 
        favMap.delete(id);
        msg = 'removed from favs'
    }
    else {
        favMap.add(id);
        msg = "Added to favs"
    }
    console.log(favMap)
    return res.send({
        message : msg
    })
}
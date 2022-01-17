function handleErr(err, req, res, next){
    console.log(err);
    res.status(500).send('An internal server error ocurred');
}

module.exports = handleErr
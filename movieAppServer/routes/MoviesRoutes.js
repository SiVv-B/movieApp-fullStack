const express=require('express');
const router=express.Router();
const {postMovie,getAllMovies,deleteMovie,updateMovie,getOneMovie,geOneMovieAddedID,geOneMovieTitle, searchMovie}=require('../Controllers/MovieController') 
router.post('/movie',postMovie)
router.get('/movie',getAllMovies)
router.delete('/movie/:id',deleteMovie)
router.put('/movie/update/:id',updateMovie)
router.get('/movie/:id',getOneMovie)
router.get('/movie/addedID/:addedID',geOneMovieAddedID)
router.get('/movie/title/:title',geOneMovieTitle) 
router.post('/movie/search',searchMovie)
router.get('/test',(res,req)=>{
    console.log('hello from test')
    res.status(200).json({ message: "hello from test" });
})



module.exports=router
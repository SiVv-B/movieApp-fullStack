const express=require('express');
const router=express.Router();
const {postMovie,getAllMovies,deleteMovie,updateMovie,getOneMovie,geOneMovieAddedID}=require('../Controllers/MovieController') 
router.post('/movie',postMovie)
router.get('/movie',getAllMovies)
router.delete('/movie/:id',deleteMovie)
router.put('/movie/:id',updateMovie)
router.get('/movie/:id',getOneMovie)
router.get('/movie/:addedID',geOneMovieAddedID)


module.exports=router
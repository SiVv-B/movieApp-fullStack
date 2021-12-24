const mongoose = require("mongoose")
const MovieList = require("../models/MovieList")

const postMovie = async (request, response) => {
    const movie = request.body;
    try {
      const searchedMovie = await MovieList.findOne({ addedID: movie.addedID });
      if (searchedMovie) {
        return response
          .status(400)
          .json({ message: "this addedID already exist" });
      }
      const newMovie = await new MovieList({
        addedID: movie.addedID,
        title: movie.title,
        poster: movie.poster,
        year: movie.year,
        description: movie.description,
        trailer: movie.trailer,
      });
      await newMovie.save();
      response.status(200).json({ movie: newMovie });
    } catch (error) {
      response.status(500).json({ error: "This movie does not exist" });
    }
  };

  //update a movie 
  //I need request.params;
  //I need request.body;
  
   const updateMovie=async(request,response)=>{
    const id =request.params.id
    const newMovie=request.body
 try {
     const updatedMovie =await MovieList.findByIdAndUpdate(id,{...newMovie},{new:true})
     response.status(200).json({movie:updatedMovie})
 } catch (error) {
     response.status(500).json({error:'update failed'})
 }
} 

//const updateMovie = async(req,res) =>{
  //try {
    /* first we need to find the movie: */
    //const findMovie= await MovieList.findById(req.params.id)
      /* tehn we assign the body request: */
    //Object.assign(findMovie, req.body)
       /* we save what we wrote in the body before to send the response */
    //findMovie.save()
    //res.send({data: findMovie})
  //} catch (error) {
    //res.status(500).json({error:'update failed'})
 // }
//}






  //get request
  //no need to teh request body
  //no nee to request.paramps
  const getAllMovies = async (request, response) => {
    try {
      const movies = await MovieList.find();
      console.log('found all movies')
    } catch (error) {
        console.log('failed')
      response.status(500).json({ error: "failed to get all movies" });
    }
  };
  //delete request
  //i need request.params
  const deleteMovie = async (request, response) => {
    try {
      const id = request.params.id;
      await MovieList.findByIdAndDelete(id);
      response
        .status(200)
        .json({ message: "the movie has been succeffly deleted" });
    } catch (error) {
      response.status(500).json({ error: "delete has been  failed" });
    }
  };

  //get one movie by ID
  const getOneMovie=async(request,response)=>{
      const id =request.params.id
      try {
          const movieFound=await MovieList.findById(id);
          response.status(200).json({movie:movieFound})
  
      } catch (error) {
          response.status(500).json({error:'failed to get the movie'})
      }
  }

  //get one specefic movie by using addedID
  const geOneMovieAddedID=async(request,response)=>{
    const id =request.params.addedID
    console.log(id)
    try {
        const movieFound=await MovieList.findOne({addedID:id});
        response.status(200).json({movie:movieFound})

    } catch (error) {
      console.log('hello failed')
        response.status(500).json({error:'failed to get a movie by addedID'})
    }
}

//get a movie by titile
 const geOneMovieTitle=async(request,response)=>{
    const title =request.params.title
    try {
        const movieFound=await MovieList.findOne({title:title});
        response.status(200).json({movie:movieFound})
    } catch (error) {
      console.log('hello failed')
        response.status(500).json({error:'failed to get a movie by title'})
    }
}


//(POST)search a movie by title
const searchMovie=async(request,response)=>{
  const search=request.body;
  try {
      const movies =await MovieList.find();
      const filteredMovies= await movies.filter((elt)=>elt.title.toLowerCase().includes(request.body.search))
      response.status(200).json({movies:filteredMovies})
  } catch (error) {
      console.log(error)
  }
}
 
module.exports = { postMovie,getAllMovies,deleteMovie,updateMovie,getOneMovie,geOneMovieAddedID, geOneMovieTitle, searchMovie }
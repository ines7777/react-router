import { Button, Rating, TextField } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    
  };
const AddMovie = ({movies, setMovies}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const[addTitle,setAddTitle]= useState("");
    const[addDesc,setAddDesc]= useState("");
    const[addPosterUrl,setAddPosterUrl]= useState("");
    const[addRating,setAddRating]= useState(0);

    const AddNewMovie= () =>{
       setMovies([
         ...movies,
         {
            id: Math.random(),
            title: addTitle,
            description: addDesc,
            posterUrl:addPosterUrl,
            rating:addRating
         }
       ])

       handleClose()
    }


  return (
    <div>
      <Button onClick={handleOpen} variant="contained">Add Movie</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add a new movie
          </Typography>
          <TextField fullWidth onChange={(e)=> {setAddTitle(e.target.value)}} label="title" variant="standard" />
          <TextField fullWidth onChange={(e)=> {setAddDesc(e.target.value)}} label="description" variant="standard" />
          <TextField fullWidth onChange={(e)=> {setAddPosterUrl(e.target.value)}} label="posterUrl" variant="standard" />
          <Rating
          name="simple-controlled"
          value={addRating}
          onChange={(event, newValue) => {
            setAddRating(newValue);
  }}
          
/>
<hr />
          <Button onClick={AddNewMovie} variant="contained">Add Movie</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default AddMovie

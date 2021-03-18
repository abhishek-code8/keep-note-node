const { response } = require('express');
const express = require('express');
const router = express.Router();
const NoteDao = require('./notes.dao');

// router.get('/', (req,res)=>{

//     NoteDao.getNotes().then((response)=>{res.status(response.status).send(response)});


// });

router.post('/', async(req,res)=>{
    try{
    await NoteDao.addNotes(req.body,req.query.userId).then((response)=>{res.status(response.status).send(response.noteInfo)});
    }catch(err){
        res.json({message:err});
    }


});


router.put('/:noteId', async(req,res) => {
    try{
    await NoteDao.updateNotes(req.body,req.params.noteId).then((response)=>{res.status(response.status).send(response.returnNote)});
    }catch(err){
        res.json({message:err});
    }
});

// router.delete('/noteId', async (req,res)=>{
//     try{const newJson = await NoteDao.deleteNote(req.params.noteId);
//     res.json(newJson);
//     }catch(err){
//         res.json({message:err});
//     }
// });

router.get('/', (req,res)=>{
    try{
    NoteDao.getNoteByUserID(req.query.userId).then((response)=>{res.status(response.status).send(response.note)
        });
    
    }catch(err){
        res.json({message:err});
    }
});


module.exports = router;
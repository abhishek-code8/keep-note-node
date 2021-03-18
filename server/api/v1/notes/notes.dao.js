const NoteModule = require('./notes.entity');
const {
    uuid,v4
} = require('uuidv4');



const getNotes = () => {
    return new Promise((resolve,reject)=>{
        NoteModule.find({}, function(err,noteList){
            if(err){
                reject({message:'Internal Server Error',status:500});
            }else{
                resolve({message:"List Obtained",notes:noteList,status:200})
            }
        })
    })
}

const getNoteByUserID = (userIdParam) =>{
    return new Promise ((resolve,reject)=>{NoteModule.find({userId:userIdParam},function(err,noteList){
        if(err){
            reject({message:'Internal Server Error',status:500});
        }else{
            resolve({message:"List Obtained",note:noteList,status:200})
        }
    });})
    
}


const addNotes =  (notes,userIdParam) => {
        return new Promise((resolve,reject)=>{
            NewNote = new NoteModule;
            NewNote.noteId = uuid();
            NewNote.userId = userIdParam;
            NewNote.title = notes.title;
            NewNote.text = notes.text;
            NewNote.status = notes.status;
            NewNote.createOn = notes.createOn;
            NewNote.modifiedOn = notes.modifiedOn;
            Newnote = NewNote.save((error,addednote)=>{
                if(error){
                    reject({message:"Internal Server Error",status:500})
                }
                else{
                    resolve({message:"Added",noteInfo:addednote,status:201})
                }
            }
            );
        })

        

    }


const updateNotes =  (note,paramNoteId) => {
    return new Promise((resolve,reject)=>{
        NoteModule.updateOne({
            noteId: paramNoteId
        }, {
            $set: {
                title: note.title,
                text: note.text,
                status: note.status,
                modifiedOn : note.modifiedOn
            }
        },function(err,noteObj){
            if(err){
                reject({message:'internal server error',status:500});
              }
              else{
                  resolve({message:"Updated", returnNote:note,status:200});
                  console.log(note.text);
              }
        });
    })
        


}


const deleteNote = async (noteIdParam) => {
 return new Promise ((resolve,reject)=>{
    NoteModule.remove({
        noteId: noteIdParam
    },function(err,noteObj){
        if(err){
            reject({message:'internal server error',status:500});
          }
          else{
              resolve({message:"Updated",Note:noteObj, status:200});
          }
    });
 })
}


module.exports = {
    addNotes,
    getNotes,
    deleteNote,
    updateNotes,
    getNoteByUserID
}
import * as React from 'react';
import Notes from './Notes';
import Note from './interface';

interface INotesListProps {
    notes: Note[];
    setNotes :React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FunctionComponent<INotesListProps> = ({ notes , setNotes }) => {
    const handleDelete =(id : string)=>{
        setNotes (notes.filter(note => note.id !== id))
    }
    const RenderNotes = () => {
        return notes.map(note => (
            <Notes key={note.id} note={note} handleDelete={handleDelete} />
        ));
    };

    return (
        <>
            <h1>My Notes</h1>
            <div>{RenderNotes()}</div>
        </>
    );
};

export default NotesList;


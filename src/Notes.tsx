import * as React from 'react';
import Note from './interface';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

interface INotesProps {
    note : Note,
    handleDelete : (id : string) => void
    
}

const Notes: React.FC<INotesProps> = ({note , handleDelete}) => {
    return (
            <Card className='Card' style={{backgroundColor : note.color }}>
                <Card.Body>
                    <Card.Title>{note.title}</Card.Title>
                    <Card.Text>{note.text}</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">{note.date}</Card.Subtitle>
                    <Button className='mt-3' variant="danger" onClick={()=> handleDelete(note.id)}> Delete </Button>
                </Card.Body>
            </Card>
    )
};
export default Notes;

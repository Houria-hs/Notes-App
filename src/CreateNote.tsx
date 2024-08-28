import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Note from './interface';
import { Alert } from 'react-bootstrap';


interface ICreateNoteProps {
    notes : Note[]
    setNotes :React.Dispatch<React.SetStateAction<Note[]>>
}


const CreateNote: React.FunctionComponent<ICreateNoteProps> = ({notes, setNotes}) => {

    const [error , setError] = React.useState <string>("")

    const TitleRef = React.useRef<HTMLInputElement | null>(null);
    const TextRef = React.useRef<HTMLTextAreaElement | null>(null);
    const ColorRef = React.useRef<HTMLInputElement | null>(null);
    
    const handleSubmit = (e:React.FormEvent <HTMLFormElement>) :void  =>{
        e.preventDefault()
        if(TitleRef.current?.value === "" || TextRef.current?.value === "" ){
            return setError('All fileds are mandatory');
        }
        setError("");
        setNotes([...notes,{
            id : (new Date()).toString() ,
            title : (TitleRef.current as HTMLInputElement).value ,
            text :(TextRef.current as HTMLTextAreaElement).value ,
            color : (ColorRef.current as HTMLInputElement).value ,
            date : (new Date()).toString() 
        }])

        TitleRef.current!.value = "";
        TextRef.current!.value = "";
    }

    return (
    <>
    <h1>Create Note</h1>
    {error && <Alert className='bg-warning'>{error}</Alert>}
    <Form className='form' onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="Text" placeholder="Enter Title For The Note" ref={TitleRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Write Your Text</Form.Label>
            <Form.Control placeholder="enter your Note" as="textarea" rows={3} ref={TextRef} />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor='colorInput'>Notes's color</Form.Label>
            <Form.Control type="color" id='ColorInput' defaultValue='#dfdfdf' title='Choose Your Color' ref={ColorRef} />
        </Form.Group>
        <Button className='Btn' type="submit"> Create</Button>
    </Form>
    </>
);
};

export default CreateNote;

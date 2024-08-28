import react from "react";
import Header from "./header";
import NotesList from './notesList';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Note from "./interface"
import CreateNote from './CreateNote';


function App() {
  const [Notes, setNotes] = react.useState<Note[]>([]);
  return (
    // <NotesList notes={Notes} setNotes={setNotes} />
    <>
    <Header/>
    <Container className="container">
      <Row>
        <Col className="NoteList">
        { Notes.length === 0 ? <p>There is no note yet </p> : <NotesList notes={Notes} setNotes={setNotes} /> }
        </Col>
      </Row>
      <Row>
        <Col className="CreateNote"> <CreateNote notes={Notes} setNotes={setNotes} /> </Col>
      </Row>
    </Container>
    </>
  );
}
export default App;

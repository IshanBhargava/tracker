import { useState } from "react";
import "./App.css";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Home() {
    const [teamNum,  setTeamNum] = useState(0);
    const [week,  setWeek] = useState(0);
    const [members, setMembers] = useState("");
    const [progress, setProgress] = useState("");

    const progressCollectionRef = collection(db, "progress");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({
            teamNumber: teamNum,
            weekNum: week,
            teamMembers: members,
            teamProgress: progress
        });
        await addDoc(progressCollectionRef, {
            teamNumber: teamNum,
            weekNum: week,
            teamMembers: members,
            teamProgress: progress
        })
        e.target.reset();
    }

    return (
        <div className="App">
            <div className="formholder">
                <Card className="progressCard">
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="teamNumber">
                                <Form.Label>Team Number</Form.Label>
                                <Form.Control required as="input" onChange={(e) => setTeamNum(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="members">
                                <Form.Label>Member Names</Form.Label> <br />
                                <Form.Text muted>Example: Joe(123345), Jane(678901)</Form.Text>
                                <Form.Control required as="textarea" onChange={(e) =>  setMembers(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="weekNumber">
                                <Form.Label>Week</Form.Label>
                                <Form.Control required as="input" onChange={(e) =>  setWeek(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="progress">
                                <Form.Label>Progress</Form.Label>
                                <Form.Control required as="textarea" onChange={(e) =>  setProgress(e.target.value)}/>
                            </Form.Group>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Home;

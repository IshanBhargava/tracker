import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Home() {
    const [teamNum, setTeamNum] = useState(0);
    const [week, setWeek] = useState(0);
    const [members, setMembers] = useState("");
    const [progress, setProgress] = useState("");
    const [prog, setProg] = useState([]);

    const progressCollectionRef = collection(db, "progress");

    const getProg = async () => {
        const data = await getDocs(progressCollectionRef);
        setProg(data.docs.map((doc) => doc.data()));
    };

    useEffect(() => {
        getProg();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const match = prog.filter((value) => value.teamNumber === teamNum);

        if (week === "1") {
            if (match.length === 0) {
                alert("Added Progress");
                await addDoc(progressCollectionRef, {
                    teamNumber: teamNum,
                    weekNum: week,
                    teamMembers: members,
                    teamProgress: progress
                })
            } else {
                if (match.filter((d) => d.weekNum === week)) {
                    alert(
                        `You or your team member has already logged the progress for week ${week}`
                    );
                }
            }
        } else {
            if (match.length === 0) {
                alert("Please add an update for week  1 first.");
            } else {
                const reg = "[0-9]{8}";
                let old_matches = match[0].teamMembers.matchAll(reg);
                let new_matches = members.matchAll(reg);
                let final_old = [];
                let final_new = [];
                for (const m of old_matches) {
                    final_old.push(m[0]);
                }
                for (const m of new_matches) {
                    final_new.push(m[0]);
                }
                final_old.sort();
                final_new.sort();

                if (
                    final_new.length !== final_old.length ||
                    !final_new.every((v, i) => v === final_old[i])
                ) {
                    alert(
                        "There is some discrepency in the member names or id. Please recheck your UMass IDs or if have added all your team members."
                    );
                } else {
                    alert("Added Progress");
                    await addDoc(progressCollectionRef, {
                        teamNumber: teamNum,
                        weekNum: week,
                        teamMembers: members,
                        teamProgress: progress
                    })
                }
            }
        }

        e.target.reset();
    };

    return (
        <div className="App">
            <div className="formholder">
                <Card className="progressCard">
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="teamNumber">
                                <Form.Label>Team Number</Form.Label>
                                <Form.Control
                                    required
                                    as="input"
                                    onChange={(e) => setTeamNum(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="members">
                                <Form.Label>Member Names</Form.Label> <br />
                                <Form.Text muted>
                                    Example: Joe(123345), Jane(678901)
                                </Form.Text>
                                <Form.Control
                                    required
                                    as="textarea"
                                    onChange={(e) => setMembers(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="weekNumber">
                                <Form.Label>Week</Form.Label>
                                <Form.Control
                                    required
                                    as="input"
                                    onChange={(e) => setWeek(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="progress">
                                <Form.Label>Progress</Form.Label>
                                <Form.Control
                                    required
                                    as="textarea"
                                    onChange={(e) =>
                                        setProgress(e.target.value)
                                    }
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Home;

import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { db } from "./firebase";
import {
    collection,
    getDocs
} from "firebase/firestore";

function Progress() {

    const [prog, setProg] = useState([]);
    const progressCollectionRef = collection(db, "progress");
    const ar = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    const week = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

    const getProg = async () => {
        const data = await getDocs(progressCollectionRef);
        let dta = data.docs.map((doc) => doc.data())
        dta.forEach(obj => {
            obj.weekNum = Number(obj.weekNum);
            obj.teamNumber = Number(obj.teamNumber);
        });
        setProg(dta)
    };

    useEffect(() => {
        getProg()
    }, [])

    return (
        <div className="App">
            <div>
            <Table responsive bordered>
                <thead>
                    <tr>
                    <th>Week</th>
                    {Array.from(ar).map((i, index) => (
                        <th key={index}>Team {i}</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {Array.from(week).map((i, rowIndex) => (
                    <tr key={rowIndex}>
                        <td>{i}</td>
                        {
                            Array.from(ar).map((j,colIndex) => {
                                const matchingData = prog.find(
                                    (item) => (item.weekNum === i) && (item.teamNumber === colIndex + 1)
                                );
                                return (
                                    <td key={colIndex}>
                                    {matchingData ? matchingData.teamProgress : ''}
                                    </td>
                                );
                            })
                        }
                    </tr>
                    ))}
                </tbody>
            </Table>
            </div>
        </div>
    )
}
 
export default Progress;
import { useState } from "react";

const DisplayList = (props) => {

    const [isDone, setIsDone] = useState(false)

    const onChangeHandler = (idx, boolean) => {
        
        props.updateStatus(idx, boolean)
    }
    const deleteHandler = (delIdx) => {
        props.deleteTask(delIdx);

    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Goal</th>
                        <th>Completed</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.taskList.map((eachTask, idx) => {

                            return(
                                <tr key={idx}>
                                    {eachTask.isDone ? <th style={{textDecoration: 'line-through'}}>{eachTask.description}</th> : <th>{eachTask.description}</th>}
                                    <th>
                                        <input type="checkbox" onChange={(e) => onChangeHandler(idx, e.target.checked)} checked={eachTask.isDone} />
                                    </th>
                                    <th><button onClick={() => deleteHandler(idx)} className="btn btn-danger">Delete</button> </th>

                                </tr>
                            )
                        }
                        )
                    }


                </tbody>
            </table>



        </div>
    )


}
export default DisplayList;
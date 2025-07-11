import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {

    const [value, setValue] = useState("View Assignments");
    const [assignmentList, setAssignmentList] = useState([]);
    const [managableAssignments, setManagableAssignments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState({});

    const contextValue = {
        value, setValue,
        assignmentList, setAssignmentList,
        managableAssignments, setManagableAssignments,
        loading, setLoading,
        userData, setUserData
    };

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
import { createContext, createSignal, useContext } from "solid-js";

const UserContext = createContext();

export function UserContextComponent(props) {
    const [reportHeader, setreportHeader] = createSignal({ 
        year: 2024, 
        region: 1,
        agent: 'Super Beatle'
     })

    const updateAge = (updateByValue) => {
        setUserDetails(() => {
            return {
                ...userDetails(),
                age: userDetails().age + updateByValue
            }
        })
    }
    const contextData = {
        userDetails,
        updateAge
    }
    return (
        <UserContext.Provider value={contextData}>
            {props.children}
        </UserContext.Provider>
    );
}
export function contextConsumer() {
    return useContext(UserContext);
};
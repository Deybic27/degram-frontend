import { createContext, useState } from "react"
import Create from "./Create"

const CreatePostContext = createContext()

function CreatePost() {
    const [step, setStep] = useState(<Create context={CreatePostContext} />)
    return (
        <CreatePostContext.Provider value={{setStep}}>
            {step}
        </CreatePostContext.Provider>
    )
}

export default CreatePost
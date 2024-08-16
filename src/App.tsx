import { useMultistepForm } from "./useMultistepForm.ts";
import { UserForm } from "./UserForm.tsx";
import { AddressForm } from "./AddressForm.tsx";
import { AccountForm } from "./AccountForm.tsx";
import {FormEvent, useState} from "react";

type FormData = {
    firstName: string
    lastName: string
    age: string
    street: string
    city: string
    state: string
    zip: string
    email: string
    password: string
}

const INITIAL_DATA: FormData = {
    firstName: "",
    lastName: "",
    age: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    password: "",
}
function App() {
    const [data, setData] = useState(INITIAL_DATA)

    function updateFields(fields: Partial<FormData>) {
        setData(prev => {
            return { ...prev, ...fields }
        })
    }

    const { steps,
        currentStepIndex,
        step,
        isFirstStep,
        isLastStep,
        back,
        next
    } = useMultistepForm([
        <UserForm { ...data } updateFields={updateFields}/>,
        <AddressForm { ...data } updateFields={updateFields}/>,
        <AccountForm { ...data } updateFields={updateFields}/>,
    ])

    const onSubmitHandler = (e: FormEvent) => {
        e.preventDefault()
        if (!isLastStep) return next()
        alert("Successful Account Creation")
    }

    return (
      <div className={"App"}>
          <form onSubmit={onSubmitHandler}>
              <div className={"form-position"}>
                  {currentStepIndex + 1} / {steps.length}
              </div>
              {step}
              <div className={"button-block"}>
                  {!isFirstStep && (
                      <button type="button" onClick={back}>
                          Back
                      </button>
                  )}
                  <button type="submit">
                      {isLastStep ? "Finish" : "Next"}
                  </button>
              </div>
          </form>
      </div>
)
}

export default App

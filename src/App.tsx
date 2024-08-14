import { useMultistepForm } from "./useMultistepForm.ts";

function App() {

    const { steps, currentStepIndex} = useMultistepForm([
        <div>One</div>,
        <div>Two</div>,
    ])


    return (
      <div
          style={{
              position: "relative",
              background: "white",
              border: "1px solid black",
              padding: "2rem",
              margin: "1rem",
              borderRadius: ".5rem",
              fontFamily: "Arial",
              maxWidth: "max-content",
          }}
      >
    <form>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
            {currentStepIndex + 1} / {steps.length}
        </div>
    </form>
  </div>)
}

export default App

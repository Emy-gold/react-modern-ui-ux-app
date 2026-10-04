export const codeExemples = {

    "App.jsx": `
    
    import { useEffect } from "react";
    import { useState } from "react";
    
    function App() {
    const [code, setCode] = useState("");

    const handleAiCompletion = async () => {
        const suggestion = await CodeFlow.complete(code);
        setCode(suggestion):
        };

        return (

            <div className="app">
                <CodeEditor
                    onChange={setCode}
                    onAi={handleAICompletion}
                />
            </div>
        ):
    }
    `,
    "Hello.jsx": `
    
    import { useEffect } from "react";
    import { useState } from "react";
    
    function App() {
    const [code, setCode] = useState("");

    const handleAiCompletion = async () => {
        const suggestion = await CodeFlow.complete(code);
        setCode(suggestion):
        };

        return (

            <div className="app">
                <CodeEditor
                    onChange={setCode}
                    onAi={handleAICompletion}
                />
            </div>
        ):
    }
    `,
    "Navbar.jsx": `
    
    import { useEffect } from "react";
    import { useState } from "react";
    
    function App() {
    const [code, setCode] = useState("");

    const handleAiCompletion = async () => {
        const suggestion = await CodeFlow.complete(code);
        setCode(suggestion):
        };

        return (

            <div className="app">
                <CodeEditor
                    onChange={setCode}
                    onAi={handleAICompletion}
                />
            </div>
        ):
    }
    `
}
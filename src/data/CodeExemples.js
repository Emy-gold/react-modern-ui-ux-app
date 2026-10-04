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
    "Hero.jsx": `
    import { useEffect } from "react";
    import { useState } from "react";
    
    function Hero() {
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
    
    function Navbar() {
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
};

export const floatingCards = {

    "App.jsx": {
        bgColor: "bg-blue-500/20",
        iconColor: "text-blue-400",
        textColor: "text-blue-200",
        controllerColor: "text-blue-300",
        icon: "AI",
        title: "Smart Completion",
        content: "AI-powered code suggestions in real-life",
    },
        "Hero.jsx": {
        bgColor: "bg-purple-500/20",
        iconColor: "text-purple-400",
        textColor: "text-purple-200",
        controllerColor: "text-purple-300",
        icon: "⚡️",
        title: "Auto Animation",
        content: "Dynamic typing effects generated automatically",
    },
        "Navbar.jsx": {
        bgColor: "bg-emerald-500/20",
        iconColor: "text-emerald-400",
        textColor: "text-emerald-200",
        controllerColor: "text-emerald-300",
        icon: "🔍",
        title: "Smart Search",
        content: "Intelligent code search across your project",
    }
};
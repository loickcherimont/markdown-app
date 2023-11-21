// Render for Markdown written in Editor
export function Reader({ children }) {
    return <div className="reader" style={{ width: "200px", height: "50px", border: "1px solid" }}>
        {children}
    </div>
}
// Writing part for Markdown
export function Editor({ setText }) {

    // Handlers
  const handleChange = (e) => {
    setText(e.target.value);
  }

    return <div>
        <label htmlFor="editor">Editor</label>
        <textarea id="editor" onChange={handleChange}/>
    </div>
}
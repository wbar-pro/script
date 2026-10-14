const editor = CodeMirror(document.getElementById("editor"), {
    value: '{\n  "Status": "Error",\n  "Message": "Request is denied"\n}',
    mode: "application/json",
    theme: "default",
    lineNumbers: true
});

editor.on("change", () => {
    const text = editor.getValue();
    const result = document.getElementById("result");

    try {
        JSON.parse(text);
        result.textContent = "JSON poprawny ✔";
        result.style.color = "#7CFC00";
    } catch (e) {
        result.textContent = "Błąd: " + e.message;
        result.style.color = "#ff6b6b";
    }
});

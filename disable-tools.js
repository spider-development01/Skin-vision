document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Disable right-click
});

document.addEventListener("keydown", function (e) {
    // Key combinations to block (mostly Windows/Linux)
    if (
        e.key === "F12" ||                      // F12
        (e.ctrlKey && e.shiftKey && e.key === "I") || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.key === "C") || // Ctrl+Shift+C
        (e.ctrlKey && e.shiftKey && e.key === "J") || // Ctrl+Shift+J
        (e.ctrlKey && e.key === "U") ||              // Ctrl+U
        (e.ctrlKey && e.shiftKey && e.key === "D") || // Ctrl+Shift+D (Dock)
        (e.ctrlKey && e.key === "R") ||              // Ctrl+R (reload)
        (e.ctrlKey && e.key === "P") ||              // Ctrl+P (open file)
        (e.ctrlKey && e.key === "O") ||              // Ctrl+O (open file)
        (e.ctrlKey && e.key === "F") ||              // Ctrl+F (find in panel)
        (e.ctrlKey && e.shiftKey && e.key === "F") ||// Ctrl+Shift+F (search all)
        (e.ctrlKey && e.key === "0") ||              // Ctrl+0 (zoom reset)
        (e.ctrlKey && e.key === "+") ||              // Ctrl++ (zoom in)
        (e.ctrlKey && e.key === "-") ||              // Ctrl+- (zoom out)
        (e.key === "Escape") ||                      // Escape (open drawer)
        (e.ctrlKey && e.shiftKey && e.key === "M") ||// Ctrl+Shift+M (device mode)
        (e.ctrlKey && e.shiftKey && e.key === "P") ||// Ctrl+Shift+P (command menu)
        (e.key === "F1")                             // F1 (help/settings)
    ) {
        e.preventDefault();
        alert("This shortcut is disabled.");
    }

    // Block Mac equivalents
    if (
        (e.metaKey && e.shiftKey && (["I", "C", "J", "M", "P", "D"].includes(e.key))) ||
        (e.metaKey && ["R", "F", "O", "P", "0", "+", "-"].includes(e.key)) ||
        (e.key === "F12" || e.key === "Escape" || e.key === "F1")
    ) {
        e.preventDefault();
        alert("This shortcut is disabled.");
    }
});

export function changeHttpPath(path) { 
    if (path && typeof window !== 'undefined' && window.location.protocol === 'https:') {
      path = path.replace(/^http:/, 'https:');
    }
    return path;
}


export function getBookmark(string) {
    // Decode HTML entities (for Node.js, requires importing a library)
    let str = string.replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;");

    // If running in a browser, use DOMParser
    if (typeof window !== "undefined") {
        let parser = new DOMParser();
        str = parser.parseFromString(str, "text/html").body.textContent;
    } else {
        // For Node.js, use an alternative approach
        str = str.replace(/&#039;/g, "'").replace(/&quot;/g, '"')
                 .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
                 .replace(/&amp;/g, "&");
    }

    let anlink = str.toLowerCase();
    anlink = anlink.replace(/'/g, ""); // Remove single quotes
    anlink = anlink.replace(/[^\w_\-]+/g, "-"); // Replace non-word characters with "-"
    anlink = anlink.replace(/-+/g, "-"); // Replace multiple "-" with a single "-"
    anlink = anlink.replace(/^-+/, ""); // Remove leading "-"
    anlink = anlink.replace(/-+$/, ""); // Remove trailing "-"

    return anlink;
}
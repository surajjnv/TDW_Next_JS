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

export function parseYtUrl(url = null, output = null) {
    if (!url) return false; 

    if (/^www/.test(url)) {
        url = 'https://' + url;
    } else if (/^youtube/.test(url)) {
        url = 'https://www.' + url;
    } else if (/^youtu\.be/.test(url)) {
        url = 'https://' + url;
    }

    const pattern = /^(?:https?:\/\/|\/\/)?(?:www\.|m\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|watch\/|v\/|.+;v=|watch\?v=|watch\?.+&v=|shorts\/|.+watch\?v=))([\w-]{11})(?![\w-])/;
    const matches = url.match(pattern);

    if (output === 'URL') {
        return matches ? url : false;
    } else {
        return matches ? matches[1] : false;
    }
}

export function changeHttpPath(path) {
    if (path && typeof window !== 'undefined' && window.location.protocol === 'https:') {
      path = path.replace(/^http:/, 'https:');
    }
    return path;
  }

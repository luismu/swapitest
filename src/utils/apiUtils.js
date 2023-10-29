//function to extract the id from URL of item.url
export function extractIdFromURL(url) {
    const match = url.match(/\/(\d+)\/$/);
    if (match) {
      return match[1];
    }
    return null;
  }
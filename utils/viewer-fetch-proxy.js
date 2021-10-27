export default async function fetcher(originalUrl) {
  let url = originalUrl;
  if (url.startsWith("microreact://")) {
    url = `/api/files/raw?${url.substr(13)}`;
  }
  if (url.startsWith("/")) {
    url = `https://microreact.org${url}`;
  }

  try {
    const content = await fetch(url);
    return content;
  }
  catch (error) {
    if (error instanceof TypeError) {
      console.debug("direct fetch failed, will try via proxy"); // eslint-disable-line no-console
      const content = fetch(`/api/files/proxy?url=${encodeURIComponent(url)}`);
      return content;
    }
    else {
      throw error;
    }
  }
}

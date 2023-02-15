// get blog content from gist link
const getBlog = async () => {
    const fileLink = `${baseUrl}/${branch}/${blogData.filePath}/blog.json`;
    const data = await (await getContentFromWeb(fileLink)).json();
    setBlogContent(data)
}

// fetch code
const fetchCode = async (path, isLocal) => {
    if (!isLocal) {
        const code = await (await getContentFromWeb(path)).text();
        setCode(code);
    } else {
        const code = await (await getContentFromWeb(`${baseUrl}/${branch}/${path}`)).text();
        setCode(code);
    }
}
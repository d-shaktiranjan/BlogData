// fetch content from web & return
export const getContentFromWeb = async (fileLink) => {
    const data = await fetch(fileLink);
    return data;
}

//  fetch blog list from web
const updateBlogList = async () => {
    const baseBurl = process.env.REACT_APP_BLOG_BASE_URL;
    const branch = process.env.REACT_APP_BLOG_BRANCH;
    const list = await (await getContentFromWeb(`${baseBurl}/${branch}/about.json`)).json();
    setBlogList(list);
}
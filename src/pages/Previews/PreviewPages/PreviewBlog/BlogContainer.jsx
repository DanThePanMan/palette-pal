import BlogIndex from "./BlogIndex"
import BlogArticle from "./BlogArticle"
import { useState } from "react"

function BlogContainer(){
    const [showItem, setShowItem] = useState(false)

    return(<>
        {showItem ? <BlogIndex setShowItem={setShowItem}/> : <BlogArticle setShowItem={setShowItem}/>}
    </>)
}

export default BlogContainer
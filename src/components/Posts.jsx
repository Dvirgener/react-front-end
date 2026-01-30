import { useEffect, useState } from "react"
import Post from "./Post";



export default function Posts() {

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetch("http://my-react-backend-api.test/api/v1/posts")
        .then((response) => response.json())

        .then((data) => {
            setPosts(data.posts)
            console.log(data)
    });
    }, []);

    return(
        <>
        <div className="flex flex-col gap-4">
        {posts.map((post) => (
                <Post key={post.id} post={post}/>
        ))}
        </div>


        </>
    )
}
import { useEffect, useState } from "react"
import Post from "./Post";
import { allPostAsync } from "../store/post-slice";
import { useDispatch, useSelector } from "react-redux";



export default function Posts() {

    const dispatch = useDispatch();
    const {posts, loading, error} = useSelector((state) => state.post);

    useEffect(() => {
    dispatch(allPostAsync());
    }, [dispatch]);

    return(
        <>
        <div className="flex flex-col gap-4 h-120 overflow-auto pe-5">
            {loading ? <span>Loading Content</span>:         posts.map((post) => (
                <Post key={post.id} post={post}/>
        ))} 

        </div>


        </>
    )
}
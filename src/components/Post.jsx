


export default function Post({post}){

    return (

        <div className="flex flex-col gap-3 w-120 border text-start py-3 rounded-md bg-gray-200 text-black shadow-lg outline-2 outline-gray-600 shadow-gray-500">
             <p className="text-lg font-bold ps-2">{post.title}</p>
             <div className="py-8 bg-gray-400 px-2">
                <p className="text-sm">{post.body}</p>
             </div>
             <div className="text-xs italic ms-5">
                <span> Date Posted: {post.created_at}</span>
             </div>
        </div>
    )
}
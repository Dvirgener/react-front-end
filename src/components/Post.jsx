


export default function Post({post}){

    return (

        <div className="flex flex-col gap-3 w-full border text-start p-3 rounded-md">
             <p className="text-xl font-bold">{post.title}</p>
             <div className="ms-5">
                <p>{post.body}</p>
             </div>
             <div className="text-xs italic ms-5">
                <span>{post.created_at}</span>
             </div>
        </div>
    )
}
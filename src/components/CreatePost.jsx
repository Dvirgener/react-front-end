

export default function CreatePost(){
    return (
        <form>
        <div className="w-full">
        <header className="font-bold mb-2 uppercase">Add a Post</header>
        <textarea className="textarea w-full" placeholder="Enter your post here..."></textarea>
        </div>
        <div className="flex justify-end gap-5 my-5">
            <button className="btn btn-soft btn-primary">Submit</button>
            <button className="btn btn-soft btn-warning">Clear</button>
        </div>
        </form>

    )
}
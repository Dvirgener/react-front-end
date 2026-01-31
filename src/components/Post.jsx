


export default function Post({post}){

    return (

<div className="card w-full bg-base-100 card-xs shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{post.title}</h2>
    <p>{post.body}</p>
    <div>
        <span>Date Posted: {post.created_at}</span>
    </div>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Edit</button>
      <button className="btn btn-secondary">Delete</button>
    </div>
  </div>
</div>


    )
} 
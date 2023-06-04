
const Card = ({post}) => {
    let maxTitleLength = 25;
    let maxBodyLength = 50;
    
    return (
        <div className="card">
          <img
            src={`https://picsum.photos/200?random=${post.id}`}
            alt={post.body}
          ></img>
          <p>UserId : {post.userId}</p>
          {post.title.length > maxTitleLength ? (
            <p>Title: {post.title.slice(0, maxTitleLength)}</p>
          ) : (
            <p>Title: {post.title}</p>
          )}
          {post.body.length > maxBodyLength ? (
            <p>Body: {post.body.slice(0, maxBodyLength)}Read More</p>
          ) : (
            <p>{post.body}</p>
          )}
        </div>
      );
}

export default Card;
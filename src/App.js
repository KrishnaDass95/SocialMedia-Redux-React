import { useEffect } from "react";
import { fetchPosts } from "./redux/actions/imageActions";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  let loading = useSelector((state) => state.loading);
  let data = useSelector((state) => state.data);
  let error = useSelector((state) => state.error);
  let maxTitleLength = 25;
  let maxBodyLength = 50;

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (loading) {
    return <div>Page is loading...</div>;
  }

  if (error) {
    return <div>Error fetching data, here's what went wrong {error}</div>;
  }

  return (
    <>
      <div className="header">
        <h1>Social Media App</h1>
      </div>

      <div className="post-grid">
        {data.map((post) => {
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
              {post.body.length > maxBodyLength ? (<p>Body: {post.body.slice(0, maxBodyLength)}Read More</p>) : (
                <p>{post.body}</p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;

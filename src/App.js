import { useEffect } from "react";
import { fetchPosts } from "./redux/actions/imageActions";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Components/Card";

const App = () => {
  let loading = useSelector((state) => state.loading);
  let data = useSelector((state) => state.data);
  let error = useSelector((state) => state.error);

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
          return <Card post={post}></Card>
        })}
      </div>
    </>
  );
};

export default App;

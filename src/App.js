import { useEffect } from "react";
import { fetchPosts } from "./redux/actions/imageActions";
import { useSelector, useDispatch } from "react-redux";

const App = () => {

  let loading = useSelector(state => state.loading);
  let data = useSelector(state => state.data);
  let error = useSelector(state => state.error);
  
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [])

  return(
    <h1>Testing</h1>
  )
}

export default App;
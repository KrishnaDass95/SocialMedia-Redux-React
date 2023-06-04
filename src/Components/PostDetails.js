import React from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

const PostDetails = ({ data }) => {

    const { id } = useParams();
    const post = data.find((item) => item.id == id )

    console.log("post details" ,post);

    if (!data || data.length === 0) {
        return <div>No posts available</div>;
      }

    if(!post){
        return(
            <div>Post not found!</div>
        )
    }

    return(
        <>
        <h1>Details page for for posts with ID {id}</h1>
        <Card post={post}/>
        </>
    )
}

export default PostDetails;
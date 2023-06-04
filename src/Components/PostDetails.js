import React from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

const PostDetails = () => {

    const { id } = useParams();

    return(
        <>
        <h1>Details page for for posts with ID {id}</h1>
        <Card />
        </>
    )
}
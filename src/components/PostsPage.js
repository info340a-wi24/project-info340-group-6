import React from "react";
import {GetPosts, AddNewPost} from "./fireBaseFunctions.js";

export default function PostsPage(props) {
    const data = props.data;
    const postArr = data.map((post) => {
        return <Post key={post.content} fire={post} />;
    })
    console.log(GetPosts());
    AddNewPost({Greeting: "Hello"});

    return (
        <div className="container">
            <div className="row justify-content-center">
                {postArr}
            </div>
        </div>
    )
}

function Post(props) {
    const fire = props.fire;

    return (
        <div className="post col-sm-6 col-md-4">
            {/*<img className='py-1' src={process.env.PUBLIC_URL + fire.source} alt={fire.alt} />*/}
            <h2>{fire.header}</h2>
            <em>{fire.date} - {fire.coordinates}</em>
            <p>{fire.content}</p>
        </div>
    )
}
import React from "react";

export default function PostsPage(props) {
    const data = props.data;
    const postArr = data.map((post) => {
        return <Post key={post.content} fire={post} />;
    })

    return (
        <div>
            {postArr}
        </div>
    )
}

function Post(props) {
    const fire = props.fire;

    return (
        <div className="post">
            <img src={fire.source} alt={fire.alt} />
            <h2>{fire.header}</h2>
            <em>{fire.date} - {fire.coordinates}</em>
            <p>{fire.content}</p>
        </div>
    )
}
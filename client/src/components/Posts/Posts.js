import React from 'react';
import {useSelector} from 'react-redux'
import Post from './Post/Post.js'
import useStyle from './styles'
const Form =()=>{
    const classes = useStyle();
    const posts = useSelector((state)=>state.posts);
    console.log(posts)
    return (
        <>
        <h1>Form</h1>
        <Post />
        <Post />
        </>
    )
}

export default Form
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams() //Указывает, какие параметры на странице, в нашем случае, это id
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async ()=> {
        const response = await PostService.getById(params.id)
        //Запрос с созданного нами хука PostService, функция getById
        setPost(response.data) //Помещаем полученный пост в state
    })

    const [fetchComments, isComLoading, comError] = useFetching(async ()=> {
        const response = await PostService.getCommentsByPostId(params.id)
        //Запрос комментариев
        setComments(response.data) //Помещаем полученный пост в state
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, []);

    return (
        <div>
            <h1>Страница поста с ID = {params.id}</h1>
            {isLoading
            ? <Loader/>
            :<div>{post.id}. {post.title}</div>
            }
            <h1>Комментарии</h1>
            {isComLoading
            ? <Loader/> : <div>
                    {comments.map(comm =>
                    <div style={{marginTop: "40px"}} key={comm.id}>
                        <h5>{comm.email}</h5>
                        <div>{comm.body}</div>
                    </div>)}
                </div>}
        </div>
    );
};

export default PostIdPage;

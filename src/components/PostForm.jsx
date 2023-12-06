import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault() //Предотвращаем дефолтное поведение браузера при submit
        //При нажатии на кнопку создать пост

        //console.log(bodyInputRef.current.value) //Так обращаемся к не управляемым компонентам, если обращаемся к ним с помощью useRef()
        const newPost = {
            ...post, id: Date.now(),
        }
        // setPosts([...posts, {...post, id: Date.now()}]) //Мы не изменяем состояние напрямую, а вызываем функцию setPosts и разворачиваем массив постов и добавляем в него новый пост
        // setTitle('')
        // setBody('')
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form style={{marginTop: "30px", textAlign: "center"}}>
            {/*Управляемый компонент*/}
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название поста"
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание"
            />
            {/*Не управляемый компонент, передаем ссылку из инпута, с полученными значениями, с помощью ссылки, которую мы получаем из DOM
                <MyInput
                    ref={bodyInputRef}
                    type="text"
                    placeholder="Описание"
                />*/}
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;

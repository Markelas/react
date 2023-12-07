import React, {useEffect, useState} from 'react'
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import '../src/styles/app.css'
import PostList from "./components/PostList";
import InputsList from "./components/InputsList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "../src/components/UI/MyModal/MyModal"
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";

function App() {


    const [posts, setPosts] = useState([])


    // const [title, setTitle] = useState('')
    // const [body, setBody] = useState('')


    // const bodyInputRef = useRef(); //Получаем доступ к DOM элементу и с него получаем value

    const [filter, setFilter] = useState({sort: '', query: ''})

    const [modal, setModal] = useState(false);
    const sortedAndSeacrchedPosts = usePosts(posts, filter.sort, filter.query)
    const [isPostsLoading, setIsPostsLoading] = useState(false) //Для лоадинга

    useEffect(() => {
        fetchPosts().then(r => r)
    }, []); //Массив зависимости у нас пустой, чтобы функция отработала один раз, а так, если туда передавать, то будет вызываться при изменении
    // С зависимостями похоже на watch из vue. В deps можно передавать несколько параметров

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false) //Убираем модальное окно
    }

    //Получаем post из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id))

        //Из массива постов нужно удалить тот пост, который мы передали аргументом, для этого
        //Используем filter, который возвращает новый массив, отфильтрованный по какому-либо условию
        //Здесь мы проверяем id, если id элемента совпадает с id с тем, который мы передали с постом
        //Тогда удаляем его
    }

    async function fetchPosts() {
        setIsPostsLoading(true) //Лоадинг
        const posts = await PostService.getAll(); //В отдельном файле PostService создали функцию для запроса
        setPosts(posts) //Передаем эти посты
        setIsPostsLoading(false) //Убираем лоадинг
    }
    return (
        <div className="App">
            <Counter/>

            <ClassCounter/>

            <InputsList/>

            <h2 style={{marginTop: "30px", textAlign: "center"}}>Создание поста про язык программирования</h2>
            {/*В MyModal мы принимаем children, поэтому что мы вводим внутри тегов, то будет отображаться внутри*/}
            <MyButton onClick={() => setModal(true)}>
                Создать пост
            </MyButton>

            <MyButton onClick={fetchPosts} style={{display: 'block', width: '100%', marginTop: '20px'}}>GetPosts</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '40px'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {isPostsLoading
            ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
            : <PostList
                    posts={sortedAndSeacrchedPosts}
                    remove={removePost}
                    title="Посты про языки программирования"
                />
            }

        </div>
    );
}

export default App;

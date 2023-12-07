import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    //Передаем параметры в строку запроса
                    _limit: limit, //По умолчанию отображение по 10 постов
                    _page: page //По умолчанию открываем первую страницу
                }
            })
            return response;
        } catch (e) {
            console.log(e)
        }
    }

    static async getById(id) {
        try {
            return await axios.get('https://jsonplaceholder.typicode.com/posts/' + id
                // Запрос поста по ID
            );
        } catch (e) {
            console.log(e)
        }
    }
    static async getCommentsByPostId(id) {
        try {
            return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`
                // Запрос поста по ID
            );
        } catch (e) {
            console.log(e)
        }
    }
}

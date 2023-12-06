import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(()=> {
        //useMemo это аналог computed свойства
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
    }, [sort, posts])
    // С помощью sort не возвращает новый массив, а мутирует исходный массив
    // Состояние напрямую менять нельзя, поэтому мы возьмем массив posts и положим его в новый массив
    // Который уже потом отсортируем, также используем localeCompare() -  возвращает число, указывающее,
    // должна ли данная строка находиться до, после или в том же самом месте, что и строка, переданная через параметр,
    // при сортировке этих строк. Обычно используется для сортировки

    return sortedPosts;
}

export const  usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);
    const sortedAndSeacrchedPosts = useMemo(()=> {
        //Работает и сортировка и поиск
        //Отображаем список, с элементами, которые совпадают с параметрами из поиска
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortedPosts])

    return sortedAndSeacrchedPosts //Хук, который и фильтрует и сортирует массив
}

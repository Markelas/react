import {useState} from "react";


export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('')

    //Обработка загрузки, показываем индикатор - лоадер и обработка, если есть ошибка

    const fetching = async () => {
        try {
            setIsLoading(true)
            await callback()
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}

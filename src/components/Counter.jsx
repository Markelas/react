import React, {useState} from 'react';

const Counter = () => { // На функциональные компоненты
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>Функциональные компоненты</h1>
            <h1>{count}</h1>
            <button onClick={increment}>Plus</button>
            <button onClick={decrement}>Minus</button>
        </div>
    );
};

export default Counter;

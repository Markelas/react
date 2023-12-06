import React, {useState} from 'react';

const InputsList = () => {

    const [value, setValue] = useState('Текст в инпут')

    return (
        <div className="inputs">
            <h2>{value}</h2>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    );
};

export default InputsList;

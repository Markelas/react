import React from 'react';
import classes  from "./MyButton.module.css" //Стиль получаем как свойство объекта
const MyButton = ({children, ...props}) => {
    //Все пропсы, которые указываем на компоненте, мы передаем в сам тег с помощью ...props
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;

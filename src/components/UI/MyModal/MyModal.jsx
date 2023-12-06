import classes from "../MyModal/MyModal.module.css"
import React from 'react';

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [classes.myModal]
    if(visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;

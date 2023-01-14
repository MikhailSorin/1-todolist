import React, {ChangeEvent, useState} from 'react';

type PropsType={
    OLDtitle:string
    callBack:(newTitle:string)=>void
}

export const EditableSpan = (props:PropsType) => {
    const[edit, setEdit]=useState(false)
    let [newTitle, setNewTitle] = useState(props.OLDtitle);

    const onDoubleClickHandler=()=>{
        setEdit(!edit)
        addTask()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const addTask = () => {
            props.callBack(newTitle)}

    // const onBlurHandler=()=>{
    //     setEdit(false)
    // }
    return (
        edit
        ?<input value={newTitle} onChange={onChangeHandler} onBlur={onDoubleClickHandler} autoFocus/>
        :<span onDoubleClick={onDoubleClickHandler}>{props.OLDtitle}</span>
    );
};


import {useRef} from "react";

const Form = ({dispatch}) => {
    const catInput = useRef()
    const dogInput = useRef()
    const form = (e) => {
        e.preventDefault();
        e.target.reset()
    }

    const saveCat = () => {
        dispatch({type: 'ADD_CAT', payload: {cat: catInput.current.value}})
    }
    const saveDog = () => {
        dispatch({type: 'ADD_DOG', payload: {dog: dogInput.current.value}})
    }

    return (
        <form onSubmit={form}>
            <input type="text" placeholder={'ВВЕДІТЬ КОТИКА'} ref={catInput}/>
            <button onClick={saveCat}>ЗБЕРЕГТИ</button>
            <input type="text" placeholder={'ВВЕДІТЬ СОБАЧКУ'} ref={dogInput}/>
            <button onClick={saveDog}>ЗБЕРЕГТИ</button>
        </form>
    );
};

export default Form;
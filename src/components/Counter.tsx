import React, {useState} from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {

    const [count, setCount] = useState<number>(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return <div>
        <button className={classes.btn} onClick={increment}>Increment</button>
        <button className={classes.btn} onClick={decrement}>Decrement</button>
        <p>{count}</p>
    </div>
}
import { decrement, fetchPosts, increment } from "core/slices/counterSlice";
import { RootState } from "core/store";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
    const count = useSelector((state: RootState) => state.counter.value);
    const posts = useSelector((state: RootState) => state.counter.posts);
    const dispatch = useDispatch<any>();

    return (
        <div>
            <div>
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <span>{count}</span>
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
            </div>
            <button onClick={() => dispatch(fetchPosts())}>Fetch data</button>
            <p>{JSON.stringify(posts)}</p>
        </div>
    );
}

// src/components/Count/Count.jsx

import { useState } from "react";
import "./Count.css";

export const Count = ({ btnText, onConfirm }) => {
    // 🛑 Nota: Mantenemos el useState(0) y la lógica de deshabilitar el botón
    const [count, setCount] = useState(0); 

    const increment = () => {
        setCount((prev) => prev + 1);
    };

    const decrement = () => {
        setCount((prev) => (prev > 0 ? prev - 1 : 0));
    };

    const confirm = () => {
        if (count > 0) {
            onConfirm(count);
        }
    };

    return (
        <div className="count-container">
            <div className="count-buttons">
                <button className="btn-panaderia" onClick={decrement} disabled={count === 0}>
                    -
                </button>
                <span>{count}</span>
                <button className="btn-panaderia" onClick={increment}>
                    +
                </button>
            </div>

            <button className="btn-panaderia" onClick={confirm} disabled={count === 0}>
                {btnText}
            </button>
        </div>
    );
};
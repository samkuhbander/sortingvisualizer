import React from "react";

//Return a random array of 1000 numbers
function generateRandomArray(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(5, 1000));
    }
    return array;
}

function randomIntFromInterval (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Array(props) {
    const { array, animations, isSorted, isSorting } = props;
    return (
        <div className="array">
            {array.map((value, idx) => (
                <div
                    className={`array-bar ${
                        isSorting ? "array-bar-animation" : ""
                    }`}
                    key={idx}
                    style={{
                        height: `${value}px`,
                        backgroundColor: isSorted ? "green" : "",
                    }}
                ></div>
            ))}
            {animations.map((animation, idx) => (
                <div
                    className={`array-bar-animation ${
                        isSorting ? "array-bar-animation-animation" : ""
                    }`}
                    key={idx}
                    style={{
                        height: `${array[animation[0]]}px`,
                        backgroundColor: isSorted ? "green" : "",
                    }}
                ></div>
            ))}
        </div>
    );
}
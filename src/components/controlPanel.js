//Create control panel component
import React from "react";
import {bubbleSort} from "../algorithms/bubbleSort.js";
import {selectionSort} from "../algorithms/selectionSort.js";
import {insertionSort} from "../algorithms/insertionSort.js";
import {mergeSort} from "../algorithms/mergeSort.js";
import {quickSort} from "../algorithms/quickSort.js";
import {heapSort} from "../algorithms/heapSort.js";
import Bars from "./array.js";

const SECONDARY_COLOR = "#666";
const PRIMARY_COLOR = "#ff4d4d";

export default class ControlPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            speed: 1,
            isSorting: false,
            isSorted: false,
            sortAlgorithm: '',
            sortAlgorithms: {
                'bubble': bubbleSort,
                'selection': selectionSort,
                'insertion': insertionSort,
                'merge': mergeSort,
                'quick': quickSort,
                'heap': heapSort,
            },
        };
    }
    componentDidMount() {
        this.resetArray();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.isSorting !== this.state.isSorting) {
            if (this.state.isSorting) {
                this.sort(this.state.sortAlgorithm);
            }
        }
    }
    resetArray() {
        const array = [];
        for (let i = 0; i < this.state.array.length; i++) {
            array.push(this.state.array[i]);
        }
        this.setState({ array });
    }
    handleSpeedChange(speed) {
        this.setState({ speed });
    }
    handleSortAlgorithmChange(sortAlgorithm) {
        this.setState({ sortAlgorithm });
    }
    sort(sortAlgorithm) {
        const animations = this.state.sortAlgorithms[sortAlgorithm](this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? PRIMARY_COLOR : SECONDARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.speed);
            }
        }
    }
    render() {
        const { array, speed, isSorting, isSorted, sortAlgorithm, sortAlgorithms } = this.state;
        return (
            <div className="control-panel">
                <div className="controls">
                    <div className="speed-control">
                        <label htmlFor="speed">Speed</label>
                        <input
                            id="speed"
                            type="range"
                            min="1"
                            max="100"
                            value={speed}
                            onChange={(event) => this.handleSpeedChange(event.target.value)}
                        />
                    </div>
                    <div className="sort-control">
                        <label htmlFor="sort-algorithm">Sort Algorithm</label>
                        <select
                            id="sort-algorithm"
                            value={sortAlgorithm}
                            onChange={(event) => this.handleSortAlgorithmChange(event.target.value)}
                        >
                            <option value="">Select a sort algorithm</option>
                            {Object.keys(sortAlgorithms).map((sortAlgorithm) => (
                                <option key={sortAlgorithm} value={sortAlgorithm}>
                                    {sortAlgorithm}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="array-container">
                    {array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{
                                backgroundColor: PRIMARY_COLOR,
                                height: `${value}px`,
                            }}
                        ></div>
                    ))}
                </div>
                <button
                    className="reset-button"
                    onClick={() => this.resetArray()}
                    disabled={isSorting}
                >
                    Reset
                </button>
            </div>
        );
    }
}
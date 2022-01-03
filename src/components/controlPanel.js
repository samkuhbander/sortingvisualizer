//Create control panel component
import React from "react";
import { bubbleSort } from "../algorithms/bubbleSort.js";
import { selectionSort } from "../algorithms/selectionSort.js";
import { insertionSort } from "../algorithms/insertionSort.js";
import { mergeSort } from "../algorithms/mergeSort.js";
import { quickSort } from "../algorithms/quickSort.js";
import { heapSort } from "../algorithms/heapSort.js";
import "../css/controlPanel.css";

const SECONDARY_COLOR = "#666";
const PRIMARY_COLOR = "#ff4d4d";


export default class ControlPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            speed: 50,
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
    //Reseet array to random values and set color to default
    resetArray() {
        const array = [];
        for (let i = 0; i < 200; i++) {
            array.push(Math.floor(Math.random() * 300));
        }
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < arrayBars.length; i++) {
            arrayBars[i].style.backgroundColor = PRIMARY_COLOR;
        }
        this.setState({ array });
        this.setState({ isSorted: false });
    }
    handleSpeedChange(speed) {
        this.setState({ speed });
    }
    handleSortAlgorithmChange(sortAlgorithm) {
        this.setState({ sortAlgorithm });
    }
    //Use sorting algothim to sort array
    //And show animation
    sort(sortAlgorithm) {
        const animations = this.state.sortAlgorithms[sortAlgorithm](this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
                barOneStyle.height = `${this.state.array[barOneIdx]}px`;
                barTwoStyle.height = `${this.state.array[barTwoIdx]}px`;
            }, i / this.state.speed * 300);
        }
        setTimeout(() => {
            this.setState({ isSorting: false });
            this.setState({ isSorted: true });
        }, animations.length / this.state.speed * 300);
    }

    render() {
        const { array } = this.state;
        return (
            <div>
                <div className="array-container" style={{marginBottom: "10vh", padding:"2vh"}}>
                    {array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{
                                backgroundColor: PRIMARY_COLOR,
                                height: `${value}px`,
                            }}>
                        </div>
                    ))}
                </div>
                <div>
                <button onClick={() => this.resetArray()}>Generate new array</button>
                    <div className="sortingLabels" style={{textAlign: "center" }}>
                        <label>
                            <input
                                type="radio"
                                name="sort-algorithm"
                                value="bubble"
                                checked={this.state.sortAlgorithm === 'bubble'}
                                onChange={() => this.handleSortAlgorithmChange('bubble')}
                            />
                            Bubble Sort
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="sort-algorithm"
                                value="selection"
                                checked={this.state.sortAlgorithm === 'selection'}
                                onChange={() => this.handleSortAlgorithmChange('selection')}
                            />
                            Selection Sort
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="sort-algorithm"
                                value="insertion"
                                checked={this.state.sortAlgorithm === 'insertion'}
                                onChange={() => this.handleSortAlgorithmChange('insertion')}
                            />
                            Insertion Sort
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="sort-algorithm"
                                value="merge"
                                checked={this.state.sortAlgorithm === 'merge'}
                                onChange={() => this.handleSortAlgorithmChange('merge')}
                            />
                            Merge Sort
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="sort
                        Sort"
                                value="quick"
                                checked={this.state.sortAlgorithm === 'quick'}
                                onChange={() => this.handleSortAlgorithmChange('quick')}
                            />
                            Quick Sort
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="sort
                        Sort"
                                value="heap"
                                checked={this.state.sortAlgorithm === 'heap'}
                                onChange={() => this.handleSortAlgorithmChange('heap')}
                            />
                            Heap Sort
                        </label>
                    </div>
                    <div>
                        <button onClick={() => this.sort(this.state.sortAlgorithm)}>
                            Sort!
                        </button>
                    </div>
                    <div>
                        <label>
                            Speed:
                            <input
                                type="range"
                                name="speed"
                                min="1"
                                max="100"
                                value={this.state.speed}
                                onChange={(e) => this.handleSpeedChange(e.target.value)}
                            />
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}
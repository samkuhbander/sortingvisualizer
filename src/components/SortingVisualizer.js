import React from "react";
import {bubbleSort} from "../algorithms/bubbleSort.js";
import {selectionSort} from "../algorithms/selectionSort.js";
import {insertionSort} from "../algorithms/insertionSort.js";
import {mergeSort} from "../algorithms/mergeSort.js";
import {quickSort} from "../algorithms/quickSort.js";
import {heapSort} from "../algorithms/heapSort.js";
import ControlPanel from "./controlPanel.js";
import Bars from "./array.js"

const SECONDARY_COLOR = "#666";
const PRIMARY_COLOR = "#ff4d4d";

const array = [5, 3, 7, 2, 9, 1, 6, 4, 8];
//display sorting visualizer as react component
class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array,
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
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.speed);
            }
            else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * this.state.speed);
            }
        }
        this.setState({ isSorting: false });
    }
    render() {
        const { array, isSorting, isSorted, sortAlgorithm } = this.state;
        return (
            <div>
                <Bars array={array} />
                <ControlPanel 
                    array={array}
                    isSorting={isSorting}
                    isSorted={isSorted}
                    sortAlgorithm={sortAlgorithm}
                    sortAlgorithms={this.state.sortAlgorithms}
                    handleSpeedChange={this.handleSpeedChange.bind(this)}
                    handleSortAlgorithmChange={this.handleSortAlgorithmChange.bind(this)}
                    handleSort={() => this.setState({ isSorting: true })}
                    handleReset={() => this.resetArray()}
                />
            </div>
        );
    }
}

export default SortingVisualizer;
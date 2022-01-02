import React from "react";
import {bubbleSort} from "../algorithms/bubbleSort.js";
import {selectionSort} from "../algorithms/selectionSort.js";
import {insertionSort} from "../algorithms/insertionSort.js";
import {mergeSort} from "../algorithms/mergeSort.js";
import {quickSort} from "../algorithms/quickSort.js";
import {heapSort} from "../algorithms/heapSort.js";
import ControlPanel from "./controlPanel.js";

const SECONDARY_COLOR = "#666";
const PRIMARY_COLOR = "#ff4d4d";

//display sorting visualizer as react component
class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
    componentDidUpdate(prevProps, prevState) {
        if (prevState.isSorting !== this.state.isSorting) {
            if (this.state.isSorting) {
                this.sort(this.state.sortAlgorithm);
            }
        }
    }

    render() {
        const {isSorting, isSorted} = this.state;
        return (
            <div className="array-container">
                <ControlPanel 
                    isSorting={isSorting}
                    isSorted={isSorted}
                />
            </div>
        );
    }
}

export default SortingVisualizer;
//Generate 1000 random numbers
const array = [];
function setArray(arr) {
    for (let i = 0; i < 100; i++) {
        array.push(Math.floor(Math.random() * 200));
    }
}

setArray(array);

const PRIMARY_COLOR = '#00adb5';

const Array = (props) => {
    return (
        <div>
            <div className="array-container">
                {array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{
                            backgroundColor: PRIMARY_COLOR,
                            height: `${value}px`,
                            width: `${1}%`,
                            float: 'left',
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Array;
import React, { useEffect, useState } from 'react';
import './Slider.css';
import '../../../styles/iconfont.css';
import skechers1 from '../../../assets/skechers (1).jpg';
import skechers2 from '../../../assets/skechers (2).jpg';
import skechers3 from '../../../assets/skechers (3).jpg';
import skechers4 from '../../../assets/skechers (4).jpg';
import skechers5 from '../../../assets/skechers (5).jpg';
import s from "../../Header/Header.module.css";

function Slider() {
    const image=[
        {id:0,value: skechers1},
        {id:1,value: skechers2},
        {id:2,value: skechers3},
        {id:3,value: skechers4},
        {id:4,value: skechers5},
    ]

    const [wordData, setWordData] = useState(image[0]);
    const [val, setVal] = useState(0);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        if (val >= startIndex + 4) {
            setStartIndex(val - 3);
        } else if (val < startIndex) {
            setStartIndex(val);
        }
    }, [val, startIndex]);

    const handleClick = (index) => {
        console.log(index);
        setVal(index);
        const wordSlider = image[index];
        setWordData(wordSlider);
    };

    const handleNext = () => {
        let index = val < image.length - 1 ? val + 1 : 0;
        setVal(index);
        const wordSlider = image[index];
        setWordData(wordSlider);
    };

    const handlePrevious = () => {
        let index = val > 0 ? val - 1 : image.length - 1;
        setVal(index);
        const wordSlider = image[index];
        setWordData(wordSlider);
    };

    return (
        <div className="slider">
        <div className="main">
            <div className="slider__slide">
                <img src={wordData.value} />
            </div>

            <div className="thumbnail">
                <button className="btns" onClick={handlePrevious}>
                    <p className="btns-prev icon-arrow-L"></p>
                </button>
                {image.slice(startIndex, startIndex + 4).map((data, i) => (
                    <div key={i}>
                        <img
                            className={wordData.id === i + startIndex ? "clicked" : ""}
                            src={data.value}
                            onClick={() => handleClick(i + startIndex)}

                        />
                    </div>
                ))}

                <button className="btns" onClick={handleNext}>
                    <p className="btns-next icon-arrow-R"></p>
                </button>
            </div>
        </div>
        </div>
    );
}

export default Slider;


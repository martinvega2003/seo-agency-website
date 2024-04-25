import React from "react";
import '../services-components-styles/serviceDropDown.css'

const ServiceDropDown = ({ name, subhd, desc, image, meaning, benefitOne, benefitTwo, benefitThree, benefitFour, benefitFive }) => {
    return (
        <div className="s-drop-down-container">
            <div className="s-drop-down-left">
                <h2 className="heading">
                    {name}
                </h2>
                <h4 className="subheading">
                    {subhd}
                </h4>
                <p className="text">
                    {desc}
                </p>
            </div>

            <div className="s-drop-down-mid">
                <img src={image} />
            </div>

            <div className="s-drop-down-right">
                <h2 className="heading">
                    {meaning}
                </h2>
                <ul>
                    <li>
                        {benefitOne}
                    </li>
                    <li>
                        {benefitTwo}
                    </li>
                    <li>
                        {benefitThree}
                    </li>
                    <li>
                        {benefitFour}
                    </li>
                    <li>
                        {benefitFive}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ServiceDropDown
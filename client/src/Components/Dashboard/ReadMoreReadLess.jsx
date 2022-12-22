import { useState } from "react";
import theme from "../../application/utils/Theme";
import { FaCheckCircle } from "react-icons/fa"
import './ReadMoreReadLess.css';

const ReadMoreReadLess = ({ children }) => {
    const [showLess, setShowLess] = useState(true);

    const toggleText = () => {
        setShowLess(prevState => !prevState);
    }

    return (

        <div className='notification-items' style={{ color: showLess ? "#000" : theme.neutralColor }}>
            <FaCheckCircle size={30} className='tick' />
            <div className='div1'>
                <h4>Deposit Successful</h4>
                <p onClick={toggleText} style={{ color: showLess ? "#000" : theme.neutralColor }} showLess={showLess}>
                    {showLess ? children.substr(0, 30).concat("....") : children}
                </p>
            </div>
            <div className='div2'>
                <span style={{ color: showLess ? "#000" : theme.neutralColor }}>4:43 pm</span>
                <p style={{ color: showLess ? "#000" : theme.neutralColor }}>19 - july</p>
            </div>
        </div>
    );
}

export default ReadMoreReadLess;
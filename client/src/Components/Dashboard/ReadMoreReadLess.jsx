import { useState } from "react";
import theme from "../../application/utils/Theme";
import { FaCheckCircle } from "react-icons/fa"
import './ReadMoreReadLess.css'
import TimeAgo from "timeago-react";
import { useNavigate } from "react-router-dom";

const ReadMoreReadLess = ({ title, message, time, link }) => {
    const [showLess, setShowLess] = useState(true);
    const [step, setStep] = useState(true);
    const navigate = useNavigate()

    const toggleText = () => {
        setStep(false);
        setShowLess(prevState => !prevState);
    }

    return (
        <div className='notification-items' onClick={()=>{navigate(link)}} style={{ color: showLess ? "#000" : theme.neutralColor }}>
            <FaCheckCircle size={30} className='tick' />
            <div className='div1'>
                <div className="align-side">
                    {
                        step === true ? <div className="dot"></div> : <p></p>
                    }
                    <h4>{title}</h4>
                </div>
                <p onClick={toggleText} style={{ color: showLess ? "#000" : theme.neutralColor }}>
                    {showLess ? message?.substr(0, 30).concat("....") : message}   
                </p>

            </div>
            <div className='div2'>
                <span style={{ color: showLess ? "#000" : theme.neutralColor }}>
                <TimeAgo datetime={time} />
                    </span>
            </div>
        </div>

    );
}

export default ReadMoreReadLess;
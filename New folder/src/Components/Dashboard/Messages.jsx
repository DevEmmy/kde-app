import React from 'react'
import Dashboard from './Dashboard'
import { MessagesContainer } from './Dashboard.Styles'

const MessagesAsElement = () => {
  return (
    <MessagesContainer>
        <div className="listOfMessages">
            <h3 className='title'>Messages</h3>

            <div className="messages">
                <div className="message">
                    <img src="https://th.bing.com/th/id/R.b304c7b0e1751794c05ca44d94cea47a?rik=s5ONNlybUyekZg&pid=ImgRaw&r=0" alt="" />

                    <div className="textContent">
                        <h5>
                            Lambo Dealer
                        </h5>
                        <p>
                            How are you doing man?
                        </p>
                    </div>
                </div>

                <div className="message">
                    <img src="https://th.bing.com/th/id/R.b304c7b0e1751794c05ca44d94cea47a?rik=s5ONNlybUyekZg&pid=ImgRaw&r=0" alt="" />

                    <div className="textContent">
                        <h5>
                            Lambo Dealer
                        </h5>
                        <p>
                            How are you doing man?
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="eachChat">

        </div>
    </MessagesContainer>
  )
}

const Messages = ()=>{
    return(
    <Dashboard element={<MessagesAsElement />} index="1"/>
    )
}

export default Messages
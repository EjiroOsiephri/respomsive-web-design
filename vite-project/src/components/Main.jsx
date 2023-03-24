import React from 'react'
import Grow from "./images/illustration-grow-together.svg"
import Flow from "./images/illustration-flowing-conversation.svg"
import Users from "./images/illustration-your-users.svg"
import "./scss/Main.scss"


const Main = () => {
    return (
        <div className='main'>
            <div className="main-container">
                <div className="main-text-container">
                    <h1> Grow Together
                    </h1>
                    <h3> Generate meaningful discussions with your audience and build a strong, loyal community.
                        Think of the insightful conversations you miss out on with a feedback form.
                    </h3>
                </div>
                <div className="main-img-container">
                    <img src={Grow} alt="" />
                </div>
            </div>

            <div className="main-container">
                <div className="main-text-container">
                    <h1> Flowing Conversations
                    </h1>
                    <h3> You wouldn't paginate a conversation in real life, so why do it online? Our threads
                        have just-in-time loading for a more natural flow.
                    </h3>
                </div>
                <div className="main-img-container">
                    <img src={Flow} alt="" />
                </div>
            </div>

            <div className="main-container">
                <div className="main-text-container">
                    <h1>Your Users
                    </h1>
                    <h3> It takes no time at all to integrate Huddle with your app's authentication solution.
                        This means, once signed in to your app, your users can start chatting immediately.
                    </h3>
                </div>
                <div className="main-img-container">
                    <img src={Users} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Main
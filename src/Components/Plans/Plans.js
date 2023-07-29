import React from 'react'
import "./Plans.css"
import {plansData} from "./../../data/plansData"
import whitwtick from "./../../assets/whiteTick.png"
const Plans = () => {
  return (
    <div className='plansContainer' id='plans'>
        <div className='blur blurp'></div>
        <div className='program-header' style={{gap:'2rem'}}>
            <span className='strock-text'>Ready to start</span>
            <span>Your journey</span>
            <span className='strock-text'>Now with us</span>
        </div>
        <div className='plans'>
            {plansData.map((plan,i)=>(
                <div className='plan' key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span> $ {plan.price}</span>
                    <div className='features'>
                        {plan.features.map((feature)=>(
                            <div className='feature'>
                                <img src={whitwtick}></img>
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span>See more benefits</span>

                    </div>
                    <button className='btn'>join know</button>
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans

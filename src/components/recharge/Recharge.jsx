import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../../css/recharge.css';

/**
 * Recharge page component
 * @returns 
 */
function Recharge() {
    const [mobileSection, setMobileSection] = useState(true)
    return (
        <div className="recharge-outer">
        <div className='recharge-inner-container'>
          <div className='recharge-title'>Recharge</div>
          <div className='recharge-box-outer'>
            <Button onClick={()=>{setMobileSection(!mobileSection)}}>{mobileSection ? 'Mobile Recharge': 'DTH Recharge'}</Button>
            {mobileSection ?
                <div className='recharge-box-inner'>
                    <div className='switch-btn'></div>
                    <h3>Mobile Recharge</h3>
                    <div className='input-data'>
                        <div className='input-field-inner'>
                            <div className='heading'>Mobile Number*</div>
                            <input className='input-field'/>
                        </div>
                        <div className='input-field-inner'>
                            <div className='heading'>Operator*</div>
                            <input  className='input-field'/>
                        </div>
                        <div className='input-field-inner'>
                            <div className='heading'>Recharge Amount*</div>
                            <input  className='input-field'/>
                        </div>
                    </div>
                    <div className="functionality-btn-outer">
                        <div className='col-6' style={{textAlign: 'left'}}>
                            <button className='check-btn'>View Plans</button>
                        </div>
                        <div className='col-6' style={{textAlign: 'right'}}>
                            <button className='recharge-btn'>Recharge</button>
                        </div>
                    </div>
                </div>:
                <div className='recharge-box-inner'>
                <div className='switch-btn'></div>
                <h3>DTH Recharge</h3>
                <div className='input-data'>
                    <div className='input-field-inner'>
                        <div className='heading'>Operator*</div>
                        <input className='input-field'/>
                    </div>
                    <div className='input-field-inner'>
                        <div className='heading'>Subscriber No**</div>
                        <input  className='input-field'/>
                    </div>
                    <div className='input-field-inner'>
                        <div className='heading'>Recharge Amount*</div>
                        <input  className='input-field'/>
                    </div>
                </div>
                <div className="functionality-btn-outer">
                    <div className='col-6' style={{textAlign: 'left'}}>
                        <button className='check-btn'>Check</button>
                    </div>
                    <div className='col-6' style={{textAlign: 'right'}}>
                        <button className='recharge-btn'style={{background: '#64E187'}}>Recharge</button>
                    </div>
                </div>
            </div>
                }
          </div>
        </div>
        </div>
    );
  }
  
  export default Recharge;
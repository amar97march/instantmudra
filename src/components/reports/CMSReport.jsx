import React, { useState } from 'react';
import '../../css/reports.css';
import FilerIcon from "../../assets/images/reports/filter-icon.svg";
import SortIcon from "../../assets/images/reports/sort-icon.svg";
import EyeIcon from "../../assets/images/reports/eye.svg";
import { Modal } from "../modals/CMSReportModal"

import Table from 'react-bootstrap/Table'

/**
 * Cms Report component
 * @returns 
 */
function CMSReport() {
    const [showViewDetail, setShowViewDetail] = useState(false);

    return (
        <div className="report-outer">
        <div className='report-inner-container'>
            <div className='filter-section'>
                <div className='individual-item'>
                    <div>Date From*</div>
                    <div className='input-outer'>
                        <input />
                        <img src={FilerIcon} alt="filter-icon" />
                    </div>
                </div>
                <div className='individual-item'>
                    <div>Date To*</div>
                    <div className='input-outer'>
                        <input />
                        <img src={FilerIcon} alt="filter-icon" />
                    </div>
                </div>
                <div className='individual-item'>
                    <div>Products*</div>
                    <div className='input-outer'>
                        <input />
                        <img src={FilerIcon} alt="filter-icon" />
                    </div>
                </div>
                <div className='individual-item' style={{display: 'flex'}}>
                    <button className='view-btn'>View</button>
                </div>
            </div>
            <div className='report-section'>
                <div className='headers'>
                    <div className='heading'>
                        Report
                    </div>
                    <div className='search-section'>
                        <div className='searchbar'>
                            <input placeholder='Search' />
                        </div>
                        <div className='filter-section'>
                        <img src={SortIcon} alt="filter-icon" />
                        </div>
                    </div>
                </div>
                <div className='wallet-table'>
                <Table responsive>
                        <thead>
                            <tr>
                            <th >Bank IFSC</th>
                            <th >TX Mode</th>
                            <th >Amount</th>
                            <th >Fees</th>
                            <th >Status</th>
                            <th >Remarks</th>
                            <th >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>2022-03-02 11:23:34</td>
                            <td>Money Transfer</td>
                            <td>Deduct-funds-prepaid</td>
                            <td>Prepaid</td>
                            <td>235,743</td>
                            <td>Reversed For Tx Amount For Bbps2 For</td>
                            <td><button className="action-btn" onClick={()=>{setShowViewDetail(true)}}><img src={EyeIcon} alt="filter-icon" /></button></td>
                            </tr>
                            <tr>
                            <td>2022-03-02 11:23:34</td>
                            <td>Money Transfer</td>
                            <td>Deduct-funds-prepaid</td>
                            <td>Prepaid</td>
                            <td>235,743</td>
                            <td>Reversed For Tx Amount For Bbps2 For</td>
                            <td><button className="action-btn" onClick={()=>{setShowViewDetail(true)}}><img src={EyeIcon} alt="filter-icon" /></button></td>
                            </tr>
                            <tr>
                            <td>2022-03-02 11:23:34</td>
                            <td>Money Transfer</td>
                            <td>Deduct-funds-prepaid</td>
                            <td>Prepaid</td>
                            <td>235,743</td>
                            <td></td>
                            <td><button className="action-btn" onClick={()=>{setShowViewDetail(true)}}><img src={EyeIcon} alt="filter-icon" /></button></td>
                            </tr>
                            <tr>
                            <td>2022-03-02 11:23:34</td>
                            <td>Money Transfer</td>
                            <td>Deduct-funds-prepaid</td>
                            <td>Prepaid</td>
                            <td>235,743</td>
                            <td></td>
                            <td><button className="action-btn" onClick={()=>{setShowViewDetail(true)}}><img src={EyeIcon} alt="filter-icon" /></button></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
        {showViewDetail ? <Modal setShowModal={setShowViewDetail} /> : null}
        </div>
    );
  }
  
  export default CMSReport;
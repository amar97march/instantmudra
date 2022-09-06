import React from 'react';
import '../../css/reports.css';
import FilerIcon from "../../assets/images/reports/filter-icon.svg";
import SortIcon from "../../assets/images/reports/sort-icon.svg";
import Table from 'react-bootstrap/Table'

/**
 * Wallet Report component
 * @returns 
 */
function WalletReport() {
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
                            <th >Dated</th>
                            <th >Product</th>
                            <th >Action Type</th>
                            <th >Wallet Type</th>
                            <th >Balance Before</th>
                            <th >Credit</th>
                            <th >Debit</th>
                            <th >Balance After</th>
                            <th ></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>2022-03-02 11:23:34</td>
                            <td>Money Transfer</td>
                            <td>Deduct-funds-prepaid</td>
                            <td>Prepaid</td>
                            <td>235,743</td>
                            <td>235,743</td>
                            <td>235,743</td>
                            <td>235,743</td>
                            <td>Reversed For Tx Amount For Bbps2 For</td>
                            </tr>
                            <tr>
                            <td>2022-03-02 11:23:34</td>
                            <td>Money Transfer</td>
                            <td>Deduct-funds-prepaid</td>
                            <td>Prepaid</td>
                            <td>235,743</td>
                            <td>235,743</td>
                            <td>235,743</td>
                            </tr>
                            <tr>
                            <td>2022-03-02 11:23:34</td>
                            <td>Money Transfer</td>
                            <td>Deduct-funds-prepaid</td>
                            <td>Prepaid</td>
                            <td>235,743</td>
                            <td>235,743</td>
                            </tr>
                            <tr>
                            <td>2022-03-02 11:23:34</td>
                            <td>Money Transfer</td>
                            <td>Deduct-funds-prepaid</td>
                            <td>Prepaid</td>
                            <td>235,743</td>
                            <td>235,743</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
        </div>
    );
  }
  
  export default WalletReport;
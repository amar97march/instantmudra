import React from 'react';
import '../../css/dashboard.css';
import Table from 'react-bootstrap/Table'
import GraphImage from "../../assets/images/dashboard/graph.png";
import PieChartImage from "../../assets/images/dashboard/piechart.png";
import ElipseProfileImage from "../../assets/images/dashboard/EllipseProfile.png";

/*  Dashboard component
*/
function Dashboard() {
    return (
        <div className="dashboard-outer">
        <div className='dashboard-inner-container'>
          <div className='dashboard-title'>Today</div>
          <div className='products-outer'>
              <div className='section-1 row'>
                  <div className='individual-product-outer'>
                    <div className='individual-product-inner'>
                    <div className='amount'>₹ 0.00</div>
                    <hr/>
                    <div className='category'>FUND RECEIVED</div>
                    </div>
                  </div>
                  <div className='individual-product-outer'>
                  <div className='individual-product-inner'>
                    <div className='amount'>₹ 0.00</div>
                    <hr/>
                    <div className='category'>TRANSACTION VOLUME</div>
                  </div>
                  </div>
                  <div className='individual-product-outer'>
                  <div className='individual-product-inner'>
                    <div className='amount'>₹ 0.00</div>
                    <hr/>
                    <div className='category'>PENDING TRANSACTIONS </div>
                  </div>
                  </div>
                  <div className='individual-product-outer'>
                  <div className='individual-product-inner'>
                    <div className='amount'>₹ 0.00</div>
                    <hr/>
                    <div className='category'>COMMISION EARNED</div>
                  </div>
                  </div>
              </div>
              <div className='section-2'>
                <div className='balance-detail-outer col-4'>
                    <div className='balance-detail-inner'>
                        <div className='profile-image'>
                            <img src={ElipseProfileImage} alt="profile-icon"/>
                        </div>
                        <div className='username'>BKM Outlet</div>
                        <div className='user-id'>IM-R-0004</div>
                        <div className='balance-section row' style={{borderTop: '1px solid #FF0000'}}>
                            <div className='col-6' style={{borderRight: '1px solid #FF0000', padding: '10px'}}>
                                <div className='category'>PREPAID BALANCE</div>
                                <div className='amount'>₹ 132432.34</div>
                            </div>
                            <div className='col-6'  style={{padding: '10px'}}>
                                <div className='category'>POSTPAID BALANCE</div>
                                <div className='amount'>₹ 53255.34</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='weight-chart-outer col-4'>
                <img className="category-image" src={GraphImage} alt="graph_image" />
                </div>
                <div className='service-wise-pie-outer col-4'>
                <div className='heading-data'>
                    <div>Service Wise Pie</div>
                    <div>Doughnut</div>
                </div>
                <img className="category-image" src={PieChartImage} alt="graph_image" />

                </div>
              </div>
              <div className='section-3'>
                <div className='table-outer col-8'>
                    <div className='title'>Last 5 Transaction</div>
                    <div>
                    <Table responsive>
                        <thead>
                            <tr>
                            <th >Datetime</th>
                            <th >Wallet</th>
                            <th >Product</th>
                            <th >Status</th>
                            <th >Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>2022-03-02 11:23:34</td>
                            <td>Prepaid</td>
                            <td>Money Transfer</td>
                            <td>Success</td>
                            <td>Rs 3.00</td>
                            </tr>
                            <tr>
                            <td>2022-03-02 11:23:34</td>
                            <td>Prepaid</td>
                            <td>Money Transfer</td>
                            <td>Success</td>
                            <td>Rs 3.00</td>
                            </tr>
                            <tr>
                            <td>2022-03-02 11:23:34</td>
                            <td>Prepaid</td>
                            <td>Money Transfer</td>
                            <td>Success</td>
                            <td>Rs 3.00</td>
                            </tr>
                            <tr>
                            <td>2022-03-02 11:23:34</td>
                            <td>Prepaid</td>
                            <td>Money Transfer</td>
                            <td>Success</td>
                            <td>Rs 3.00</td>
                            </tr>
                        </tbody>
                    </Table>
                    </div>
                </div>
                <div className='history-outer col-4'>
                    <div className='title'>Last 5 Transaction</div>
                </div>
              </div>
          </div>
        </div>
        </div>
    );
  }
  
  export default Dashboard;
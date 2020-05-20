import React, { Component, Fragment } from 'react';
import {connect} from "react-redux";
import CustomerDashBoard from './CustomerDashBoard'
import BrandDashBoard from './BrandDashBoard'
 
class DashBoard extends Component {
    render() { 
        return (
            <Fragment>
                {
                
                console.log('------------->',this.props.userType)
                // this.props.userType ==='customer'? <CustomerDashBoard/>:<BrandDashBoard/>

                }

                
                
            </Fragment>
        );
    }
}
 
const mapStateToProps = (state) => {
    return {
        userType: state.users.userType
    }
}
export default connect(mapStateToProps, null)(DashBoard) 
import React from 'react';
import { WebView } from 'react-native';
import axios from 'axios';

export default class PaymentsScreen extends React.Component {

    state = {
        ORDER_ID: 'Order101',
        CUST_ID: 'Aditya123',
        TXN_AMOUNT: '10'
    }

    handleResponse = async(data) => {
        if(data.title == 'true') {
            //handle successfull payment here
        }else if(data.title == 'false') {
            //handle failed payment here
        }
    }

    render() {

        return (
            <WebView
                source={{uri: paymentURL+'testtxn'}}            
                injectedJavaScript = {`document.getElementById("ORDER_ID").value = "${ORDER_ID}";document.getElementById("CUST_ID").value = "${CUST_ID}";document.getElementById("TXN_AMOUNT").value = "${TXN_AMOUNT}";document.f1.submit();`}
                onNavigationStateChange = {(data) => this.handleResponse(data)}
            />
        )
    }
}
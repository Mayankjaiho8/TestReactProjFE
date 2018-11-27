import React,{ Component } from 'react';
import { connect } from 'react-redux';

import './taskPartComponent.css';

import { getPartBaseSupplierDetailFromServer } from '../Store/ActionCreators/action'
import MediumPageContentContainerComponent from '../MediumPageContentContainerComponent/mediumPageContentContainerComponent';



class TaskPartComponent extends Component{

    componentDidMount(){
        const { currentTaskObj } = this.props;
        if(currentTaskObj){
            this.props.retrievePartBaseSupplierDetail(currentTaskObj.partNumber);
        }
    }

    render(){
        
        const { currentTaskObj, partDetail, partSupplier } = this.props;

        let partNumber = 'NA';
        let boeingSpecPartNumber = 'NA';
        let partClass = 'NA'
        let partStatus = 'NA'
        let customerList = [];

        let supplierName = 'NA';
        let supplierCageCode = 'NA';

        if(partDetail){
        
            const partBaseDetail = partDetail.partBaseDetail;
            customerList  = partDetail.customerList;
            
            partNumber = partBaseDetail && partBaseDetail.partNumber;
            boeingSpecPartNumber = partBaseDetail && partBaseDetail.boeingSpecPartNumber;
            partClass = partBaseDetail && partBaseDetail.partClass;
            partStatus = partBaseDetail && partBaseDetail.partStatus;
        }

        if(partSupplier){
            console.log('partSupplier -> ', partSupplier)
            supplierName = partSupplier.partSupplierList[0].supplierName;
            supplierCageCode = partSupplier.partSupplierList[0].supplierCageCode;
        }
        
        let customerAttributeList = ["customerName", "modelName", "customerWantsRepair", "currency", "price"]

        return(
            <MediumPageContentContainerComponent>
                <div className="task-part-page-container">
                    <h2>{ currentTaskObj && currentTaskObj.taskTitle }</h2>
                    <div className="task-detail-container">
                        Task Part Name - { currentTaskObj && currentTaskObj.partNumber } <br/>
                        Task Customer Name - { currentTaskObj && currentTaskObj.customerName }<br/>
                    </div>
                    <div className="part-detail-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Part Number</th>
                                    <th>ATA Spec Number</th>
                                    <th>Part Class</th>
                                    <th>Part Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{ partNumber }</td>
                                    <td>{ boeingSpecPartNumber }</td>
                                    <td>{ partClass }</td>
                                    <td>{ partStatus }</td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <table>
                            <thead>
                                <tr>
                                    <th>Customer Name</th>
                                    <th>Model Name</th>
                                    <th>Customer Wants Repair</th>    
                                    <th>Currency</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                { customerList.map(cust => 
                                     (
                                            <tr key = {cust["customerName"]}>
                                            { customerAttributeList.map(attr => (
                                                <td key={attr}>{cust[attr].toString()}</td>
                                            )) }
                                            </tr>
                                        )
                                    ) 
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="part-supplier-container">
                    { partSupplier && partSupplier.partSupplierList.map((ps, index) => (
                                                        <React.Fragment key = {index}>
                                                        Supplier Name : { ps.supplierName}<br/>
                                                        Supplier Cage Code : { ps.supplierCageCode }<br/>
                                                        </React.Fragment>
                                                    )
                                                ) }
                    </div>
                </div>
            </MediumPageContentContainerComponent>
        )
    }
}

const mapStateToProps = store => {
    return {
        currentTaskObj : store.taskReducerState.currentTaskObj,
        partDetail : store.taskReducerState.partDetail,
        partSupplier : store.taskReducerState.partSupplier,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        retrievePartBaseSupplierDetail : (partName) => dispatch(getPartBaseSupplierDetailFromServer(partName)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskPartComponent);
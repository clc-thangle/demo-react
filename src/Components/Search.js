import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            tempValue: ''
        }
    }
    isChange = (event) => {
        console.log(event.target.value)
        this.setState({
            tempValue:event.target.value
        });
        this.props.checkConnectProps(this.state.tempValue);

    }
    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" onChange={(event)=> this.isChange(event)} placeholder="Nhập tên cần tìm" style={{ width: '610px' }} />
                        <div className="btn btn-info"onClick={(d1)=>this.props.checkConnectProps(this.state.tempValue)}> Tìm </div>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default Search;
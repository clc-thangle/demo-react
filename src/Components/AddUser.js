import React, { Component } from 'react';


class AddUser extends Component {
  constructor(props){
    super(props);
    this.state ={
      id:"",
      name:"",
      tel:"",
      Permission:""
    }
  }
  isChange =(event)=>{
    const name= event.target.name;
    const value = event.target.value;

    this.setState({
      [name]:value
    });
    // var item={};
    // item.id=this.state.id;
    // item.name=this.state.name;
    // item.tel=this.state.tel;
    // item.Permission=this.state.Permission;
    // console.log(item);
    
  }
    render() {
      // console.log(this.state);
      
        return (
            <div className="col-3" style={{color: 'white'}}>
  <div>
        
    <div className="card text-white bg-primary mb-3">
      <div className="card-header">Thêm mới user vào hệ thống</div>
      <div className="card-body">
        <div className="form-group">
          <input type="text" onChange={(event)=>this.isChange(event)} name="name" className="form-control"  placeholder="Tên user" />
        </div>
        <div className="form-group">
          <input type="text" onChange={(event)=>this.isChange(event)} name="tel"className="form-control"  placeholder="Điện thoại" />
        </div>
        <hr />
        <div className="form-group">
          <select className="custom-select"  name="Permission"required>
            <option value>Chọn quyền mặc định</option>
            <option value={1}>Admin</option>
            <option value={2}>Modrator</option>
            <option value={3}>Nomal</option>
          </select>
        </div>
        <div className="form-group">
          <div className="btn btn-block btn-primary" onClick={(name,tel, Permission)=> this.props.add(this.state.name, this.state.tel, this.state.Permission)}> Thêm mới </div>
        </div>
      </div>
    </div>
  </div>
</div>

        );
    }
}
  
export default AddUser;
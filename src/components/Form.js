import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super();
        this.state={
            studentId: '',
            studentName: '',
            age: '',
            sex: false,
            birthDate: '',
            birthPlace: '',
            address: ''
        }
    }
    handleChange=(event)=>{
        let name =event.target.name;
        let value =event.target.value;
        this.setState({
            [name]:value
        })
    }
    handleCreat=(event)=>{
        
        let studentNew={
            studentId: this.state.studentId,
            studentName: this.state.studentName,
            age: this.state.age,
            sex: this.state.sex,
            birthDate: this.state.birthDate,
            birthPlace: this.state.birthPlace,
            address: this.state.address
        }
        this.props.handleCreat(false,studentNew)
    }
   componentWillMount =()=>{
       let {selectedStudent}= this.props;
       this.setState({
        studentId: selectedStudent.studentId,
        studentName: selectedStudent.studentName,
        age: selectedStudent.age,
        sex: selectedStudent.sex,
        birthDate: selectedStudent.birthDate,
        birthPlace:selectedStudent.birthPlace,
        address: selectedStudent.address
       })
    }
    componentWillReceiveProps=(nextProps)=>{
        let {selectedStudent}= nextProps;
        this.setState({
            studentId: selectedStudent.studentId,
            studentName: selectedStudent.studentName,
            age: selectedStudent.age,
            sex: selectedStudent.sex,
            birthDate: selectedStudent.birthDate,
            birthPlace:selectedStudent.birthPlace,
            address: selectedStudent.address
           })

    }
    handleUpdate=(e)=>{
        e.preventDefault();
        let studentUpdate={
            studentId: this.state.studentId,
            studentName: this.state.studentName,
            age: this.state.age,
            sex: this.state.sex,
            birthDate: this.state.birthDate,
            birthPlace: this.state.birthPlace,
            address: this.state.address
        };
        this.props.handleUpdate(false,studentUpdate);
    }
  render() {
    let elementSubmit="";
    if(this.props.actionName=="Creat"){
        elementSubmit=<button type="submit" className="btn btn-primary me-2" onClick={this.handleCreat}>
        Creat
      </button>
    }else if(this.props.actionName=="Edit"){
        elementSubmit=<button type="submit" className="btn btn-primary me-2" onClick={this.handleUpdate}>
        Edit
      </button>
    }
    return (
      
        <div className="col-5 grid-margin">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Th??ng tin sinh vi??n</h3>
            <form className="form-sample">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label"  >M?? sinh vi??n</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name='studentId' readOnly={this.props.actionName!="Creat"} value={this.state.studentId} onChange={this.handleChange}/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">T??n sinh vi??n</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name='studentName' readOnly={this.props.actionName==""} value={this.state.studentName} onChange={this.handleChange} />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label" >Tu???i</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="age" readOnly={this.props.actionName==""} value={this.state.age} onChange={this.handleChange}/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label" >Gi???i t??nh</label>
                <div className="col-sm-9">
                  <select className="form-control" name='sex' disabled={this.props.actionName==""} value={this.state.sex} onChange={this.handleChange}>
                    <option value={true}>Nam</option>
                    <option value={false}>N???</option>
                  </select>
                </div>  
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Ng??y sinh</label>
                <div className="col-sm-9">
                  <input type={"date"} className="form-control" placeholder="dd/mm/yyyy" readOnly={this.props.actionName==""} name='birthDate' value={this.state.birthDate} onChange={this.handleChange}/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label" >N??i sinh</label>
                <div className="col-sm-9">
                  <select className="form-control" name="birthPlace" disabled={this.props.actionName==""} value={this.state.birthPlace} onChange={this.handleChange}>
                    <option value={"HN"}>H?? N???i</option>
                    <option value={"HCM"}>TP. H??? Ch?? Minh</option>
                    <option value={"DN"}>???? N???ng</option>
                    <option value={"QN"}>Qu???ng Ninh</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label" >?????a ch???</label>
                <div className="col-sm-9">
                  <textarea className="form-control" name='address' readOnly={this.props.actionName==""} value={this.state.address} onChange={this.handleChange} />
                </div>
              </div>
              {elementSubmit}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

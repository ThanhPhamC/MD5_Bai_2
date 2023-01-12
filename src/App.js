import React, { Component } from 'react'
import Form from './components/Form'
import Liststudent from './components/Liststudent'
import Controller from './components/Controller'
import { el } from 'date-fns/locale';
export default class App extends Component {
  constructor(){
    super();
    this.state={
      listStudent:[
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2003-05-18", birthPlace: "HN", address: "Hà Nội" },
        { studentId: "SV002", studentName: "Nguyễn Văn B", age: 22, sex: false, birthDate: "2001-09-12", birthPlace: "DN", address: "Đà Nẵng" },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2004-01-09", birthPlace: "HCM", address: "Thành phố Hồ Chí Minh" }
      ],
      searchData:"",
      sortDir:"",
      sortBy:"",
      isToggle:false,
      actionName:"",
      selectedStudent:{}
    }
  }
  handleSearch=(searchData)=>{
    this.setState({
      searchData:searchData
    })
  }
  handleChangeSort=(sortDir,sortBy)=>{
    this.setState({
      sortDir:sortDir,
      sortBy:sortBy
    })
  }
  handleAction=(actionName,toggle,selectedStudent)=>{
    
    if(actionName=="Edit"||actionName==""){
      this.setState({
        "selectedStudent":selectedStudent
      })
    }
    this.setState({
      isToggle:toggle,
      actionName:actionName
    
    })
   
  }
  handleCreat=(toggle,studentNew)=>{
    this.setState({
      isToggle:toggle,
      listStudent:[...this.state.listStudent,studentNew]
    })
  }
  handleUpdate=(toggle,studentUpdate)=>{
    if(studentUpdate.sex=="true"){
    studentUpdate.sex= true;
   }else{
    studentUpdate.sex= false;
   }
    let listStudent=this.state.listStudent.map((student)=>{
      if(student.studentId==studentUpdate.studentId){
        return studentUpdate;
      }else{
        return student
      }
    });
    this.setState({
      isToggle:toggle,
      listStudent:listStudent
    })
  }
  handleDelete=(studentdelete)=>{
  console.log(studentdelete);
  let studentList=[];
  this.state.listStudent.forEach(student => {
      if (student.studentId!=studentdelete.studentId) {
        studentList.push(student);
      }
  });
  this.setState({
    listStudent:studentList
  })
  }
  
  render() {
    let listStudents=[];
    if(this.state.searchData!=""){
        this.state.listStudent.forEach(student=>{
          if(student.studentName.toLowerCase().includes(this.state.searchData.toLowerCase())){
            listStudents.push(student);
          }
        })
    }
    else{
      listStudents=[...this.state.listStudent];
    }
    // sap xep du lieu
    if(this.state.sortDir=="studentName"){
        if(this.state.sortBy=="ASC"){
            listStudents.sort((a,b)=>(a.studentName>b.studentName)?1:(a.studentName>b.studentName)?-1:0);
        }else{
          listStudents.sort((a,b)=>(a.studentName>b.studentName)?-1:(a.studentName>b.studentName)?1:0);
        }
    }else {
      if(this.state.sortBy=="ASC"){
        listStudents.sort((a,b)=>(a.age-b.age));
    }else{
      listStudents.sort((a,b)=>(b.age-a.age));
      console.log(listStudents);
    }
    }
    // toggle form
    let elementForm="";
    if(this.state.isToggle){
      elementForm= <Form actionName={this.state.actionName} selectedStudent={this.state.selectedStudent} handleCreat={this.handleCreat} handleUpdate={this.handleUpdate}></Form>;
    } 
    return (
      <div><div className="App">
      <div className="row">
   <div className="col-lg-7 grid-margin stretch-card">
     <div className="card">
       {/* START CONTROL */}
      <Controller handleSearchs={this.handleSearch} handleChangeSort={this.handleChangeSort} handleAction={this.handleAction}/> 
       {/* END CONTROL */}
       {/* START LIST STUDENT */}
     <Liststudent studentlist={listStudents} handleAction={this.handleAction} handleDelete={this.handleDelete} />
       {/* END LIST STUDENT */}
     </div>
   </div>
   {/* START FORM SINH VIEN */}
    {elementForm}
   {/* END FORM SINH VIÊN */}
 </div>
     </div></div>
    )
  }
}

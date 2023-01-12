import React, { Component } from 'react'
import format from 'date-fns/format';
export default class Student extends Component {
    handleUpdate=(selectedStudent)=>{
    this.props.handleUpdate(selectedStudent, "Edit")
    }
   handleView=(selectedStudent)=>{
   
    this.props.handleView(selectedStudent)
   }
   handleDelete=(selectedStudent)=>{
   
    this.props.handleDelete(selectedStudent)
   }
  render() {
    let {studentInfo, stt}= this.props
    return (
        <tr>
        <td>{stt+1}</td>
        <td>{studentInfo.studentId}</td>
        <td>{studentInfo.studentName}</td>
        <td>{studentInfo.age}</td>
        <td>{format(new Date(studentInfo.birthDate),"dd/MM/yyyy")}</td>
        <td>{studentInfo.sex ? "Nam" : "Nữ"}</td>
        <td>
          <div className="template-demo">
            <button
              type="button"
              className="btn btn-danger btn-icon-text" onClick={()=>this.handleView(studentInfo)}
            >
              Xem
            </button>
            <button
              type="button"
              className="btn btn-warning btn-icon-text" onClick={()=>this.handleUpdate(studentInfo)}
            >
              Sửa
            </button>
            <button
              type="button"
              className="btn btn-success btn-icon-text" onClick={()=>this.handleDelete(studentInfo)}
            >
              Xóa
            </button>
          </div>
        </td>
      </tr>
    )
  }
}

import React, { Component } from 'react'
import Student from './Student'
export default class Liststudent extends Component {
    handleUpdate=(selectedStudent,actionName)=>{
this.props.handleAction(actionName,true,selectedStudent)
    }
    handleView=(selectedStudent)=>{
        this.props.handleAction("",true,selectedStudent)
    }
    handleDelete=(selectedStudent)=>{
        
        this.props.handleDelete(selectedStudent)
    }
  render() {
    let {studentlist}= this.props;
    let elementListStudent= studentlist.map((student, index)=>{
        return <Student key={student.studentId} studentInfo={student} stt={index} handleUpdate={this.handleUpdate} handleView={this.handleView} handleDelete={this.handleDelete} />
    })
    return (
        <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Ngay thang</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
            {elementListStudent}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

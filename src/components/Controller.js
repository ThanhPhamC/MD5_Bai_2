import React, { Component } from 'react'

export default class Controller extends Component {
    constructor() {
        super();
        this.state = {
            searchData: " "
        }
    }
    hanleSearch = (e) => {
        this.props.handleSearchs(this.state.searchData);
        e.preventDefault();
    }
    handleOnChangeSearch = (event) => {
        let value = event.target.value;
        this.setState({
            searchData: value
        })
    }
    handleChangeSort = (event) => {
        let value = event.target.value;
        let arr = value.split("-");
        this.props.handleChangeSort(arr[0], arr[1]);
    }
    handleCreat = () => {
        this.props.handleAction("Creat", true)
    }
    render() {
        return (
            <div className="card-header">
                <div className="row">
                    <div className="col-3">
                        <button type="button" className="btn btn-primary btn-icon-text" onClick={this.handleCreat}>
                            Thêm mới sinh viên
                        </button>
                    </div>
                    <div className="col-6">
                        <form className="search-form" action="#">
                            <i className="icon-search" />
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search Here"
                                title="Search here" onChange={this.handleOnChangeSearch}
                            />
                            <button className="btn btn-primary btn-icon-text" onClick={this.hanleSearch}>
                                Tìm kiếm
                            </button>
                        </form>
                    </div>
                    <div className="col-3 d-flex align-items-center">
                        <select className="form-control" onChange={this.handleChangeSort}>
                            <option value="">Sắp xếp</option>
                            <option value="studentName-ASC">Tên tăng dần</option>
                            <option value="studentName-DESC">Tên SV giảm dần</option>
                            <option value="age-ASC">Tuổi tăng dần</option>
                            <option value="age-DESC">Tuổi giảm dần</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

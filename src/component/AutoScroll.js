import React, { Component } from 'react';
import Axios from 'axios';
import '../style/AutoScroll.css';
class AutoScroll extends Component {
  constructor(props){
    super(props);
    this.state ={
      heightBody:React.createRef(),
      heightTable:React.createRef(),
      data:[      {
        nama_project: 'Project3',
        Task: 'Task3',
        priority: 'Prioritas3',
        pic: 'PIC3',
        deadline: '2013',
        status_progress: 'Progres3'
      },
      {
        nama_project: 'Project3',
        Task: 'Task3',
        priority: 'Prioritas3',
        pic: 'PIC3',
        deadline: '2013',
        status_progress: 'Progres3'
      },
      {
        nama_project: 'Project3',
        Task: 'Task3',
        priority: 'Prioritas3',
        pic: 'PIC3',
        deadline: '2013',
        status_progress: 'Progres3'
      }]
    }
  }

  componentDidMount() {
    //     Axios({
    //   method: 'get',
    //   url: 'http://192.168.100.12:8000/monitorings/'
    // }).then(response => {
    //   this.setState({
    //     data: response.data,
    //   });
    // });
    var initBodyHeight = this.state.heightBody.current.offsetHeight;
    var initTableHeight = this.state.heightTable.current.offsetHeight;
    
    console.log(initBodyHeight + '<<< body');
    console.log(initTableHeight +'<<< table');
  
  if (initTableHeight > initBodyHeight) {
  	console.log('table banyak datanya');
    
    var moveY = initBodyHeight-initTableHeight
    document.getElementById("tableBody").animate([
      // keyframes
      { transform: 'translateY(0px)' }, 
      { transform: 'translateY('+moveY+'px)' }
    ], { 
      // timing options
      duration: 5000,
      direction: "alternate-reverse",
      iterations: Infinity
    });
  }
  }
  render() {
    return (
      <div id="myBody" ref={this.state.heightBody}>
        <table ref={this.state.heightTable} id="myTable">
  <thead>
    <tr className="header">
      <th>Nama PRoject</th>
      <th>Task</th>
      <th>Priority</th>
      <th>PIC</th>
      <th>Deadline</th>
      <th>Status Progress</th>
    </tr>
  </thead>
  <tbody id="tableBody">
    {this.state.data.map(value=>(
      <tr>
        <td>{value.nama_project}</td>
        <td>{value.Task}</td>
        <td>{value.priority}</td>
        <td>{value.pic}</td>
        <td>{value.deadline}</td>
        <td>{value.status_progress}</td>
      </tr>
    ))}
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
    <tr>
      <td>Ernst Handel</td>
      <td>Roland Mendel</td>
      <td>Austria</td>
    </tr>
    <tr>
      <td>Island Trading</td>
      <td>Helen Bennett</td>
      <td>UK</td>
    </tr>
    <tr>
      <td>Laughing Bacchus Winecellars</td>
      <td>Yoshi Tannamuri</td>
      <td>Canada</td>
    </tr>
    <tr>
      <td>Magazzini Alimentari Riuniti</td>
      <td>Giovanni Rovelli</td>
      <td>Italy</td>
    </tr>
    <tr>
      <td>Magazzini Alimentari Riuniti</td>
      <td>Giovanni Rovelli</td>
      <td>Italy</td>
    </tr>
    <tr>
      <td>Magazzini Alimentari Riuniti</td>
      <td>Giovanni Rovelli</td>
      <td>Italy</td>
    </tr>
    <tr>
      <td>Magazzini Alimentari Riuniti</td>
      <td>Giovanni Rovelli</td>
      <td>Italy</td>
    </tr>
    <tr>
      <td>Magazzini Alimentari Riuniti</td>
      <td>Giovanni Rovelli</td>
      <td>Italy</td>
    </tr>
    <tr>
      <td>Magazzini Alimentari Riuniti</td>
      <td>Giovanni Rovelli</td>
      <td>Italy</td>
    </tr>
    <tr>
      <td>Magazzini Alimentari Riuniti</td>
      <td>Giovanni Rovelli</td>
      <td>Italy</td>
    </tr>
  </tbody>
</table>

      </div>
    );
  }
}

export default AutoScroll;
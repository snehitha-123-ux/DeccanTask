import React  from 'react';
import Chart from 'react-apexcharts';
function Pie(){
    const data=[
  { status: "Pending", value: 20 },
  { status: "Completed", value: 50 },
  { status: "In Progress", value: 30 }
 ];
 const series = data.map(item =>item.value);
 const labels = data.map(item =>item.status);
 const options={
    labels:labels,
    chart:{
            id:'pie'
        },
        legend:{
            postion:'bottom'
        },
 };
 return(
    <div>
        <Chart options={options} series={series} type='pie' height={400} width={400}/>
    </div>
 );
}
export default Pie;
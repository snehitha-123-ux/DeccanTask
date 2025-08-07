import React  from 'react';
import Chart from 'react-apexcharts';

function BarChart(){ 
            const salesData=[
            {month:"Jan",sales:500},
            {month:"Feb",sales:800},
            {month:"Mar",sales:400},
            {month:"Apr",sales:900},
            {month:"May",sales:300},
            {month:"Jun",sales:900}
        ];
       const options={
        chart:{
            id:'bar'
        },
        xaxis:{
            categories:salesData.map(item => item.month)
        }
        };
       const series =[
        {
            name:'Sales',
            data:salesData.map(item => item.sales)
        }
       ];
            return(
              <div>
                <h2>Monthly Sales</h2>
                <Chart options={options} series={series} type="bar" width="600px" height="400px"/>
              </div>
            );
            
        
    }
    export default BarChart;

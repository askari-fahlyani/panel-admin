import React,{useEffect,useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import axios from 'axios'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        }
    },
    scales:{
        y:{
            position:"right",
            // reverse: true
        },
        x: {
            ticks: {
                font: {
                    size: 20,
                    family: "vazir"
                }
            }
        }
    }

};

export default function Chart({labels,endpoint}) {
    const [data,setData] = useState(null)

    const fetchData =async () =>{
            let response = await axios.get(`http://localhost:3030/${endpoint}`)
            setData({
                labels,
                datasets: [
                    {
                        maxBarThickness: 40,
                        label:"",
                        data: response.data.data,
                        backgroundColor: 'rgb(1, 171, 206)',
                    },
                ],
            })
        // console.log(response.data)
        console.log(data)
    }

    useEffect(()=>{
        fetchData()

    },[])
    return (<>{data !== null &&  <Bar options={options} data={data} />}</>);
}

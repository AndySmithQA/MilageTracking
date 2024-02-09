import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Kodiaq Milage Tracking</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: true
            }
          },
          scales: {
            times:{
              type: 'linear',
              position: "left",
              title: {
                display: true,
                text: "Milage"
              }, 
              suggestedMax: 10000
            },
            hr:{
              type: 'linear',
              position: 'right',
              title: {
                display: true,
                text: "Percentage"
              },
              min:10
            }
          }
        }
      }
      />
    </div>
  );
}
export default LineChart;
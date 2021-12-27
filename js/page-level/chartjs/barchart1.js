var barChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
            label: 'Dataset 1',
            backgroundColor: 'rgba(92,19,209,0.3)',

            yAxisID: 'y-axis-1',
            data: [12, 11, 15, 19, 7, 10, 6]
      }, {
            label: 'Dataset 2',
            backgroundColor: 'rgba(33,134,253,0.3)',
            yAxisID: 'y-axis-2',
            data: [15, 5, 18, 16, 8, 12, 4]
      }]

};
window.onload = function() {
      var ctx = document.getElementById('barchart1').getContext('2d');
      window.myBar = new Chart(ctx, {
            type: 'bar',
            data: barChartData,
            options: {
                  responsive: true,
                  maintainAspectRatio:false,
                  title: {
                        display: true,
                        text: 'Chart.js Bar Chart - Multi Axis'
                  },
                  tooltips: {
                        mode: 'index',
                        intersect: true
                  },
                  scales: {
                        yAxes: [{
                              type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                              display: true,
                              position: 'left',
                              id: 'y-axis-1',
                        }, {
                              type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                              display: true,
                              position: 'right',
                              id: 'y-axis-2',
                              gridLines: {
                                    drawOnChartArea: false
                              }
                        }],
                  }
            }
      });
};

$(window).on("load",function(){

    var ctx = document.getElementById("linechart1").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            datasets: [{
                label: '# of Sales',
                data: [12, 11, 15, 19, 7, 10, 6],
                backgroundColor: [
                    '#90e7e7'
                ],
                borderColor: [
                    '#01cccc'
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
              display: false,
            },
            tooltips: {
              mode: 'nearest',
              intersect: false,
              position: 'nearest',
              xPadding: 10,
              yPadding: 10,
              caretPadding: 10
            },
            legend: {
              display: false
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                  display: false,
                  gridLines: false,
                  scaleLabel: {
                    display: true,
                    labelString: 'Month'
                  }
                }],
                yAxes: [{
                  display: false,
                  gridLines: false,
                  scaleLabel: {
                    display: true,
                    labelString: 'Value'
                  },
                  ticks: {
                    beginAtZero: true
                  }
                }]
            }
        }
    });
});

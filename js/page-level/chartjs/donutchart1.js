$(window).on("load",function(){

    var ctx = document.getElementById("donutchart1").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            datasets: [{
                label: '# of Sales',
                data: [12, 11, 15, 19, 7, 10, 6],
                backgroundColor: [
                    '#afd6fa',
                    '#82b1dd',
                    '#6ea1cf',
                    '#638db3',
                    '#2b70af',
                    '#3f6689',
                    '#214769',
                    // '#ffa0bc',
                    // '#a0a7ff',
                    // '#a0fffa',
                    // '#a7ffa0',
                    // '#ffe2a0',
                    // '#ffa0a0',
                    // '#b4ffa0'
                ]
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
            maintainAspectRatio: true,
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

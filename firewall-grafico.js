function firewallgrafico(link){
    data= {
        "link": link,
    }
     $.ajax({
      type: "POST",
      url: '/firewall',
      data: data,
      dataType: "JSON",
      success: function(response){
        var ctx = document.getElementById(link).getContext('2d');
        var myChart = new Chart(ctx, {
            plugins: [ChartDataLabels],
            type: 'doughnut',
            data: {
                datasets: [
                    {
                    label: [response['data']['dados']['elementos']['el11']],
                    data: [response['data']['dados']['elementos']['el12'], 0 , 0, (response['data']['dados']['elementos']['el13'] - response['data']['dados']['elementos']['el12'])],
                    backgroundColor: [
                        'rgba(15, 117, 185, 1)',
                        'rgba(52, 168, 43, 1)',
                        'rgba(255, 196, 0, 1)',
                        'rgba(255, 99, 132, 0)',
                    ],
                    borderColor: [
                        'rgba(15, 117, 185, 1)',
                        'rgba(52, 168, 43, 1)',
                        'rgba(255, 196, 0, 1)',
                        'rgba(255, 99, 132, 0)',

                    ],
                    borderWidth: 1
                },{
                    label: [response['data']['dados']['elementos']['el21']],
                    data: [0,response['data']['dados']['elementos']['el22'],0, (response['data']['dados']['elementos']['el23']-response['data']['dados']['elementos']['el22'])],
                    backgroundColor: [
                        'rgba(15, 117, 185, 1)',
                        'rgba(52, 168, 43, 1)',
                        'rgba(255, 196, 0, 1)',
                        'rgba(255, 99, 132, 0)',
                    ],
                    borderColor: [
                        'rgba(15, 117, 185, 1)',
                        'rgba(52, 168, 43, 1)',
                        'rgba(255, 196, 0, 1)',
                        'rgba(255, 99, 132, 0)',

                    ],
                    borderWidth: 1
                },{
                    label: [response['data']['dados']['elementos']['el31']],
                    data: [0,0, response['data']['dados']['elementos']['el32'], (response['data']['dados']['elementos']['el33'] - response['data']['dados']['elementos']['el32'] )],
                    backgroundColor: [
                        'rgba(15, 117, 185, 1)',
                        'rgba(52, 168, 43, 1)',
                        'rgba(255, 196, 0, 1)',
                        'rgba(255, 99, 132, 0)',
                    ],
                    borderColor: [
                        'rgba(15, 117, 185, 1)',
                        'rgba(52, 168, 43, 1)',
                        'rgba(255, 196, 0, 1)',
                        'rgba(255, 99, 132, 0)',

                    ],
                }],
                labels: [ response['data']['dados']['elementos']['el11'], response['data']['dados']['elementos']['el21'], response['data']['dados']['elementos']['el31'] ],

            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                  position: 'bottom',
                  labels: {
                    padding: 20,
                    boxWidth: 10,
                    borderRadius: 50,
                  }
                },
                plugins: {
                  datalabels: {
                    formatter: (value, ctx) => {
                       if (value <= 0){
                           value = "";

                       }
                       return value;
                    },
                    color: 'black',
                    labels: {
                      title: {
                        font: {
                          size: '16'
                        }
                      }
                    }
                  }
                }
              }
        });
        $('#'+link+'Titulo').text(response['data']['dados']['elementos']['titulo']);
        $('#'+link+'ControlPlane').text(response['data']['dados']['elementos']['el12']);
        $('#'+link+'DataPlane').text(response['data']['dados']['elementos']['el22'] );
        $('#'+link+'Memoria').text(response['data']['dados']['elementos']['el32']);
      },
      error: function(response){
        $('.loading').hide()
      }
    });

}
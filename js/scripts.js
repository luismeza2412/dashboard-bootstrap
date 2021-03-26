var ctx = document.getElementById("barChart");

var barChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            'DIAN',
            'Cartagena',
            'Barranquilla',

        ],

        datasets: [{
            label: 'Points',
            bacgroundColor: ['#f1c40f', '#e67e22', '#16a085', '2980b9'],
            data: [30, 30, 40]
        }],
    },

    options: {
        cutoutPercentage: 50
    }
});
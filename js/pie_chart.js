var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["javascript", "java", "php"],
        datasets: [{
            backgroundColor: [
                "#BB5179",
                "#FAFF67",
                "#3C00FF"
            ],
            data: [60, 30, 10]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'programming language',
        }
    }
});
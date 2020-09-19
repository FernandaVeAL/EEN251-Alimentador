var ctx = document.getElementById("Racao").getContext("2d");
var cta = document.getElementById("Agua").getContext("2d");
var cte = document.getElementById("Estoque").getContext("2d");
var ctr = document.getElementById("Relatorio").getContext("2d");

var randomsAgua = [...Array(24)].map(() => Math.floor(Math.random() * 101));
var randomsRacao = [...Array(24)].map(() => Math.floor(Math.random() * 101));
var randomsMensalRacao = [...Array(30)].map(() =>
  Math.floor(Math.random() * 101)
);
var randomsMensalAgua = [...Array(30)].map(() =>
  Math.floor(Math.random() * 101)
);

//Gráfico Ração
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
    ],
    datasets: [
      {
        label: "Consumo de Ração",
        data: randomsRacao,
        backgroundColor: "rgba(255, 99, 132, 0.2)",

        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },

  options: {
    title: {
      display: true,
      text: "Consumo de Ração",
    },
  },
});

//Gráfico Água
var myChart = new Chart(cta, {
  type: "bar",
  data: {
    labels: [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
    ],
    datasets: [
      {
        label: "Consumo de Água",

        data: randomsAgua,

        backgroundColor: "rgba(54, 162, 235, 0.2)",

        borderColor: "rgba(54, 162, 235, 1)",

        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },

  options: {
    title: {
      display: true,
      text: "Consumo de Água",
    },
  },
});

// Gráfico estoque
var myChart = new Chart(cte, {
  type: "bar",
  data: {
    labels: ["Estoque"],
    datasets: [
      {
        label: "Água",
        backgroundColor: "#3e95cd",
        data: [Math.floor(Math.random() * 101), 100],
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 3,
      },
      {
        label: "Ração",
        backgroundColor: "#8e5ea2",
        data: [Math.floor(Math.random() * 101), 0],
        borderDash: [5, 5],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 3,
      },
    ],
  },
  options: {
    yAxes: [
      {
        ticks: {
          max: 100,
          min: 0,
        },
      },
    ],
  },

  options: {
    title: {
      display: true,
      text: "Estoque",
    },
  },
});

//Gráfico de relatório
var myLineChart = new Chart(ctr, {
  type: "line",
  data: {
    datasets: [
      {
        data: randomsMensalRacao,

        label: "Ração",
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: "rgba(255, 99, 132, 1)",
        fill: false,
        borderDash: [5, 5],
      },
      {
        data: randomsMensalAgua,

        label: "Água",
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: "rgba(54, 162, 235, 1)",
        fill: false,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Relatório Mensal de Consumo de Ração e Água",
    },
    scales: {
      ticks: {
        Min: 0,
        Max: 100,
      },
      xAxes: [
        {
          type: "category",
          labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
          ],
        },
      ],
    },
  },
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var http = require("http").createServer(handler); //require http server, and create server with function handler()
var fs = require("fs"); //require filesystem module

http.listen(8080); //listen to port 8080

function handler(req, res) {
  //create server
  fs.readFile(__dirname + "/public/index.html", function (err, data) {
    //read file index.html in public folder
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" }); //display 404 on error
      return res.end("404 Not Found");
    }
    res.writeHead(200, { "Content-Type": "text/html" }); //write HTML
    res.write(data); //write data from index.html
    return res.end();
  });
}

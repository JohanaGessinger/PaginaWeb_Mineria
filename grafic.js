document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById('graficoTuristasPais').getContext('2d');

  const data = {
    labels: [
      'Argentina', 'Brasil', 'Estados Unidos', 'Alemania',
      'Francia', 'Reino Unido', 'Paraguay', 'Chile', 'Otros'
    ],
    datasets: [{
      label: 'Cantidad de turistas',
      data: [320000, 150000, 40000, 25000, 22000, 18000, 35000, 28000, 30000],
      borderWidth: 1,
      borderRadius: 4
    }]
  };

  const options = {
    
    plugins: {
      legend: {
        display: true,
        position: 'top'
      },
      title: {
        display: true,
        text: 'Cantidad de turistas por país en Cataratas del Iguazú (2024)'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Cantidad de personas'
        }
      },
      x: {
        title: {
          display: true,
          text: 'País de origen'
        }
      }
    }
  };

  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });
});
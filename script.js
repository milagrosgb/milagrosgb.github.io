document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    const skillsChart = new Chart(ctx, {
        type: 'bar', // Cambiado a gráfico de barras
        data: {
            labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
            datasets: [{
                label: 'Habilidades',
                data: [90, 85, 80, 75, 70],
                backgroundColor: [
                    'rgba(216, 27, 96, 0.5)',
                    'rgba(255, 105, 180, 0.5)',
                    'rgba(255, 152, 0, 0.5)',
                    'rgba(63, 81, 181, 0.5)',
                    'rgba(76, 175, 80, 0.5)'
                ],
                borderColor: [
                    'rgba(216, 27, 96, 1)',
                    'rgba(255, 105, 180, 1)',
                    'rgba(255, 152, 0, 1)',
                    'rgba(63, 81, 181, 1)',
                    'rgba(76, 175, 80, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    document.getElementById('menuToggle').onclick = () => {
        const menu = document.getElementById('menu');
        menu.classList.toggle('active');
    };

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.getElementById('snow').appendChild(snowflake);
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }

    setInterval(createSnowflake, 200);

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Mensaje enviado. ¡Gracias por contactarme!');
    });
});

function openModal(title, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

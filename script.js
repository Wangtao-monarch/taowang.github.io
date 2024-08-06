// Google Analytics tracking is already included in the HTML

// Example function to load visitor data (assuming you have a service to provide this data)
function loadVisitorData() {
    axios.get('visitorData.json')
        .then(response => {
            const data = response.data;
            document.getElementById('visitorCount').textContent = data.visitorCount;

            const ctx = document.getElementById('visitorMap').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.countries,
                    datasets: [{
                        label: 'Visitors by Country',
                        data: data.visitorCounts,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error loading visitor data:', error));
}

// Call the function to load visitor data on page load
window.onload = loadVisitorData;

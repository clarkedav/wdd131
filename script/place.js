document.addEventListener('DOMContentLoaded', (event) => {
    // Set the current year dynamically
    document.getElementById('2024').textContent = new Date().getFullYear();

    // Set the last modified date dynamically
    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

    const temperature = 15; // Static value in Celsius
    const windSpeed = 10; // Static value in km/h

    function calculateWindChill(temp, wind) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
    }

    let windChill = "N/A";
    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = calculateWindChill(temperature, windSpeed).toFixed(2) + "°C";
    }

    document.getElementById("wind-chill").textContent = windChill;
});
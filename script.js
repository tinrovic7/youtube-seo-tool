document.getElementById('keyword-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const keyword = document.getElementById('keyword').value.trim();
    if (!keyword) {
        alert('Please enter a keyword.');
        return;
    }

    // Sample data
    const sampleData = [
        { keyword: `${keyword} tips`, searchVolume: '10,000', competition: 'Low' },
        { keyword: `${keyword} tricks`, searchVolume: '8,000', competition: 'Medium' },
        { keyword: `best ${keyword}`, searchVolume: '12,000', competition: 'High' },
        { keyword: `${keyword} ideas`, searchVolume: '5,000', competition: 'Low' },
        { keyword: `${keyword} tutorials`, searchVolume: '15,000', competition: 'Medium' }
    ];

    displayResults(sampleData);
});

function displayResults(data) {
    const resultsTable = document.querySelector('#results-table tbody');
    resultsTable.innerHTML = ''; // Clear previous results

    data.forEach(({ keyword, searchVolume, competition }) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${keyword}</td>
            <td>${searchVolume}</td>
            <td>${competition}</td>
        `;
        resultsTable.appendChild(row);
    });

    // Show the results section
    document.getElementById('results').style.display = 'block';
}

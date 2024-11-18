document.getElementById('keyword-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    console.log("Form submitted."); // Debugging log

    const keyword = document.getElementById('keyword').value.trim();
    if (!keyword) {
        alert('Please enter a keyword.');
        return;
    }

    console.log(`Keyword entered: ${keyword}`); // Debugging log

    // Sample data
    const sampleData = [
        { keyword: `${keyword} tips`, searchVolume: '10,000', competition: 'Low' },
        { keyword: `${keyword} tricks`, searchVolume: '8,000', competition: 'Medium' },
        { keyword: `best ${keyword}`, searchVolume: '12,000', competition: 'High' },
        { keyword: `${keyword} ideas`, searchVolume: '5,000', competition: 'Low' },
        { keyword: `${keyword} tutorials`, searchVolume: '15,000', competition: 'Medium' }
    ];

    console.log("Sample data generated:", sampleData); // Debugging log

    displayResults(sampleData);
});

function displayResults(data) {
    const resultsTable = document.querySelector('#results-table tbody');

    if (!resultsTable) {
        console.error("Results table element not found."); // Debugging log
        return;
    }

    resultsTable.innerHTML = ''; // Clear previous results

    // Populate table with data
    data.forEach(({ keyword, searchVolume, competition }) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${keyword}</td>
            <td>${searchVolume}</td>
            <td>${competition}</td>
        `;
        resultsTable.appendChild(row);
    });

    console.log("Results displayed in table."); // Debugging log

    // Show the results section
    document.getElementById('results').style.display = 'block';
}

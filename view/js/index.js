// Fetch categories from the backend and render them in the HTML
fetch('/category')

    .then((response) => {
        console.log('Response status:', response.json)

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);

        }
        return response.json();
    })
    .then((data) => {
        const container = document.getElementById('data-container');
        
        if (data.length === 0) {
            container.innerHTML = '<p>No categories found.</p>';
            return;
        }

        // Dynamically create and display category data
        data.forEach((data) => {
            const div = document.createElement('div');
            div.className = 'category-item';
            div.innerHTML = `
                <h2>${data.name}</h2>
                <p>${data.description || 'No description available.'}</p>
            `;
            container.appendChild(div);
        });
    })
    .catch((error) => {
        console.log('Error fetching categories:', error);
        document.getElementById('data-container').innerHTML = '<p>Error loading categories. Please try again later.</p>';
    });

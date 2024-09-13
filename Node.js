<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Frontend</title>
</head>
<body>
    <h1>Welcome to the Frontend of the 3-tier App</h1>
    <p>Data from backend:</p>
    <div id="backend-data"></div>

    <script>
        fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            document.getElementById('backend-data').innerText = JSON.stringify(data);
        });
    </script>
</body>
</html>


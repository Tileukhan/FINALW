fetch('https://quickchart.io/chart?c={type:\'bar\',data:{labels:[\'Russia\', \'Canada\', \'China\', \'United States\', \'Brazil\', \'Australia\', \'India\', \'Argentina\', \'Kazakhstan\', \'Algeria\'],datasets:[{label:\'Territory in square kilometers\',data:[17098242, 9984670, 9596961, 9525067, 8515767, 7741220, 3287263, 2780400, 2724910, 2381741]}]}}')
  .then(response => response.blob())
  .then(blob => {
    var url = window.URL.createObjectURL(blob);
    var img = document.createElement('img');
    img.src = url;
    document.getElementById('chart').appendChild(img);
  })
  .catch(error => console.error(error));

document.getElementById('dataForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = document.getElementById('dataInput').value;
  
    await fetch('http://localhost:3000/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    });
  
    fetchData();
  });
  
  async function fetchData() {
    const response = await fetch('http://localhost:3000/data');
    const data = await response.json();
  
    const list = document.getElementById('dataList');
    list.innerHTML = '';
    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.data;
      list.appendChild(li);
    });
  }
  
  fetchData();
  
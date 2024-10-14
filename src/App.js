import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [destination, setDestination] = useState('');
  const [entries, setEntries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // 防止默认表单提交行为
    // 将输入数据添加到 entries 数组中
    setEntries([...entries, { name, date, destination }]);
    // 清空输入框
    setName('');
    setDate('');
    setDestination('');
  };

  return (
    <div className="app">
      <h1>旅行計畫表單</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="輸入名字"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="輸入要去的地点"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
        <button type="submit">添加到表格</button>
      </form>

      {/* 表格部分 */}
      <table>
        <thead>
          <tr>
            <th>名字</th>
            <th>日期</th>
            <th>地點</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.date}</td>
              <td>{entry.destination}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

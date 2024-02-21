const express = require('express');
const fs = require('fs');

const app = express();
const port = 58082;

app.get('/pull', (req, res) => {
  fs.readFile('database.json', 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.send(data);
  });
});

app.post('/push', express.json(), (req, res) => {
  const data = req.body;

  fs.writeFile('database.json', JSON.stringify(data), err => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.send('데이터가 성공적으로 업데이트되었습니다!');
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`서버가 ${port} 포트에서 실행 중입니다.`);
});

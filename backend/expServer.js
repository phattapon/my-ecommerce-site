const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // ใช้ body-parser ตัวเดียว
const path = require('path'); // เพิ่มการนำเข้า path

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// ใช้เส้นทาง /api/subject
app.use('/api/subject', require('./routes/subject.js'));

// เสิร์ฟไฟล์ static จาก __dirname
app.use(express.static(__dirname));

// เส้นทางหลัก
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));  // ใช้ path ในการส่งไฟล์
});

// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

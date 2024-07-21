// Cấu hình file App.js để hiển thị trang đăng ký và đăng nhập
import './css/App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './login';
import Register from './register';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* Chuyển hướng từ trang chủ ("/") đến trang đăng nhập */}
        <Route path="/" element={<Navigate replace to="/login" />} />
        {/* Cấu hình thêm các Route khác nếu cần */}
      </Routes>
    </Router>
  );
}

export default App;

const Akun = require('../models/akun');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Validasi input
    if (!username || !email || !password || !role) {
      return res.status(400).send({ error: 'Username, email, password, and role are required' });
    }

    // Cek apakah email atau username sudah ada
    const existingEmail = await Akun.findOne({ email });
    const existingUsername = await Akun.findOne({ username });

    if (existingEmail) {
      return res.status(400).send({ error: 'Email already in use' });
    }
    if (existingUsername) {
      return res.status(400).send({ error: 'Username already in use' });
    }

    // Membuat akun baru
    const akun = new Akun({ username, email, password, role });
    await akun.save();

    // Mengirim respons
    res.status(201).send({ akun });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validasi input
    if (!username || !password) {
      return res.status(400).send({ error: 'Username and password are required' });
    }

    // Mencari pengguna berdasarkan username
    const akun = await Akun.findOne({ username });
    if (!akun) {
      return res.status(400).send({ error: 'Invalid login credentials' });
    }

    // Memeriksa kecocokan password
    const isMatch = await akun.comparePassword(password);
    if (!isMatch) {
      return res.status(400).send({ error: 'Invalid login credentials' });
    }

    // Membuat token JWT
    const token = jwt.sign({ id: akun._id }, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '24h' });

    // Mengirim respons
    res.send({ akun, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};


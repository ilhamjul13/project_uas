const Pegawai = require('../models/pegawai');

// Create a new pegawai
exports.createPegawai = async (req, res) => {
    try {
        const pegawai = new Pegawai(req.body);
        await pegawai.save();
        res.status(201).send({ message: 'Pegawai created successfully', pegawai });
    } catch (error) {
        res.status(400).send({ message: 'Failed to create pegawai', error });
    }
};

// Get pegawai by ID
exports.getPegawai = async (req, res) => {
    try {
        const pegawai = await Pegawai.findById(req.params.id);
        if (!pegawai) {
            return res.status(404).send({ message: 'Pegawai not found' });
        }
        res.send(pegawai);
    } catch (error) {
        res.status(500).send({ message: 'Failed to retrieve pegawai', error });
    }
};

// Update pegawai by ID
exports.updatePegawai = async (req, res) => {
    try {
        const pegawai = await Pegawai.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!pegawai) {
            return res.status(404).send({ message: 'Pegawai not found' });
        }
        res.send({ message: 'Pegawai updated successfully', pegawai });
    } catch (error) {
        res.status(400).send({ message: 'Failed to update pegawai', error });
    }
};

// Get all pegawai
exports.getAllPegawai = async (req, res) => {
    try {
        const pegawai = await Pegawai.find({});
        res.send({ message: 'Pegawai retrieved successfully', pegawai });
    } catch (error) {
        res.status(500).send({ message: 'Failed to retrieve pegawai', error });
    }
};

// Delete pegawai by ID
exports.deletePegawai = async (req, res) => {
    try {
        const pegawai = await Pegawai.findByIdAndDelete(req.params.id);
        if (!pegawai) {
            return res.status(404).send({ message: 'Pegawai not found' });
        }
        res.send({ message: 'Pegawai deleted successfully', pegawai });
    } catch (error) {
        res.status(500).send({ message: 'Failed to delete pegawai', error });
    }
};

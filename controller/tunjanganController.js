const Tunjangan = require('../models/tunjangan');

exports.createTunjangan = async (req, res) => {
    try {
        const tunjangan = new Tunjangan(req.body);
        await tunjangan.save();
        res.status(201).send({ message: 'Tunjangan created successfully', tunjangan });
    } catch (error) {
        res.status(400).send({ message: 'Failed to create tunjangan', error });
    }
};

exports.getAllTunjangan = async (req, res) => {
    try {
        const tunjangan = await Tunjangan.find({});
        res.send({ message: 'Tunjangan fetched successfully', tunjangan });
    } catch (error) {
        res.status(500).send({ message: 'Failed to fetch tunjangan', error });
    }
};

exports.getTunjangan = async (req, res) => {
    try {
        const tunjangan = await Tunjangan.findById(req.params.id);
        if (!tunjangan) {
            return res.status(404).send({ message: 'Tunjangan not found' });
        }
        res.send({ message: 'Tunjangan fetched successfully', tunjangan });
    } catch (error) {
        res.status(500).send({ message: 'Failed to fetch tunjangan', error });
    }
};

exports.updateTunjangan = async (req, res) => {
    try {
        const tunjangan = await Tunjangan.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!tunjangan) {
            return res.status(404).send({ message: 'Tunjangan not found' });
        }
        res.send({ message: 'Tunjangan updated successfully', tunjangan });
    } catch (error) {
        res.status(400).send({ message: 'Failed to update tunjangan', error });
    }
};

exports.deleteTunjangan = async (req, res) => {
    try {
        const tunjangan = await Tunjangan.findByIdAndDelete(req.params.id);
        if (!tunjangan) {
            return res.status(404).send({ message: 'Tunjangan not found' });
        }
        res.send({ message: 'Tunjangan deleted successfully', tunjangan });
    } catch (error) {
        res.status(500).send({ message: 'Failed to delete tunjangan', error });
    }
};

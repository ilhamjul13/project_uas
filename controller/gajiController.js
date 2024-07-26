const Gaji = require('../models/gaji');

exports.createGaji = async (req, res) => {
    try {
        const gaji = new Gaji(req.body);
        await gaji.save();
        res.status(201).send({ message: 'Gaji created successfully', gaji });
    } catch (error) {
        res.status(400).send({ message: 'Failed to create Gaji', error });
    }
};

exports.getGaji = async (req, res) => {
    try {
        const gaji = await Gaji.findById(req.params.id);
        if (!gaji) {
            return res.status(404).send({ message: 'Gaji not found' });
        }
        res.send(gaji);
    } catch (error) {
        res.status(500).send({ message: 'Failed to retrieve Gaji', error });
    }
};

exports.getAllGaji = async (req, res) => {
    try {
        const gaji = await Gaji.find({});
        res.send({ message: 'All Gaji retrieved successfully', gaji });
    } catch (error) {
        res.status(500).send({ message: 'Failed to retrieve Gaji', error });
    }
};

exports.updateGaji = async (req, res) => {
    try {
        const gaji = await Gaji.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!gaji) {
            return res.status(404).send({ message: 'Gaji not found' });
        }
        res.send({ message: 'Gaji updated successfully', gaji });
    } catch (error) {
        res.status(400).send({ message: 'Failed to update Gaji', error });
    }
};

exports.deleteGaji = async (req, res) => {
    try {
        const gaji = await Gaji.findByIdAndDelete(req.params.id);
        if (!gaji) {
            return res.status(404).send({ message: 'Gaji not found' });
        }
        res.send({ message: 'Gaji deleted successfully', gaji });
    } catch (error) {
        res.status(500).send({ message: 'Failed to delete Gaji', error });
    }
};

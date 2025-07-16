const express = require('express');
const router = express.Router();


const menuItem = require('../models/menuItem.js');


router.post('/', async function (req, res) {
    
    try {
        const data = req.body;
        const newMenuItem = new menuItem(data);
        const savedMenuItem = await newMenuItem.save();
        console.log('MenuItem saved successfully');
        res.status(200).json(savedMenuItem);
    } catch (error) {
        console.error("Error saving MenuItem:", error);
        res.status(500).send('Internal server error');
    }
})

router.get('/', async(req, res)=>{
    try {
        const menuItems = await menuItem.find();
        res.status(200).json(menuItems);
    } catch (error) {
        console.error("Error fetching menuItems:", error);
        res.status(500).send('Internal server error');
    }
})


router.get('/:tasteType', async(req, res)=>{
    try {
        const tasteType = req.params.tasteType;
        if (tasteType == 'spicy' || tasteType == 'salty' || tasteType == 'sweet' || tasteType == 'bitter' || tasteType == 'sour') {
            const menuItems = await menuItem.find({taste: tasteType});
            res.status(200).json(menuItems);
        } else {
            res.status(404).send('No menu items found for the specified taste type');
        }
    } catch (error) {
        console.error("Error fetching menuItems by taste type:", error);
        res.status(500).send('Internal server error');
    }
})

// router.get('/:id', async (req, res) => {
//     try {
//         const menuItem = await menuItem.findById(req.params.id);
//         if (!menuItem) {
//             return res.status(404).send('Menu item not found');
//         }else{
//             console.log("Menu item fetched successfully.");
//             res.status(200).json(menuItem);
//         }
//     } catch (error) {
//         console.error("Error fetching menu item by ID:", error);
//         res.status(500).send('Internal server error');
//     }
// });

module.exports = router;
import express, { Router } from 'express';
import controller from '../controllers';

const router: Router = express.Router();

router.get('/getFromRestaurant/{restaurantId}', controller.getFromRestaurant);

router.post('/create/{restaurantId}', controller.createItem);

router.put('/edit/{itemId}', controller.editItem);

router.get('/get/{itemId}', controller.getItem);

// Prend deux Item en paramètre, l'id de l'item à supprimer et l'id du restaurant
router.delete('/deleteItem/{id}', controller.deleteRestaurantItem);

export default router;

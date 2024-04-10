import express, { Router } from 'express';
import controller from '../controllers';

const router: Router = express.Router();

// Ajoute/créer un item
router.post('/addItem', controller.addItem);

// Modifie un item
router.post('/editItem', controller.editItem);

// Retourne un item
router.get('/getItem/:id', controller.getItem);

// Retourne tous les items grâce à un filtre [title, description, imageURL, idRestaurant, price]
router.get('/getAllItems', controller.getAllItems);

// Supprime un item
router.delete('/deleteItem', controller.deleteItem);

// Ajoute/créer un menu
router.post('/addMenu', controller.addMenu);

// Modifie un menu
router.post('/editMenu', controller.editMenu);

// Lie un item à un menu
router.post('/LinkItemMenu', controller.linkMenuItem);

// Retourne un menu
router.get('/getMenu/:id', controller.getMenu);

// Retourne tous les menus grâce à un filtre [title, description, imageURL, idRestaurant, price]
router.get('/getAllMenus', controller.getAllMenus);

// Retourne tous les items d'un menu
router.get('/getMenuItems/:id', controller.getMenuItems);

// Supprime un menu
router.delete('/deleteMenu', controller.deleteMenu);

// Retire un item d'un menu
router.delete('/deleteMenuItem', controller.deleteMenuItem);

router.get('/getItemsByRestaurantId/:id', controller.getItemsByRestaurantId);

router.get('/getMenusByRestaurantId/:id', controller.getMenusByRestaurantId);

export default router;

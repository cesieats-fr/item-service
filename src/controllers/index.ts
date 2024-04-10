import { Request, Response } from 'express';
import { Item, Menu, MenuItem } from '../database';
import { IItem, IMenu, IMenuItem } from 'cesieats-service-types/src/item';

// Ajoute/créer un item
const addItem = async (req: Request, res: Response) => {
  try {
    const item: IItem = {
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      idRestaurant: req.body.idRestaurant,
      price: req.body.price,
    };
    const result = await Item.create(item);
    res.status(200).json(result);
    console.log('item: ' + item);
    console.log('result: ' + result);
    res.status(200).json(result);
  } catch (error) {
    console.log('[ITEM-SERVICE] addItem error: ' + error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

// Modifie un item
const editItem = async (req: Request, res: Response) => {
  try {
    const update = { 
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      idRestaurant: req.body.idRestaurant,
      price: req.body.price,
    };
    const result = await Item.findByIdAndUpdate(req.body.id, update);
    console.log('update: ' + update);
    console.log('result after update: ' + result);
    res.status(200).json(result);
  }  catch (error) {
    console.log('[ITEM-SERVICE] updateItem error: ' + error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

// Retourne un item
const getItem = async (req: Request, res: Response) => {
  try {
    const result = await Item.findById(req.params.id);
    console.log('id: ' + req.params.id);
    console.log('result: ' + result);
    res.status(200).json(result);
  } catch (error) {
    console.log('[ITEM-SERVICE] getItem error: ' + error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

// Retourne tous les items grâce à un filtre [title, description, imageURL, idRestaurant, price]
const getAllItems = async (req: Request, res: Response) => {
  try {
    const filter = {
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      idRestaurant: req.body.idRestaurant,
      price: req.body.price,
    };
    const result = await Item.find(filter);
    console.log('filter: ' + filter);
    console.log('result: ' + result);
    res.status(200).json(result);
  } catch (error) {
    console.log('[ITEM-SERVICE] getAllItems error: ' + error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

// Supprime un item
const deleteItem = async (req: Request, res: Response) => {
  try {
    const filter = {idItem: req.body.id};
    const resultMenuItem = await MenuItem.deleteMany(filter);
    const resultItem = await Item.findByIdAndDelete(req.body.id);
    console.log('id: ' + req.body.id);
    console.log('resultMenuItem: ' + resultMenuItem);
    console.log('resultItem: ' + resultItem);
    res.status(200).json({
      resultMenuItem: resultMenuItem,
      resultItem: resultItem,
    });
  } catch (error) {
    console.log('[ITEM-SERVICE] deleteItem error: ' + error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

// Ajoute/créer un menu
const addMenu = async (req: Request, res: Response) => {
  try {
    const menu: IMenu = {
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      idRestaurant: req.body.idRestaurant,
      price: req.body.price,
    };
    const result = await Menu.create(menu);
    res.status(200).json(result);
    console.log('menu: ' + menu);
    console.log('result: ' + result);
    res.status(200).json(result);
  } catch (error) {
    console.log('[ITEM-SERVICE] addMenu error: ' + error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

// Modifie un menu
const editMenu = async (req: Request, res: Response) => {
  try {
    const update = { 
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      idRestaurant: req.body.idRestaurant,
      price: req.body.price,
    };
    const result = await Menu.findByIdAndUpdate(req.body.id, update);
    console.log('update: ' + update);
    console.log('result after update: ' + result);
    res.status(200).json(result);
  }  catch (error) {
    console.log('[ITEM-SERVICE] updateMenu error: ' + error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

// Lie un item à un menu
const linkMenuItem = async (req: Request, res: Response) => {
  try {
    const menuItem: IMenuItem = {
      idItem: req.body.idItem,
      idMenu: req.body.idMenu,
    };
    const result = await MenuItem.create(menuItem);
    res.status(200).json(result);
    console.log('menuItem: ' + MenuItem);
    console.log('result: ' + result);
    res.status(200).json(result);
  } catch (error) {
    console.log('[ITEM-SERVICE] linkMenuItem error: ' + error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

// Retourne un menu
const getMenu = async (req: Request, res: Response) => {
  try {
    const result = await Menu.findById(req.params.id);
    console.log('id: ' + req.params.id);
    console.log('result: ' + result);
    res.status(200).json(result);
  } catch (error) {
    console.log('[ITEM-SERVICE] getMenu error: ' + error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

// Retourne tous les menus grâce à un filtre [title, description, imageURL, idRestaurant, price]
const getAllMenus = async (req: Request, res: Response) => {
  try {
    const filter = {
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      idRestaurant: req.body.idRestaurant,
      price: req.body.price,
    };
    const result = await Menu.find(filter);
    console.log('filter: ' + filter);
    console.log('result: ' + result);
    res.status(200).json(result);
  } catch (error) {
    console.log('[ITEM-SERVICE] getAllMenus error: ' + error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

// Retourne tous les items d'un menu
const getMenuItems = async (req: Request, res: Response) => {
  try {
    const filter = {idMenu: req.params.id};
    const menuItems = await MenuItem.find(filter);
    let result = [];
    for (let menuItem of menuItems) {
      const item = await Item.findById(menuItem.idItem);
      result.push(item);
    }
    console.log('result: ' + result);
    res.status(200).json(result);
  } catch (error) {
    console.log('[ITEM-SERVICE] getMenuItems error: ' + error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

// Supprime un menu
const deleteMenu = async (req: Request, res: Response) => {
  try {
    const filter = {idMenu : req.body.id}
    const resultMenu = await Menu.findByIdAndDelete(req.body.id);
    const resultMenuItem = await MenuItem.deleteMany(filter);
    console.log('id: ' + req.body.id);
    console.log('resultMenu: ' + resultMenu);
    console.log('resultMenuItem: ' + resultMenuItem);
    res.status(200).json({
      resultMenu: resultMenu,
      resultMenuItem: resultMenuItem,
    });
  } catch (error) {
    console.log('[ITEM-SERVICE] deleteMenu error: ' + error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

// Retire un item d'un menu
const deleteMenuItem = async (req: Request, res: Response) => {
  try {
    const filter = { idItem: req.body.idItem,idMenu: req.body.idMenu }
    const result = await MenuItem.findOneAndDelete(filter);
    console.log('id: ' + req.body.id);
    console.log('result: ' + result);
    res.status(200).json(result);
  } catch (error) {
    console.log('[ITEM-SERVICE] deleteMenuItem error: ' + error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

const controller = {
  addItem,
  editItem,
  getItem,
  getAllItems,
  deleteItem,
  addMenu,
  editMenu,
  linkMenuItem,
  getMenu,
  getAllMenus,
  getMenuItems,
  deleteMenu,
  deleteMenuItem,
};

export default controller;

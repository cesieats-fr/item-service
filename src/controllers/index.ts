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
  } catch (error) {
    res.status(400).json({ message: 'an unexpected error occurred' });
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
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'an unexpected error occurred' });
  }
};

// Retourne un item
const getItem = async (req: Request, res: Response) => {
  try {
    const result = await Item.findById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'an unexpected error occurred' });
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
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'an unexpected error occurred' });
  }
};

// Supprime un item
const deleteItem = async (req: Request, res: Response) => {
  try {
    const filter = { idItem: req.body.id };
    const resultMenuItem = await MenuItem.deleteMany(filter);
    const resultItem = await Item.findByIdAndDelete(req.body.id);
    res.status(200).json({
      resultMenuItem: resultMenuItem,
      resultItem: resultItem,
    });
  } catch (error) {
    res.status(400).json({ message: 'an unexpected error occurred' });
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
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'an unexpected error occurred' });
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
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'an unexpected error occurred' });
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
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'an unexpected error occurred' });
  }
};

// Retourne un menu
const getMenu = async (req: Request, res: Response) => {
  try {
    const result = await Menu.findById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'an unexpected error occurred' });
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
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'an unexpected error occurred' });
  }
};

// Retourne tous les items d'un menu
const getMenuItems = async (req: Request, res: Response) => {
  try {
    const filter = { idMenu: req.params.id };
    const menuItems = await MenuItem.find(filter);
    const result = [];
    for (const menuItem of menuItems) {
      const item = await Item.findById(menuItem.idItem);
      result.push(item);
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'an unexpected error occurred' });
  }
};

// Supprime un menu
const deleteMenu = async (req: Request, res: Response) => {
  try {
    const filter = { idMenu: req.body.id };
    const resultMenu = await Menu.findByIdAndDelete(req.body.id);
    const resultMenuItem = await MenuItem.deleteMany(filter);
    res.status(200).json({
      resultMenu: resultMenu,
      resultMenuItem: resultMenuItem,
    });
  } catch (error) {
    res.status(400).json({ message: 'an unexpected error occurred' });
  }
};

// Retire un item d'un menu
const deleteMenuItem = async (req: Request, res: Response) => {
  try {
    const filter = { idItem: req.body.idItem, idMenu: req.body.idMenu };
    const result = await MenuItem.findOneAndDelete(filter);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'an unexpected error occurred' });
  }
};

const getItemsByRestaurantId = async (req: Request, res: Response) => {
  try {
    const filter = { idRestaurant: req.params.id };
    const result = await Item.find(filter).exec();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'an unexpected error occurred' });
  }
};

const getMenusByRestaurantId = async (req: Request, res: Response) => {
  try {
    const filter = { idRestaurant: req.params.id };
    const result = await Menu.find(filter).exec();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'an unexpected error occurred' });
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
  getItemsByRestaurantId,
  getMenusByRestaurantId,
};

export default controller;

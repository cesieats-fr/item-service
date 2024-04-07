import { Request, Response } from 'express';
import { Item, Menu, MenuItem } from '../database';
import { IItem, IMenu, IMenuItem } from 'cesieats-service-types/src/item';

// Liste des items d'un restaurant à partir de l'id du restaurant
const getFromRestaurant = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};

const createItem = async (req: Request, res: Response) => {
  const item: IItem = {
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    idRestaurant: req.body.idRestaurant,
    price: req.body.price,
  };
  const result = await Item.create(item);
  res.status(200).json(result);
};

const editItem = async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};

const getItem = async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};

const deleteRestaurantItem = async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};

const controller = {
  getFromRestaurant,
  createItem,
  getItem,
  editItem,
  deleteRestaurantItem,
};

export default controller;

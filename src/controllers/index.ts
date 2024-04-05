import { Request, Response } from 'express';

// Liste des items d'un restaurant à partir de l'id du restaurant
const getFromRestaurant = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};

const createItem = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};

const editItem = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};

const getItem = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};

const deleteRestaurantItem = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};

const controller = {
  getFromRestaurant,
  createItem,
  getItem,
  editItem,
  deleteRestaurantItem
};

export default controller;

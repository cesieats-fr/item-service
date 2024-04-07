import mongoose, { Schema, model } from 'mongoose';
import { IItem, IMenu, IMenuItem } from 'cesieats-service-types/src/item';

export const itemSchema = new Schema<IItem>({
  title: { type: String, required: true },
  description: { type: String, required: false },
  imageUrl: { type: String, required: false },
  price: { type: Number, required: true },
  idRestaurant: { type: Number, required: true },
});

export const menuSchema = new Schema<IMenu>({
  title: { type: String, required: true },
  description: { type: String, required: false },
  imageUrl: { type: String, required: false },
  price: { type: Number, required: true },
});

export const menuItemSchema = new Schema<IMenuItem>({
  idItem: { type: String, required: true },
  idMenu: { type: String, required: true },
});

export const Item = model<IItem>('Item', itemSchema);
export const Menu = model<IMenu>('Menu', menuSchema);
export const MenuItem = model<IMenuItem>('MenuItem', menuItemSchema);

export async function connectMongoose() {
  await mongoose.connect(`mongodb://${process.env.DB_URL}/`, {
    dbName: 'cesieats-service',
    user: process.env.DB_USERNAME,
    pass: process.env.DB_PASSWORD,
  });
  console.log('Connected to MongoDB ');
}

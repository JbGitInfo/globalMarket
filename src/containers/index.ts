import { container } from 'tsyringe';
import IItemRepository from '../interfaces/repositories/IItemRepository';
import ItemRepository from '../repositories/itemRepository';

container.registerSingleton<IItemRepository>('ItemRepository', ItemRepository);

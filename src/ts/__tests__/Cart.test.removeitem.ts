import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('delete item from cart by id', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(978, 'The Avengers', 500, 2012, 'USA', 'Avengers assemble!', ['fantasy', 'action', 'adventure'], 137));

  const itemIdToRemove = 1001;
  cart.removeItemById(itemIdToRemove);

  expect(cart.items.some(item => item.id === itemIdToRemove)).toBeFalsy;
});
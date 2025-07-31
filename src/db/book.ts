
interface Author {
  id: string;
  name: string;
}

interface Book {
  id: string;
  title: string;
  authorId: string;
}

export const authors: Author[] = [
  { id: '1', name: 'Kate Chopin' },
  { id: '2', name: 'Paul Auster' },
];

export const books: Book[] = [
  { id: '1', title: 'The Awakening', authorId: '1' },
  { id: '2', title: 'City of Glass', authorId: '2' },
  { id: '3', title: 'The Story of an Hour', authorId: '1' },
];
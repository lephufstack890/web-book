import { THeaderMenuData } from '@/containers/Header/Header.types.d';
import { Paths } from '@/pages/routers';

export const dataHeaderMenu: THeaderMenuData[] = [
  { key: 1, link: Paths.Release, activePaths: [Paths.Release], title: 'Về chúng tôi' },
  { key: 2, link: Paths.Articles, activePaths: [Paths.Articles], title: 'Bài viết' },
  { key: 3, link: Paths.BooksLibrary, activePaths: [Paths.BooksLibrary], title: 'Thư viện tâm sách' },
  { key: 4, link: Paths.BookShelf, activePaths: [Paths.BookShelf], title: 'Khóa học kĩ năng', requireAuth: true },
  { key: 5, link: Paths.Contact, activePaths: [Paths.Contact], title: 'Tư vấn tâm lý', requireAuth: true },
];

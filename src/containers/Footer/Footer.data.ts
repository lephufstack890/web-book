import { TFooterMenuData } from '@/containers/Footer/Footer.types.d';
import { Paths } from '@/pages/routers';

export const dataFooterMenu: TFooterMenuData[] = [
  { key: 1, link: Paths.Release, activePaths: [Paths.Release], title: 'Giải tỏa' },
  { key: 2, link: Paths.Articles, activePaths: [Paths.Articles], title: 'Khóa học' },
  { key: 3, link: Paths.BooksLibrary, activePaths: [Paths.BooksLibrary], title: 'Thư viện tâm sách' },
  { key: 4, link: Paths.BookShelf, activePaths: [Paths.BookShelf], title: 'Kệ sách', requireAuth: true },
];

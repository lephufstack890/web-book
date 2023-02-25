import { TListPopularData } from './TabServicePopular.types.d';
import PopularItem1 from '@/assets/images/popular-item-1.png';
import PopularItem2 from '@/assets/images/popular-item-2.png';
import PopularItem3 from '@/assets/images/popular-item-3.png';
import PopularItem4 from '@/assets/images/popular-item-4.png';
import MantalityFamily from '@/assets/images/matality-family.png';
import MantalityWork from '@/assets/images/matality-work.png';
import MantalitySchool from '@/assets/images/matality-school.png';
import MantalityPopular from '@/assets/images/matality-popular.png';

export const dataPopular: TListPopularData[] = [
  {
    id: 1,
    key: '01',
    title: 'Tâm lý gia đình',
    description: 'Family Therapy',
    thumbnail: PopularItem1,
    icon: MantalityFamily,
    isActive: false,
    listChild: [
      {
        cat_id: 1,
        title: 'Mẫu thuẫn vợ chồng',
        des: 'Có dấu hiệu ngoại tình',
        note: '',
        color: '#EE4D2C',
        col: 8,
      },
      {
        cat_id: 2,
        title: 'Giáo dục con cái',
        des: 'Có dấu hiệu ngoại tình',
        note: '(Độ tuổi5-13)',
        color: '#263238',
        col: 8,
      },
      {
        cat_id: 3,
        title: 'Áp lực tài chính',
        des: 'Có dấu hiệu ngoại tình',
        note: '',
        color: '#2896FF',
        col: 8,
      },
    ],
  },
  {
    id: 2,
    key: '02',
    title: 'Tâm lý học đường',
    description: 'Therapy For Students',
    thumbnail: PopularItem2,
    icon: MantalityWork,
    isActive: false,
    listChild: [
      {
        cat_id: 1,
        title: 'VẤN ĐỀ HỌC TẬP',
        des: 'Có dấu hiệu ngoại tình',
        note: '',
        color: '#EE4D2C',
        col: 8,
      },
      {
        cat_id: 2,
        title: 'Tâm lý tuổi mới lớn',
        des: 'Có dấu hiệu ngoại tình',
        note: '(Độ tuổi13-18)',
        color: '#263238',
        col: 8,
      },
      {
        cat_id: 3,
        title: 'Xung đột mối quan hệ',
        des: 'Có dấu hiệu ngoại tình',
        note: '(Tình yêu, Gia đình, Bạn bè)',
        color: '#2896FF',
        col: 8,
      },
    ],
  },
  {
    id: 3,
    key: '03',
    title: 'Tâm lý người đi làm',
    description: 'Therapy For Adults',
    thumbnail: PopularItem3,
    icon: MantalitySchool,
    isActive: false,
    listChild: [
      {
        cat_id: 1,
        title: 'Vấn đề công việc',
        des: 'Có dấu hiệu ngoại tình',
        note: '',
        color: '#EE4D2C',
        col: 8,
      },
      {
        cat_id: 2,
        title: 'Khủng hoảng tuổi trung niên',
        des: 'Có dấu hiệu ngoại tình',
        note: '(Độ tuổi 35-50)',
        color: '#263238',
        col: 8,
      },
      {
        cat_id: 3,
        title: 'Xung đột mối quan hệ',
        des: 'Có dấu hiệu ngoại tình',
        note: '(Tình yêu, Gia đình, Bạn bè)',
        color: '#2896FF',
        col: 8,
      },
    ],
  },
  {
    id: 4,
    key: '04',
    title: 'Vấn đề tâm lý phổ biến',
    description: 'Common Psychological Problems',
    thumbnail: PopularItem4,
    icon: MantalityPopular,
    isActive: false,
    listChild: [
      {
        cat_id: 1,
        title: 'Kiểm soát giận dữ',
        des: 'Có dấu hiệu ngoại tình',
        note: '(Anger Management)',
        color: '#2896FF',
        col: 6,
      },
      {
        cat_id: 2,
        title: 'Lòng tự tôn thấp',
        des: 'Có dấu hiệu ngoại tình',
        note: '(Low self-esteem)',
        color: '#333336',
        col: 6,
      },
      {
        cat_id: 3,
        title: 'Căng thẳng áp lực',
        des: 'Có dấu hiệu ngoại tình',
        note: '(Stress)',
        color: '#E08D02',
        col: 6,
      },
      {
        cat_id: 4,
        title: 'Tật xấu âm tính',
        des: 'Có dấu hiệu ngoại tình',
        note: '(Unwholesome Mind)',
        color: '#5A5A5A',
        col: 6,
      },
    ],
  },
];

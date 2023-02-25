import { TListDiscordData } from './TabServiceDiscorder.types.d';
import concern from '@/assets/images/concern.png';
import obsess from '@/assets/images/obsess.png';
import feel from '@/assets/images/feel.png';
import acdiction from '@/assets/images/acdiction.png';
import IconConcern from '@/assets/images/IconConcern.svg';
import IconObsess from '@/assets/images/IconObsess.svg';
import IconFeel from '@/assets/images/IconFeel.svg';
import IconAcdiction from '@/assets/images/IconAcdiction.svg';

export const dataDiscord: TListDiscordData[] = [
  {
    id: 1,
    key: '01',
    title: 'Lo âu & sợ hãi',
    description: 'Phobia Anxiety Disorder',
    thumbnail: concern,
    icon: IconConcern,
    listChild: [
      {
        cat_id: 1,
        note: 'Nổi sợ - 5 Rối loạn thường gặp',
        noteSeeMore: 'Nỗi sợ - 4 Biểu hiện chung',
        className: 'active',
      },
    ],
    listSeeMore: [
      {
        cat_id: 1,
        title: 'Rối Loạn Lo Âu Lan Tỏa',
        des: 'Có dấu hiệu ngoại tình',
        note: '(Generalized Anxiety Disorder)',
        color: '#01A358',
        col: 4,
        className: 'active',
      },
      {
        cat_id: 2,
        title: 'Rối loạn hoảng loạn',
        des: 'Có dấu hiệu ngoại tình',
        note: '(Panick Attack)',
        color: '#2896FF',
        col: 4,
        className: 'active',
      },
      {
        cat_id: 3,
        title: 'Rối loạn lo âu xã hỘI',
        des: 'Có dấu hiệu ngoại tình',
        note: ' (Social Phobia Disorder)',
        color: '#333336',
        col: 4,
        className: 'active',
      },
      {
        cat_id: 4,
        title: 'Sang chấn tâm lý',
        des: 'Có dấu hiệu ngoại tình',
        note: '(Trauma)',
        color: '#1075B4',
        col: 4,
        className: 'active',
      },
      {
        cat_id: 5,
        title: 'Các rối loạn liên quan',
        des: 'Có dấu hiệu ngoại tình',
        note: '(Other Related Disorder)',
        color: '#FF9F00',
        col: 4,
        className: 'active',
      },
    ],
  },
  {
    id: 2,
    key: '02',
    title: 'Ám ảnh cưỡng chế',
    description: 'Obssessive Compulsive Disorder',
    thumbnail: obsess,
    icon: IconFeel,
    listChild: [
      {
        cat_id: 2,
        note: 'Ám ảnh - 3 Rối loạn thường gặp',
        noteSeeMore: 'Ám ảnh - 3 Biểu hiện chung',
        className: '',
      },
    ],
    listSeeMore: [
      {
        cat_id: 1,
        title: 'Ám ảnh sạch sẽ',
        des: 'Có dấu hiệu ngoại tình',
        note: '(Mysophobia)',
        color: '#2896FF',
        col: 8,
        className: '',
      },
      {
        cat_id: 2,
        title: 'ám ảnh NGOẠI HÌNH',
        des: 'Có dấu hiệu ngoại tình',
        note: '(Body Dysmorphic Disorder)',
        color: '#333336',
        col: 8,
        className: '',
      },
      {
        cat_id: 3,
        title: 'Ám ảnh gọn gàng',
        des: 'Có dấu hiệu ngoại tình',
        note: '(Orderliness)',
        color: '#FF9F00',
        col: 8,
        className: '',
      },
    ],
  },
  {
    id: 3,
    key: '03',
    title: 'Rối loạn cảm xúc',
    description: 'Mood Disorder',
    thumbnail: feel,
    icon: IconObsess,
    listChild: [
      {
        cat_id: 3,
        note: 'Cảm xúc - 3 Rối loạn thường gặp',
        noteSeeMore: 'Cảm xúc - 3 Biểu hiện chung',
        className: '',
      },
    ],
    listSeeMore: [
      {
        cat_id: 1,
        title: 'Hưng cảm',
        des: 'Có dấu hiệu ngoại tình',
        note: '(Mania)',
        color: '#2896FF',
        col: 8,
        className: '',
      },
      {
        cat_id: 2,
        title: 'Trầm cảm',
        des: 'Có dấu hiệu ngoại tình',
        note: '(Depression)',
        color: '#263238',
        col: 8,
        className: '',
      },
      {
        cat_id: 3,
        title: 'Rối loạn lưỡng cực ',
        des: 'Có dấu hiệu ngoại tình',
        note: '(Bibolar Disorder)',
        color: '#E08D02',
        col: 8,
        className: '',
      },
    ],
  },
  {
    id: 4,
    key: '04',
    title: 'Nghiện',
    description: 'Addiction',
    thumbnail: acdiction,
    icon: IconAcdiction,
    listChild: [
      {
        cat_id: 4,
        note: 'Nghiện - 4 Rối loạn thường gặp',
        noteSeeMore: 'Nghiện - 3 Biểu hiện chung',
        className: '',
      },
    ],
    listSeeMore: [
      {
        cat_id: 1,
        title: 'Nghiện chất kích thích',
        des: 'Có dấu hiệu ngoại tình',
        note: '(Subtances Addiction)',
        color: '#2896FF',
        col: 6,
        className: '',
      },
      {
        cat_id: 2,
        title: 'Nghiện đồ ăn',
        des: 'Có dấu hiệu ngoại tình',
        note: '(Food Addiction)',
        color: '#263238',
        col: 6,
        className: '',
      },
      {
        cat_id: 3,
        title: 'Nghiện tình dục',
        des: 'Có dấu hiệu ngoại tình',
        note: '(Sex Addiction)',
        color: '#E08D02',
        col: 6,
        className: '',
      },
      {
        cat_id: 4,
        title: 'Các chứng nghiện liên quan',
        des: 'Có dấu hiệu ngoại tình',
        note: '(Other Related Disorder)',
        color: '#5A5A5A',
        col: 6,
        className: '',
      },
    ],
  },
];

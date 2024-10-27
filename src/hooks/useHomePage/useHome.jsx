// import { RealEstateCard } from "../../components/RealEstateCard ";
import { RealEstateCard } from './../../components/ui/RealEstateCard';
import {
  images1,
  images2,
  images3,
  images4,
  images5,
} from "../../hooks/useHomePage/projectImages";

export const cells = [
  { content: <RealEstateCard image={images1} /> },
  { content: <RealEstateCard image={images2} /> },
  { content: <RealEstateCard image={images3} /> },
  { content: <RealEstateCard image={images4} /> },
  { content: <RealEstateCard image={images5} /> },
];

export const cardTitles = [
  "التصميم المعماري",
  "التصميم الإنشائي",
  "إدارة المشاريع",
  "تصميم وتنفيذ الديكور الداخلي والخارجي",
  "إعداد المخططات التنفيذية",
  "إدارة العقود والمناقصات",
  "أعمال 3D (المناظير)",
  "إعداد المخططات الهندسية",
  "إعداد المخططات لمشاريع متنوعة",
  "الإشراف الهندسي وعقود الإشراف",
  "خدمات موقع وإصدار رخص البناء",
  "حصر الكميات",
  "أعمال الرفع المساحي",
];
export const slideVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};
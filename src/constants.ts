export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: "01",
    category: "NATURE",
    title: "Jiwa Liar",
    description: "Sebuah meditasi tentang isolasi dan kekuatan alam dalam keheningan yang mendalam.",
    image: "/images/nature.png"
  },
  {
    id: "02",
    category: "URBAN",
    title: "Langkah Sunyi",
    description: "Merekam momen-momen intim di tengah hiruk-pikuk kehidupan.",
    image: "/images/urban.png"
  },
  {
    id: "03",
    category: "FASHION",
    title: "Elegansi",
    description: "Sebuah studi mendalam tentang cahaya dan bayangan dalam menonjolkan bentuk arsitektural tubuh.",
    image: "/images/fashion.png"
  }
];

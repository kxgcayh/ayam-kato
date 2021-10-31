export interface ProductInterface {
  id: number;
  name: string;
  description: string;
  price: string;
  imagePath: string;
  category: string;
  links: Links;
}

interface Links {
  id: number;
  gofood: string;
  grabfood: string;
}

export const Products = [
  {
    id: 1,
    name: 'Ayam Kuluyuk',
    description: 'Nasi + Ayam Kuluyuk + Sayur',
    price: '18.000',
    imagePath: 'ayam-kuluyuk.jpeg',
    category: 'seneng-makan',
    links: {
      id: 1,
      gofood: 'https://gofood.link/a/C8NXCkE',
      grabfood: 'https://gofood.link/a/C8NXCkE',
    }
  },
  {
    id: 2,
    name: 'Ayam Sambal Matah',
    description: 'Nasi + Ayam Sambal Matah + Sayur',
    price: '18.000',
    imagePath: 'ayam-sambal-matah.jpeg',
    category: 'seneng-makan',
    links: {
      id: 2,
      gofood: 'https://gofood.link/a/C8NXCkE',
      grabfood: 'https://gofood.link/a/C8NXCkE',
    }
  },
  {
    id: 3,
    name: 'Ayam Drakor',
    description: 'Nasi + Ayam Drakor + Sayur',
    price: '18.000',
    imagePath: 'ayam-drakor.jpeg',
    category: 'seneng-makan',
    links: {
      id: 3,
      gofood: 'https://gofood.link/a/C8NXCkE',
      grabfood: 'https://gofood.link/a/C8NXCkE',
    }
  },
  {
    id: 4,
    name: 'Ayam Katsu',
    description: 'Nasi + Ayam Katsu + Sayur',
    price: '18.000',
    imagePath: 'ayam-katsu.jpeg',
    category: 'seneng-makan',
    links: {
      id: 4,
      gofood: 'https://gofood.link/a/C8NXCkE',
      grabfood: 'https://gofood.link/a/C8NXCkE',
    }
  },
  {
    id: 5,
    name: 'Ayam Saus Keju',
    description: 'Nasi + Ayam Saus Keju + Sayur',
    price: '18.000',
    imagePath: 'ayam-saus-keju.jpeg',
    category: 'seneng-makan',
    links: {
      id: 5,
      gofood: 'https://gofood.link/a/C8NXCkE',
      grabfood: 'https://gofood.link/a/C8NXCkE',
    }
  },
  {
    id: 6,
    name: 'Es Permen Karet',
    description: 'Es Segar Rasa Permen Karet',
    price: '8.000',
    imagePath: 'es-permen-karet.jpeg',
    category: 'seneng-minum',
    links: {
      id: 6,
      gofood: 'https://gofood.link/a/C8NXCkE',
      grabfood: 'https://gofood.link/a/C8NXCkE',
    }
  },
  {
    id: 7,
    name: 'Ayam Drakor 250 Gram',
    description: 'Ayam Drakor 250 Gram',
    price: '25.000',
    imagePath: 'ayam-drakor-250mg.jpeg',
    category: 'seneng-nyemil',
    links: {
      id: 7,
      gofood: 'https://gofood.link/a/C8NXCkE',
      grabfood: 'https://gofood.link/a/C8NXCkE',
    }
  },
  {
    id: 8,
    name: 'French Fries Saus Keju',
    description: 'French Fries Saus Keju',
    price: '15.000',
    imagePath: 'french-fries-saus-keju.jpeg',
    category: 'seneng-nyemil',
    links: {
      id: 8,
      gofood: 'https://gofood.link/a/C8NXCkE',
      grabfood: 'https://gofood.link/a/C8NXCkE',
    }
  },
  {
    id: 9,
    name: 'French Fries',
    description: 'French Fries',
    price: '15.000',
    imagePath: 'french-fries.jpeg',
    category: 'seneng-nyemil',
    links: {
      id: 9,
      gofood: 'https://gofood.link/a/C8NXCkE',
      grabfood: 'https://gofood.link/a/C8NXCkE',
    }
  }
];
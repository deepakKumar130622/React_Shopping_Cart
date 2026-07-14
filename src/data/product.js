// --- 1. DATA (Simulates products.js) ---
export const initialProducts = [
  {
    id: 101,
    name: "MackBook Air - M4 Black",
    price: 119990,
    image: "https://m.media-amazon.com/images/I/71CjP9jmqZL._SL1500_.jpg",
    description:
      "Apple MacBook Air with M4 chip in Midnight Black. Blazing-fast performance, 18-hour battery life, and a stunning Liquid Retina display.",
    category: "Laptop",
  },
  {
    id: 102,
    name: "MackBook Air - M4 Golden",
    price: 119990,
    image: "https://m.media-amazon.com/images/I/71XIkqkx+KL._SL1500_.jpg",
    description:
      "Apple MacBook Air M4 in Golden finish. Powerful and portable, featuring a 13-inch edge-to-edge Liquid Retina display and the latest Apple Silicon.",
    category: "Laptop",
  },
  {
    id: 103,
    name: "iphone 17 pro max",
    price: 79990,
    image: "https://m.media-amazon.com/images/I/618vU2qKXQL._SL1500_.jpg",
    description:
      "iPhone 17 Pro Max with A19 Pro chip, 48MP triple camera system, titanium design, and all-day battery. The most powerful iPhone ever.",
    category: "Phone",
  },
  {
    id: 401,
    name: "iphone 17 air Silver",
    price: 95490,
    image: "https://m.media-amazon.com/images/I/61SKi94cImL._SL1500_.jpg",
    description:
      "iPhone 17 Air in Silver — Apple's thinnest iPhone yet. Sleek aerospace-grade aluminum design with a stunning OLED display and 5G connectivity.",
    category: "Phone",
  },
  {
    id: 501,
    name: "iphone 17 pro max Gold",
    price: 79990,
    image: "https://m.media-amazon.com/images/I/71JGCn1z1TL._SL1500_.jpg",
    description:
      "iPhone 17 Pro Max in Desert Gold. Features Face ID, USB-C, ProMotion 120Hz OLED display, and pro-grade camera with cinematic video.",
    category: "Phone",
  },
  {
    id: 611,
    name: "HP Pavilion Plus, Intel Core i5-1335U-13th Gen Laptop, (16GB LPDDR5x,512GB SSD),IPS",
    price: 69990,
    image: "https://m.media-amazon.com/images/I/61s8J1vGi0L._SL1500_.jpg",
    description:
      "HP Pavilion Plus laptop with 13th Gen Intel Core i5, 16GB RAM, 512GB SSD, and a vivid 14-inch IPS display. Built for productivity and multitasking.",
    category: "Laptop",
  },
  {
    id: 601,
    name: "iphone 17 air White",
    price: 95490,
    image: "https://m.media-amazon.com/images/I/61Ce-6B6x+L._SL1500_.jpg",
    description:
      "iPhone 17 Air in Starlight White — ultra-thin smartphone with Dynamic Island, advanced dual-camera system, and MagSafe wireless charging.",
    category: "Phone",
  },
  {
    id: 609,
    name: "Sony Alpha ILCE-7RM3A Full-Frame 42.4MP Mirrorless",
    price: 120990,
    image: "https://m.media-amazon.com/images/I/71VnF6UiESL._SL1500_.jpg",
    description:
      "Sony Alpha 7R III A mirrorless camera with 42.4MP full-frame sensor, 5-axis stabilization, 4K video, and 693 phase-detect AF points.",
    category: "Camera",
  },
  {
    id: 602,
    name: "ipad M4 white",
    price: 54990,
    image: "https://m.media-amazon.com/images/I/719uQ7BLfrL._SX679_.jpg",
    description:
      "iPad with M4 chip in Silver White. Features a stunning Ultra Retina XDR OLED display, Apple Pencil Pro support, and all-day battery life.",
    category: "Tablet",
  },
  {
    id: 603,
    name: "ipad M4 gold",
    price: 54990,
    image: "https://m.media-amazon.com/images/I/719oEHipgqL._SL1500_.jpg",
    description:
      "iPad M4 in Gold finish with Ultra Retina OLED display. Powerful Apple Silicon chip, perfect for creativity, note-taking, and media consumption.",
    category: "Tablet",
  },
  {
    id: 604,
    name: "Lenovo Tab 9",
    price: 35990,
    image: "https://m.media-amazon.com/images/I/71PwporL-mL._SL1500_.jpg",
    description:
      "Lenovo Tab 9 Android tablet with a large display, quad speakers, long-lasting battery, and fast processor — ideal for entertainment and studying.",
    category: "Tablet",
  },
  {
    id: 610,
    name: "Sony Alpha ILCE-7M3K Full-Frame 24.2MP Mirrorless Digital SLR Camera",
    price: 120990,
    image: "https://m.media-amazon.com/images/I/71j3bPnm+UL._SL1500_.jpg",
    description:
      "Sony Alpha 7 III mirrorless camera with 24.2MP full-frame BSI sensor, real-time eye AF, 4K HDR video, and 10fps continuous shooting.",
    category: "Camera",
  },
  {
    id: 605,
    name: "Apple iPad Go Lite",
    price: 35990,
    image: "https://m.media-amazon.com/images/I/81LskAU5h1L._SX679_.jpg",
    description:
      "Apple iPad Go Lite — a lightweight and affordable tablet with a Retina display, A-series chip, and Apple Pencil support for drawing and notes.",
    category: "Tablet",
  },
  {
    id: 606,
    name: "Canon E0S - 200",
    price: 60990,
    image: "https://m.media-amazon.com/images/I/81LskAU5h1L._SX679_.jpg",
    description:
      "Canon EOS 200 DSLR camera with 24.1MP APS-C sensor, built-in Wi-Fi, Bluetooth, 4K video, and beginner-friendly guided shooting modes.",
    category: "Camera",
  },
  {
    id: 607,
    name: "Nikon Mirroless",
    price: 90990,
    image: "https://m.media-amazon.com/images/I/51AbWisvJfL._SX679_.jpg",
    description:
      "Nikon mirrorless camera with a high-resolution sensor, fast hybrid autofocus, 4K UHD video recording, and weather-sealed body for professionals.",
    category: "Camera",
  },
  {
    id: 608,
    name: "HP Pavilion x360, 13th Gen Intel Core i5-1335U (16GB DDR4, 512GB SSD) Black",
    price: 69990,
    image: "https://m.media-amazon.com/images/I/618zAXbM4uL._SL1500_.jpg",
    description:
      "HP Pavilion x360 convertible laptop with 360-degree hinge, 13th Gen Intel Core i5, 16GB DDR4, 512GB SSD, and Full HD touch display.",
    category: "Laptop",
  },
];
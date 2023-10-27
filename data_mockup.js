const products = [
  {
    id: '1',
    name: 'Samsung Galaxy Flip5',
    price: '45,990 บาท',
    image: require('./images/3.jpg'),
    description: 'สมาร์ทโฟล์นที่มาพร้อมกับหน้าจอ Dynamic AMOLED ขนาด 6.7 นิ้ว ความละเอียด 1080 x 2640 pixels และรองรับ HDR10+ ระบบกล้องหลังคู่ 12+12 MP และกล้องหน้า 10 MP มีระบบป้องกันฝุ่นและน้ำ IP68 และรองรับการใช้งานแบบพับได้',
    color: ['Black', 'Silver'],
    size: [
      { type: '64GB/4GB', storage: '64 GB', ram: '4 GB' },
      { type: '128GB/6GB', storage: '128 GB', ram: '6 GB' }
    ]
  },
  {
    id: '2',
    name: 'Samsung Galaxy A54 5G',
    price: '19,990 บาท',
    image: require('./images/4.jpg'),
    description: 'สมาร์ทโฟนรุ่นใหม่ล่าสุดจาก Samsung ที่มาพร้อมกับระบบ 5G และหน้าจอ Super AMOLED ขนาด 6.5 นิ้ว ความละเอียด 1080 x 2400 pixels ระบบกล้องหลัง 48+5+12+5 MP และกล้องหน้า 32 MP มีระบบป้องกันฝุ่นและน้ำ IP67',
    color: ['White', 'Blue'],
    size: [{ type: '128GB/6GB', storage: '128 GB', ram: '6 GB' }]
  },
  {
    id: '3',
    name: 'Samsung Galaxy S23',
    price: '32,990 บาท',
    image: require('./images/5.webp'),
    description: 'สมาร์ทโฟนรุ่นใหม่ล่าสุดจาก Samsung ที่มาพร้อมกับหน้าจอ Dynamic AMOLED ขนาด 6.5 นิ้ว ความละเอียด 1080 x 2400 pixels และรองรับ HDR10+ ระบบกล้องหลัง 64+12+5+5 MP และกล้องหน้า 32 MP มีระบบป้องกันฝุ่นและน้ำ IP68',
    color: ['Gray', 'Black'],
    size: [{ type: '256GB/12GB', storage: '256 GB', ram: '12 GB' }]
  },
  {
    id: '4',
    name: 'Samsung Galaxy Watch6',
    price: '14,990 บาท',
    image: require('./images/6.webp'),
    description: 'นาฬิกาอัจฉริยะจาก Samsung ที่มาพร้อมกับหน้าจอ Super AMOLED ขนาด 1.4 นิ้ว ความละเอียด 360 x 360 pixels และรองรับการเชื่อมต่อ Bluetooth 5.0 และ Wi-Fi รองรับการติดตามสุขภาพและการออกกำลังกาย และรองรับการใช้งานแบบน้ำหนักเบา',
    color: ['Silver', 'Black'],
    size: [{ type: '44 mm', thickness: '10.7 mm' }]
  },
  {
    id: '5',
    name: 'Samsung Galaxy Buds 2 Pro',
    price: '6990 บาท',
    image: require('./images/8.webp'),
    description: 'หูฟังไร้สายจาก Samsung ที่มาพร้อมกับเทคโนโลยี Noise Cancelling และรองรับการเชื่อมต่อ Bluetooth 5.2 และมีแบตเตอรี่ใช้งานได้นาน 18 ชั่วโมง',
    color: ['Black', 'Gold'],
    size: [{ type: 'One Size' }]
  },
  {
    id: '6',
    name: 'Samsung GalaxyTab A7',
    price: '5990 บาท',
    image: require('./images/9.jpg'),
    description: 'แท็บเล็ตรุ่นใหม่ล่าสุดจาก Samsung ที่มาพร้อมกับหน้าจอ TFT ขนาด 10.4 นิ้ว ความละเอียด 1200 x 2000 pixels และรองรับการเชื่อมต่อ Wi-Fi และ Bluetooth 5.0 มีระบบป้องกันฝุ่นและน้ำ IP68',
    color: ['Gray', 'Silver'],
    size: [
      { type: '64GB/4GB', storage: '64 GB', ram: '4 GB' },
      { type: '128GB/6GB', storage: '128 GB', ram: '6 GB' }
    ]
  },
];

export default products;

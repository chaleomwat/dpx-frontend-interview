import Image from "next/image";
import ProductCard from "./components/product-card";

const MobileComponent = () => {
  const products = [
    {
      name: "Valvet navy mini Special Edition 100ml Plus size",
      price: "$1,990",
      sale_price: "$2,990",
      img_url: "/images/card1.jpeg",
      add_cart: false,
    },
    {
      name: "Valvet navy mini Special Edition 100ml Plus size",
      price: "$1,990",
      sale_price: "$2,990",
      img_url: "/images/profile.jpeg",
      add_cart: false,
    },
    {
      name: "Valvet navy mini Special Edition 100ml Plus size",
      price: "$1,990",
      sale_price: "$2,990",
      img_url: "/images/card3.webp",
      add_cart: true,
    },
    {
      name: "Valvet navy mini Special Edition 100ml Plus size",
      price: "$1,990",
      sale_price: "$2,990",
      img_url: "/images/card4.jpeg",
      add_cart: true,
    },
  ];

  return (
    <main className="main">
      <div className="card">
        <div className="card__image"></div>
        <div className="card__body">
          <div className="card__title">
            <div className="card__logo">
              <Image src="/images/logo.png" width={66} height={66} alt="logo" />
            </div>
            <div>
              <div className="card__name">
                lookbooklookbook{" "}
                <span>
                  <Image
                    src={"/images/check.webp"}
                    width={20}
                    height={20}
                    alt="check"
                  />
                </span>{" "}
              </div>
              <div className="card__description">
                welcome to lookbook's official store :)
              </div>
            </div>
          </div>
          <div className="card__list">
            <span className="list__title">ข้อกำหนดก่อนการสั่งซื้อ</span>
            <ul>
              <li>สินค้าทุกตัวเป็น พรีออเดอร์ รอสินค้า 1 เดือน</li>
              <li>สั่งซื้อแล้วไม่มีการ คืนเงินไม่ว่ากรณีใดๆ</li>
              <li>เปิดให้สั่งตั้งแต่วันที่ 1 พย - 25 พย 2022 เท่านั้น</li>
              <li>เปิดให้สั่งตั้งแต่วันที่ 1 พย - 25 พย 2022 เท่านั้น</li>
              <li>ติดต่อร้านค้า กรุณา Add line : @merchant</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card__horizontal">
        <div className="card__group">
          <div className="card__image">
            <Image src={"/images/top.png"} width={66} height={66} alt="top" />
          </div>
          <span className="font__secondary-small">Top</span>
        </div>
        <div className="card__group">
          <div className="card__image">
            <Image
              src={"/images/dress.png"}
              width={66}
              height={66}
              alt="dress"
            />
          </div>
          <span className="font__secondary-small">Dress</span>
        </div>
        <div className="card__group">
          <div className="card__image">
            <Image
              src={"/images/shoes.png"}
              width={66}
              height={66}
              alt="shoes"
            />
          </div>
          <span className="font__secondary-small">Shoes</span>
        </div>
        <div className="card__group">
          <div className="card__image">
            <Image
              src={"/images/accessories.png"}
              width={66}
              height={66}
              alt="shoes"
            />
          </div>
          <span className="font__secondary-small">Accessories</span>
        </div>
      </div>
      <div className="product__container">
        {products.map((items, index) => (
          <ProductCard
            key={index}
            name={items.name}
            price={items.price}
            salePrice={items.sale_price}
            imageUrl={items.img_url}
            addtoCart={items.add_cart}
          />
        ))}
      </div>
    </main>
  );
};

export default MobileComponent;

import Image from "next/image";

const ProductCard = ({ name, price, salePrice, imageUrl, addtoCart }) => {
  return (
    <div className="product">
      <div className="product__image">
        <Image src={imageUrl} width={179} height={200} alt="card" />
      </div>
      <div className="product__content">
        <div className="product__name">{name}</div>
        <div className="pric_group">
          <span className="product__price">{price}</span>
          <span className="product__saleprice">{salePrice}</span>
          <span className="product__preorder">Preoder</span>
        </div>
        {addtoCart ? (
          <div className="product__add">
            <span>-</span>
            <span>0</span>
            <span>+</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProductCard;

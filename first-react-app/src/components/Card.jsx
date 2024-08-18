import React from "react";
import PropTypes from "prop-types";

/**
 * A reusable product card component.
 *
 * @param {object} product - The product data to display.
 * @param {string} product.image - The URL of the product image.
 * @param {string} product.title - The title of the product.
 * @param {string} product.description - The description of the product.
 * @param {number} product.price - The price of the product.
 * @param {string} product.category - The category of the product.
 * @param {object} product.rating - The product rating data.
 * @param {number} product.rating.rate - The average rating of the product.
 * @param {number} product.rating.count - The number of reviews for the product.
 *
 * @example
 * <Card
 *   product={{
 *     image: 'https://example.com/image.jpg',
 *     title: 'Product Title',
 *     description: 'Product description',
 *     price: 19.99,
 *     category: 'Electronics',
 *     rating: {
 *       rate: 4.5,
 *       count: 100
 *     }
 *   }}
 * />
 */

function Card({ product, showDetails }) {
  return (
    <div className="product-card">
      <img
        className="product-card__image"
        src={product.image}
        alt={product.title}
      />
      <div className="product-card__content">
        <div className="product-card__title">{product.title}</div>
        {showDetails && (
          <p className="product-card__description">{product.description}</p>
        )}
        <p className="product-card__price">${product.price}</p>
        <p className="product-card__category">{product.category}</p>
      </div>
      <div className="product-card__rating">
        <span className="product-card__rating-rate">
          Rating: {product.rating.rate}
        </span>
        <span className="product-card__rating-count">
          ({product.rating.count} reviews)
        </span>
      </div>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.object.isRequired,
  showDetails: PropTypes.bool,
};
Card.defaultProps = {
  showDetails: true,
};

export default Card;

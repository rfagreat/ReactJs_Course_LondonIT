import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../features/api";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  padding: 2rem;
  height: 80dvh;
  overflow: auto;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  width: 100%;
  flex: 1;
  max-width: 1200px;
`;

const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const ProductTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const FormContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  margin-top: 2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const FormLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

/**
 * A React component that displays a list of products and allows users to add, update, and delete products.
 *
 * @returns {JSX.Element} A JSX element representing the product list and forms.
 */
const Products = () => {
  /**
   * State variables to manage the product list and forms.
   */
  const [showAddForm, setShowAddForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  /**
   * Fetch products from API on component mount.
   * async await to resolve promise
   */
  //What is promise?
  //A promise is a result of an asynchronous operation. It represents a value that may not be
  //available yet, but will be resolved at some point in the future.
  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, []);

  /**
   * Handle adding a new product.
   *
   * @example
   * const newProduct = {
   *   title: "New Product",
   *   price: 10.99,
   *   description: "This is a new product",
   *   image: "https://example.com/image.jpg",
   *   category: "Electronics",
   * };
   * handleAddProduct();
   */
  const handleAddProduct = async () => {
    const result = await addProduct(JSON.stringify(newProduct));
    setProducts([...products, result]);
    setNewProduct({
      title: "",
      price: "",
      description: "",
      image: "",
      category: "",
    });
    setShowAddForm(false);
  };

  /**
   * Handle updating an existing product.
   *
   * @example
   * const updatedProduct = {
   *   title: "Updated Product",
   *   price: 9.99,
   *   description: "This is an updated product",
   *   image: "https://example.com/image.jpg",
   *   category: "Electronics",
   * };
   * handleUpdateProduct();
   */
  const handleUpdateProduct = async () => {
    try {
      const result = await updateProduct(
        selectedProduct.id,
        JSON.stringify(newProduct)
      );
      console.log("result", result);
      setProducts(
        products.map((p) => (p.id === selectedProduct.id ? newProduct : p))
      );
      setNewProduct({
        title: "",
        price: "",
        description: "",
        image: "",
        category: "",
      });
    } catch (err) {
      console.error(
        "failed to update product ❌",
        JSON.stringify(err, null, 2)
      );
    } finally {
      setSelectedProduct(null);
      setShowUpdateForm(false);
    }
  };

  /**
   * Handle deleting a product.
   *
   * @param {number} id The ID of the product to delete.
   * @example
   * handleDeleteProduct(1);
   */
  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter((product) => product.id !== id));
  };

  /**
   * Handle editing a product.
   *
   * @param {object} product The product to edit.
   * @example
   * handleEditProduct({
   *   id: 1,
   *   title: "Product 1",
   *   price: 10.99,
   *   description: "This is product 1",
   *   image: "https://example.com/image.jpg",
   *   category: "Electronics",
   * });
   */
  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setNewProduct(product);
    setShowUpdateForm(true);
  };

  return (
    <Container>
      <ProductList>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>${product.price}</ProductPrice>
            <ButtonContainer>
              <Button onClick={() => handleEditProduct(product)}>Update</Button>
              <Button onClick={() => handleDeleteProduct(product.id)}>
                Delete
              </Button>
            </ButtonContainer>
          </ProductCard>
        ))}
      </ProductList>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "end",
          height: "fit-content",
        }}
      >
        {!showAddForm && !showUpdateForm ? (
          <Button onClick={() => setShowAddForm(true)}>Add Product</Button>
        ) : null}

        {showAddForm && (
          <FormContainer>
            <FormGroup>
              <FormLabel>Title</FormLabel>
              <FormInput
                type="text"
                value={newProduct.title}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, title: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Price</FormLabel>
              <FormInput
                type="number"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Description</FormLabel>
              <FormInput
                type="text"
                value={newProduct.description}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, description: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Image URL</FormLabel>
              <FormInput
                type="text"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Category</FormLabel>
              <FormInput
                type="text"
                value={newProduct.category}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, category: e.target.value })
                }
              />
            </FormGroup>
            <ButtonContainer>
              <Button onClick={handleAddProduct}>Add</Button>
              <Button onClick={() => setShowAddForm(false)}>Cancel</Button>
            </ButtonContainer>
          </FormContainer>
        )}
        {showUpdateForm && (
          <FormContainer>
            <FormGroup>
              <FormLabel>Title</FormLabel>
              <FormInput
                type="text"
                value={newProduct.title}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, title: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Price</FormLabel>
              <FormInput
                type="number"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Description</FormLabel>
              <FormInput
                type="text"
                value={newProduct.description}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, description: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Image URL</FormLabel>
              <FormInput
                type="text"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Category</FormLabel>
              <FormInput
                type="text"
                value={newProduct.category}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, category: e.target.value })
                }
              />
            </FormGroup>
            <ButtonContainer>
              <Button onClick={handleUpdateProduct}>Update</Button>
              <Button onClick={() => setShowUpdateForm(false)}>Cancel</Button>
            </ButtonContainer>
          </FormContainer>
        )}
      </div>
    </Container>
  );
};

export default Products;

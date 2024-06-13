import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";

interface Product {
  name: string;
  category: string;
  subCategory: string;
  price: number;
  image?: string;
}

interface ProductFormProps {
  productId?: string | null;
}

const ProductForm: React.FC<ProductFormProps> = ({ productId }) => {
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [product, setProduct] = useState<Product | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (productId) {
      axios
        .get(`http://localhost:5065/api/Product/${productId}`)
        .then((response) => {
          const productData: Product = response.data;
          setName(productData.name);
          setCategory(productData.category);
          setSubCategory(productData.subCategory);
          setPrice(productData.price);
          setProduct(productData);
          if (productData.image) {
            setImagePreview(productData.image);
          }
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [productId]);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("subCategory", subCategory);
    formData.append("price", price.toString());

    if (image) {
      formData.append("file", image);
    }

    try {
      let response;
      if (productId) {
        response = await axios.put(
          `http://localhost:5065/api/Product/${productId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        response = await axios.post(
          "http://localhost:5065/UploadImage",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }
      const productData: Product = response.data;
      setProduct(productData);
      if (productData.image) {
        setImagePreview(productData.image); // Set image preview to uploaded image URL
      }
      // Clear the inputs and display success message
      setName("");
      setCategory("");
      setSubCategory("");
      setPrice(0);
      setImage(null);
      setSuccessMessage("Product published successfully!");
      setTimeout(() => setSuccessMessage(null), 3000); // Clear the message after 3 seconds
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const onDelete = async () => {
    try {
      await axios.delete(`http://localhost:5065/api/Product/${productId}`);
      alert("Product deleted successfully!");
      // Optionally refresh the page or handle UI update
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  return (
    <div className="w-full h-full mx-auto p-4 bg-brandBGLighter shadow-md rounded-md grid grid-cols-3 gap-4 text-white">
      <div className="col-span-2 bg-gray-800 rounded border border-black">
        <h2 className="p-2">Preview</h2>
        {imagePreview && (
          <div className="mb-4">
            <Image
              src={imagePreview}
              alt="Image preview"
              layout="responsive"
              width={400}
              height={400}
              className="rounded-md"
              style={{
                maxHeight: "32rem",
                maxWidth: "auto,",
                objectFit: "contain",
                position: "relative"
              }}
            />
          </div>
        )}
      </div>
      <div className="col-span-1">
        <form onSubmit={onSubmit} className="space-y-4">
          <h2 className="text-2xl font-bold mb-5">
            {productId ? "Edit Product" : "Add Product"}
          </h2>
          {successMessage && (
            <div className="text-green-500 mb-4">{successMessage}</div>
          )}
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-500 text-sm font-bold mb-2">
              Category:
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select a category</option>
              <option value="Sport">Sport</option>
              <option value="Graphics">Graphics</option>
              <option value="Virtual & XR">Virtual & XR</option>
              <option value="E-sport">E-sport</option>
              <option value="Live Production">Live Production</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-500 text-sm font-bold mb-2">
              Sub Category:
            </label>
            <select
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select a sub-category</option>
              <option value="Lower Third">Lower Third</option>
              <option value="Scoreboard">Scoreboard</option>
              <option value="Bumper">Bumper</option>
              <option value="Sidebar">Sidebar</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-500 text-sm font-bold mb-2">
              Price:
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Image:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={onImageChange}
              className="block w-full text-sm border text-white border-gray-500 rounded-lg cursor-pointer bg-gray-500 focus:outline-none"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-gradient-to-r from-orange-500 to-orange-800"
            >
              {productId ? "Update" : "Add"} Product
            </button>
            {productId && (
              <button
                type="button"
                onClick={onDelete}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Delete Product
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;

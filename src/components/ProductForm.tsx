import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import Typography from '@mui/material/Typography';

const ProductForm = ({ productId }: { productId: number }) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState<File | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`http://localhost:5065/api/Product/${productId}`);
            setName(response.data.name);
            setCategory(response.data.category);
            setPrice(response.data.price);
        };

        if (productId) {
            fetchProduct();
        }
    }, [productId]);

    const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImage(event.target.files ? event.target.files[0] : null);
    };

    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('category', category);
        formData.append('price', price.toString());
        if (image) {
            formData.append('image', image);
        }

        try {
            if (productId) {
                await axios.put(`http://localhost:5065/api/Product/${productId}`, formData);
            } else {
                await axios.post('http://localhost:5065/api/Product', formData);
            }
        } catch (error) {
            console.error('Error saving product', error);
        }
    };

    const onDelete = async () => {
        try {
            await axios.delete(`http://localhost:5065/api/Product/${productId}`);
        } catch (error) {
            console.error('Error deleting product', error);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <Typography variant="h6">{productId ? 'Edit Product' : 'Add Product'}</Typography>
            <TextField label="Name" value={name} onChange={e => setName(e.target.value)} />
            <TextField label="Category" value={category} onChange={e => setCategory(e.target.value)} />
            <TextField label="Price" value={price} onChange={e => setPrice(Number(e.target.value))} />
            <input type="file" accept="image/*" onChange={onImageChange} />
            <Button type="submit" variant="contained" color="primary">{productId ? 'Update' : 'Add'}</Button>
            {productId && <Button variant="contained" color="secondary" onClick={onDelete}>Delete</Button>}
        </form>
    );
};

export default ProductForm;
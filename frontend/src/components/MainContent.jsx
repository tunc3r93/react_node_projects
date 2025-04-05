// frontend/src/components/MainContent.js
import React, { useState, useEffect } from "react";
import Graph from "./Graph";

const MainContent = () => {
    const [kalorien, setKalorien] = useState(0);
    const [zusammenfassung, setZusammenfassung] = useState("");
    const [productName, setProductName] = useState("");
    const [calories, setCalories] = useState("");
    const [amount, setAmount] = useState("");
    const [amountUnit, setAmountUnit] = useState("gramm"); // Standardmaß: Gramm
    const [productList, setProductList] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null); // Für das Bearbeiten eines Produkts

    useEffect(() => {
        fetch("http://localhost:5000/api/kalorien")
            .then((response) => response.json())
            .then((data) => {
                setKalorien(data.kalorien);
                setZusammenfassung(data.zusammenfassung);
            });
    }, []);

    const addProduct = () => {
        if (productName && calories && amount) {
            const newProduct = {
                id: Date.now(),
                name: productName,
                calories: parseInt(calories),
                amount: parseInt(amount),
                unit: amountUnit, // Maßeinheit (Gramm, Kilo, Stück)
            };
            setProductList((prevList) => [...prevList, newProduct]);
            setProductName("");
            setCalories("");
            setAmount("");
            setAmountUnit("gramm");
        }
    };

    const deleteProduct = (id) => {
        setProductList((prevList) => prevList.filter((product) => product.id !== id));
    };

    const startEditProduct = (product) => {
        setEditingProduct(product);
        setProductName(product.name);
        setCalories(product.calories.toString());
        setAmount(product.amount.toString());
        setAmountUnit(product.unit);
    };

    const saveProduct = () => {
        setProductList((prevList) =>
            prevList.map((product) =>
                product.id === editingProduct.id
                    ? { ...product, name: productName, calories: parseInt(calories), amount: parseInt(amount), unit: amountUnit }
                    : product
            )
        );
        setEditingProduct(null);
        setProductName("");
        setCalories("");
        setAmount("");
        setAmountUnit("gramm");
    };

    return (
        <div className="main-content">
            <h2>Hallo, User! Was wollen Sie heute machen?</h2>
            <div className="grid-container">
                {/* Hinzufügen von Produktname, Kalorien, Menge und Anzahl */}
                <div className="grid-item">
                    <h3>{editingProduct ? "Produkt bearbeiten" : "Hinzufügen"}</h3>
                    <input
                        type="text"
                        placeholder="Produktname"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Kalorien"
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Menge"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <select value={amountUnit} onChange={(e) => setAmountUnit(e.target.value)}>
                        <option value="gramm">Gramm</option>
                        <option value="kilo">Kilo</option>
                        <option value="stück">Stück</option>
                    </select>
                    <button onClick={editingProduct ? saveProduct : addProduct}>
                        {editingProduct ? "Speichern" : "Hinzufügen"}
                    </button>
                </div>

                {/* Bisherige Kalorien */}
                <div className="grid-item">
                    <h3>Bisherige Kalorien: {kalorien}</h3>
                </div>

                {/* Anzeige des Graphen */}
                <div className="grid-item">
                    <h3>Graph</h3>
                    <Graph />
                </div>

                {/* Produktliste */}
                <div className="grid-item">
                    <h3>Produktliste</h3>
                    <div className="product-list">
                        {productList.slice(0, 7).map((product) => (
                            <div key={product.id} className="product-item">
                                <span>{product.name} - {product.calories} Kalorien - {product.amount} {product.unit}</span>
                                <div className="product-actions">
                                    <button onClick={() => startEditProduct(product)}>Bearbeiten</button>
                                    <button onClick={() => deleteProduct(product.id)}>Löschen</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;

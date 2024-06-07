import { makeAutoObservable } from "mobx";

const STORAGE_BASKET_KEY = "Basket";

class InstrumentStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Гитары' },
      { id: 2, name: 'Ударные' },
      { id: 3, name: 'Клавишные' },
      { id: 4, name: 'Духовые'}
    ];
    this._brands = [
      { id: 1, name: "Yamaha" },
      { id: 2, name: "Solar" },
      { id: 3, name: "Соната"},
      { id: 4, name: "Fender"},
      { id: 5, name: "Gibson"},
      { id: 6, name: "Epiphone"},
      
    ];
    this._instruments = [
      { id: 1, name: "Yamaha C40", price: 50000, img: "868f8776-3aa8-4cdf-b7f8-8f180fa58759.jpg" },
      { id: 3, name: "Соната РКБ-218", price: 5000000, img: "f795ceb3-7544-49f5-9eac-b8993790d79a.jpg" },
      { id: 6, name: "Solar A2.7 Canibalismo+", price: 125990, img: "34fd6ca3-32d9-4992-81da-900d1142f8ef.jpg" },
      { id: 1, name: "Solar V2.6C", price: 119990, img: "38615c70-8a8e-4de9-b3c3-4dce9efc465e.jpg" },
    ];
    this._selectedType = {};
    this._selectedBrand = {};

    this._basket = JSON.parse(localStorage.getItem(STORAGE_BASKET_KEY)) || [];

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setSelectedType(type) {
    this._selectedType = type;
  }

  setBrands(brands) {
    this._brands = brands;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }


  setBasket(basket) {
    this._basket = basket;
    localStorage.setItem(STORAGE_BASKET_KEY, JSON.stringify(this._basket));
  }
  setInstruments(instruments) {
    this._instruments = instruments;
  }
  
  

  get types() {
    return this._types;
  } 
  get selectedType() {
    return this._selectedType;
  }

  get brands() {
    return this._brands;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }

  get basket() {
    return this._basket;
  }
 
  get instruments() {
    return this._instruments;
  }

  
}

export default InstrumentStore;


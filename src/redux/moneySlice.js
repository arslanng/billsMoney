import { createSlice } from "@reduxjs/toolkit";

const moneySlice = createSlice({
  name: "money",
  initialState: {
    billsMoney: 100000000000,
    items: [
      {
        id: 1,
        name: "Big Mac",
        price: 2,
        amount: 0,
      },
      {
        id: 2,
        name: "Flip Flops",
        price: 3,
        amount: 0,
      },
      {
        id: 3,
        name: "coca-cola pack",
        price: 5,
        amount: 0,
      },
      {
        id: 4,
        name: "Movie Ticket",
        price: 12,
        amount: 0,
      },
      {
        id: 5,
        name: "Book",
        price: 15,
        amount: 0,
      },
      {
        id: 6,
        name: "Lobster Dinner",
        price: 45,
        amount: 0,
      },
      {
        id: 7,
        name: "Video Game",
        price: 60,
        amount: 0,
      },
      {
        id: 8,
        name: "Amazon Echo",
        price: 99,
        amount: 0,
      },
      {
        id: 9,
        name: "Netflix",
        price: 100,
        amount: 0,
      },
      {
        id: 10,
        name: "Video GameAir Jordans",
        price: 125,
        amount: 0,
      },
      {
        id: 11,
        name: "Airpods",
        price: 199,
        amount: 0,
      },
      {
        id: 12,
        name: "Gaming Console",
        price: 299,
        amount: 0,
      },
      {
        id: 13,
        name: "Drone",
        price: 350,
        amount: 0,
      },
      {
        id: 14,
        name: "Smartphone",
        price: 699,
        amount: 0,
      },
      {
        id: 15,
        name: "Bike",
        price: 800,
        amount: 0,
      },
      {
        id: 16,
        name: "Kitten",
        price: 1500,
        amount: 0,
      },
      {
        id: 17,
        name: "Puppy",
        price: 1500,
        amount: 0,
      },
      {
        id: 18,
        name: "Auto Rickshaw",
        price: 800,
        amount: 0,
      },
      {
        id: 19,
        name: "Horse",
        price: 2500,
        amount: 0,
      },
      {
        id: 20,
        name: "Acre of Farmland",
        price: 3000,
        amount: 0,
      },
      {
        id: 21,
        name: "Designer Handbag",
        price: 5500,
        amount: 0,
      },
      {
        id: 22,
        name: "Hot Tub",
        price: 6000,
        amount: 0,
      },
      {
        id: 23,
        name: "Luxury Wine",
        price: 7000,
        amount: 0,
      },
      {
        id: 24,
        name: "Deamond Ring",
        price: 10000,
        amount: 0,
      },
      {
        id: 25,
        name: "Jet Ski",
        price: 12000,
        amount: 0,
      },
      {
        id: 26,
        name: "Rolex",
        price: 15000,
        amount: 0,
      },
      {
        id: 27,
        name: "Ford F-150",
        price: 30000,
        amount: 0,
      },
      {
        id: 28,
        name: "Tesla",
        price: 75000,
        amount: 0,
      },
      {
        id: 29,
        name: "Monster Truck",
        price: 150000,
        amount: 0,
      },
      {
        id: 30,
        name: "Ferrari",
        price: 250000,
        amount: 0,
      },
      {
        id: 31,
        name: "Single Family Home",
        price: 300000,
        amount: 0,
      },
      {
        id: 32,
        name: "Gold Bar",
        price: 700000,
        amount: 0,
      },
      {
        id: 33,
        name: "McDonalds Franchise",
        price: 1500000,
        amount: 0,
      },
      {
        id: 34,
        name: "Superbovl Ad",
        price: 5250000,
        amount: 0,
      },
      {
        id: 35,
        name: "Yacht",
        price: 7500000,
        amount: 0,
      },
      {
        id: 36,
        name: "M1 Abrams",
        price: 8000000,
        amount: 0,
      },
      {
        id: 37,
        name: "F1 Car",
        price: 15000000,
        amount: 0,
      },
      {
        id: 38,
        name: "Apache Helicopter",
        price: 31000000,
        amount: 0,
      },
      {
        id: 39,
        name: "Mansion",
        price: 45000000,
        amount: 0,
      },
      {
        id: 40,
        name: "Make a Movie",
        price: 100000000,
        amount: 0,
      },
      {
        id: 41,
        name: "Boeng 747",
        price: 148000000,
        amount: 0,
      },
      {
        id: 42,
        name: "Mona Lisa",
        price: 780000000,
        amount: 0,
      },
      {
        id: 43,
        name: "Skyscraper",
        price: 850000000,
        amount: 0,
      },
      {
        id: 44,
        name: "Cruise Ship",
        price: 930000000,
        amount: 0,
      },
      {
        id: 45,
        name: "NBA Team",
        price: 2120000000,
        amount: 0,
      },
    ],
  },
  reducers: {
    buyItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[index].amount += action.payload.amount;

    },
    sellItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[index].amount -= action.payload.amount;
    },
  },
});

export const { buyItem, sellItem } = moneySlice.actions;
export default moneySlice.reducer;

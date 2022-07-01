import express from "express";
import { getClient } from "../db";
import ShoutOut from "../models/ShoutOut";
// import { ObjectId } from 'mongodb';
//import ShoutOut from '../models/shoutout';

const routes = express.Router();

routes.get("/shoutouts", async (req, res) => {
  try {
    const client = await getClient();
    const results = await client.db().collection("shoutouts").find().toArray();
    res.json(results); // send JSON results
  } catch (err) {
    console.error("FAIL", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

routes.post("/shoutouts", async (req, res) => {
  const shoutout = req.body as ShoutOut;
  try {
    const client = await getClient();
    await client.db().collection<ShoutOut>("shoutouts").insertOne(shoutout);
    res.status(201).json(shoutout);
  } catch (err) {
    console.error(err);
  }
});

export default routes;

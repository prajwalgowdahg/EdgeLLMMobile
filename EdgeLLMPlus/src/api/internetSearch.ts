import React, { useState } from "react";
import axios from "axios";
import { Alert } from "react-native";

export const handleInternetSearch = async (query: string) => {
  if (!query.trim()) {
    Alert.alert("Input Error", "Please enter a query to search.");
    return;
  }

  try {
    const apiKey = "AIzaSyCEO6bf7Gy9mGksYS-zUnxEU9otd87zj4o";
    const searchEngineId = "45bf9b519406645f3";
    const response = await axios.get(
      `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
        query
      )}&key=${apiKey}&cx=${searchEngineId}`
    );

    const results = response.data.items.map((item: any) => ({
      title: item.title,
      link: item.link,
      snippet: item.snippet,
    }));

    return results;
  } catch (error: unknown) {
    console.error("Error fetching search results:", error);
    return error instanceof Error
      ? error.toString()
      : "An unknown error occurred";
  }
};

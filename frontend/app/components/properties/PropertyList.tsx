"use client";

import apiService from "@/app/services/apiService";
import { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";

export type PropertyType = {
  id: number;
  title: string;
  description: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  price_per_night: number;
  image_url: string;
  landlord: {
      name: string;
      avatar_url: string;
  };
};

const PropertyList = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);

  const getProperties = async () => {
    const tmpProperties = await apiService.get('/api/properties/');

    setProperties(tmpProperties.data);
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <>
      {properties.map((property) => {
        return <PropertyListItem key={property.id} property={property} />;
      })}
    </>
  );
};

export default PropertyList;

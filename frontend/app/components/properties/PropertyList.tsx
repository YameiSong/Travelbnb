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
    id: string;
    name: string;
    avatar_url: string;
  };
};

interface PropertyListProps {
  landord_id: string | null;
}

const PropertyList: React.FC<PropertyListProps> = ({ landord_id }) => {
  const [properties, setProperties] = useState<PropertyType[]>([]);

  const getProperties = async () => {
    let url = "/api/properties/";
    if (landord_id) {
      url += `?landlord_id=${landord_id}`;
    }
    const tmpProperties = await apiService.get(url);

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

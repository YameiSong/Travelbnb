"use client";

import apiService from "@/app/services/apiService";
import { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";

export type PropertyType = {
  id: string;
  title: string;
  description: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  price_per_night: number;
  is_favorite: boolean;
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

  const markFavorite = (id: string, is_favorite: boolean) => {
    const tmpProperties = properties.map((property: PropertyType) => {
      if (property.id === id) {
        property.is_favorite = is_favorite;

        if (is_favorite) {
          console.log("Adding to favorites");
        } else {
          console.log("Removing from favorites");
        }
      }

      return property;
    });

    setProperties(tmpProperties);
  };

  const getProperties = async () => {
    let url = "/api/properties/";
    if (landord_id) {
      url += `?landlord_id=${landord_id}`;
    }
    const tmpProperties = await apiService.get(url);

    setProperties(tmpProperties.data.map((property: PropertyType) => {
      if (tmpProperties.favorites.includes(property.id)) {
        property.is_favorite = true;
      } else {
        property.is_favorite = false;
      }

      return property;
    }));
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <>
      {properties.map((property) => {
        return (
          <PropertyListItem
            key={property.id}
            property={property}
            markFavorite={(is_favorite: boolean) =>
              markFavorite(property.id, is_favorite)
            }
          />
        );
      })}
    </>
  );
};

export default PropertyList;

import { useEffect, useMemo, useState } from "react";
import HttpFactory from "../../http/HttpFactory";
import Client from "../../services/Client";
import ClientAccessTokenProvider from "../ClientAccessTokenProvider";

export default function AddressForm() {
  const [addressSchema, setAddressSchema] = useState(null);
  const client = useMemo(
    () =>
      new Client(
        HttpFactory.create(
          "http://localhost:5173",
          new ClientAccessTokenProvider("")
        )
      ),
    []
  );

  useEffect(() => {
    client.resourceService.getSchema("address").then((response) => {
      const { data } = response;
      setAddressSchema(data);
    });
  }, [client]);

  if (!addressSchema) {
    return null;
  }

  return (
    <div style={{ textAlign: "left" }}>
      <pre>{JSON.stringify(addressSchema, null, 2)}</pre>
    </div>
  );
}

/**
 * {
  "$id": "https://example.com/address.schema.json",
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "description": "An address similar to http://microformats.org/wiki/h-card",
  "type": "object",
  "properties": {
    "post-office-box": {
      "type": "string"
    },
    "extended-address": {
      "type": "string"
    },
    "street-address": {
      "type": "string"
    },
    "locality": {
      "type": "string"
    },
    "region": {
      "type": "string"
    },
    "postal-code": {
      "type": "string"
    },
    "country-name": {
      "type": "string"
    }
  },
  "required": [
    "locality",
    "region",
    "country-name"
  ],
  "dependentRequired": {
    "post-office-box": [
      "street-address"
    ],
    "extended-address": [
      "street-address"
    ]
  }
}
 * ['post-office-box', 'extended-address', 'street-address', 'locality', 'region', 'postal-code', 'country-name']
 */

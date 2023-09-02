import { useEffect, useMemo, useState } from "react";
import Form from "react-bootstrap/Form";
import HttpFactory from "../../http/HttpFactory";
import Client from "../../services/Client";
import ClientAccessTokenProvider from "../ClientAccessTokenProvider";
import FieldSelector from "./FieldSelector";

export default function AddressForm() {
  const [addressSchema, setAddressSchema] = useState<Record<
    string,
    any
  > | null>(null);
  const [formState, setFormState] = useState({});
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
      <Form>
        {Object.keys(addressSchema.properties).map((key) => (
          <FieldSelector
            key={key}
            name={key}
            type={addressSchema.properties[key].type}
            label={addressSchema.properties[key].label}
            formState={formState}
          />
        ))}
      </Form>
    </div>
  );
}

// const arr = [{ name: "A", age: 20 }]; // ['A'] or [{ name: 'A' }] or [{ employeeName: 'A' }];
// arr.map((item) => item.name); // ['A']
// arr.map((item) => ({ name: item.name })); // [{ name: 'A' }]
// // Arrow function
// arr.map((item) => {
//   return { name: item.name };
// });

// arr.map((item) => ({ employeeName: item.name })); // [{ employeeName: 'A' }]

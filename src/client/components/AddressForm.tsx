import { useEffect, useMemo, useState } from "react";
import Form from "react-bootstrap/Form";
import HttpFactory from "../../http/HttpFactory";
import Client from "../../services/Client";
import ClientAccessTokenProvider from "../ClientAccessTokenProvider";
import FieldSelector from "./FieldSelector";
import { useAppContext } from "../context/AppContext";

export default function AddressForm() {
  const [addressSchema, setAddressSchema] = useState<Record<
    string,
    any
  > | null>(null);
  const { appConfig } = useAppContext();

  const client = useMemo(
    () =>
      new Client(
        HttpFactory.create(
          appConfig.endpoints.base,
          new ClientAccessTokenProvider("")
        )
      ),
    [appConfig.endpoints.base]
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
          />
        ))}
      </Form>
    </div>
  );
}

import { useEffect, useMemo, useState } from "react";
import Form from "react-bootstrap/Form";
import HttpFactory from "../../http/HttpFactory";
import Client from "../../services/Client";
import ClientAccessTokenProvider from "../ClientAccessTokenProvider";
import FieldSelector from "./FieldSelector";
import { useAppContext } from "../context/AppContext";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "react-bootstrap";

export interface AddressType {
  postalCode?: string;
  streetAddress?: string;
  locality?: string;
  region?: string;
  country?: string;
}

function isFieldRequired(name: string, schema: any, values: any) {
  if (schema.required && schema.required.includes(name)) {
    return true;
  }

  if (schema.dependentRequired) {
    const isRequired = Object.keys(schema.dependentRequired).reduce(
      (acc, key) => {
        if (acc || !values[key]) {
          return acc;
        }

        const requiredFields = schema.dependentRequired[key];
        acc = requiredFields.includes(name);

        return acc;
      },
      false
    );

    return isRequired;
  }

  return false;
}

export default function AddressForm() {
  const [validated, setValidated] = useState(false);
  const [addressSchema, setAddressSchema] = useState<Record<
    string,
    any
  > | null>(null);
  const { appConfig } = useAppContext();
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const allValues = watch();

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

  const handleAddressSubmit = (data: AddressType) => {
    setValidated(true);
    console.log(data);
  };

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
    <FormProvider {...methods}>
      <div style={{ textAlign: "left" }}>
        <pre>{JSON.stringify(addressSchema, null, 2)}</pre>
        <Form
          validated={validated}
          noValidate
          onSubmit={handleSubmit(handleAddressSubmit)}
        >
          {Object.keys(addressSchema.properties).map((key) => (
            <FieldSelector
              key={key}
              name={key}
              type={addressSchema.properties[key].type}
              label={addressSchema.properties[key].label}
              required={isFieldRequired(key, addressSchema, allValues)}
              fieldMetaData={addressSchema.properties[key]}
            />
          ))}
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </FormProvider>
  );
}

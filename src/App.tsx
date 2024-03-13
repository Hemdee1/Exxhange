import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import * as formik from "formik";
import axios from "axios";

interface schema {
  ammount: number;
  fromCurrency: string;
  toCurrency: string;
}

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Formik } = formik;
  const [response, setResponse] = useState(0);

  const request = async (values: schema) => {
    if (!(values.ammount && values.fromCurrency && values.toCurrency)) return;

    try {
      const response1 = await axios.post(
        "https://fxexchange-solution.onrender.com/convert",
        values
      );

      const data = response1.data?.toFixed(3);

      setResponse(data);
      console.log(response1);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-screen h-screen">
      <div className="flex items-center justify-center h-screen">
        <Card style={{ width: "50rem" }} bg="light">
          <Card.Body>
            <Card.Title className="text-[100px]">Currency converter</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Converting fiat currency to USDT (Tether)
            </Card.Subtitle>
            <Formik
              onSubmit={async (
                values: schema,
                { setSubmitting }: formik.FormikHelpers<schema>
              ) => {
                request(values);

                setSubmitting(false);
              }}
              initialValues={{
                ammount: 100,
                fromCurrency: "USD",
                toCurrency: "NGN",
              }}
            >
              {({ handleSubmit, handleChange, values }) => (
                <Form
                  className="w-[800px] flex justify-center items-center gap-2 mb-7"
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <div className="h-[50px] w-[300px] flex items-center border border-black rounded-[4px] mt-[32px]">
                    <Form.Control
                      name="ammount"
                      style={{ width: "12rem" }}
                      required
                      type="number"
                      value={values.ammount}
                      onChange={handleChange}
                    ></Form.Control>
                    <Form.Select
                      style={{ width: "6rem" }}
                      name="fromCurrency"
                      value={values.fromCurrency}
                      onChange={handleChange}
                    >
                      <option>USD</option>
                      <option value="NGN">NGN</option>
                      <option value="USDT">USDT</option>
                      <option value="JPY">JPY</option>
                    </Form.Select>
                  </div>
                  <div className="h-[50px] w-[300px] flex items-center border border-black rounded-[4px] mt-[32px]">
                    <span className="block h-[40px] w-[15rem] bg-gray-300 text-[20px] text-center">
                      {response}
                    </span>
                    <Form.Select
                      style={{ width: "6rem" }}
                      name="toCurrency"
                      value={values.toCurrency}
                      onChange={handleChange}
                    >
                      <option>USDT</option>
                      <option value="USD">USD</option>
                      <option value="NGN">NGN</option>
                      <option value="JPY">JPY</option>
                      <option value="ETH">ETH</option>
                    </Form.Select>
                  </div>
                  <Button
                    variant="secondary"
                    style={{ width: "6rem", height: "3rem" }}
                    className="mt-[27px]"
                    type="submit"
                  >
                    convert
                  </Button>
                </Form>
              )}
            </Formik>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;

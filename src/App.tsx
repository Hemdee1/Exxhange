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
  const [loading, setLoading] = useState(false);

  const request = async (values: schema) => {
    if (!(values.ammount && values.fromCurrency && values.toCurrency)) return;
    setLoading(true);

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
    setLoading(false);
  };

  return (
    <div className="w-screen h-screen">
      <div className="flex items-center justify-center h-screen px-3 sm:px-5">
        <Card className="w-[50rem] max-w-full" bg="light">
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
                  className="w-[800px] max-w-full flex-wrap flex justify-center items-center gap-4 my-10"
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <div className="h-[50px] w-[300px] max-w-full flex items-center border border-black rounded-[4px]">
                    <Form.Control
                      name="ammount"
                      className="w-[12rem] max-w-full"
                      required
                      type="number"
                      value={values.ammount}
                      onChange={handleChange}
                    ></Form.Control>
                    <Form.Select
                      className="w-[6rem] max-w-full"
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
                  <div className="h-[50px] w-[300px] max-w-full flex items-center border border-black rounded-[4px]">
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
                    className=""
                    type="submit"
                  >
                    {loading ? <span className="loader"></span> : "convert"}
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

import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Base64 } from "js-base64";

function EncodeBase64({someValue, getResult}) {
  const [resultValue, setResultValue] = useState("");
  const handleInputChange = (e) => {
    try {
      const encodedValue = Base64.encode(e.currentTarget.value);
      setResultValue(encodedValue);
      getResult(encodedValue);
    } catch (error) {
      console.log("Fehler: " + error );
    }
  }

  return (
    <Form.Group data-testid="encode-component">
      <Form.Label data-testid="base64page-Encode">Encode</Form.Label>
      <Form.Control
        as="textarea"
        rows={8}
        defaultValue=""
        placeholder="Type or paste here..."
        onChange={handleInputChange}
      />
      <Form.Label>Encoded result</Form.Label>
      <Form.Control
        disabled
        as="textarea"
        rows={8}
        defaultValue={resultValue}
      ></Form.Control>
    </Form.Group>
  );
}

export default EncodeBase64;

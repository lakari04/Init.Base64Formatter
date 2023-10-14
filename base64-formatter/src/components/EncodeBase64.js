import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Base64 } from "js-base64";

function EncodeBase64({someValue, getResult}) {
  console.log("radioText: " +  someValue );
  //const [inputValue, setInputValue] = useState("");
  const [resultValue, setResultValue] = useState("");

  const handleInputChange = (e) => {
    try {
      console.log("encoded value 1: ");
      const encodedValue = Base64.encode(e.currentTarget.value);
      console.log("encoded value 2: " + encodedValue);
      
      setResultValue(encodedValue);
      console.log("encoded value 3: " + encodedValue);

      getResult(encodedValue);
      console.log("encoded value 4: " + encodedValue);

    } catch (error) {
      console.log("Fehler: " + error );
    }
  }

  return (
    <Form.Group id="encoder">
      <Form.Label>Encode</Form.Label>
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

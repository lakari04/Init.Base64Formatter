import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Base64 } from "js-base64";

function DecodeBase64({ someValue }, {getResult}) {
  console.log("radioText: " + { someValue });
  // const [inputValue, setInputValue] = useState("");
  const [resultValue, setResultValue] = useState("");

  const handleInputChange = (e) => {
    console.log("radioText: " + { someValue });
    try {
      const decodedValue = Base64.decode(e.currentTarget.value);
      setResultValue(decodedValue);
      getResult(decodedValue);
    } catch (error) {
      console.log("Fehler: " + { error });
    }
  }


  return (
    <Form.Group>
      <Form.Label>Decode</Form.Label>
      <Form.Control
        as="textarea"
        rows={8}
        defaultValue=""
        placeholder="Type or paste here..."
        onChange={handleInputChange}
      />
      <Form.Label>Decoded result</Form.Label>
      <Form.Control
        disabled
        as="textarea"
        rows={8}
        defaultValue={resultValue}
      ></Form.Control>
    </Form.Group>
  );
}

export default DecodeBase64;

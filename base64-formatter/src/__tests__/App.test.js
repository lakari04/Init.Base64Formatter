import { render, screen } from '@testing-library/react';
import App from '../App';

// test('Check base64 link exist', () => {
//   render(<App />);
//   const appElement = screen.getByTestId(/app/i);
//   expect(appElement).toBeInTheDocument();
//   expect(appElement).toHaveTextContent('Base64');
// });
test('test', () =>{
  render(<App></App>);

});
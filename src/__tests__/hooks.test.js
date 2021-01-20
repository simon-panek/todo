// import React from 'react';
// // import '@testing-library/jest-dom';
// import App from '../app.js';
// import { render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';


// describe('The Form ', () => {
//   test('should add an item to the list.', async () => {
//     render(<App/>);
//     userEvent.type(await screen.getByTestId('todoItem'), 'eat pizza');
//     userEvent.type(await screen.getByTestId('assignee'), 'bob');
//     // userEvent.type(screen.getByTestId('slider'), 2);
//     userEvent.click(await screen.getByTestId('submit'));
//     let items = await waitFor(()=> {screen.getAllByTestId('list-item')})
//     console.log({items});
//     expect(items[items.length-1]).toHaveTextContent('eat pizza');
//   })
// })

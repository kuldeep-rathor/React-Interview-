//  Example of JSX
const Jsx = () => {
  return <div>Jsx</div>;
};

export default Jsx;

// -------------------
// Advantages of JSX
// Improved code readability ,
// easy and read and understand ,
//  jsx checks the type safety ,
//  It improves the performance of the application ,
//  supports javascript expressions

// -----------------------
// const root = ReactDOM.createElement(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Jsx />
//   </React.StrictMode>
// );

// -----------------------

// React fragments
// const fragment = () => {
//   return (
//     <>
//     <div>fragment</div>
//     <div>fragment</div>
//     </>
//   )
// }

// export default fragment

// -----------------------

// const numbers = [1,2,3,4,5,6];
// const multiplesOfTwo =numbers.map((n)=> n*2);
// console.log(multiplesOfTwo)

// -----------------------

// export const parent = () => {
//   return <child name="John" age={20} />;
// };

// export const child = (props) => {
//   return (
//     <div>
//       <h1>Hello ,{props.name}</h1>
//       <h2>Age: {props.age}</h2>
//     </div>
//   );
// };

// -----------------------

// spread operator

// export function app() {
//   const props = { name: "kuldeep", age: 12, number: 123, work: "employee" };
//   return <child {...props} />;
// }

// export function child(props) {
//   return (
//     <div>
//       <h1>Hello ,{props.name}</h1>
//       <h2>Age: {props.age}</h2>
//       <h3>Number: {props.number}</h3>
//     </div>
//   );
// }


// -----------------------
// 4 types (Conditional rendering in JSX)

// 1. if else
// 2. Ternary operator 
// 3. switch 
// 4. and operator (&&) -> never evaluate the false conditions 



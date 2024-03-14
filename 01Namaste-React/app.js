const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", {}, [
    React.createElement("h1", {}, "I am h1"),
    React.createElement("h1", {}, "I am h1"),
  ]),
  React.createElement("div", {}, [
    React.createElement("h1", {}, "I am h1"),
    React.createElement("h1", {}, "I am h1"),
  ]),
]);
root.render(parent);
console.log(parent);

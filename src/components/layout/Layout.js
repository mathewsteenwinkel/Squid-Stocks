import NavBar from "../navbar/NavBar";

export default function Layout(props) {
  return <div>
    <NavBar />
    {props.children}
  </div>;
}
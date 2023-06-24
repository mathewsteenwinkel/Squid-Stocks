import NavBar from "../navbar/NavBar";

export default function Layout(props) {
  return <div>
    <NavBar />
    <main>
      {props.children}
    </main>
  </div>;
}
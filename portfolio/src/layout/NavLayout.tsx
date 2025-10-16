import Nav from "./Nav";
import SideNav from "./SideNav";

export default function NavLayout() {
  return (
    <div className="">
      <div className="hidden md:block">
        <SideNav />
      </div>
      <Nav />
    </div>
  );
}

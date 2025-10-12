import { TREE_UI_DATA } from "../assets/data";
const TreeUI = () => {
  return (
    <div className="justify-self-center">
      {TREE_UI_DATA.map((tree) => (
        <div key={tree.id}>
          <li>{tree.name}</li>
          {tree.children && <button>+</button>}
        </div>
      ))}
    </div>
  );
};
export default TreeUI;

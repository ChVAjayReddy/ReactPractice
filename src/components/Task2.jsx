import { useState } from "react";

const Task2 = () => {
  const [show, setshow] = useState(true);
  return (
    <>
      {show && (
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          accusantium quia nisi, omnis repellat molestiae rerum cupiditate odit
          facere quidem, ea culpa laboriosam quam consequuntur et voluptatibus
          voluptate sit molestias! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quia odit ducimus nesciunt architecto nostrum.
          Reiciendis, nemo quaerat. Dolorum reprehenderit velit, adipisci
          possimus sit architecto unde temporibus rem distinctio non. Ad.
        </p>
      )}
      <button onClick={() => setshow((show) => !show)}>
        {show ? "Hide" : "Display"}
      </button>
    </>
  );
};
export default Task2;

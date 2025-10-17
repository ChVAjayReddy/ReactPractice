const Sample = () => {
  let a = [];
  for (let i = 0; i < 10; i++) {
    a.push(a[i]);
  }
  console.log(a);
  return (
    <div>
      {a.map((a) => (
        <p>{a}</p>
      ))}
    </div>
  );
};
export default Sample;

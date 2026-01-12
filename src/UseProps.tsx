type Props = {
  char: string;
  varchar: string;
  integer: number;
  float: number;
  booleanValue: boolean;
};

function UseProps({ char, varchar, integer, float, booleanValue }: Props) {
  return (
    <div className={`card props-card ${booleanValue ? "text-true" : "text-false"}`}>
      <h3>Props Component</h3>
      <p>Char: {char}</p>
      <p>Varchar: {varchar}</p>
      <p>Integer: {integer}</p>
      <p>Float: {float}</p>
      <p>Boolean: {booleanValue.toString()}</p>
    </div>
  );
}

export default UseProps;

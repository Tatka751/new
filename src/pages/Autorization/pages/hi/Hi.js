import styled from "styled-components";
const HiTitle = styled.p`
  background-color: black;
  color: white;
  font-weight: 300;
  font-size: 160px;
  font-family: Roboto;
  text-align: center;
`;
function Hi() {
  return (
    <div>
      <HiTitle>Ні!</HiTitle>
    </div>
  );
}

export default Hi;



import { Button, FS13Button } from "./components/Buton.styled";
import HeaderText from "./components/HeaderText";
import Links from "./components/Links";
import Sarmal from "./components/Sarmal";

const App = () => {
  return (
    <>
      <Sarmal bg="#bebe">
        <HeaderText color="hotpink">Styled Components</HeaderText>
        <HeaderText color="green" bgRenk="aqua">
          Styled Components1
        </HeaderText>
        <Button>Send</Button>
        <Button primary>Send</Button>
        <FS13Button>Gone</FS13Button>
        <FS13Button react>Gone</FS13Button>
      </Sarmal>

      <Sarmal>
        <Links href="https://www.clarusway.com" target="_blank">
          Clarusway
        </Links>

        <Links small href="https://www.reactjs.org" target="_blank">
          ReactJS
        </Links>
      </Sarmal>
    </>
  );
};

export default App;

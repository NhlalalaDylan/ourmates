import styled from "styled-components/native" ;
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView).attrs({
    edges:["left" , "right"],
})`
 flex: 1;
 align-items: center;
 justify-content: center;
 padding: 40px 20px;
`;

const getTopCardProps = (props:any) => ({
  imageStyle: {
    opacity: 0.2,
    backgroundColor: props.theme.colors.background,
    transform: [{ scale: 1.05 }],
  },
});

export const TopCard = styled.ImageBackground.attrs(getTopCardProps)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
`;
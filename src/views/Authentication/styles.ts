import styled from "styled-components/native" ;
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView).attrs({
    edges:["left" , "right"],
})`
 flex: 1;  

`;
 
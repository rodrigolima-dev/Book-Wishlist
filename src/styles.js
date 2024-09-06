import styled from 'styled-components/native';

export const Container = styled.View `
    flex: 1;
    background-color: #373737;
    padding-top: 45px;
`;

export const Logo = styled.Text `
    font-size: 30px;
    text-align: center;
    color: #FFF;
    font-weight: bold;
`;

export const Title = styled.Text `
    font-size: 22px;
    margin-left: 15px;
    margin-top: 10px;
    color: #FFF;
`;

export const Input = styled.TextInput `
    height: 40px;
    margin-left: 15px;
    margin-bottom: 10px;
    margin-right: 15px;
    padding: 5px;
    border-radius: 5px;
    background-color: #FFF;
`;

export const CenterView = styled.View `
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 15px;
    margin-left: 15px;
`;

export const Button = styled.TouchableOpacity `
    background-color: #FFF;
    height: 40px;
    width: 90px;
    border-radius: 5px;
    padding: 5px;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text `
    font-size: 17px;
    text-align: center;
`;

export const List = styled.FlatList.attrs({
    contentContainerStyle: { paddingHorizontal: 20 },
}) `
    margin-top: 20px;
`;




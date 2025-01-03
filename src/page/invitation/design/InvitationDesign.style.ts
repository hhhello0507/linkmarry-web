import styled from "styled-components";
import colors from "@designsystem/foundation/colors";
import makeText, {TextType} from "@designsystem/foundation/text/textType";

const S = {
    container: styled.div`
        display: flex;
        flex: 1;
    `,
    optionContainer: styled.div`
        display: flex;
        flex: 1;
        min-width: 618px;
        flex-direction: column;
        background: ${colors.g100};
        padding: 48px 44px 109px 44px;
        overflow-y: scroll;
    `,
    title: styled.span`
        display: flex;
        ${makeText(TextType.h5)};
        color: ${colors.black};
    `,
    titleDescription: styled.span`
        display: flex;
        ${makeText(TextType.p3)};
        color: ${colors.g500};
    `,
    options: styled.ul`
        display: flex;
        flex-direction: column;
        justify-self: stretch;
        margin-top: 20px;
    `
}

export default S;
import React from 'react';
import {linkMarryFonts, textTypes} from "@designsystem/foundation/text/TextType";
import Icon, {IconType} from "@designsystem/foundation/icon";
import {css} from "styled-components";
import {allCasesOfEnum} from "@util/enum.util";
import CustomStyle from "@designsystem/component/CustomStyle";
import {Column, Row} from "@designsystem/component/FlexLayout";
import Text from "@designsystem/component/Text";
import Divider from "@designsystem/component/Divider";

function FoundationDemo() {
    return (
        <Column gap={20} $customStyle={css`
            padding: 20px;
        `}>
            <Column>
                {textTypes.map((type) => (
                    <Text type={type}>가나다라마바사ABCDEFG</Text>
                ))}
            </Column>
            <Divider/>
            <Column gap={20}>
                {linkMarryFonts.map(font => (
                    <Row>
                        <Text type={'p5'} customStyle={css`
                            width: 256px;
                        `}>{font}</Text>
                        <Column>
                            <Text type={'h3'} weight={100} font={font}>가나다라마바사ABCDEFG</Text>
                            <Text type={'h3'} weight={500} font={font}>가나다라마바사ABCDEFG</Text>
                            <Text type={'h3'} weight={700} font={font}>가나다라마바사ABCDEFG</Text>
                        </Column>
                    </Row>
                ))}
            </Column>
            <Divider/>
            <CustomStyle $customStyle={css`
                display: flex;
                flex-wrap: wrap;
                width: 256px;
            `}>
                {allCasesOfEnum(IconType)
                    .map((icon) => (
                        <Icon iconType={icon} size={32} customStyle={css`
                            fill: gray;
                        `}/>
                    ))}
            </CustomStyle>
        </Column>
    );
}

export default FoundationDemo;
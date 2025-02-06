import React, {useEffect, useRef} from 'react';
import {Column, Row} from "@designsystem/component/flexLayout";
import styled, {css} from "styled-components";
import colors from "@designsystem/foundation/colors";
import Text from "@designsystem/component/text";
import {fadeInAnimationStyle} from "@designsystem/animation/fade.animation";
import Button from "@designsystem/component/button";
import {useNavigate} from "react-router-dom";

interface Props {
    url: string;
}

function WaterMarkSheet(
    {
        url,
    }: Props
) {
    const navigate = useNavigate();
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        dialogRef.current?.showModal();
    }, []);

    return (
        // <SheetStyle ref={dialogRef}>
        <SheetStyle>
            <Column gap={28} $alignItems={'center'} $customStyle={css`
                padding: 32px 24px;
                background: ${colors.p100};
                border-radius: 16px;
                box-shadow: 0 2px 36px 0 rgba(0, 0, 0, 0.36);
                max-width: 424px;
                width: 100vw;
                margin: 0 6px 20px 6px;
                position: absolute;
            `}>
                <Text type={'p4'}>
                    <Column $alignItems={'center'} gap={4}>
                        <span>시안 확인용입니다.</span>
                        <span>구매 후 워터마크를 제거해 주세요.</span>
                    </Column>
                </Text>
                <Text type={'btn1'} color={colors.g600} style={{
                    textAlign: 'center'
                }}>결제 후 대시보드 &gt; 워터마크 제거
                    <br/>
                    버튼을 통해 제거할 수 있습니다.</Text>
                <Row gap={12} $alignSelf={'stretch'}>
                    <Button text={'구매하기'} style={{
                        flex: 1,
                        background: colors.p100,
                        color: colors.p800,
                        border: `1px solid ${colors.p700}`
                    }} onClick={() => {
                        window.open('https://smartstore.naver.com/linkmarry');
                    }}/>
                    <Button text={'워터마크 제거하기'} style={{
                        flex: 1
                    }} onClick={() => {
                        navigate(`/dashboard/design/${url}`);
                    }}/>
                </Row>
            </Column>
        </SheetStyle>
    );
}

const SheetStyle = styled.div`
    display: flex;
    position: fixed;
    //width: 100vw;
    //min-width: 100vw;
    //height: 100vh;
    //min-height: 100vh;
    bottom: 0;
    left: 50%;
    justify-content: center;
    align-items: flex-end;
    border: none;
    outline: none;
    background: none;
    ${fadeInAnimationStyle};
`

export default WaterMarkSheet;
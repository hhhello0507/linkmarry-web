import React from 'react';
import styled from "styled-components";
import BaseDialog, {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import colors from "@designsystem/foundation/colors";
import {Column, Row} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";
import Button from "@designsystem/component/button";

interface ConfirmRsvpDialogProps {
    dismiss: () => void;
    onConfirm: () => void;
}

function ConfirmCreateRsvpDialog(
    {
        dismiss,
        onConfirm
    }: ConfirmRsvpDialogProps
) {
    return (
        <BaseDialog dismiss={dismiss}>
            <S.container>
                <Column gap={4} $alignItems={'center'}>
                    <Text type={'h6'}>참석의사 전달</Text>
                    <Text type={'caption1'}>참석의사 전달시 수정이 불가능합니다</Text>
                </Column>
                <Row gap={12} $alignSelf={'stretch'}>
                    <Button text={'취소'} role={'assistive'} onClick={dismiss} style={{flex: 1}}/>
                    <Button text={'확인'} onClick={onConfirm} style={{flex: 1}}/>
                </Row>
            </S.container>
        </BaseDialog>
    );
}

const S = {
    container: styled.div`
        display: flex;
        flex-direction: column;
        gap: 48px;
        ${applyBaseDialogContent()};
        border-radius: 12px;
        padding: 44px 36px;
        align-items: center;
        background: ${colors.white};
        max-width: 388px;
        width: 90vw;
    `
}

export default ConfirmCreateRsvpDialog;
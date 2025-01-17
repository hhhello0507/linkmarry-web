import React from 'react';
import BaseDialog, {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import styled from "styled-components";
import colors from "@designsystem/foundation/colors";
import {Column, Row} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";
import Button from "@designsystem/component/button";
import memberApi from "@remote/api/MemberApi";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";

interface RemoveMemberDialogProps {
    dismiss: () => void;
}

function RemoveMemberDialog(
    {
        dismiss
    }: RemoveMemberDialogProps
) {
    const navigate = useNavigate();
    
    const onClickConfirm = async () => {
        try {
            await memberApi.removeMember();
            
            Cookies.remove('accessToken');
            Cookies.remove('refreshToken');
            navigate('/');
        } catch (e) {
        }
    }
    
    return (
        <BaseDialog dismiss={dismiss}>
            <S.container>
                <Column gap={46} $alignItems={'center'}>
                    <Text type={'p1'}>정말 탈퇴하시겠습니까?</Text>
                    <Row gap={16}>
                        <Button text={'취소'} role={'assistive'} onClick={dismiss}/>
                        <Button text={'확인'} role={'assistive'} onClick={onClickConfirm}/>
                    </Row>
                </Column>
            </S.container>
        </BaseDialog>
    );
}

const S = {
    container: styled.div`
        ${applyBaseDialogContent()};
        width: 520px;
        padding: 88px 116px;
        justify-content: center;
        background: ${colors.white};
        border-radius: 12px;
    `
}

export default RemoveMemberDialog;
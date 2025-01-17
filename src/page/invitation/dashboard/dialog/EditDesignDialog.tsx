import React, {useEffect, useRef, useState} from 'react';
import BaseDialog, {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import styled from "styled-components";
import {Column} from "@designsystem/component/flexLayout";
import Button from "@designsystem/component/button";
import colors from "@designsystem/foundation/colors";
import TextField from "@designsystem/component/textField";
import Text from "@designsystem/component/text";
import weddingApi from "@remote/api/WeddingApi";
import {useNavigate} from "react-router-dom";

interface EditDesignDialogProps {
    originUrl: string;
    dismiss: () => void;
}

function EditDesignDialog(
    {
        originUrl,
        dismiss
    }: EditDesignDialogProps
) {
    const navigate = useNavigate();
    const domainFieldRef = useRef<HTMLInputElement>(null);
    const [isError, setIsError] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    const onClickSave = async () => {
        if (!domainFieldRef.current) return;
        const url = domainFieldRef.current.value;

        if (url === '') {
            alert('도메인 URL을 입력해 주세요');
            return;
        }
        
        setIsFetching(true);
        try {
            await weddingApi.checkUrlConflict(url);
        } catch (error) {
            console.error(error);
            setIsError(true);
            setIsFetching(false);
            return;
        }

        try {
            await weddingApi.changeWeddingUrl(originUrl, url);
            alert('도메인 URL이 변경되었습니다');
            navigate(0);
        } catch (error) {
            console.error(error);
        } finally {
            setIsFetching(false);
        }
    };

    useEffect(() => {
        if (domainFieldRef.current) {
            domainFieldRef.current.value = originUrl;
        }
    }, []);

    return (
        <BaseDialog dismiss={dismiss}>
            <S.container>
                <Column gap={45} $alignItems={'center'}>
                    <Column gap={2}>
                        <Text type={'p1'}>청첩장 주소를 변경해주세요.</Text>
                        <Text type={'p5'} color={colors.g400}>청첩장에 사용할 도메인을 입력해주세요.</Text>
                    </Column>
                    <TextField ref={domainFieldRef} isError={isError} supportingText={isError ? '이미 사용 중인 URL 입니다.' : undefined}/>
                    <Button text={'저장하기'} role={'assistive'} onClick={onClickSave} enabled={!isFetching}/>
                </Column>
            </S.container>
        </BaseDialog>
    );
}

const S = {
    container: styled.div`
        ${applyBaseDialogContent()};
        justify-content: center;
        width: 520px;
        padding: 88px 116px;
        background: ${colors.white};
        border-radius: 12px;
    `
}

export default EditDesignDialog;
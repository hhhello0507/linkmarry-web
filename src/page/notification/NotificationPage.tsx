import React, {useEffect, useState} from 'react';
import S from './NotificationPage.style';
import HasHeader from "@designsystem/component/header/hasHeader";
import {Column, Row} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";
import {TextType} from "@designsystem/foundation/text/textType";
import Notification, {dummyNotifications} from "@remote/value/Notification";
import {tagToKoreanRecord} from "@remote/enumeration/Tag";
import notificationApi from "@remote/api/NotificationApi";

function NotificationPage() {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    useEffect(() => {
        (async () => {
            const {data} = await notificationApi.getNotifications();
            setNotifications(data);
        })();
    }, []);

    return (
        <HasHeader>
            <S.container>
                <Column gap={44} flex={1} $alignItems={'stretch'}>
                    <Text text={'공지사항'} type={TextType.h5}/>
                    <Column $alignItems={'stretch'}>
                        <S.header.row>
                            <S.header.cell>태그</S.header.cell>
                            <S.header.titleCell>제목</S.header.titleCell>
                            <S.header.cell>작성자</S.header.cell>
                            <S.header.cell>작성일</S.header.cell>
                        </S.header.row>
                        {dummyNotifications.map(notification => (
                            <S.body.row key={notification.id}>
                                <S.body.tagCell>{tagToKoreanRecord[notification.tag]}</S.body.tagCell>
                                <S.body.titleCell>{notification.title}</S.body.titleCell>
                                <S.body.nameCell>{notification.name}</S.body.nameCell>
                                <S.body.dateCell>{notification.date}</S.body.dateCell>
                            </S.body.row>
                        ))}
                    </Column>
                </Column>
            </S.container>
        </HasHeader>
    );
}

export default NotificationPage;
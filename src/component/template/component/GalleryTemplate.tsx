import React, {RefObject, useEffect, useRef, useState} from 'react';
import Text from "@designsystem/component/text";
import colors from "@designsystem/foundation/colors";
import ImgDesign from "@remote/enumeration/ImgDesign";
import styled, {css} from "styled-components";
import {hideScrollBar} from "@util/css.util";
import {Row} from "@designsystem/component/flexLayout";
import Icon, {IconType} from "@designsystem/foundation/icon";

export type GallerySlideStyle = 'style1' | 'style2';

interface GalleryTemplateProps {
    rootRef: RefObject<HTMLDivElement>;
    imgDesign: ImgDesign;
    imgList: string[];
    slideStyle?: GallerySlideStyle;
}

function GalleryTemplate(
    {
        rootRef,
        imgDesign,
        imgList,
        slideStyle = 'style1'
    }: GalleryTemplateProps
) {
    return (
        <S.root>
            <Text color={colors.g600} size={20} weight={300}>
                GALLERY
            </Text>
            {imgDesign === ImgDesign.SLIDE ? (
                <GallerySlide
                    rootRef={rootRef}
                    imgList={imgList}
                    slideStyle={slideStyle}
                />
            ) : (
                <S.gridWrapper>
                    {imgList.map((img, index) => (
                        <S.gridImg key={index} src={img}/>
                    ))}
                </S.gridWrapper>
            )}
        </S.root>
    );
}

function GallerySlide(
    {
        rootRef,
        imgList,
        slideStyle
    }: {
        rootRef: RefObject<HTMLDivElement>;
        imgList: string[];
        slideStyle: GallerySlideStyle;
    }
) {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); // 현재 보여지는 이미지의 인덱스를 추적

    const handleScroll = () => {
        if (!scrollContainerRef.current) return;

        const containerWidth = rootRef.current?.getBoundingClientRect().width ?? 0;

        const scrollContainer = scrollContainerRef.current;
        const scrollPosition = scrollContainer.scrollLeft - (slideStyle === 'style1' ? 34 : 0);
        const imageWidth = containerWidth 
            - (slideStyle === 'style1' ? (34 * 2) : 0) 
            + (slideStyle === 'style1' ? 8 : 0); // 이미지 너비 - 간격
        const index = Math.floor(scrollPosition / imageWidth);
        console.log(`${scrollPosition}, ${imageWidth}`);
        console.log(index);
        setCurrentImageIndex(index); // 현재 스크롤된 이미지 인덱스를 상태에 저장
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        container?.addEventListener('scroll', handleScroll);

        return () => {
            container?.removeEventListener('scroll', handleScroll);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <S.slideWrapper>
            <S.scroll ref={scrollContainerRef} $slideStyle={slideStyle}>
                {imgList.map((img, index) => (
                    <S.slideImg
                        key={index}
                        src={img}
                        $rootWidth={rootRef.current?.getBoundingClientRect().width ?? 0}
                        $slideStyle={slideStyle}
                    />
                ))}
            </S.scroll>
            <GalleryStyleIndicator
                imgListLength={imgList.length}
                currentImageIndex={currentImageIndex}
                slideStyle={slideStyle}
                onClick={type => {}}
            />
        </S.slideWrapper>
    );
}

function GalleryStyleIndicator(
    {
        imgListLength,
        currentImageIndex,
        slideStyle,
        onClick
    }: {
        imgListLength: number;
        currentImageIndex: number;
        slideStyle: GallerySlideStyle;
        onClick: (type: 'moveLeft' | 'moveRight') => void;
    }
) {
    switch (slideStyle) {
        case 'style1':
            return (
                <Row gap={8} $alignSelf={'center'}>
                    {Array.from({length: imgListLength}, (_, index) => index).map((i, index) => (
                        <S.indicator key={index} selected={i === currentImageIndex}/>
                    ))}
                </Row>
            );
        case 'style2':
            return (
                <Row
                    $alignItems={'center'}
                    $justifyContent={'space-between'}
                    style={{
                        padding: '0 45px'
                    }}
                >
                    <Icon type={IconType.ExpandArrow} size={24} tint={colors.g500} style={{
                        cursor: 'pointer'
                    }} onClick={() => {
                        onClick('moveLeft');
                    }}/>
                    <Text size={14} weight={300}>{currentImageIndex + 1}/{imgListLength}</Text>
                    <Icon type={IconType.ExpandArrow} size={24} tint={colors.g500} style={{
                        rotate: '180deg',
                        cursor: 'pointer'
                    }} onClick={() => {
                        onClick('moveRight');
                    }}/>
                </Row>
            );
    }
}

const S = {
    root: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        background: ${colors.white};
        padding: 92px 0;
        gap: 40px;
    `,
    gridWrapper: styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 3열 구성 */
        margin: 0 18px;
        gap: 4px;
    `,
    slideWrapper: styled.div`
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-self: stretch;
        overflow-x: hidden;
    `,
    scroll: styled.div<{ $slideStyle: GallerySlideStyle }>`
        scroll-snap-type: x mandatory;
        overflow-x: scroll;
        overflow-y: hidden;
        display: flex;
        ${({$slideStyle}) => $slideStyle === 'style1' && css`
            gap: 8px;
        `};
        ${hideScrollBar};
    `,
    gridImg: styled.img`
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
        border-radius: 4px;
    `,
    slideImg: styled.img<{ 
        $rootWidth: number,
        $slideStyle: GallerySlideStyle
    }>`
        display: flex;
        ${({$rootWidth, $slideStyle}) => $slideStyle === 'style1' ? css`
            width: ${$rootWidth - 34 * 2}px;

            &:first-child {
                margin-left: ${$rootWidth - 34}px;
            }

            &:last-child {
                margin-right: ${$rootWidth - 34}px;
            }
            border-radius: 12px;
        ` : css`
            width: ${$rootWidth}px;
            
            // &:first-child {
            //     margin-left: ${$rootWidth}px;
            // }
            //
            // &:last-child {
            //     margin-right: ${$rootWidth}px;
            // }
        `};
        height: 517px;
        scroll-snap-align: center;
        object-fit: cover;
    `,
    indicator: styled.span<{ selected: boolean }>`
        display: flex;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        ${({selected}) => css`
            background: ${selected ? colors.black : colors.g200};
        `};
    `
};


export default GalleryTemplate;
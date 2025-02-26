export default interface WeddingPlace {
    // 지도 x값
    x: number;
    
    // 지도 y값
    y: number;
    
    // 위치 URL (카카오)
    placeUrl: string;
    
    // 예식장 이름
    placeName: string;
    
    // 예식장 주소
    addressName: string;
    
    // 층/홀
    floorHall: string;
    
    // 예식장 전화번호
    placeTel: string;
    
    // 예식장 교통편
    placeTransportation: string;
    
    // 지도 표시 여부
    placeStatus: boolean;
}

export const defaultWeddingPlace: WeddingPlace = {
    x: -1,
    y: -1,
    placeUrl: "",
    placeName: "",
    addressName: "",
    floorHall: "",
    placeTel: "",
    placeTransportation: "",
    placeStatus: true,
}

export const dummyWeddingPlace: WeddingPlace = {
    x: -1.0,
    y: -1.0,
    placeUrl: "",
    placeName: "서울가든",
    addressName: "",
    placeTel: "010-0000-0000",
    floorHall: "레드홀 4층",
    placeTransportation: "3호선 신림역 3번출구 도보 200m\n290번 버스 신림정류장 도보 200m",
    placeStatus: true
}
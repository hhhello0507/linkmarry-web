import GuestType from "@remote/enumeration/GuestType";

export default interface RsvpInfo {
    id: number; // Rsvp ID (PK)
    guestType: GuestType; // 참석자 측 (신랑,신부)
    isAttend: boolean; // 참석 여부
    isMeal: boolean; // 식사 여부
    guestName: string; // 참석자 이름
    guestPhone: string; // 참석자 전번
    guestCnt: number; // 참석자 수
    guestComment: string; // 남기고 싶은 말
}
import UserRole from "@remote/enumeration/UserRole";

export default interface InfoMember {
    picture: string; // 프사
    name: string; // 이름
    email: string; // 이메일
    role: UserRole;
}
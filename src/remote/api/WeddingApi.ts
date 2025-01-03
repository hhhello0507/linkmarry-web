import Wedding from "@remote/value/Wedding";
import customApi from "@remote/api/foundation/customApi";
import {ResponseData, ResponseVoid} from "@remote/value/Response";
import WeddingDashboard from "@remote/value/WeddingDashboard";
import WeddingRequest from "@remote/value/request/WeddingRequest";
import RsvpRequest from "@remote/value/request/RsvpRequest";
import GuestCommentRequest from "@remote/value/request/GuestCommentRequest";
import EditCommentRequest from "@remote/value/request/EditCommentRequest";
import DeleteCommentRequest from "@remote/value/request/DeleteCommentRequest";
import WeddingStatistics from "@remote/value/WeddingStatistics";

class WeddingApi {
    private static PATH = 'wedding';

    /**
     * URL 중복 확인
     */
    async checkUrlConflict(url: string): Promise<ResponseVoid> {
        const {data} = await customApi.post(`${WeddingApi.PATH}/check/${url}`);
        return data;
    }

    /**
     * 자신의 청첩장(대쉬보드) 모두 불러오기
     */
    async getMyWedding(): Promise<ResponseData<WeddingDashboard>> {
        const {data} = await customApi.get(WeddingApi.PATH);
        return data;
    }

    /**
     * 청첩장 URL 로 불러오기  (수정을 위한)
     */
    async getWeddingForEditing(url: string): Promise<ResponseData<Wedding>> {
        const {data} = await customApi.get(`${WeddingApi.PATH}/${url}`);
        return data;
    }

    /**
     * 청첩장 생성 (첫 생성)
     */
    async createWedding(req: Wedding): Promise<ResponseVoid> {
        const {data} = await customApi.post(WeddingApi.PATH, req);
        return data;
    }

    /**
     * 청첩장 수정
     */
    async editWedding(req: Wedding): Promise<ResponseVoid> {
        const {data} = await customApi.put(WeddingApi.PATH, req);
        return data;
    }

    /**
     * 청첩장 불러오기 (실제 모청 확인)
     */
    async getWedding(url: string, req: WeddingRequest): Promise<ResponseData<Wedding>> {
        const {data} = await customApi.post(`${WeddingApi.PATH}/${url}`, req, {
            shouldAuthorizeRequest: false
        });
        return data;
    }

    /**
     * 기존 청첩장 URL 변경
     */
    async changeWeddingUrl(originUrl: string, newUrl: string): Promise<ResponseVoid> {
        const {data} = await customApi.patch(`${WeddingApi.PATH}/${originUrl}/${newUrl}`);
        return data;
    }

    /**
     * 참석여부
     */
    async createRsvp(req: RsvpRequest): Promise<ResponseVoid> {
        const {data} = await customApi.post(`${WeddingApi.PATH}/rsvp`, req, {
            shouldAuthorizeRequest: false
        });
        return data;
    }

    /**
     * 방명록 작성
     */
    async createComment(req: GuestCommentRequest): Promise<ResponseVoid> {
        const {data} = await customApi.post(`${WeddingApi.PATH}/comment`, req, {
            shouldAuthorizeRequest: false
        });
        return data;
    }

    /**
     * 방명록 수정
     */
    async editComment(req: EditCommentRequest): Promise<ResponseVoid> {
        const {data} = await customApi.patch(`${WeddingApi.PATH}/comment`, req, {
            shouldAuthorizeRequest: false
        });
        return data;
    }

    /**
     * 방명록 삭제
     */
    async removeComment(req: DeleteCommentRequest): Promise<ResponseVoid> {
        const {data} = await customApi.delete(`${WeddingApi.PATH}/comment`, {
            data: req,
            shouldAuthorizeRequest: false
        });
        return data;
    }

    /**
     * 청첩장 통계 불러오기
     */
    async getStatistics(url: string): Promise<WeddingStatistics> {
        const {data} = await customApi.get(`${WeddingApi.PATH}/statistics/${url}`);
        return data;
    }

    /**
     * 링크 공유
     */
    async shareLink(url: string): Promise<ResponseVoid> {
        const {data} = await customApi.post(`${WeddingApi.PATH}/link/${url}`, undefined, {
            shouldAuthorizeRequest: false
        });
        return data;
    }
}

const weddingApi = new WeddingApi();

export default weddingApi;
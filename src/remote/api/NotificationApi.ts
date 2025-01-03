import {ResponseData, ResponseVoid} from "@remote/value/Response";
import customApi from "@remote/api/foundation/customApi";
import NotificationRequest from "@remote/value/request/NotificationRequest";
import Notification from "@remote/value/Notification";

class NotificationApi {
    static PATH = 'notification';

    /**
     * 공지생성
     */
    async createNotification(req: NotificationRequest): Promise<ResponseVoid> {
        const {data} = await customApi.post(NotificationApi.PATH, req);
        return data;
    }

    /**
     * 모든 공지 불러오기
     */
    async getNotifications(): Promise<ResponseData<Notification[]>> {
        const {data} = await customApi.get(NotificationApi.PATH, {
            shouldAuthorizeRequest: false
        });
        return data;
    }

    /**
     * 공지 단건 조회하기
     */
    async getNotification(id: number): Promise<ResponseData<Notification>> {
        const {data} = await customApi.get(`${NotificationApi.PATH}/${id}`, {
            shouldAuthorizeRequest: false
        });
        return data;
    }

    /**
     * 공지 수정
     */
    async editNotification(id: number, req: NotificationRequest): Promise<ResponseVoid> {
        const {data} = await customApi.patch(`${NotificationApi.PATH}/${id}`, req);
        return data;
    }
}

const notificationApi = new NotificationApi();

export default notificationApi;
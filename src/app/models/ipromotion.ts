import { INameMultiLangJsonObject } from "app/models/IName-Multi-Lang-Json-Object";
import { IPromotionItem } from "app/models/ipromotion-item";
import { ITimeStatus } from "app/models/itime-status";

export interface IPromotion
{
    PromotionItems: IPromotionItem[];
    Id: number;
    SubscriptionNotifierIsActive: boolean;
    PromotionItemsCount: number;
    Begin: string;
    End: string;
    MerchantLogoName: string;
    TimeStatus: ITimeStatus;
    Name: string;
    NameMultiLangJsonObject: INameMultiLangJsonObject;
    NameMultiLang: string;
}

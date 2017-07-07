import { NameMultiLangJsonObject } from "app/models/name-multi-lang-json-object";
import { PromotionItem } from "app/models/promotion-item";
import { TimeStatus } from "app/models/time-status";

export class Promotion
{
    PromotionItems: PromotionItem[];
    Id: number;
    SubscriptionNotifierIsActive: boolean;
    PromotionItemsCount: number;
    Begin: string;
    End: string;
    MerchantLogoName: string;
    TimeStatus: TimeStatus;
    Name: string;
    NameMultiLangJsonObject: NameMultiLangJsonObject;
    NameMultiLang: string;
}

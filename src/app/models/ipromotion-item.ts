export interface IPromotionItem
{
    CategoryId: number;
    PromotionId: number;
    Name: string;
    BeginPrice: number;
    PromotionalPrice: number;
    Discount: number;
    LikeCount: number;
    DislikeCount: number;
    FolderWithImagePathSimple: string;
    FolderWithImagePath: string;
    DefaultImage: string;
    DefaultImageFullPath: string;
    ImageWidth: number;
    ImageHeight: number;
    Id: number;
}
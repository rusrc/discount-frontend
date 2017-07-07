export class Page<T>
{
    PageNumber: number;
    IsFirstPage: boolean;
    IsLastPage: boolean;
    HasNextPage: boolean;
    HasPreviousPage: boolean;
    FirstItemOnPage: number;
    LastItemOnPage: number;
    PageCount: number;
    PageSize: number;
    TotalItemCount: number;
    Count: number;
    Items: T[];
}

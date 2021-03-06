export interface EntityDto {
}
export interface EntityDto<TKey> extends EntityDto {
    id: TKey;
}
export interface LimitedResultRequestDto {
    defaultMaxResultCount: number;
    maxMaxResultCount: number;
    maxResultCount: number;
}
export interface PagedResultRequestDto extends LimitedResultRequestDto {
    skipCount: number;
}
export interface PagedAndSortedResultRequestDto extends PagedResultRequestDto {
    sorting: string;
}
export interface ListResultDto<T> {
    items: T[];
}
export interface PagedResultDto<T> extends ListResultDto<T> {
    totalCount: number;
}

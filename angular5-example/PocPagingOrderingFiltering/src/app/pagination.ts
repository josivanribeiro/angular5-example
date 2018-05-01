export class Pagination {

    private _currentPage : number;
    private _pageSize : number;
    private _totalPages: number;
    private _totalRows: number;

    public constructor (currentPage: number, pageSize: number, totalPages: number, totalRows: number) {
        this._currentPage = currentPage;
        this._pageSize = pageSize;
        this._totalPages = totalPages;
        this._totalRows = totalRows;
    }
    
    public get currentPage(): number {
        return this._currentPage;
    }

    public set currentPage (currentPage: number) {
        this._currentPage = currentPage;
    }

    public get pageSize(): number {
        return this._pageSize;
    }

    public set pageSize (pageSize: number) {
        this._pageSize = pageSize;
    }

    public get totalPages(): number {
        return Math.ceil (this._totalRows / this._pageSize);
    }

    public set totalPages (totalPages: number) {
        this._totalPages = totalPages;
    }

    public get totalRows(): number {
        return this._totalRows;
    }

    public set totalRows (totalRows: number) {
        this._totalRows = totalRows;
    }

}

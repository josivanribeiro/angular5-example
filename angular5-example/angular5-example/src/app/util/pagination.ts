/* Copyright Caixa Econômica Federal 2018 */
/**
 * Util class that represents Pagination.
 * 
 *  @author josivan.silva@castgroup.com.br
 */
export class Pagination {

    _currentPage : number;
    _pageSize : number;
    _totalRows: number;

    public constructor (currentPage: number, pageSize: number) {
        this._currentPage = currentPage;
        this._pageSize = pageSize;
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
        if (this._totalRows == null || this._totalRows === 0) {
            return 1;
        } else {
            return Math.ceil (this._totalRows / this._pageSize);
        }        
    }

    public get totalRows(): number {
        if (this._totalRows == null || this._totalRows === 0) {
            return 0;
        }
        return this._totalRows;
    }

    public set totalRows (totalRows: number) {        
        this._totalRows = totalRows;
    }

    public getInitialRowNumber() {    
        if (this.currentPage != 1) {
          return (this.currentPage - 1) * this.pageSize + 1;
        } else if (this._totalRows == null || this._totalRows === 0) {
          return 0;  
        } else {
            return this.currentPage;
        }        
    }
    
    public getFinalRowNumber() {
        if (this.currentPage < this.totalPages) {
          return this.currentPage * this.pageSize;
        } else if (this.currentPage == this.totalPages) {
          return this.totalRows;
        }
    }

}

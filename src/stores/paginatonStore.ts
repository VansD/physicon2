import { makeObservable, observable, action, computed, runInAction } from 'mobx';

export interface PaginationData<T> {
  items: T[];
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
}

export class PaginationStore<T> {
  paginationData: PaginationData<T> = {
    items: [],
    currentPage: 1,
    totalPages: 1,
    isLoading: false,
  };

  constructor() {
    makeObservable(this, {
      paginationData: observable,
      setItems: action,
      addItems: action,
      setCurrentPage: action,
      setTotalPages: action,
      setLoading: action,
      fetchPage: action,
      currentPage: computed,
      totalPages: computed,
      items: computed,
      isLoading: computed,
    });
  }

  get currentPage() {
    return this.paginationData.currentPage;
  }

  get totalPages() {
    return this.paginationData.totalPages;
  }

  get items() {
    return this.paginationData.items;
  }

  get isLoading() {
    return this.paginationData.isLoading;
  }

  setItems = (items: T[]) => {
    this.paginationData.items = items;
  }

  addItems = (newItems: T[]) => {
    this.paginationData.items = [...this.paginationData.items, ...newItems];
  }

  setCurrentPage = (page: number) => {
    this.paginationData.currentPage = page;
  }

  setTotalPages = (totalPages: number) => {
    this.paginationData.totalPages = totalPages;
  }

  setLoading = (loading: boolean) => {
    this.paginationData.isLoading = loading;
  }

  fetchPage = async (apiUrl: string, page: number): Promise<void> => {
    if (page > this.paginationData.totalPages || this.paginationData.isLoading) {
      return;
    }

    this.setLoading(true);

    try {
      const response = await fetch(`${apiUrl}?page=${page}`);
      const data = await response.json();

      runInAction(() => {
        this.addItems(data.items);
        this.setCurrentPage(page);
        this.setTotalPages(data.totalPages);
      });
    } catch (error) {
      console.error('Error fetching page:', error);
    } finally {
      this.setLoading(false);
    }
  }
}

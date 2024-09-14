import { makeAutoObservable } from "mobx"
import { Article } from "@/types/article";
import { PaginationStore } from "./paginatonStore";

class ArticleStore extends PaginationStore<Article>{
    articles: Article[] = [];
    error: string | null = null;

    constructor() {
        super();
        //makeAutoObservable(this);
    }

    setArticles = (articles: Article[]) => {
        this.articles = articles;
    }

    addArticles = (newArticles: Article[]) => {
        this.articles = [...this.articles, ...newArticles];
    }


    setError = (error: string | null) => {
        this.error = error;
    }

    fetchArticles = async (page: number, rubrics?: string[]) => {
        const apiUrl = `/api/articles?${rubrics && rubrics.length > 0 ? `rubrics=${rubrics?.join("__")}&` : ""}page=${page}`
        if (this.paginationData.currentPage <= this.paginationData.totalPages) {
            this.setLoading(true);
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();

                this.setArticles(data.pageProps.articles);
                this.setCurrentPage(data.pageProps.activePage);
                this.setTotalPages(data.pageProps.totalPages);
                this.setError(null)
            } catch (error) {
                this.setError(`Ошибка загрузки данных: ${error}`);
            } finally {
                this.setLoading(false);
            }
        }
    }

    // async fetchNextPage(isNext: boolean = true, rubrics?: string[]) {
    //     if (this.currentPage < this.totalPages) {
    //         this.setLoading(true);
    //         const nextPage = isNext ? this.currentPage + 1 : this.currentPage - 1;

    //         try {
    //             const response = await fetch(`/api/articles?${rubrics && `rubrics=${rubrics.join("__")}&`}page=${nextPage}`);
    //             const data = await response.json();

    //             this.addArticles(data.articles);
    //             this.setCurrentPage(nextPage);
    //             this.setError(null)
    //         } catch (error) {
    //             this.setError(`Ошибка загрузки данных: ${error}`);
    //         } finally {
    //             this.setLoading(false);
    //         }
    //     }
    // }
}

export const articleStore = new ArticleStore();